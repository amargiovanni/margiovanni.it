---
layout: post
title: "Privacy and Security: Best Practices in Software Development"
subtitle: "Finding thousands of plain-text passwords in the database was the moment everything about security became personal"
date: 2025-05-07
categories: security privacy best-practices development
---

It was 2019. We were doing routine code review when I noticed something that made my blood run cold: user passwords saved in plain text in the database. Thousands of users. Their passwords, readable by anyone with database access.

"Why aren't they hashed?" I asked the developer.

"I didn't think it was necessary. The database is protected anyway."

That "the database is protected anyway" is the famous last words before every data breach.

That experience taught me something fundamental: security and privacy aren't features to add later. They're foundations to build on. And you can't assume them, you must implement them deliberately, systematically, religiously.

In this post I share the best practices I apply in every project. They're not perfect, don't cover every scenario, but represent the bare minimum for building responsible software.

## The right mindset

Before specific practices, you need the correct mindset.

### Security is everyone's job

Not just the security team's. Not just the senior developer's. Everyone's.

Every person who writes code, who deploys, who has system access - is responsible for security.

**No-blame but high accountability culture**

Security mistakes happen. When they happen, we don't look for culprits but understand how to prevent recurrence.

But this doesn't mean low standards. Standards must be high. Rigorous reviews. No security shortcuts.

### Assume breach

Not "if" but "when" someone will try to attack your system.

Design assuming that:
- Someone will have unauthorized access
- Someone will try SQL injection, XSS, CSRF
- Someone will intercept network traffic
- Someone will have compromised credentials

With this mindset, you architect defense in depth: multiple layers of protection.

### Privacy by design

Privacy isn't compliance checkbox. It's respect for users.

Ask: "If this was my personal data, how would I want it treated?"

Minimize data collection, protect what you collect, give users control.

## Authentication and authorization

First layer of defense: who you are and what you can do.

### Password security

**Never store passwords in plain text**

This is non-negotiable. Passwords must be hashed with robust algorithm.

**Use bcrypt, scrypt, or Argon2**

Not MD5, not SHA1. These are fast, which for password hashing is negative. You want slow, to make brute force impractical.

```python
# ✓ Correct
import bcrypt

password = "user_password"
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

# Verify
if bcrypt.checkpw(password.encode(), hashed):
    print("Password correct")
```

**Salt every password**

Salt prevents rainbow table attacks. Modern libraries (bcrypt) do this automatically.

**Password strength enforcement**

Not just "minimum 8 characters". Check for:
- Minimum length (12+ characters recommended)
- Character mix (uppercase, lowercase, numbers, symbols)
- Not common passwords (use library of banned passwords)
- Not part of email or username

**Rate limiting on login**

Prevent brute force: max attempts per IP/account in timeframe.

After N failed attempts, increase delay or require CAPTCHA.

### Multi-factor authentication (MFA)

Passwords alone aren't enough. Compromised passwords, phishing, keyloggers.

**Implement MFA, at least as option**

TOTP (Google Authenticator, Authy) is good balance of security and UX.

SMS-based is better than nothing but vulnerable to SIM swapping.

Hardware keys (YubiKey) are most secure but low adoption.

**Backup codes**

When user enables MFA, generate backup codes. If they lose device, can still access.

Store hashed, like passwords.

### Session management

**Secure session tokens**

Tokens must be:
- Random (cryptographically secure RNG)
- Long enough (128+ bits)
- Expire after inactivity period
- Invalidatable (logout must actually invalidate, not just delete cookie client-side)

**HttpOnly and Secure flags on cookies**

```javascript
res.cookie('session', token, {
  httpOnly: true,  // No JS access (prevents XSS theft)
  secure: true,    // HTTPS only
  sameSite: 'strict'  // Prevent CSRF
});
```

**Session timeout**

Activity timeout (e.g., 30 minutes of inactivity) and absolute timeout (e.g., 24 hours max).

For sensitive actions (password change, account delete), re-authentication required even if session valid.

### Granular authorization

**Principle of least privilege**

User/service has only necessary permissions. Nothing more.

Not "admin" vs "user". But granular roles: "can_edit_posts", "can_delete_users", etc.

**Check permissions server-side, always**

Hiding UI elements isn't security. Client-side is controlled by attacker.

Every API endpoint must verify that authenticated user has permission for requested action.

```python
@app.route('/admin/delete_user', methods=['POST'])
def delete_user():
    if not current_user.has_permission('delete_users'):
        return "Unauthorized", 403
    # proceed with deletion
```

## Input validation and sanitization

User input is source #1 of vulnerabilities.

### Whitelist, not blacklist

**Wrong approach:**

