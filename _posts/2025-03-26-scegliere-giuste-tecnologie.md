---
layout: post
title: "Come scegliere le giuste tecnologie per un nuovo progetto digitale"
date: 2025-03-26
categories: technology-selection architecture decision-making
---

"Usiamo React o Vue? PostgreSQL o MongoDB? AWS o Google Cloud?"

Ogni nuovo progetto inizia con una cascata di decisioni tecnologiche. E ogni decisione sembra cruciale, perché in parte lo è. Scegliere la tecnologia sbagliata può significare mesi persi, costi esplosi, team frustrato.

Ma dopo aver fatto queste scelte decine di volte, ho imparato qualcosa di controintuitivo: la tecnologia specifica importa meno di quanto pensi. Ciò che importa davvero è il processo con cui fai la scelta.

Lascia che ti racconti di un progetto dove abbiamo sbagliato tutto. Era il 2018, dovevamo costruire una piattaforma di e-learning. Il tech lead era entusiasta di microservices e Kubernetes. "È il futuro", diceva. "Dobbiamo essere all'avanguardia".

Sei mesi dopo, con un team di quattro persone, stavamo annegando nella complessità operativa. Deploy richiedevano ore. Debug era un incubo. Il 60% del tempo andava a gestire infrastruttura invece di costruire features.

Avremmo dovuto fare un semplice monolith su Heroku. Avremmo lanciato in metà del tempo, con meno stress, con lo stesso risultato per gli utenti.

La tecnologia non era "sbagliata" in assoluto. Era sbagliata per quel contesto: team piccolo, timeline stretta, budget limitato, nessuna esperienza K8s.

Quella lezione mi ha insegnato che scegliere tecnologie non è trovare "la migliore". È trovare la più adatta al tuo specifico contesto.

## Il framework per decidere

Negli anni ho sviluppato un processo per queste decisioni. Non è perfetto, non garantisce sempre la scelta giusta, ma riduce significativamente la probabilità di disastri.

### 1. Inizia dai requisiti, non dalle tecnologie

Troppo spesso il processo è: "Voglio usare X" → "Ora troviamo un problema che giustifica X".

Deve essere l'opposto.

**Definisci cosa deve fare il sistema**
- Quali sono i requisiti funzionali core?
- Quanto traffico deve gestire? (Sia ora che nei prossimi 2-3 anni)
- Quali sono i requisiti di latency? (È ok se risponde in 2 secondi o serve millisecond-level performance?)
- Serve alta disponibilità o qualche ora di downtime all'anno è accettabile?
- I dati sono critici? Che livello di data integrity serve?
- Ci sono compliance requirements? (GDPR, HIPAA, etc.)

**Definisci i constraint**
- Budget disponibile (sia upfront che ongoing operational costs)
- Team size e skill set
- Timeline
- Dependency esistenti (devi integrarti con sistemi legacy?)
- Operational capacity (hai DevOps team o developer devono gestire tutto?)

Scrivi queste cose. Letteralmente. Un documento che lista requisiti e constraints.

Questo documento diventa la tua north star. Ogni tecnologia che consideri deve essere valutata contro questi criteri, non contro "cosa è cool" o "cosa tutti usano".

### 2. Valuta fit, non features

Quando compari tecnologie, è tentante fare liste di features.

"Database A ha questa feature che B non ha!"

Ma 90% delle features non le userai mai. Quello che conta è come la tecnologia si adatta ai tuoi specifici use cases.

**Le domande giuste da fare:**

**Per il problema specifico che ho, questa tecnologia è designed per quello?**

MongoDB è ottimo per certi use cases. Ma se i tuoi dati sono fortemente relazionali, stai nuotando contro corrente. Potresti farcela, ma perché rendere la vita difficile?

**Il sweet spot di questa tecnologia si allinea con le mie esigenze?**

Redis è fantastico per caching. Puoi usarlo come database primario? Tecnicamente sì. È una buona idea? Raramente.

**Cosa sacrifico scegliendo questa tecnologia?**

Ogni scelta è trade-off. NoSQL ti dà flessibilità di schema ma sacrifichi transazioni ACID. Microservices ti danno indipendenza ma aggiungi complessità operativa.

I trade-off sono ok se consci e accettabili per il tuo caso. Sono problemi se non li hai considerati.

