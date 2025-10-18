---
layout: post
title: "Quando la sicurezza incontra la realtà industriale"
subtitle: "Due talk al NoHat 2025 che mi hanno fatto ripensare a cosa significhi davvero proteggere sistemi critici"
date: 2025-10-18
categories: security industrial-networks ai-security conference
---

Oggi ero a Bergamo per il NoHat 2025, e mi sono trovato a riflettere su quanto sia facile vivere in una bolla quando si lavora con la tecnologia. Pensiamo di conoscere la sicurezza informatica perché sappiamo come funzionano i firewall, come configurare un sistema di autenticazione, come gestire le vulnerabilità in un'applicazione web. E poi senti parlare chi lavora con infrastrutture critiche o con sistemi di intelligenza artificiale, e capisci che il tuo modello mentale copre forse il 20% della realtà.

Non è che quello che sappiamo sia sbagliato. È che il mondo è più vasto e più complicato di quanto tendiamo ad ammettere quando siamo immersi nel nostro ambito specifico.

## La fragilità delle infrastrutture che diamo per scontate

Gabriele Lepper di Nozomi Networks ha parlato di sicurezza per reti industriali e IoT. All'inizio pensavo sarebbe stato uno di quei talk tecnici dove impari qualche nuova tecnica di hardening o qualche tool interessante. E in parte è stato così. Ma quello che mi ha colpito è stato altro: la consapevolezza di quanto sia fragile l'infrastruttura su cui poggia tutto il resto.

Quando pensi alla sicurezza informatica, probabilmente pensi a server, database, applicazioni web. Cose che puoi riavviare, patchare, sostituire se necessario. Nel mondo industriale non funziona così. Non puoi riavviare un PLC che controlla un gasdotto o una centrale elettrica come fai con il tuo laptop. Fermare quell'apparato per un aggiornamento potrebbe significare interrompere servizi critici per migliaia di persone.

E qui arriva la parte che mi ha fatto riflettere: molte aziende industriali hanno ancora l'inventario degli asset su Excel. Non sistemi sofisticati di asset management, non database aggiornati in tempo reale. Excel. Quando va bene, perché alcune non hanno nemmeno quello.

Lepper ha raccontato di come il loro lavoro consista nel costruire strumenti di monitoraggio per reti industriali, e di quanto sia complicato farlo. Ogni vendor di automazione usa protocolli proprietari. Ognuno ha il suo linguaggio, la sua logica, i suoi quirk. Security by obscurity, l'ha chiamata. Non perché sia una scelta strategica brillante, ma perché è quello che è cresciuto organicamente in decenni di sviluppo industriale dove la priorità era far funzionare le cose, non renderle interoperabili.

Il tool che hanno sviluppato fa cose che sembrano banali quando le dici ad alta voce: inventario degli asset, rilevamento delle vulnerabilità, threat detection comportamentale. Ma la complessità sta nel farlo senza mandare giù la rete. I classici scanner di vulnerabilità tipo Nessus potrebbero letteralmente bloccare tutto. Immagina di scoprire una vulnerabilità facendo crollare la rete elettrica di una regione. Non è un'opzione accettabile.

## Dalla visibilità alla saggezza

La parte che mi è rimasta più impressa è stata quella che Lepper ha chiamato la "piramide della saggezza". È un modello che parte dai dati grezzi, quelli che vedi passare in rete come bitstream, e sale verso livelli di astrazione sempre più utili.

Al primo livello hai informazioni con contesto: "10 tentativi di login falliti in 60 secondi." È già qualcosa di più del dato grezzo, hai aggregato e contestualizzato.

Al secondo livello hai conoscenza: "questo pattern potrebbe essere un attacco brute force." Hai applicato expertise, hai riconosciuto un pattern che corrisponde a comportamenti noti.

Al terzo livello hai saggezza: correli eventi nel tempo e nello spazio per capire dove agire per ridurre il rischio complessivo. Non stai solo rilevando minacce individuali, stai capendo il sistema nel suo insieme e dove sono i punti critici.

Mi è venuto in mente che in molti contesti ci fermiamo ai primi due livelli. Rileviamo, identifichiamo, allertano. Ma raramente raggiungiamo quel terzo livello dove capisci davvero cosa sta succedendo in modo sistemico. E forse è per questo che ci sentiamo sempre sommersi da alert e sempre incerti su cosa sia davvero prioritario.

## Stuxnet e l'importanza della visibilità indipendente