"Let's block dangerous characters: `<`, `>`, `'`, `"`, etc."

Problem: infinite ways to bypass blacklists (encoding, Unicode tricks, etc.)

**Correct approach:**

"We accept only what we expect. Email? Strict regex. Number? Parse and verify range."

```python
import re

def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None
```

### SQL injection prevention

**Use prepared statements / parameterized queries**

```python
# ✗ Vulnerable
query = f"SELECT * FROM users WHERE email = '{user_input}'"
db.execute(query)

# ✓ Safe
query = "SELECT * FROM users WHERE email = ?"
db.execute(query, (user_input,))
```

Never, ever, ever concatenate user input in SQL query.

**ORM usage**

ORMs like SQLAlchemy, Django ORM, Entity Framework - when used correctly - prevent SQL injection.

But attention: raw queries in ORM can be vulnerable if not parameterized.

### XSS (Cross-Site Scripting) prevention

**Escape output**

When showing user input in HTML, escape.

```javascript
// ✗ Vulnerable
document.innerHTML = userInput;

// ✓ Safe
document.textContent = userInput;
// or use sanitization library
```

Modern frameworks (React, Vue) escape by default. But watch out for `dangerouslySetInnerHTML` in React, `v-html` in Vue.

**Content Security Policy (CSP)**

HTTP header that tells browser which scripts are allowed.

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com
```

Prevents inline scripts and loading from untrusted domains.

### CSRF (Cross-Site Request Forgery) prevention

**CSRF tokens**

Form submissions must include unique token for session.

Server verifies that token on request matches the one generated for session.

```html
<form method="POST">
  <input type="hidden" name="csrf_token" value="{{ csrf_token }}">
  <!-- other fields -->
</form>
```

**SameSite cookies**

As already mentioned, `sameSite='strict'` on cookies prevents CSRF.

### File upload security

File uploads are notoriously dangerous.

**Validate file type**

Not just extension (easily faked) but magic bytes / MIME type.

```python
import magic

def validate_image(file):
    mime = magic.from_buffer(file.read(1024), mime=True)
    return mime in ['image/jpeg', 'image/png', 'image/gif']
```

**Limit file size**

Prevents DoS via large file uploads.

**Store outside webroot**

Uploaded files shouldn't be directly accessible via URL. Serve through application that checks permissions.

**Scan for malware**

When possible, scan uploaded files with antivirus (ClamAV, VirusTotal API).

**Rename files**

Don't use filename provided by user. Generate random filename. Prevents path traversal attacks.

## Data protection

### Encryption at rest

**Encrypt sensitive data in database**

Passwords (already hashed), but also:
- Credit card numbers
- Social security numbers
- Health information
- Any PII (Personally Identifiable Information)

**Use AES-256 or similar**

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

Encryption keys not in code, not in repository.

Use secrets manager (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault).

Rotate keys periodically.

### Encryption in transit

**HTTPS everywhere**

Not optional. Even for "non-sensitive" pages. Everything HTTPS.

Free certificates with Let's Encrypt. No excuse.

**HSTS (HTTP Strict Transport Security)**

Header that tells browser: "Always HTTPS, never HTTP".

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

**TLS 1.2 minimum, preferably 1.3**

Disable old versions (SSL, TLS 1.0/1.1). Vulnerable.

### Data minimization

**Collect only what's needed**

Every piece of data is liability. If hacked, you must disclose. If regulated (GDPR), you must manage.

Ask: "Do we really need this field? Can we function without?"

**Retention policies**

Data shouldn't live forever. Define how long it's needed, then delete.

```sql
-- Delete old sessions
DELETE FROM sessions WHERE last_activity < NOW() - INTERVAL '30 days';

-- Anonymize old user data
UPDATE users SET email = 'deleted', name = 'deleted' WHERE deleted_at < NOW() - INTERVAL '1 year';
```

**Anonymization when possible**

For analytics, often don't need user identity. Anonymize or pseudonymize.

## Logging and monitoring

### Log security events

**What to log:**

- Login attempts (successes and failures)
- Permission changes
- Data access (especially sensitive data)
- Configuration changes
- API calls (especially failed/suspicious ones)

**What NOT to log:**

- Passwords
- Credit card numbers
- Tokens
- Session IDs

If accidentally logged, they're vulnerability.

### Monitoring and alerting

**Alert on suspicious events:**

- Multiple failed login attempts
- Unusual API traffic patterns
- Changes to critical data
- Error spikes

**SIEM (Security Information and Event Management)**

Tools like Splunk, ELK Stack aggregate logs, correlate events, detect anomalies.

At scale, indispensable.

### Incident response plan

When (not if) security incident happens:
- Who to contact?
- What immediate steps?
- How to communicate to users?
- How to prevent recurrence?

Document this in advance. In panic of moment, plan is lifesaver.