### 3. Considera il Total Cost of Ownership

Il costo di una tecnologia non è solo il costo di licenza (se c'è).

**Costi nascosti che spesso ignoriamo:**

**Learning curve**

Se scegli tecnologia che nessuno nel team conosce, quanto tempo ci vuole per diventare produttivi? Settimane? Mesi?

Quel tempo ha costo. E durante learning, farai errori che porteranno a problemi down the line.

**Operational overhead**

Quanto lavoro richiede mantenerla? Kubernetes è potente ma richiede expertise significativo per operarlo bene. Managed service come Heroku costa di più nominalmente ma risparmia tanto operational work.

**Hiring e retention**

Se usi stack tecnologico oscuro, quanto è difficile trovare developer? Quanto devi pagarli? Quanto facilmente se ne vanno per opportunità con stack più mainstream?

**Ecosystem e community**

Tecnologia con ecosistema ricco significa libraries pronte, problemi già risolti da altri, tutorial ovunque, domande su Stack Overflow già risposte.

Tecnologia di nicchia significa che ogni problema è tuo da risolvere.

**Lock-in e exit cost**

Quanto è difficile cambiare in futuro se questa tecnologia non funziona? Proprietario cloud services creano lock-in. Open source standard facilitano migrazione.

### 4. Valuta maturità e longevità

**Spectrum di maturità:**

**Bleeding edge:** Appena uscita, experimental, potrebbe cambiare drasticamente o morire
**Leading edge:** Relativamente nuova, momentum positivo, sta maturando
**Mainstream:** Provata, stabile, ampiamente adottata
**Legacy:** Vecchia, in declino, ma ancora usata

Dove vuoi essere su questo spectrum dipende dal contesto.

**Quando scegliere bleeding edge:**

- Progetto di ricerca o sperimentale
- Hai tempo e risorse per dealing con instabilità
- Il beneficio potenziale è così alto che vale il rischio
- Puoi permetterti di fallire

**Quando scegliere leading edge:**

- Vuoi innovare ma con safety net
- Hai capacity di contribuire alla community e shape la tecnologia
- Il team ha appetite per imparare cose nuove

**Quando scegliere mainstream:**

- Progetto production-critical
- Team piccolo o con limitate risorse
- Timeline strette
- Risk aversion alta

**Quando scegliere legacy:**

- Raramente per greenfield projects
- A volte per compatibility con esistente
- A volte perché team ha deep expertise che compensa age

**Segnali di tecnologia sana:**

- Community attiva e growing
- Company/foundation con commitment a lungo termine
- Release regolari con clear roadmap
- Adoption in produzione da aziende serie
- Documentazione curata e aggiornata
- Ecosystem di libraries e tools

**Red flags:**

- Progetto abbandonato o con maintenance sporadico
- Community dying o tossica
- Breaking changes frequenti senza migration path
- Scarsa documentazione
- Solo proof-of-concepts, pochi production deployments

### 5. Testa, non assumere

Prima di committare, testa.

**Spike: time-boxed exploration**

Dedica una settimana (non di più) a costruire spike: un piccolo prototipo che esercita gli aspetti critici del sistema.

Non serve essere production-ready. Serve rispondere a domande specifiche:
- Questa tecnologia può fare X che è critico per noi?
- Come è il developer experience?
- Quali problemi emergono?
- Quanto è complicato l'operational aspect?

**Benchmark per use cases realistici**

Non generic benchmarks trovati online. Quelli testano casi ideali che potrebbero non riflettere il tuo uso.

Testa con dati e patterns simili a quelli che aspetti in produzione.

**Parla con chi l'ha usata**

Cerca aziende con use case simile al tuo. Chiedi della loro esperienza.

"Cosa rifaresti diversamente?"
"Quali sono stati i problemi inaspettati?"
"Consiglieresti questa tecnologia per un caso come il nostro?"

Queste conversazioni sono oro. Impari da errori altrui invece di rifarli.

## Le categorie di decisioni

Non tutte le decisioni tecnologiche sono uguali. Alcune sono più critiche, più difficili da cambiare.

### Decisioni architetturali fondamentali

**Monolith vs Microservices**

**Quando monolith:**

- Team piccolo (< 10 developer)
- Dominio non chiaramente separabile
- Velocità di iteration prioritaria
- Limited operational capacity

**Quando microservices:**

- Team grande, organizzabile in sub-teams
- Dominio con bounded contexts chiari
- Esigenza di scalare parti diverse indipendentemente
- Strong DevOps culture e tooling

**Non c'è "sempre meglio"**. Amazon ha iniziato con monolith. Molte startup falliscono per complessità prematura di microservices.

**Cloud provider**

AWS è leader ma non automaticamente la scelta giusta.

**Considera:**

- Dove sono i tuoi utenti? (Latency da geographic regions)
- Quali servizi managed ti servono?
- Hai già expertise su un provider?
- Costi per il tuo specifico workload (variano molto)
- Lock-in concerns

Multi-cloud suona bello ma aggiunge complessità enorme. Raramente ne vale la pena.

**Database paradigm**

Relazionale (PostgreSQL, MySQL) vs Document (MongoDB) vs Column-family (Cassandra) vs Graph (Neo4j) vs Time-series (InfluxDB)

Dipende totalmente dalla natura dei tuoi dati e query patterns.

Dati con relazioni complesse? Relazionale.
Schema flessibile, document-oriented? Document DB.
Time-series analytics? Specialized time-series DB.

Potresti anche usare più di uno (polyglot persistence) ma solo se complexity è giustificata.

### Decisioni di linguaggio e framework

**Linguaggio di programmazione**

Il linguaggio conta meno del framework ed ecosystem attorno.

**Considera:**

- Expertise del team (più importante di tutto)
- Ecosystem per il tuo dominio (Python per ML, JavaScript per web)
- Performance requirements (Go/Rust per high-performance, Python/Ruby per rapid dev)
- Hiring pool nella tua area

**Framework**

React vs Vue vs Angular. Express vs Fastify. Rails vs Django.

Onestamente? Per la maggior parte dei progetti, la differenza è marginale.

**Scegli basandoti su:**
- Cosa il team già conosce
- Ecosystem specifico (es. se usi molto Next.js ecosystem, React è natural choice)
- Community size (documenti, libraries, problema solving)

Evita di saltare su ogni nuovo framework. Meglio maestria su uno stabile che perpetuo newbie su ultimo hype.

### Decisioni di infrastructure e tooling

**Containerization e orchestrazione**

Docker è praticamente standard. La domanda è orchestrazione.

**Kubernetes** se:
- Hai bisogno di flessibilità e controllo totale
- Hai team con expertise
- Scale e complessità giustificano overhead

**Managed platforms** (Heroku, Render, Fly.io) se:
- Vuoi focus su applicazione, non infra
- Team piccolo
- Costi iniziali più alti sono ok per ridurre operational burden

**CI/CD**

GitHub Actions, GitLab CI, CircleCI, Jenkins.

Principalmente guarda a:
- Integration con il tuo source control
- Ease of use
- Pricing per il tuo volume
- Features specifiche che ti servono (es. matrix builds)

Non strafare. Simple pipeline che funziona > complex pipeline che nessuno capisce.

**Monitoring e Observability**

Non afterthought. Essenziale da day one.

Datadog, New Relic, self-hosted (Prometheus + Grafana).

Considera:
- Integration con il tuo stack
- Pricing (può diventare costoso at scale)
- Features: metrics, logs, traces, tutto insieme?
- Ease of setup e use

## Processo decisionale pratico

Ok, hai framework e considerazioni. Come procedi concretamente?

### Step 1: Ricerca iniziale

**Identifica candidati**
Per ogni categoria (database, language, framework, etc.), lista 3-5 opzioni che sembrano ragionevoli per il tuo use case.

**Elimina non-starters**
Chiaramente non adatti (es. licensing incompatibile, requisiti tecnici non match, troppo immaturi).

Questo ti lascia con 2-3 opzioni serie per categoria.

### Step 2: Evaluation matrix

Crea matrix con:
- Righe: le opzioni candidate
- Colonne: i criteri importanti per te (performance, ease of use, cost, ecosystem, team expertise, etc.)

Per ogni criterio, assegna peso (1-5 quanto è importante per te).

Per ogni opzione, score su ogni criterio (1-5 quanto bene lo soddisfa).

Moltiplica e somma.

Questo non è scienza esatta. Ma ti forza a essere esplicito su cosa conta e come ogni opzione si compara.

### Step 3: Spike le top 2

Prendi le due con score più alto. Costruisci spike per entrambe.

Dopo lo spike, hai feeling molto migliore. Qualcosa che sembrava buono su carta potrebbe rivelarsi frustrante. Qualcosa che sembrava ok potrebbe sorprenderti positivamente.

### Step 4: Decisione e documentation

Scegli. Ma critico: documenta il "why".

**Decision Record (ADR - Architecture Decision Record)**

Template semplice:
```
# ADR-001: Scelta database principale

## Context
[Descrivi problema e requirements]

## Decision
Usiamo PostgreSQL come database primario.

## Rationale
- Dati fortemente relazionali
- Team ha expertise
- ACID transactions importanti per noi
- Mature ecosystem
- Buon balance tra features e semplicità

## Alternatives Considered
- MongoDB: Non adatto per nostri use case relazionali
- MySQL: Simile a Postgres ma missing alcune features che ci servono

## Consequences
- Positivo: Robust, well understood
- Negativo: Scaling verticale ha limiti (mitigato con read replicas)
- Risk: Se schema diventa troppo rigido (monitoreremo)

## Revisit Date
Q3 2025
```

Questo documento è prezioso. Quando tra sei mesi qualcuno chiede "perché abbiamo scelto X?", hai la risposta.

E soprattutto: quando consideri di cambiare, rileggi il rationale. Magari le ragioni sono ancora valide. Magari il contesto è cambiato e è time di riconsiderare.

### Step 5: Commit ma remain flexible

Una volta deciso, commit. Non second-guess continuamente.

Ma set checkpoints. "Tra tre mesi, rivediamo questa scelta. Se stiamo hitting problems, consideriamo alternative".

Alcune scelte sono facilmente reversibili (quale logging library). Altre sono difficili (quale database). Architettura per rendere più cose reversibili possibili.

## Errori comuni da evitare

### Resume-Driven Development

Scegliere tecnologia perché "voglio imparare" o "sembra bene sul CV".

Se è side project personale, vai libero. Se è progetto di lavoro, la scelta deve servire il progetto, non la tua carriera.

Vuoi imparare? Fallo nel tuo tempo, in progetti personali. Non usando clienti come guinea pigs.

### Hype-Driven Development

"Tutti parlano di X, dobbiamo usarlo!"

L'hype non è cattivo per se. Spesso tecnologie hype hanno merit. Ma devi validare per il TUO caso.

**Red flag:** Se la tua giustificazione è "perché è il futuro" senza specifici benefici per il progetto attuale.

### Analysis Paralysis

Passare settimane a comparare ogni singola opzione, leggere ogni benchmark, discutere ogni pro/con.

A un certo punto devi decidere. Perfetta informazione non esiste. Se hai fatto due settimane di ricerca e spike, hai probabilmente abbastanza info.

Trust your judgment. Se sbagli, correggerai.

### "Not Invented Here" syndrome

Rifiutare soluzioni esistenti perché "possiamo farlo meglio noi stessi".

A volte puoi. Ma spesso stai sottostimando la complessità.

Quel framework che pensi di poter replicare in una settimana? Ha in realtà anni di edge cases gestiti, bug fixati, ottimizzazioni.

**Use libraries. Use frameworks. Use managed services.**

Il tuo tempo è meglio speso su ciò che è unique al tuo dominio, non reinventando wheels.

### Ignoring the Team

Scegliere tecnologia che nessuno nel team conosce o vuole imparare.

Il team deve work con queste tecnologie ogni giorno. Se le odiano, saranno miserable e produttività crollerà.

Involve il team nella decisione. Ascolta le loro concerns. Se hanno forte preference per opzione ragionevole, va con quella anche se la tua scoring matrix dice altro.

## Quando riconsiderare scelte fatte

Non tutte le scelte tecnologiche durano per sempre.

**Segnali che è tempo di riconsiderare:**

**Pain continuo**
Se ogni giorno il team lotta contro la tecnologia invece di con essa, potrebbe essere wrong fit.

**Requirements cambiati significativamente**
Scegliesti per 1000 utenti, ora ne hai 100,000. Scegliesti per mercato europeo, ora sei global.

**Nuove alternative materially better**
Tecnologia nuova che risolve problemi fundamentali che hai con quella attuale.

**Tecnologia attuale in decline**
Community morente, no updates, major security issues non fixati.

**Ma attenzione:**

**Grass is greener syndrome:** Ogni tecnologia ha problemi. Quella nuova sembra migliore perché non hai ancora incontrato i suoi problemi.

**Sunk cost fallacy inverse:** "Abbiamo già investito tanto in X" non è ragione per tenerla se è wrong. Ma nemmeno "abbiamo investito tanto" è ragione per buttarla se funziona decentemente.

**Cost of migration:** Cambiare database, language, framework - è costly. Tempo, risk, potential bugs. Deve valerne davvero la pena.

**Approach incrementale:** Se devi cambiare, spesso puoi farlo gradualmente. Strangler fig pattern: costruisci nuovo alongside vecchio, migrate piece by piece.

## Case study: decisioni che ho fatto

Lascia che condivida alcune decisioni reali, come le ho fatte, come sono andate.

### Caso 1: Startup fintech, team di 3

**Requirements:** MVP in 3 mesi, compliance finanziario, team senza DevOps

**Decisione:**
- Ruby on Rails monolith
- PostgreSQL
- Heroku
- Stripe per payments

**Rationale:**
- Rails permetteva rapid development
- Postgres per data integrity (crucial per finance)
- Heroku eliminava operational burden
- Stripe riduce compliance complexity

**Risultato:** Lanciato in tempo, sistema stable. Dopo due anni e 10 developer, still on same stack. Ha scalato fine.

**Avrei fatto diversamente?** No. Per quel contesto era scelta giusta.

### Caso 2: E-commerce con high traffic

**Requirements:** Gestire spikes grandi (Black Friday), inventory real-time, international

**Decisione:**
- Node.js microservices per services che need independent scaling
- PostgreSQL per transactional data
- Redis per caching e real-time inventory
- AWS con auto-scaling

**Rationale:**
- Microservices permettevano scaling indipendente di checkout vs browsing
- Postgres per data consistency
- Redis per performance su hot data
- AWS auto-scaling per handle spikes senza over-provisioning anno intero

**Risultato:** Gestito Black Friday senza crash. Costi ragionevoli year-round.

**Avrei fatto diversamente?** Forse iniziato con monolith e migrato dopo. La complessità microservices early fu challenging. Ma funzionò.

### Caso 3: Internal tool per data analysis

**Requirements:** Non-technical users, ad-hoc queries, data visualization

**Decisione:**
- Python (Django)
- PostgreSQL
- Metabase per BI
- Deploy su simple VPS

**Rationale:**
- Python ecosystem per data processing
- Metabase dava UI potente senza building da zero
- Low operational complexity (solo internal tool)

**Risultato:** Users felici, maintained facilmente.

**Avrei fatto diversamente?** Forse solo Metabase senza custom backend sarebbe bastato. Over-engineered slightly.

## Il consiglio finale

Se devo darti un solo consiglio per scegliere tecnologie:

**Start boring.**

Boring non significa bad. Boring significa proven, understood, supportato.

Usa tecnologie che:
- Il team conosce o può imparare velocemente
- Hanno track record di successo
- Hanno community strong
- Risolvono il tuo problema without overhead eccessivo

Quando il progetto sta funzionando e hai evidence che boring non basta più - upgrade specifici pezzi che ne beneficiano.

Ma la default position è boring.

Perché boring ti lascia focus su ciò che conta: risolvere problemi per utenti, costruire business, creare valore.

La tecnologia è mezzo, non fine.

Ogni ora spesa fighting con framework è ora non spesa migliorando prodotto.

Quindi scegli tecnologie che get out of your way. Che ti permettono di essere produttivo. Che il team può maintain and evolve.

E ricorda: quasi mai la scelta tecnologica è il fattore principale di successo o fallimento.

Execution matters more. Team matters more. Product-market fit matters more.

Technology choice? Importante, sì. Ma non ossessionarti.

Fai scelta ragionevole informata, commit, execute, iterate.

E se davvero è wrong choice? Imparerai e correggerai.

Questo è il vero skill: non never making wrong choices, ma making good-enough choices quickly e saperle evolvere.
