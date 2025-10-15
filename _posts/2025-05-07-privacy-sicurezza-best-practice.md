---
layout: post
title: "Privacy e sicurezza: best practice nello sviluppo software"
date: 2025-05-07
categories: security privacy best-practices development
---

Era il 2019. Stavamo facendo code review di routine quando ho notato qualcosa che mi ha fatto gelare il sangue: password degli utenti salvate in plain text nel database. Migliaia di utenti. Le loro password, leggibili da chiunque avesse accesso al database.

"Perché non sono hashed?" ho chiesto al developer.

"Non pensavo fosse necessario. Tanto il database è protetto."

Quel "tanto il database è protetto" è la frase famosa prima di ogni data breach.

Quella esperienza mi ha insegnato qualcosa di fondamentale: security e privacy non sono feature da aggiungere dopo. Sono fondamenta su cui costruire. E non puoi assumerle, devi implementarle deliberatamente, sistematicamente, religiosamente.

In questo post condivido le best practices che applico in ogni progetto. Non sono perfette, non coprono ogni scenario, ma rappresentano il minimo indispensabile per costruire software responsabile.

## La mentalità giusta

Prima delle pratiche specifiche, serve il mindset corretto.

### Security is everyone's job

Non solo del security team. Non solo del senior developer. Di tutti.

Ogni persona che scrive codice, che fa deployment, che ha accesso a sistemi - è responsabile di security.

**Cultura no-blame ma high accountability**

Errori di security succedono. Quando succedono, non cerchiamo colpevoli ma capiamo come prevenire recurrence.

Ma questo non significa low standards. Standards devono essere alti. Review rigorosi. No shortcuts su security.

### Assume breach

Non "se" ma "quando" qualcuno proverà ad attaccare il tuo sistema.

Design assumendo che:
- Qualcuno avrà accesso non autorizzato
- Qualcuno proverà SQL injection, XSS, CSRF
- Qualcuno intercetterà traffico di rete
- Qualcuno avrà credentials compromessi

Con questo mindset, architetti defense in depth: layers multiple di protezione.

### Privacy by design

Privacy non è compliance checkbox. È rispetto per gli utenti.

Chiedi: "Se questi fossero i miei dati personali, come vorrei fossero trattati?"

Minimizza data collection, proteggi ciò che raccogli, da agli utenti controllo.

## Autenticazione e autorizzazione

Primo layer di difesa: chi sei e cosa puoi fare.

### Password security

**Never store passwords in plain text**

Questo è non-negoziabile. Password devono essere hashed con algoritmo robusto.

**Use bcrypt, scrypt, o Argon2**

Non MD5, non SHA1. Questi sono fast, che per hashing password è negativo. Vuoi slow, per rendere brute force impraticale.

```python
# ✓ Corretto
import bcrypt

password = "user_password"
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

# Verifica
if bcrypt.checkpw(password.encode(), hashed):
    print("Password corretta")
```

**Salt ogni password**

Salt previene rainbow table attacks. Libraries moderne (bcrypt) lo fanno automaticamente.

**Password strength enforcement**

Non solo "minimum 8 caratteri". Checka per:
- Lunghezza minima (12+ caratteri raccomandato)
- Mix di caratteri (uppercase, lowercase, numeri, simboli)
- Non password comuni (usa library di password banned)
- Non parte di email o nome utente

**Rate limiting su login**

Previeni brute force: max tentativi per IP/account in timeframe.

Dopo N failed attempts, increase delay o richiedi CAPTCHA.

### Multi-factor authentication (MFA)

Password da sole non bastano. Password compromesse, phishing, keyloggers.

**Implementa MFA, almeno come opzione**

TOTP (Google Authenticator, Authy) è buon balance di security e UX.

SMS-based è meglio di niente ma vulnerabile a SIM swapping.

Hardware keys (YubiKey) sono most secure ma adoption bassa.

**Backup codes**

Quando user abilita MFA, genera backup codes. Se perdono device, possono ancora accedere.

Store hashed, come passwords.

### Session management

**Secure session tokens**

