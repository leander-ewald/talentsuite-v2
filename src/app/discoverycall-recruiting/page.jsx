"use client";
import React, { useState } from "react";
import Link from "next/link";

// ============================================================
// ONBOARDING CALL TOOL – basierend auf SOP v2.0 Phase 2
// Stufe 1: Interessent füllt Kurzformular aus (öffentlich)
// Stufe 2: Robert füllt SOP-Checkliste während Call aus (intern)
// Ergebnis: Copy-Paste zu ClickUp
// ============================================================

const BRAND = "#023B5B";
const BL = "#E8F4FD";
const OK = "#10B981";
const WARN = "#F59E0B";
const CAL = "https://calendar.app.google/CQpLAnRw8tzQUEQz5";

// === BRANCHEN ===
const BRANCHEN = [
  "SHK (Sanitär, Heizung, Klima)", "Elektro & Elektrotechnik", "Metallbau & Maschinenbau",
  "Baugewerbe & Hochbau", "Pflege & Gesundheitswesen", "Gastronomie & Hotellerie",
  "Logistik & Transport", "Automotive & KFZ", "Industrie & Produktion",
  "Immobilien", "IT & Software", "Sonstige",
];

// === SOP SEKTIONEN (Phase 2: Onboarding Call) ===
const SOP = [
  {
    id: "unternehmen", icon: "🏢", label: "2.1 Unternehmen",
    fields: [
      { key: "konkurrenz", label: "Wer ist die Konkurrenz des Kunden?", type: "textarea", ph: "Konkurrenzbetriebe..." },
      { key: "usp", label: "USP – Was unterscheidet den Kunden?", type: "textarea", ph: "Alleinstellungsmerkmale..." },
    ],
  },
  {
    id: "stelle", icon: "📋", label: "2.2 Stelleninfo",
    hint: "Für bis zu 3 Stellen wiederholen. Jede Stelle erhält eigene Seite.",
    fields: [
      { key: "berufsbezeichnung", label: "Genaue Berufsbezeichnung", type: "text", ph: "z.B. Anlagenmechaniker SHK" },
      { key: "arbeitszeit", label: "Voll- oder Teilzeit?", type: "chips", opts: ["Vollzeit", "Teilzeit", "Beides möglich"] },
      { key: "standort", label: "Standort und Suchradius", type: "text", ph: "z.B. Iserlohn, 30km Radius" },
      { key: "besetzung", label: "Gewünschter Besetzungszeitpunkt", type: "chips", opts: ["Sofort", "In 2-4 Wochen", "In 1-3 Monaten", "Flexibel"] },
      { key: "aufgaben", label: "Aufgaben der Position", type: "textarea", ph: "Was macht der Mitarbeiter im Alltag?" },
      { key: "qualifikationen", label: "Qualifikationsanforderungen (Ausbildung, Erfahrung, Zertifikate, Führerschein, Softskills)", type: "textarea", ph: "Alle Anforderungen auflisten..." },
      { key: "quereinstieg", label: "Quereinstieg möglich?", type: "chips", opts: ["Ja", "Nein"] },
      { key: "quereinstiegDetail", label: "Wenn ja: Mindestqualifikationen?", type: "text", ph: "z.B. Handwerkliche Erfahrung, Führerschein B", cond: "quereinstieg", condVal: "Ja" },
      { key: "ausschluss", label: "Ausschlusskriterien (z.B. Sprache, Weiterbildung)", type: "textarea", ph: "Was MUSS der Bewerber mitbringen?" },
      { key: "idealkandidat", label: "Idealen Kandidaten beschreiben", type: "textarea", ph: "Wie sieht der Traumkandidat aus?" },
    ],
  },
  {
    id: "stelle2", icon: "📋", label: "2.2b Weitere Stelle", optional: true,
    fields: [
      { key: "beruf2", label: "Berufsbezeichnung (Stelle 2)", type: "text", ph: "z.B. Elektroniker" },
      { key: "zeit2", label: "Voll-/Teilzeit?", type: "chips", opts: ["Vollzeit", "Teilzeit", "Beides"] },
      { key: "ort2", label: "Standort & Radius", type: "text", ph: "z.B. Hemer, 25km" },
      { key: "aufg2", label: "Aufgaben", type: "textarea", ph: "Aufgaben der Position..." },
      { key: "qual2", label: "Qualifikationen", type: "textarea", ph: "Anforderungen..." },
      { key: "ideal2", label: "Idealer Kandidat", type: "textarea", ph: "Traumkandidat..." },
    ],
  },
  {
    id: "landingpage", icon: "🌐", label: "2.3 Landingpage",
    fields: [
      { key: "ansprache", label: "Du- oder Sie-Form?", type: "chips", opts: ["Du", "Sie"] },
      { key: "gendern", label: "Gendern?", type: "chips", opts: ["Ja", "Nein"] },
      { key: "logo", label: "Logo vorhanden?", type: "chips", opts: ["Ja – wird zugesendet", "Nein"] },
      { key: "ciFarben", label: "CI-Farben", type: "text", ph: "z.B. #023B5B, Dunkelblau + Weiß" },
      { key: "ciFont", label: "CI-Schriftart", type: "text", ph: "z.B. Montserrat, Open Sans" },
      { key: "firmaText", label: "Kurze Unternehmensbeschreibung", type: "textarea", ph: "2-3 Sätze über das Unternehmen..." },
      { key: "benefits", label: "Mitarbeiter-Benefits", type: "textarea", ph: "Firmenwagen, 30 Tage Urlaub, Weiterbildung..." },
      { key: "testimonials", label: "Testimonials vorhanden?", type: "chips", opts: ["Ja – Schrift", "Ja – Video", "Beides", "Nein"] },
      { key: "maBilder", label: "Bilder von Mitarbeitern?", type: "chips", opts: ["Ja", "Nein – Stock", "Nein – Vor-Ort planen"] },
      { key: "kontaktBewerber", label: "Ansprechpartner für Bewerber (Name, E-Mail, Tel)", type: "textarea", ph: "Name:\nE-Mail:\nTelefon:" },
    ],
  },
  {
    id: "creatives", icon: "🎨", label: "2.4 Creatives",
    fields: [
      { key: "material", label: "Foto-/Videomaterial vorhanden?", type: "chips", opts: ["Ja – Fotos", "Ja – Videos", "Beides", "Nein"] },
      { key: "keinMat", label: "Falls nein: Stockfootage oder Vor-Ort?", type: "chips", opts: ["Stockfootage", "Vor-Ort-Aufnahmen", "N/A"], cond: "material", condVal: "Nein" },
      { key: "zertifikate", label: "Zertifikate vorhanden? (FOCUS, DEKRA etc.)", type: "text", ph: "z.B. Top Arbeitgeber 2025" },
      { key: "logoHQ", label: "Logo in hoher Auflösung?", type: "chips", opts: ["Erhalten", "Angefragt", "Noch anfragen"] },
      { key: "ortCreatives", label: "Standort für Creatives", type: "text", ph: "z.B. Firmengebäude, Werkstatt" },
    ],
  },
  {
    id: "meta", icon: "📱", label: "2.5 Meta Ads",
    fields: [
      { key: "fbSeite", label: "Facebook-Seite vorhanden?", type: "chips", opts: ["Ja", "Nein – erstellen"] },
      { key: "fbZugriff", label: "Wer hat Facebook-Zugriffsrechte?", type: "text", ph: "Name + Rolle" },
      { key: "fbAnfrage", label: "Zugriffsanfrage TalentSuite", type: "chips", opts: ["Erledigt", "Ausstehend"] },
    ],
  },
  {
    id: "google", icon: "🔍", label: "2.6 Google Ads",
    hint: "Nur bei höher qualifizierten Jobs (Bachelor+).",
    fields: [
      { key: "gRelevant", label: "Google Ads relevant?", type: "chips", opts: ["Ja", "Nein"] },
      { key: "gKonto", label: "Google Ads Konto vorhanden?", type: "chips", opts: ["Ja", "Nein – erstellen"], cond: "gRelevant", condVal: "Ja" },
      { key: "gZugriff", label: "Zugriffsrechte?", type: "text", ph: "Name", cond: "gRelevant", condVal: "Ja" },
      { key: "gAnfrage", label: "Zugriffsanfrage", type: "chips", opts: ["Erledigt", "Ausstehend"], cond: "gRelevant", condVal: "Ja" },
    ],
  },
  {
    id: "bewerbungen", icon: "📨", label: "2.7 Bewerbungen",
    fields: [
      { key: "kontaktPerson", label: "Wer ruft Bewerber am selben/nächsten Tag an?", type: "text", ph: "Name + Telefon" },
      { key: "erstgespraechTS", label: "Erstgespräch durch TalentSuite?", type: "chips", opts: ["Ja (Upsell!)", "Nein – Kunde selbst"] },
    ],
  },
  {
    id: "abschluss", icon: "✅", label: "Abschluss & Nächste Schritte",
    fields: [
      { key: "paket", label: "Empfohlenes Paket", type: "chips", opts: ["Starter (ab 990€)", "Professional (ab 1.490€)", "Premium (ab 2.490€)", "Enterprise"] },
      { key: "laufzeit", label: "Laufzeit", type: "chips", opts: ["1 Monat", "3 Monate", "6 Monate", "12 Monate"] },
      { key: "start", label: "Gewünschtes Startdatum", type: "text", ph: "z.B. 01.03.2026" },
      { key: "next", label: "Nächste Schritte", type: "textarea", ph: "Angebot senden, Zugänge anfragen..." },
      { key: "notizen", label: "Sonstige Notizen", type: "textarea", ph: "Alles was noch wichtig ist..." },
      { key: "bewertung", label: "Lead-Bewertung", type: "chips", opts: ["🔥 Hot", "🟡 Warm", "🔵 Kalt", "❌ Kein Fit"] },
    ],
  },
];