## Dependencies and supply chain security

### Keep dependencies updated

Vulnerabilities discovered continuously. Updates fix them.

**Automated dependency updates**

Dependabot, Renovate - create automatic PRs when updates available.

**Security advisories**

Monitor GitHub Security Advisories, CVE databases.

When high severity, patch immediately.

### Audit dependencies periodically

```bash
npm audit
pip-audit
bundle audit
```

These tools scan dependencies for known vulnerabilities.

**Don't blindly install packages**

Package with few downloads, no maintenance, unknown publisher - red flags.

Malicious packages exist. Supply chain attacks increasing.

### Lock file versions

`package-lock.json`, `Gemfile.lock`, `poetry.lock` - commit them.

Guarantees everyone installs same versions. Prevents surprises from minor version updates.

## Infrastructure and deployment

### Principle of least privilege on infra

**Users and services:**

Database user for application has only necessary permissions. No root/admin access.

**Network segmentation:**

Database in private subnet, not accessible from internet. Only via application server.

**Granular IAM roles** (on cloud)

Service has only permissions it needs. Not broad admin access.

### Secrets management

**Never commit secrets to git**

API keys, passwords, tokens - never in code.

Use environment variables or secrets manager.

**`.gitignore`** file with `.env`, config files with secrets.

**Rotate secrets regularly**

Especially after team member leaves, or if suspicion of compromise.

### Secure configurations

**Disable unnecessary services**

Every running service is attack surface. If not needed, off.

**Change default passwords**

Database, admin panels, router - change them from defaults.

**Keep systems updated**

OS patches, security updates. Automated when possible.

### Backups

Regular, tested, offsite.

Ransomware attacks increasing. Backup is recovery insurance.

**3-2-1 rule:**

3 copies, 2 different media types, 1 offsite.

## Privacy compliance

### GDPR (if you have EU users)

**Lawful basis for processing**

Consent, contract, legitimate interest - must have legal reason to process data.

**Data subject rights:**

- Right to access (user can see data you have)
- Right to erasure ("right to be forgotten")
- Right to portability (export data)
- Right to rectification (correct incorrect data)

Implement functionality for these.

**Data breach notification**

If breach with personal data, must notify authorities within 72 hours.

**Clear privacy policy**

Explain what data you collect, why, how you use, how long you keep, with whom you share.

### CCPA (if you have California users)

Similar to GDPR but different specifics.

"Do Not Sell My Personal Information" link required.

### Other regulations

HIPAA (US healthcare), PCI-DSS (payment cards), etc.

If you operate in regulated sectors, compliance is not optional.

## Security testing

### Penetration testing

Hire ethical hackers to try to break the system.

Annually, or after major changes.

Discover vulnerabilities that automated tools miss.

### Automated security scanning

**SAST (Static Application Security Testing)**

Scan code for vulnerabilities. SonarQube, Checkmarx, etc.

**DAST (Dynamic Application Security Testing)**

Scan running application. OWASP ZAP, Burp Suite.

**Dependency scanning**

Already mentioned. Part of CI/CD pipeline.

### Bug bounty programs

Reward external researchers for finding and responsibly reporting vulnerabilities.

HackerOne, Bugcrowd - platforms to manage.

Crowdsourced security testing.

## Education and culture

### Security training for team

Regular. Covering common vulnerabilities, best practices, incident response.

Not boring lecture. Hands-on, CTF-style engaging challenges.

### Code review with security lens

Every PR, someone checks security implications.

"Is this input validated? Is this data encrypted? Does this endpoint have authorization check?"

### Security champions

Designate people in team passionate about security. They evangelize, guide, are resources.

Not just separate security team. Distributed responsibility.

## Practical checklist

For every project:

**Authentication:**

- [ ] Passwords hashed (bcrypt/scrypt/Argon2)
- [ ] MFA available
- [ ] Rate limiting on login
- [ ] Secure session management

**Authorization:**

- [ ] Least privilege
- [ ] Server-side checks on every endpoint

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
- [ ] Regular and tested backups

**Compliance:**

- [ ] Privacy policy
- [ ] Data subject rights implemented (if applicable)
- [ ] Consent mechanisms

**Monitoring:**

- [ ] Security logging
- [ ] Alerting on suspicious events
- [ ] Incident response plan

## Error is human, preparation is choice

You'll never be 100% secure. Perfect security doesn't exist.

But you can be responsible. You can implement best practices. You can drastically reduce attack surface.

And when incident happens (because probabilistically, sooner or later, something will), you'll be prepared to respond quickly, limit damage, learn.

Security and privacy are marathon, not sprint. Continuous improvement, continuous vigilance.

But every step counts. Every prevented vulnerability is users protected, trust maintained, reputation preserved.

Worth every effort.