Tokens devono essere:
- Random (cryptographically secure RNG)
- Long enough (128+ bits)
- Expire dopo inactivity period
- Invalidabili (logout deve realmente invalidare, not solo delete cookie client-side)

**HttpOnly e Secure flags su cookies**

```javascript
res.cookie('session', token, {
  httpOnly: true,  // No JS access (previene XSS theft)
  secure: true,    // Solo HTTPS
  sameSite: 'strict'  // Preveni CSRF
});
```

**Session timeout**

Activity timeout (e.g., 30 minuti di inactivity) e absolute timeout (e.g., 24 ore max).

Per azioni sensitive (cambio password, delete account), re-autenticazione richiesta anche se sessione valida.

### Autorizzazione granulare

**Principle of least privilege**

User/service ha solo permissions necessari. Niente di più.

Non "admin" vs "user". Ma ruoli granulari: "can_edit_posts", "can_delete_users", etc.

**Check permissions server-side, sempre**

Hiding UI elements non è security. Client-side è controllato dall'attacker.

Ogni API endpoint deve verificare che user autenticato ha permission per azione richiesta.

```python
@app.route('/admin/delete_user', methods=['POST'])
def delete_user():
    if not current_user.has_permission('delete_users'):
        return "Unauthorized", 403
    # procedi con deletion
```

## Input validation e sanitization

User input è fonte #1 di vulnerabilities.

### Whitelist, non blacklist

**Approccio errato:**
"Blocchiamo caratteri pericolosi: `<`, `>`, `'`, `"`, etc."

Problema: infiniti modi di bypassare blacklists (encoding, Unicode tricks, etc.)

**Approccio corretto:**
"Accettiamo solo ciò che aspettiamo. Email? Regex strict. Numero? Parse e verifica range."

```python
import re

def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None
```

### SQL injection prevention

**Use prepared statements / parameterized queries**

```python
# ✗ Vulnerabile
query = f"SELECT * FROM users WHERE email = '{user_input}'"
db.execute(query)

# ✓ Sicuro
query = "SELECT * FROM users WHERE email = ?"
db.execute(query, (user_input,))
```

Mai, mai, mai concatenare user input in SQL query.

**ORM usage**

ORM come SQLAlchemy, Django ORM, Entity Framework - quando usati correttamente - prevengono SQL injection.

Ma attention: raw queries in ORM possono essere vulnerabili se non parameterized.

### XSS (Cross-Site Scripting) prevention

**Escape output**

Quando mostri user input in HTML, escape.

```javascript
// ✗ Vulnerabile
document.innerHTML = userInput;

// ✓ Sicuro
document.textContent = userInput;
// o usa library di sanitization
```

Modern frameworks (React, Vue) escapano di default. Ma attenzione a `dangerouslySetInnerHTML` in React, `v-html` in Vue.

**Content Security Policy (CSP)**

Header HTTP che dice al browser quali scripts sono allowed.

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com
```

Previene inline scripts e loading da domains non trusted.

### CSRF (Cross-Site Request Forgery) prevention

**CSRF tokens**

Form submissions devono includere token unico per session.

Server verifica che token su request matches quello generato per session.

```html
<form method="POST">
  <input type="hidden" name="csrf_token" value="{{ csrf_token }}">
  <!-- altri fields -->
</form>
```

**SameSite cookies**

Come già mentioned, `sameSite='strict'` su cookies previene CSRF.

### File upload security

File upload sono notoriously dangerous.

**Validate file type**

Non solo extension (facilmente falsificata) ma magic bytes / MIME type.

```python
import magic

def validate_image(file):
    mime = magic.from_buffer(file.read(1024), mime=True)
    return mime in ['image/jpeg', 'image/png', 'image/gif']
```

**Limit file size**

Previene DoS via large file uploads.

**Store outside webroot**

Files uploaded non dovrebbero essere direttamente accessible via URL. Serve tramite application che checka permissions.

**Scan for malware**

Quando possibile, scan uploaded files con antivirus (ClamAV, VirusTotal API).

**Rename files**

Non usare filename provided da user. Genera random filename. Previene path traversal attacks.

## Data protection

### Encryption at rest

**Encrypt sensitive data in database**