// ============================================================
// STUFE 1: ÖFFENTLICHES KURZFORMULAR
// ============================================================
function LeadForm({ onDone }) {
  const [step, setStep] = useState(0);
  const [d, setD] = useState({ firma: "", name: "", email: "", tel: "", branche: "", mitarbeiter: "", stellen: "", herausforderungen: [], zeitrahmen: "", anmerkung: "" });
  const u = (k, v) => setD((p) => ({ ...p, [k]: v }));
  const tog = (k, v) => setD((p) => ({ ...p, [k]: p[k].includes(v) ? p[k].filter((x) => x !== v) : [...p[k], v] }));

  const HERAUSF = ["Zu wenig Bewerbungen", "Falsche/unqualifizierte Bewerber", "Bewerber springen ab", "Stellenanzeigen bringen nichts", "Keine Zeit für Recruiting", "Hohe Fluktuation", "Konkurrenz zahlt mehr", "Kein Employer Branding"];
  const ZEIT = ["Sofort", "In 2-4 Wochen", "In 1-3 Monaten", "Erstmal informieren"];
  const MA = ["1-10", "11-25", "26-50", "51-100", "100+"];
  const ST = ["1-2", "3-5", "6-10", "10+"];

  const steps = [
    { t: "Über Sie", sub: "Damit wir uns optimal vorbereiten können", icon: "👤", ok: d.firma && d.name && d.email,
      c: (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Inp l="Firmenname *" v={d.firma} set={(v) => u("firma", v)} ph="z.B. Müller Heizungsbau GmbH" />
          <Inp l="Ihr Name *" v={d.name} set={(v) => u("name", v)} ph="z.B. Thomas Müller" />
          <Inp l="E-Mail *" v={d.email} set={(v) => u("email", v)} ph="z.B. t.mueller@firma.de" />
          <Inp l="Telefon" v={d.tel} set={(v) => u("tel", v)} ph="z.B. 0171 1234567" />
        </div>
      ),
    },
    { t: "Branche & Größe", sub: "Hilft uns bei der Vorbereitung", icon: "🏢", ok: d.branche && d.mitarbeiter && d.stellen,
      c: (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <ChipGroup l="Branche *" opts={BRANCHEN} val={d.branche} set={(v) => u("branche", v)} />
          <ChipGroup l="Mitarbeiteranzahl *" opts={MA} val={d.mitarbeiter} set={(v) => u("mitarbeiter", v)} />
          <ChipGroup l="Aktuell offene Stellen *" opts={ST} val={d.stellen} set={(v) => u("stellen", v)} />
        </div>
      ),
    },
    { t: "Ihre Situation", sub: "Was sind Ihre Recruiting-Herausforderungen?", icon: "🎯", ok: d.herausforderungen.length > 0,
      c: (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label style={lbl}>Größte Herausforderungen (mehrere möglich) *</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {HERAUSF.map((h) => <Chip key={h} t={h} on={d.herausforderungen.includes(h)} click={() => tog("herausforderungen", h)} />)}
            </div>
          </div>
          <ChipGroup l="Wann sollen Stellen besetzt werden? *" opts={ZEIT} val={d.zeitrahmen} set={(v) => u("zeitrahmen", v)} />
          <div>
            <label style={lbl}>Anmerkungen (optional)</label>
            <textarea value={d.anmerkung} onChange={(e) => u("anmerkung", e.target.value)} placeholder="Bestimmte Positionen, Wünsche..." rows={3} style={ta} />
          </div>
        </div>
      ),
    },
  ];

  const s = steps[step];
  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
        {steps.map((_, i) => <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= step ? BRAND : "#e0e0e0", transition: "all .3s" }} />)}
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
          <span style={{ fontSize: 22 }}>{s.icon}</span>
          <span style={{ fontSize: 11, color: "#999", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Schritt {step + 1} / {steps.length}</span>
        </div>
        <h2 style={{ fontSize: 21, fontWeight: 700, color: BRAND, margin: "4px 0 2px" }}>{s.t}</h2>
        <p style={{ fontSize: 13, color: "#777", margin: 0 }}>{s.sub}</p>
      </div>
      {s.c}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, paddingTop: 18, borderTop: "1px solid #eee" }}>
        <button onClick={() => setStep((x) => x - 1)} disabled={step === 0} style={{ ...navBtn, border: `1.5px solid ${BRAND}`, background: "#fff", color: BRAND, opacity: step === 0 ? 0.3 : 1, cursor: step === 0 ? "not-allowed" : "pointer" }}>← Zurück</button>
        {step < steps.length - 1 ? (
          <button onClick={() => setStep((x) => x + 1)} disabled={!s.ok} style={{ ...navBtn, border: "none", background: s.ok ? BRAND : "#ccc", color: "#fff", cursor: s.ok ? "pointer" : "not-allowed" }}>Weiter →</button>
        ) : (
          <button onClick={() => onDone(d)} disabled={!s.ok} style={{ ...navBtn, border: "none", background: s.ok ? OK : "#ccc", color: "#fff", cursor: s.ok ? "pointer" : "not-allowed", fontWeight: 700 }}>✓ Absenden & Termin buchen</button>
        )}
      </div>
    </div>
  );
}