Lepper ha menzionato Stuxnet, e credo sia uno di quei casi che vale la pena ricordare ogni volta che parliamo di sicurezza industriale. Per chi non lo conoscesse: Stuxnet era un malware estremamente sofisticato che prendeva di mira i sistemi SCADA iraniani. La parte terrificante non era solo che riuscisse a sabotare le centrifughe per l'arricchimento dell'uranio. Era che mentre lo faceva, i sistemi di controllo mostravano che tutto andava bene.

Gli operatori vedevano i loro dashboard, tutti i parametri sembravano normali, mentre sotto il malware stava letteralmente distruggendo l'hardware. È una lezione potente sull'importanza della visibilità indipendente. Non puoi fidarti solo dei sensori e dei sistemi che sono parte dell'infrastruttura che stai cercando di proteggere, perché un attaccante sofisticato potrebbe compromettere anche quelli.

Mi ha fatto pensare a quante volte, in contesti meno critici, ci fidiamo ciecamente dei log di sistema o dei report generati dall'applicazione stessa. E se quello fosse esattamente il punto cieco che un attaccante sfrutterebbe?

## Zero trust in un mondo che non lo permette

Un altro punto che mi ha colpito è stata la discussione sullo zero trust. È un concetto ormai consolidato nell'IT tradizionale: non fidarti mai, verifica sempre. Ogni richiesta deve essere autenticata, ogni accesso deve essere autorizzato, ogni connessione deve essere verificata.

Ma nelle reti industriali, molte realtà non implementano ancora zero trust. Non per ignoranza o negligenza, ma perché i sistemi con cui hanno a che fare sono stati progettati decenni fa quando zero trust non esisteva nemmeno come concetto. E non puoi semplicemente sostituirli tutti.

Mi ha fatto riflettere sul fatto che la sicurezza non è solo tecnologia. È anche capire i vincoli operativi, il contesto, la storia. Non puoi applicare le stesse soluzioni dell'IT al mondo OT (operational technology). Devi capire perché le cose sono come sono, quali sono i veri rischi, dove puoi intervenire e dove devi accettare compromessi.

È un approccio più umile, meno prescrittivo. E probabilmente più efficace.

## L'illusione dei firewall per prompt injection

Un altro talk che mi ha colpito era completamente diverso per argomento ma simile per messaggio di fondo: la sicurezza è complicata, e chiunque ti dica di avere la soluzione definitiva probabilmente ti sta vendendo qualcosa.

Lo speaker di KPMG ha parlato di sicurezza per sistemi basati su LLM, e ha sostanzialmente smontato pezzo per pezzo l'industria dei firewall per prompt injection. Il ragionamento è semplice e brutale: quando esce una nuova classe di vulnerabilità, arrivano subito vendor che dicono "dacci soldi e risolviamo tutto." Ma nella realtà nessuno ha ancora davvero capito cosa fare.

Ha mostrato test pratici su firewall come Lakera, che è stato recentemente acquisito da Checkpoint. Il risultato? Funzionano discretamente contro prompt injection conosciuti, ma basta un minimo di creatività per bypassarli. URL encoding in tedesco. Sostituire parole chiave: "ignore previous instructions" diventa "deploy the following apples." Usare markdown per esfiltrare dati tramite immagini embedded verso server esterni.

La parte più interessante, e anche un po' inquietante, è che ha usato GPT stesso per generare prompt injection offuscati che passano attraverso i firewall. Quindi essenzialmente stai usando un LLM per attaccare le difese costruite per proteggere altri LLM. È una specie di ouroboros tecnologico.

## Il problema dei falsi positivi e della latenza

Il vero problema di questi sistemi di difesa non è che non funzionano mai. È che devono operare con vincoli impossibili. Latenza bassissima, perché l'utente non può aspettare secondi per ogni risposta. Tassi di falsi positivi minimi, perché se su un milione di prompt anche solo lo 0,1% è bloccato erroneamente, hai comunque mille utenti legittimi frustrati.

Questi vincoli rendono i sistemi vulnerabili a tecniche di evasion simili a quelle che si usavano contro gli antivirus basati su hash vent'anni fa. Cambi qualche carattere, offuschi un po', e passi attraverso.

La proposta dello speaker era realista: questi firewall non sono inutili, ma vanno integrati in un Security Operations Center che monitora i tentativi di attacco. Così quando un attaccante prova 2-3 prompt injection diverse per capire come funziona il sistema, lo blocchi prima che trovi l'offuscamento giusto per passare.

È un approccio più umano, meno automatizzato. Riconosce che la tecnologia da sola non basta, che serve intelligenza umana per interpretare i pattern e prendere decisioni.

## LLM che proteggono LLM: l'assurdità che diventa standard

