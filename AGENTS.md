# Guida per AI Coding Agents

Questo documento fornisce linee guida per gli AI coding agents che lavorano su questo sito Jekyll.

## Struttura del progetto

- `_posts/`: Articoli del blog
- `_layouts/`: Template HTML
- `_includes/`: Componenti riutilizzabili
- `assets/img/`: Immagini originali
- `assets/generated/`: Immagini responsive generate automaticamente
- `css/`: Fogli di stile

## Come scrivere un post perfetto

### Frontmatter obbligatorio

Ogni post deve iniziare con il frontmatter YAML:

```yaml
---
layout: post
title: "Il titolo del post"
subtitle: "piccolo excerpt del post"
date: YYYY-MM-DD
categories: categoria1 categoria2
---
```

### Tono e stile di scrittura

I post devono sembrare scritti da un essere umano, con naturalezza e autenticità:

**Caratteristiche essenziali:**
- Scrivi con un tocco di sensibilità e umanità
- Mostra dubbi quando è appropriato (es. "forse", "probabilmente", "mi chiedo se")
- Usa un tono conversazionale, non formale o accademico
- Evita strutture troppo rigide o schematiche
- Non usare dash (—) per separare concetti, usa la punteggiatura normale
- Mantieni un ritmo naturale, varia la lunghezza delle frasi

**Maiuscole:**
- Maiuscola solo all'inizio di una frase (dopo il punto)
- Maiuscola all'inizio dei titoli
- Niente maiuscole random per enfatizzare concetti
- Niente maiuscole su acronimi comuni già entrati nell'uso quotidiano (ai, ml, ux)

**Cosa evitare:**
- Liste puntate eccessive
- Strutture troppo schematiche tipo "Punto 1, Punto 2, Punto 3"
- Linguaggio troppo tecnico senza spiegazioni
- Tono da tutorial o manuale
- Frasi tutte della stessa lunghezza
- Paragrafi tutti della stessa lunghezza

**Esempi di tono corretto:**

❌ **No (troppo meccanico):**
```
L'Intelligenza Artificiale sta trasformando il nostro modo di lavorare.
Ecco tre punti chiave:
- Automazione dei processi
- Miglioramento dell'efficienza
- Riduzione degli errori
```

✅ **Sì (più umano):**
```
Ho notato che negli ultimi mesi l'intelligenza artificiale sta cambiando
davvero il modo in cui lavoriamo. Non parlo solo di automazione, anche se
quella c'è ed è evidente. Mi riferisco a qualcosa di più sottile: il modo
in cui prendiamo decisioni, come affrontiamo i problemi, persino come
comunichiamo con i colleghi.
```

### Struttura consigliata

Un buon post generalmente include:

1. **Introduzione personale**: inizia con un'esperienza, un'osservazione, una domanda
2. **Sviluppo del tema**: esplora l'argomento in modo naturale, senza forzature
3. **Riflessioni e dubbi**: non avere paura di mostrare incertezze o domande aperte
4. **Conclusione morbida**: evita i riassunti troppo didascalici, lascia spazio alla riflessione

### Immagini responsive

Per inserire immagini nei post, usa il tag `picture`:

```liquid
{% picture default nome-immagine.jpg alt="Descrizione dell'immagine" %}
```

**Come funziona:**
- Metti l'immagine originale in `assets/img/`
- Il plugin genererà automaticamente versioni responsive in `assets/generated/`
- Verranno create versioni WebP e in diverse dimensioni (400px, 600px, 800px, 1000px)
- Il lazy loading è abilitato automaticamente
- La classe CSS `responsive-image` viene applicata automaticamente

**Esempio completo:**
```liquid
{% picture default blog/ai-ethics.jpg alt="Una riflessione sull'etica dell'intelligenza artificiale" %}
```

### Link e formattazione

- **Link esterni**: `[testo del link](https://example.com)`
- **Link interni**: `[altro post]({% post_url 2025-10-15-titolo-post %})`
- **Enfasi leggera**: `*corsivo*` per sottolineare dolcemente
- **Enfasi forte**: `**grassetto**` solo quando davvero necessario
- **Codice inline**: `` `codice` ``
- **Blocchi di codice**:
  ````markdown
  ```javascript
  const example = "codice";
  ```
  ````

### SEO e metadata

- L'`excerpt` nel frontmatter deve essere accattivante e descrittivo (150-160 caratteri)
- Usa le categorie in modo coerente con gli altri post
- Il titolo deve essere chiaro e invitante, non clickbait
- Scegli nomi file descrittivi: `2025-10-15-titolo-descrittivo.md`

### Esempi di naming

✅ **Corretto:**
```
_posts/2025-10-15-the-flattery-algorithm-ai-digital-isolation.md
```

❌ **Evita:**
```
_posts/post1.md
_posts/2025-10-15-p.md
_posts/nuovo-post-123.md
```

## Plugin disponibili

### jekyll_picture_tag
Genera immagini responsive automaticamente. Configurato in `_config.yml`.

### liquid_reading_time
Calcola il tempo di lettura stimato. Usa `{{ content | reading_time }}` nei layout.

### jekyll-seo-tag
Genera automaticamente meta tag per SEO. Incluso nel layout `default`.

### jekyll-feed
Genera il feed RSS automaticamente.

### jekyll-sitemap
Genera la sitemap XML automaticamente.

## Build e test

### Sviluppo locale
```bash
bundle exec jekyll serve
```

Il sito sarà disponibile su `http://localhost:4000`

### Build produzione
```bash
bundle exec jekyll build
```

I file statici saranno generati in `_site/`

## Note importanti

- I post devono essere in `_posts/` con il formato `YYYY-MM-DD-titolo.md`
- Le immagini originali vanno in `assets/img/`
- Testa sempre in locale prima di committare
- Mantieni uno stile di scrittura coerente con gli altri post esistenti

## Checklist pre-commit

Prima di committare un nuovo post, verifica:

- [ ] Il frontmatter è completo e corretto
- [ ] Il tono è naturale e umano, non meccanico
- [ ] Non ci sono maiuscole inappropriate
- [ ] Non ci sono dash (—) usati impropriamente
- [ ] Le immagini usano il tag `{% picture %}` corretto
- [ ] I link funzionano
- [ ] Il post è stato testato in locale
- [ ] L'excerpt è descrittivo e accattivante
- [ ] Il nome del file segue la convenzione corretta
- [ ] Il contenuto riflette sensibilità e autenticità

Non fare commit né push, in modo che possa controllare il post di persona e provvedere manualmente a commit e push.