// ============================================================
// STUFE 2: INTERNES SOP-TOOL
// ============================================================
function SopTool({ lead }) {
  const [active, setActive] = useState(SOP[0].id);
  const [d, setD] = useState({});
  const [skip, setSkip] = useState({});
  const [copied, setCopied] = useState(false);
  const u = (k, v) => setD((p) => ({ ...p, [k]: v }));

  const prog = (sec) => {
    const vis = sec.fields.filter((f) => !f.cond || d[f.cond] === f.condVal);
    const fill = vis.filter((f) => d[f.key] && d[f.key] !== "");
    return { f: fill.length, t: vis.length };
  };

  const genText = () => {
    let t = `📋 ONBOARDING CALL – ${lead?.firma || "N/A"}\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nDatum: ${new Date().toLocaleDateString("de-DE")}\n\n`;
    // Lead data first
    if (lead) {
      t += `👤 KONTAKT (vom Interessenten)\n────────────────────────\n`;
      t += `Firma: ${lead.firma}\nName: ${lead.name}\nE-Mail: ${lead.email}\nTelefon: ${lead.tel || "-"}\n`;
      t += `Branche: ${lead.branche}\nMitarbeiter: ${lead.mitarbeiter}\nOffene Stellen: ${lead.stellen}\n`;
      t += `Herausforderungen: ${lead.herausforderungen?.join(", ")}\nZeitrahmen: ${lead.zeitrahmen}\n`;
      if (lead.anmerkung) t += `Anmerkungen: ${lead.anmerkung}\n`;
      t += `\n`;
    }
    SOP.forEach((sec) => {
      if (skip[sec.id]) return;
      const hasData = sec.fields.some((f) => d[f.key] && d[f.key] !== "");
      if (!hasData) return;
      t += `${sec.icon} ${sec.label.toUpperCase()}\n────────────────────────\n`;
      sec.fields.forEach((f) => {
        if (f.cond && d[f.cond] !== f.condVal) return;
        if (d[f.key] && d[f.key] !== "") t += `${f.label}: ${d[f.key]}\n`;
      });
      t += `\n`;
    });
    return t;
  };

  const copy = () => { navigator.clipboard.writeText(genText()); setCopied(true); setTimeout(() => setCopied(false), 3000); };
  const sec = SOP.find((s) => s.id === active);
  const idx = SOP.findIndex((s) => s.id === active);

  return (
    <div style={{ display: "flex", gap: 20 }}>
      {/* Sidebar */}
      <div style={{ width: 240, flexShrink: 0 }}>
        <div style={{ background: "#fff", borderRadius: 12, padding: 8, boxShadow: "0 1px 8px rgba(0,0,0,.06)", position: "sticky", top: 20 }}>
          {/* Lead Summary */}
          {lead && (
            <div style={{ background: BL, borderRadius: 8, padding: "10px 12px", marginBottom: 8, fontSize: 12, lineHeight: 1.5 }}>
              <strong style={{ color: BRAND }}>{lead.firma}</strong><br />
              {lead.name} · {lead.branche}<br />
              {lead.mitarbeiter} MA · {lead.stellen} Stellen
            </div>
          )}
          {SOP.map((s) => {
            const p = prog(s);
            const act = active === s.id;
            const sk = skip[s.id];
            return (
              <button key={s.id} onClick={() => setActive(s.id)} style={{
                display: "flex", alignItems: "center", gap: 8, width: "100%",
                padding: "9px 10px", borderRadius: 8, border: "none",
                background: act ? BL : "transparent", cursor: "pointer", textAlign: "left", marginBottom: 1, opacity: sk ? 0.4 : 1,
              }}>
                <span style={{ fontSize: 15 }}>{s.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: act ? 700 : 500, color: act ? BRAND : "#333" }}>{s.label}</div>
                  <div style={{ fontSize: 10, color: p.f === p.t && p.t > 0 ? OK : "#bbb" }}>{sk ? "Skip" : `${p.f}/${p.t}`}</div>
                </div>
                {p.f === p.t && p.t > 0 && !sk && <span style={{ color: OK, fontSize: 13 }}>✓</span>}
              </button>
            );
          })}
          <div style={{ padding: "10px 6px 4px", borderTop: "1px solid #eee", marginTop: 6 }}>
            <button onClick={copy} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "none", background: copied ? OK : BRAND, color: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
              {copied ? "✓ Kopiert!" : "📋 ClickUp-Task kopieren"}
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1 }}>
        <div style={{ background: "#fff", borderRadius: 14, padding: "24px 28px", boxShadow: "0 1px 8px rgba(0,0,0,.06)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 26 }}>{sec.icon}</span>
              <div>
                <h2 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: BRAND }}>{sec.label}</h2>
                {sec.hint && <p style={{ margin: "3px 0 0", fontSize: 11, color: WARN, fontWeight: 500 }}>⚠️ {sec.hint}</p>}
              </div>
            </div>
            {sec.optional && (
              <button onClick={() => setSkip((p) => ({ ...p, [active]: !p[active] }))} style={{ padding: "5px 12px", borderRadius: 6, fontSize: 11, border: "1px solid #ddd", background: skip[active] ? WARN : "#f5f5f5", color: skip[active] ? "#fff" : "#666", cursor: "pointer" }}>
                {skip[active] ? "Aktivieren" : "Überspringen"}
              </button>
            )}
          </div>

          {!skip[active] ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {sec.fields.map((f) => {
                if (f.cond && d[f.cond] !== f.condVal) return null;
                if (f.type === "text") return <Inp key={f.key} l={f.label} v={d[f.key] || ""} set={(v) => u(f.key, v)} ph={f.ph} filled={!!d[f.key]} />;
                if (f.type === "textarea") return (
                  <div key={f.key}>
                    <label style={lbl}>{f.label}</label>
                    <textarea value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} rows={3} style={{ ...ta, borderColor: d[f.key] ? BRAND : "#ddd", background: d[f.key] ? "#fafcff" : "#fff" }} />
                  </div>
                );
                if (f.type === "chips") return <ChipGroup key={f.key} l={f.label} opts={f.opts} val={d[f.key] || ""} set={(v) => u(f.key, d[f.key] === v ? "" : v)} />;
                return null;
              })}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "36px 0", color: "#bbb" }}>
              <p style={{ fontSize: 13 }}>Übersprungen</p>
              <button onClick={() => setSkip((p) => ({ ...p, [active]: false }))} style={{ padding: "7px 18px", borderRadius: 6, border: "1px solid #ddd", background: "#fff", cursor: "pointer", fontSize: 12 }}>Doch ausfüllen</button>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, paddingTop: 16, borderTop: "1px solid #eee" }}>
            <button onClick={() => idx > 0 && setActive(SOP[idx - 1].id)} disabled={idx === 0} style={{ ...navBtn, border: `1.5px solid ${BRAND}`, background: "#fff", color: BRAND, opacity: idx === 0 ? 0.3 : 1, cursor: idx === 0 ? "not-allowed" : "pointer" }}>← Zurück</button>
            {idx < SOP.length - 1 ? (
              <button onClick={() => setActive(SOP[idx + 1].id)} style={{ ...navBtn, border: "none", background: BRAND, color: "#fff", cursor: "pointer" }}>Weiter →</button>
            ) : (
              <button onClick={copy} style={{ ...navBtn, border: "none", background: copied ? OK : BRAND, color: "#fff", cursor: "pointer", fontWeight: 700 }}>{copied ? "✓ Kopiert!" : "📋 ClickUp-Task kopieren"}</button>
            )}
          </div>
        </div>
        <details style={{ marginTop: 14 }}>
          <summary style={{ fontSize: 12, color: "#aaa", cursor: "pointer" }}>📄 Vorschau ClickUp-Text</summary>
          <pre style={{ background: "#1a1a2e", color: "#e0e0e0", padding: 18, borderRadius: 10, fontSize: 11, lineHeight: 1.6, whiteSpace: "pre-wrap", maxHeight: 360, overflow: "auto", marginTop: 6 }}>{genText()}</pre>
        </details>
      </div>
    </div>
  );
}