Passwords (già hashed), ma anche:
- Credit card numbers
- Social security numbers
- Health information
- Qualsiasi PII (Personally Identifiable Information)

**Use AES-256 o simile**

```python
from cryptography.fernet import Fernet

# Generate key (store securely, not in code!)
key = Fernet.generate_key()
cipher = Fernet(key)

# Encrypt
encrypted = cipher.encrypt(b"sensitive data")

# Decrypt
decrypted = cipher.decrypt(encrypted)
```

**Key management**

Encryption keys non in codice, non in repository.

Use secrets manager (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault).

Rotate keys periodically.

### Encryption in transit

**HTTPS everywhere**

Not optional. Anche per "non-sensitive" pages. Tutto HTTPS.

Free certificates con Let's Encrypt. No excuse.

**HSTS (HTTP Strict Transport Security)**

Header che dice al browser: "Always HTTPS, never HTTP".

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

**TLS 1.2 minimum, preferably 1.3**

Disable vecchie versioni (SSL, TLS 1.0/1.1). Vulnerabili.

### Data minimization

**Collect solo ciò che serve**

Ogni pezzo di data è liability. Se hackerato, devi disclosure. Se regolato (GDPR), devi gestire.

Chiedi: "Veramente serve questo field? Possiamo funzionare senza?"

**Retention policies**

Data non deve vivere forever. Define quanto long serve, poi delete.

```sql
-- Delete old sessions
DELETE FROM sessions WHERE last_activity < NOW() - INTERVAL '30 days';

-- Anonymize old user data
UPDATE users SET email = 'deleted', name = 'deleted' WHERE deleted_at < NOW() - INTERVAL '1 year';
```

**Anonymization quando possibile**

Per analytics, spesso non serve user identity. Anonymize o pseudonymize.

## Logging e monitoring

### Log security events

**Cosa loggare:**
- Login attempts (successi e failures)
- Permission changes
- Data access (especially sensitive data)
- Configuration changes
- API calls (especially failed/suspicious ones)

**Cosa NON loggare:**
- Passwords
- Credit card numbers
- Tokens
- Session IDs

Se accidentally loggati, sono vulnerability.

### Monitoring e alerting

**Alert su eventi suspicious:**
- Multiple failed login attempts
- Unusual API traffic patterns
- Changes to critical data
- Errors spike

**SIEM (Security Information and Event Management)**

Tools come Splunk, ELK Stack aggregano logs, correlano events, detect anomalies.

At scale, indispensabili.

### Incident response plan

When (not if) security incident accade:
- Chi contatti?
- Quali steps immediati?
- Come comunichi a utenti?
- Come previeni recurrence?

Document questo in advance. In panic del momento, plan salvavita.

## Dependencies e supply chain security

### Keep dependencies updated

Vulnerabilities scoperte continuamente. Updates fixano.

**Automated dependency updates**

Dependabot, Renovate - creano PR automatici quando update disponibili.

**Security advisories**

Monitor GitHub Security Advisories, CVE databases.

Quando severity alta, patch immediately.

### Audit dependencies periodically

```bash
npm audit
pip-audit
bundle audit
```

Questi tools scannano dependencies per vulnerabilità note.

**Don't blindly install packages**

Package con pochi downloads, no maintenance, unknown publisher - red flags.

Malicious packages esistono. Supply chain attacks in aumento.

### Lock file versions

`package-lock.json`, `Gemfile.lock`, `poetry.lock` - committali.

Garantisce che everyone installa same versions. Previene surprise da minor version updates.

## Infrastructure e deployment

### Principle of least privilege su infra

**Users e services:**
Database user per application ha solo permissions necessari. No root/admin access.

**Network segmentation:**
Database in private subnet, not accessible da internet. Solo via application server.

**IAM roles granulari** (su cloud)

Service ha solo permissions serve. Not broad admin access.

### Secrets management

**Never commit secrets to git**

API keys, passwords, tokens - mai in codice.

Use environment variables o secrets manager.

**`.gitignore`** file con `.env`, config files con secrets.

**Rotate secrets regolarmente**

Especially dopo team member leaves, o se suspicion di compromissione.

### Secure configurations

**Disable unnecessary services**