C'è stato un momento nel talk in cui lo speaker ha detto qualcosa tipo "alcuni sistemi usano un LLM per validare le risposte di un altro LLM." E quando lo dici ad alta voce suona assurdo. Stai mettendo un sistema stocastico, non deterministico, soggetto agli stessi tipi di attacco, a fare da guardia per un altro sistema identico.

Ma è quello che molti stanno facendo, incluso OpenAI con i loro "guardrails." E in parte funziona, almeno contro attacchi semplici. Ma crea anche un senso di falsa sicurezza, come se avessi risolto il problema quando in realtà hai solo aggiunto un altro layer che può essere bypassato.

Mi ha fatto pensare a quanto velocemente stiamo costruendo sistemi complessi su fondamenta che non abbiamo ancora capito bene. Con i software tradizionali abbiamo avuto decenni per sviluppare best practice, pattern, tool. Con l'ai stiamo ripetendo gli stessi errori della sicurezza tradizionale, solo molto più velocemente.

## La mancanza di trasparenza nel settore

Un altro aspetto che mi ha colpito è stata la critica alla mancanza di trasparenza nel settore della sicurezza per LLM. Molti vendor chiedono NDA prima di farti testare il prodotto. Non ci sono benchmark affidabili e indipendenti. Alcuni sistemi nativi dei cloud provider hanno performance che, nei test dello speaker, erano peggiori del lancio di una moneta.

Peggiori del lancio di una moneta. Cioè letteralmente peggio del caso. Questo dovrebbe farci riflettere su quanto siamo agli albori di questo campo.

Il settore si sta consolidando rapidamente. Microsoft ha comprato Hidden Layer. Checkpoint ha preso Lakera. Ma consolidamento non significa necessariamente maturità. Significa che i grandi player stanno comprando i piccoli prima di capire davvero se le soluzioni funzionano.

## Cosa mi porto a casa da questa giornata

Questi eventi sono importanti per me perché mi tirano fuori dalla mia bolla professionale. È facile pensare di avere tutto sotto controllo quando lavori nel tuo dominio specifico. Sai quali sono le best practice, quali tool usare, come affrontare i problemi comuni.

Ma poi ascolti chi lavora in domini diversi, con vincoli diversi, con problemi diversi, e ti rendi conto di quanto sia vasto il campo della sicurezza. E di quanto sia importante continuare a imparare, a mettere in discussione le proprie certezze, a riconoscere i limiti di quello che sai.

Dal talk sulla sicurezza industriale mi porto a casa l'idea che la sicurezza non è solo tecnologia, ma anche comprensione profonda del contesto operativo. Non puoi applicare soluzioni generiche senza capire i vincoli, la storia, le ragioni per cui le cose sono come sono.

Dal talk sulla sicurezza degli LLM mi porto a casa un sano scetticismo verso le soluzioni vendute come definitive. E la consapevolezza che con l'ai stiamo entrando in territorio inesplorato dove le vecchie regole non funzionano più ma quelle nuove non le abbiamo ancora capite.

## Perché è importante continuare a esporsi a prospettive diverse

C'è una ragione per cui continuo a seguire questi eventi anche quando sono fuori dalla mia area di comfort tecnico. Non è solo per imparare nuove tecniche o tool specifici, anche se quello è un beneficio. È per mantenere una postura mentale aperta e critica.

È facile diventare dogmatici nel proprio campo. Convincersi di avere capito come funzionano le cose. Smettere di fare domande. E quando smetti di fare domande, smetti di crescere professionalmente.

Ascoltare talk su domini che conosci poco ti costringe a fare domande. Ti ricorda che la tua expertise ha confini. Ti espone a modi diversi di pensare ai problemi. E spesso le intuizioni più interessanti vengono proprio dall'intersezione tra domini diversi.

Forse il pattern che unisce entrambi i talk di ieri è questo: la sicurezza è sempre più complessa di quanto pensiamo. Le soluzioni semplici raramente funzionano. E chiunque ti dica di avere la risposta definitiva probabilmente non ha capito bene la domanda.

Questo non significa arrendersi o essere fatalistici. Significa essere realistici, umili, pronti a imparare. Significa costruire sicurezza con layers multipli, riconoscendo che ogni layer ha limiti. Significa monitorare, iterare, migliorare continuamente.

È un approccio più faticoso che comprare una soluzione chiavi in mano e pensare di aver risolto il problema. Ma probabilmente è l'unico che funziona davvero nel lungo termine.

E forse è proprio per questo che eventi come il NoHat sono importanti. Non solo per il contenuto specifico dei talk, ma per l'attitudine che promuovono: curiosità, pensiero critico, consapevolezza dei propri limiti. Quella che, alla fine, è la vera postura di sicurezza.