// ============================================================
// ERFOLGSSEITE
// ============================================================
function Success({ data }) {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <div style={{ fontSize: 56, marginBottom: 12 }}>🎉</div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: BRAND, marginBottom: 6 }}>Vielen Dank, {data.name?.split(" ")[0]}!</h2>
      <p style={{ fontSize: 15, color: "#555", maxWidth: 460, margin: "0 auto 28px", lineHeight: 1.6 }}>Wir haben Ihre Angaben erhalten und bereiten uns optimal auf Ihr Erstgespräch vor.</p>
      <a href={CAL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "15px 38px", background: BRAND, color: "#fff", borderRadius: 10, fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 14px rgba(2,59,91,0.3)" }}>
        🗓 Jetzt Termin buchen
      </a>
      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 16 }}>
        {["✓ 100% kostenlos", "✓ Unverbindlich", "✓ 15-20 Min."].map((t) => <span key={t} style={{ fontSize: 12, color: "#999" }}>{t}</span>)}
      </div>
      <div style={{ marginTop: 40, maxWidth: 420, margin: "40px auto 0", textAlign: "left" }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: BRAND, marginBottom: 12, textAlign: "center" }}>Das sagen unsere Kunden:</h3>
        {[
          { e: "🚚", f: "Spedition Huckschlag", r: "150+ Lagerlogistiker & 50+ LKW-Fahrer", l: "https://youtu.be/X6YgtmkyGLo" },
          { e: "🏒", f: "Iserlohn Roosters", r: "70 Bewerbungen, 30 eingestellt", l: "https://youtu.be/uUfwkiSFnTs" },
          { e: "🏠", f: "Specht & Partner", r: "5 neue Immobilienmakler", l: "https://youtu.be/e_trKcpqhYA" },
        ].map((c) => (
          <a key={c.f} href={c.l} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block", marginBottom: 8 }}>
            <div style={{ background: "#f8fafb", borderRadius: 8, padding: "10px 14px", borderLeft: `3px solid ${BRAND}` }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>{c.e} {c.f}</span>
                <span style={{ fontSize: 10, color: BRAND }}>▶ Video</span>
              </div>
              <div style={{ fontSize: 12, color: "#555", marginTop: 1 }}>{c.r}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// SHARED COMPONENTS
// ============================================================
const lbl = { fontSize: 13, fontWeight: 600, color: "#333", marginBottom: 6, display: "block" };
const ta = { width: "100%", padding: "10px 14px", borderRadius: 8, border: "1.5px solid #ddd", fontSize: 13, fontFamily: "inherit", outline: "none", resize: "vertical", boxSizing: "border-box" };
const navBtn = { padding: "10px 24px", borderRadius: 8, fontSize: 13, fontWeight: 600 };

function Inp({ l, v, set, ph, filled }) {
  return (
    <div>
      {l && <label style={lbl}>{l}</label>}
      <input type="text" value={v || ""} onChange={(e) => set(e.target.value)} placeholder={ph}
        style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${filled || v ? BRAND : "#ddd"}`, fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: filled || v ? "#fafcff" : "#fff" }}
      />
    </div>
  );
}

function Chip({ t, on, click }) {
  return (
    <button onClick={click} style={{
      padding: "7px 14px", borderRadius: 20, border: on ? `2px solid ${BRAND}` : "1.5px solid #ddd",
      background: on ? BL : "#fff", color: on ? BRAND : "#555", fontSize: 12, fontWeight: on ? 600 : 400, cursor: "pointer", transition: "all .15s",
    }}>
      {on && "✓ "}{t}
    </button>
  );
}

function ChipGroup({ l, opts, val, set }) {
  return (
    <div>
      <label style={lbl}>{l}</label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {opts.map((o) => <Chip key={o} t={o} on={val === o} click={() => set(o)} />)}
      </div>
    </div>
  );
}

// ============================================================
// HAUPTSEITE
// ============================================================
export default function DiscoveryCallPage() {
  const [mode, setMode] = useState("lead"); // lead | success | internal
  const [lead, setLead] = useState(null);
  const [pw, setPw] = useState("");
  const [auth, setAuth] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7f9", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Header */}
      <div style={{ background: BRAND, padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "none", fontSize: 20, fontWeight: 800 }}>TalentSuite</Link>
        {auth && <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>🔒 Onboarding Call Tool · SOP v2.0</span>}
      </div>

      {/* PUBLIC LEAD FORM */}
      {mode === "lead" && !auth && (
        <div style={{ maxWidth: 580, margin: "0 auto", padding: "28px 16px 60px" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ display: "inline-block", background: BL, color: BRAND, fontSize: 11, fontWeight: 600, padding: "4px 14px", borderRadius: 20, marginBottom: 10, textTransform: "uppercase", letterSpacing: .5 }}>Kostenlos & Unverbindlich</div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: BRAND, margin: "0 0 6px", lineHeight: 1.2 }}>Ihre kostenlose Recruiting-Potenzialanalyse</h1>
            <p style={{ fontSize: 14, color: "#666", margin: 0 }}>2 Minuten ausfüllen – wir bereiten Ihr Erstgespräch optimal vor.</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 22, flexWrap: "wrap" }}>
            {["✓ 100% kostenlos", "✓ Unverbindlich", "✓ Ergebnisse in 48h"].map((t) => <span key={t} style={{ fontSize: 11, color: "#999" }}>{t}</span>)}
          </div>
          <div style={{ background: "#fff", borderRadius: 14, padding: "24px 22px", boxShadow: "0 2px 14px rgba(0,0,0,.06)" }}>
            <LeadForm onDone={(d) => { setLead(d); setMode("success"); }} />
          </div>
          <div style={{ marginTop: 28 }}>
            {[
              { e: "🚚", f: "Spedition Huckschlag", r: "150+ Lagerlogistiker & 50+ LKW-Fahrer", l: "https://youtu.be/X6YgtmkyGLo" },
              { e: "🏒", f: "Iserlohn Roosters", r: "70 Bewerbungen, 30 eingestellt", l: "https://youtu.be/uUfwkiSFnTs" },
              { e: "🏠", f: "Specht & Partner", r: "5 neue Immobilienmakler", l: "https://youtu.be/e_trKcpqhYA" },
            ].map((c) => (
              <a key={c.f} href={c.l} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block", marginBottom: 8 }}>
                <div style={{ background: "#f8fafb", borderRadius: 8, padding: "10px 14px", borderLeft: `3px solid ${BRAND}` }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>{c.e} {c.f}</span>
                  <span style={{ fontSize: 12, color: "#555", marginLeft: 8 }}>{c.r}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* SUCCESS PAGE */}
      {mode === "success" && !auth && (
        <div style={{ maxWidth: 580, margin: "0 auto", padding: "28px 16px 60px" }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: "24px 22px", boxShadow: "0 2px 14px rgba(0,0,0,.06)" }}>
            <Success data={lead} />
          </div>
        </div>
      )}

      {/* INTERNAL SOP TOOL */}
      {auth && (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px 60px" }}>
          <SopTool lead={lead} />
        </div>
      )}

      {/* Hidden Internal Access */}
      <div style={{ textAlign: "center", padding: "16px 0 30px" }}>
        {!auth ? (
          <>
            <button onClick={() => setMode(mode === "pw" ? "lead" : "pw")} style={{ background: "none", border: "none", color: "#ddd", fontSize: 10, cursor: "pointer" }}>🔒</button>
            {mode === "pw" && (
              <div style={{ marginTop: 8, display: "flex", gap: 6, justifyContent: "center" }}>
                <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} onKeyDown={(e) => e.key === "Enter" && pw === "talentsuite2026" && setAuth(true)} placeholder="Passwort" style={{ padding: "7px 12px", borderRadius: 6, border: "1px solid #ddd", fontSize: 12, width: 140 }} />
                <button onClick={() => pw === "talentsuite2026" && setAuth(true)} style={{ padding: "7px 14px", borderRadius: 6, border: "none", background: BRAND, color: "#fff", fontSize: 12, cursor: "pointer" }}>→</button>
              </div>
            )}
          </>
        ) : (
          <button onClick={() => { setAuth(false); setMode("lead"); }} style={{ background: "none", border: "none", color: "#aaa", fontSize: 11, cursor: "pointer" }}>← Zurück zur öffentlichen Ansicht</button>
        )}
        <div style={{ color: "#ccc", fontSize: 10, marginTop: 8 }}>
          TalentSuite — Engel & Mühlhof GbR · <Link href="/datenschutz" style={{ color: "#ccc" }}>Datenschutz</Link> · <Link href="/impressum" style={{ color: "#ccc" }}>Impressum</Link>
        </div>
      </div>
    </div>
  );
}