Ogni service running è surface di attacco. Se non serve, off.

**Change default passwords**

Database, admin panels, router - cambiali from defaults.

**Keep systems updated**

OS patches, security updates. Automated quando possibile.

### Backups

Regolari, tested, offsite.

Ransomware attacks in aumento. Backup è recovery insurance.

**3-2-1 rule:**
3 copies, 2 diversi media types, 1 offsite.

## Privacy compliance

### GDPR (se hai utenti EU)

**Lawful basis per processing**

Consent, contract, legitimate interest - devi avere ragione legale per processare data.

**Data subject rights:**
- Right to access (utente può vedere data che hai)
- Right to erasure ("right to be forgotten")
- Right to portability (export data)
- Right to rectification (correggere data errata)

Implementa functionality per questi.

**Data breach notification**

Se breach con personal data, devi notify authorities entro 72 ore.

**Privacy policy chiara**

Spiega cosa data raccogli, perché, come usi, quanto tieni, con chi condividi.

### CCPA (se hai utenti California)

Simile a GDPR ma specifics diversi.

"Do Not Sell My Personal Information" link required.

### Altri regulations

HIPAA (healthcare US), PCI-DSS (payment cards), etc.

Se operi in settori regulated, comply è not optional.

## Security testing

### Penetration testing

Assumi ethical hackers per provare a breakare il sistema.

Annualmente, o after major changes.

Scoprono vulnerabilità che automated tools miss.

### Automated security scanning

**SAST (Static Application Security Testing)**

Scan codice per vulnerabilità. SonarQube, Checkmarx, etc.

**DAST (Dynamic Application Security Testing)**

Scan application running. OWASP ZAP, Burp Suite.

**Dependency scanning**

Already mentioned. Parte di CI/CD pipeline.

### Bug bounty programs

Reward external researchers per trovare e reportare vulnerabilities responsibly.

HackerOne, Bugcrowd - platforms per gestire.

Crowdsourced security testing.

## Educazione e cultura

### Security training per team

Regolare. Covering common vulnerabilities, best practices, incident response.

Not boring lecture. Hands-on, CTF-style challenges engaging.

### Code review con security lens

Every PR, qualcuno checka security implications.

"Questo input è validated? Questo data è encrypted? Questo endpoint ha authorization check?"

### Security champions

Designa persone in team appassionate di security. Loro evangelizzano, guidano, resources.

Not solo security team separate. Distributed responsibility.

## Checklist pratica

Per ogni progetto:

**Autenticazione:**
- [ ] Password hashed (bcrypt/scrypt/Argon2)
- [ ] MFA disponibile
- [ ] Rate limiting su login
- [ ] Session management secure

**Autorizzazione:**
- [ ] Least privilege
- [ ] Server-side checks su ogni endpoint

**Input/Output:**
- [ ] Input validation (whitelist)
- [ ] SQL injection prevention (prepared statements)
- [ ] XSS prevention (escape output, CSP)
- [ ] CSRF protection (tokens, SameSite cookies)

**Data Protection:**
- [ ] HTTPS everywhere (HSTS)
- [ ] Sensitive data encrypted at rest
- [ ] Data minimization practiced
- [ ] Retention policies defined

**Infrastructure:**
- [ ] No secrets in code
- [ ] Dependencies updated
- [ ] Security scanning in CI/CD
- [ ] Backups regular e tested

**Compliance:**
- [ ] Privacy policy
- [ ] Data subject rights implemented (se applicable)
- [ ] Consent mechanisms

**Monitoring:**
- [ ] Security logging
- [ ] Alerting su suspicious events
- [ ] Incident response plan

## L'errore è umano, la preparazione è scelta

Non sarai mai 100% secure. Perfect security non esiste.

Ma puoi essere responsabile. Puoi implementare best practices. Puoi ridurre drasticamente attack surface.

E quando incident accade (because probabilistically, before o later, something will), sarai preparato a respond rapidamente, limitare danni, imparare.

Security e privacy sono marathon, not sprint. Continuous improvement, continuous vigilance.

Ma ogni step conta. Ogni vulnerability prevented è utenti protetti, trust maintained, reputation preserved.

Worth ogni sforzo.
