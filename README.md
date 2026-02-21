# TalentSuite Leadmagnet Pages — SEO-Optimiert

## Übersicht: 6 neue + 1 upgraded Seiten

| Seite | Route | Target Keywords | Funnel |
|-------|-------|-----------------|--------|
| Vakanzkosten-Rechner (SEO Upgrade) | `/kostenrechner` | Vakanzkosten berechnen, Kosten unbesetzte Stelle | BOFU |
| Arbeitgeber-Schnellcheck | `/arbeitgeber-schnellcheck` | Employer Branding KMU, Arbeitgeberattraktivität | MOFU |
| Branchen-Recruiting-Report | `/branchen-recruiting-report` | Fachkräftemangel Handwerk, Pflegekräfte finden | TOFU/MOFU |
| Stellenanzeigen-Generator | `/stellenanzeigen-generator` | Stellenanzeige schreiben (3-6k/mo!) | BOFU |
| Mitarbeiter-Bindungs-Toolkit | `/mitarbeiter-bindung` | Mitarbeiterbindung Maßnahmen, Fluktuation senken | TOFU |
| Gehalts- & Benefits-Benchmark | `/gehalts-benchmark` | Gehalt Handwerk, Benefits Arbeitgeber | MOFU |
| Recruiting-Analyse | `/recruiting-analyse` | Recruiting Agentur Handwerk, Fachkräfte finden | BOFU |

---

## Installation

### 1. Seiten-Ordner kopieren

Kopiere folgende Ordner nach `src/app/`:

```
src/app/
├── arbeitgeber-schnellcheck/
│   ├── layout.js          ← SEO Metadata (Server Component)
│   └── page.jsx           ← Interaktiver Content (Client Component)
├── branchen-recruiting-report/
│   ├── layout.js
│   └── page.jsx
├── stellenanzeigen-generator/
│   ├── layout.js
│   └── page.jsx
├── mitarbeiter-bindung/
│   ├── layout.js
│   └── page.jsx
├── gehalts-benchmark/
│   ├── layout.js
│   └── page.jsx
├── recruiting-analyse/
│   ├── layout.js
│   └── page.jsx
├── kostenrechner/
│   ├── layout.js          ← NEU: SEO Metadata für bestehende Seite
│   └── page.jsx           ← Bestehende Seite (unverändert)
```

### 2. API Route ersetzen

Ersetze `src/app/api/leadmagnet-capture/route.js` mit der neuen Version.
Die neue Version unterstützt alle Sources:
- `schnellcheck`, `branchen-report`, `stellenanzeigen-generator`
- `mitarbeiter-bindung`, `gehalts-benchmark`, `recruiting-analyse`
- Alle bestehenden: `kostenrechner`, `branchenreport`, `empfehlung`

### 3. Sitemap ersetzen

Ersetze `src/app/sitemap.js` mit der neuen Version (enthält alle neuen Routen).

### 4. NICHT nötig:

- Keine neuen npm packages
- Keine neuen API Keys
- Keine Änderungen an layout.js oder anderen bestehenden Dateien
- Kostenrechner page.jsx bleibt unverändert (nur neues layout.js daneben)

---

## SEO-Architektur

### Warum layout.js statt `<Head>`?

Das Root-Layout (`src/app/layout.js`) ist `"use client"`, wodurch `export const metadata` dort nicht funktioniert. Die Lösung:

- **Jede Seite bekommt ein eigenes `layout.js`** (Server Component)
- Dieses exportiert `metadata` mit Title, Description, OG Tags, Canonical
- Enthält JSON-LD Schema.org Markup als `<script>`
- Die `page.jsx` bleibt `"use client"` für Interaktivität

### Was jedes layout.js enthält:

1. **`export const metadata`** — wird von Next.js serverseitig gerendert
   - `title` (60-70 Zeichen, Keyword vorne)
   - `description` (150-160 Zeichen, CTA-orientiert)
   - `keywords` (relevante Suchbegriffe)
   - `alternates.canonical` (eindeutige URL)
   - `openGraph` (Facebook/LinkedIn Sharing)
   - `twitter` (Twitter Cards)

2. **Schema.org JSON-LD** — für Rich Snippets in Google
   - `WebApplication` für interaktive Tools
   - `Article` für Reports
   - `HowTo` für Toolkit/Anleitungen
   - `Service` für Consulting-Angebote

### Sitemap

Die neue `sitemap.js` enthält alle Routen mit:
- Korrekte `priority` (0.9 für BOFU, 0.8 für MOFU, 0.7 für TOFU)
- `changeFrequency: "monthly"` für Leadmagnets

---

## Alle Seiten sind sofort indexierbar weil:

✅ Server-Side Rendered Metadata (nicht client-side `<Head>`)
✅ Canonical URLs gesetzt
✅ In Sitemap eingetragen
✅ Schema.org Structured Data
✅ SEO-Content auf jeder Seite (H1, H2, Fließtext)
✅ robots.txt erlaubt Indexierung
✅ Open Graph Tags für Social Sharing

### Nach dem Deploy:

1. Google Search Console öffnen
2. Für jede neue URL: "URL-Prüfung" → URL eingeben → "Indexierung beantragen"
3. Aktualisierte Sitemap einreichen unter "Sitemaps" → `https://talentsuite.io/sitemap.xml`

---

## ClickUp Integration

Alle Seiten senden Leads an denselben Endpunkt (`/api/leadmagnet-capture`).
Jeder Lead wird als ClickUp-Task erstellt mit:

- **Source-Label** (Emoji + Name)
- **Kontaktdaten** (Name, E-Mail, Telefon, Firma, Branche)
- **Source-spezifische Daten** (Score, gewählte Branche, Position, etc.)
- **Priorität**: High für Schnellcheck/Stellenanzeigen/Analyse, Normal für Rest
- **Tags**: `leadmagnet` + Source-Name
- **Status**: `to do`

---

## Seiten-Highlights

### Arbeitgeber-Schnellcheck
- 10 Ja/Nein-Fragen mit gewichteten Scores
- Traffic-Light-Ergebnis (🔴🟡🟢)
- Top-3-Hebel werden automatisch identifiziert
- Lead-Gate vor dem Ergebnis

### Stellenanzeigen-Generator (höchstes SEO-Potenzial!)
- Branche → Position → Benefits → generierte Anzeige
- "Kopieren"-Button
- Upsell: "Diese Anzeige bringt 5-10 Bewerbungen. Social Recruiting bringt 3-5x mehr."

### Branchen-Recruiting-Report
- 6 Branchen mit eigenen Daten, Stats, Pain Points
- Recruiting-Benchmarks (CPA, Conversion)
- SEO-optimierte Inhalte oben und unten

### Gehalts-Benchmark
- Visuelle Salary-Bars (Min/Median/Top)
- Top-5-Benefits pro Branche
- Branchen-Insight als Callout
