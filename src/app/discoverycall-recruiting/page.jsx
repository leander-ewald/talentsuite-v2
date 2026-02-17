"use client";
import React, { useState } from "react";
import Head from "next/head";

// ============================================================
// ONBOARDING CALL TOOL – 100% INLINE STYLES
// globals.css sets: body bg #091622, color #fff, everything !important
// Only inline styles can reliably override this.
// ============================================================

const C = {
  brand: "#023B5B",
  brandLight: "#E8F4FD",
  white: "#ffffff",
  bg: "#f0f4f7",
  text: "#023B5B",
  textMid: "#4a7a94",
  border: "#cdd8e0",
  green: "#10B981",
  warn: "#F59E0B",
  red: "#ef4444",
};

const SOP = [
  {
    id: "unternehmen", icon: "🏢", label: "2.1 Unternehmen",
    fields: [
      { key: "firma", label: "Firmenname", type: "text", ph: "z.B. Müller Heizungsbau GmbH" },
      { key: "ansprechpartner", label: "Ansprechpartner", type: "text", ph: "z.B. Thomas Müller" },
      { key: "email", label: "E-Mail", type: "text", ph: "z.B. t.mueller@firma.de" },
      { key: "telefon", label: "Telefon", type: "text", ph: "z.B. 0171 1234567" },
      { key: "branche", label: "Branche", type: "chips", opts: ["SHK", "Elektro", "Metallbau", "Bau", "Pflege", "Gastronomie", "Logistik", "KFZ", "Industrie", "Immobilien", "IT", "Sonstige"] },
      { key: "mitarbeiter", label: "Mitarbeiteranzahl", type: "chips", opts: ["1–10", "11–25", "26–50", "51–100", "100+"] },
      { key: "konkurrenz", label: "Wer ist die Konkurrenz des Kunden?", type: "textarea", ph: "Konkurrenzbetriebe..." },
      { key: "usp", label: "USP – Was unterscheidet den Kunden?", type: "textarea", ph: "Alleinstellungsmerkmale..." },
    ],
  },
  {
    id: "stelle", icon: "📋", label: "2.2 Stelleninfo",
    hint: "Für bis zu 3 Stellen wiederholen.",
    fields: [
      { key: "berufsbezeichnung", label: "Genaue Berufsbezeichnung", type: "text", ph: "z.B. Anlagenmechaniker SHK" },
      { key: "arbeitszeit", label: "Voll- oder Teilzeit?", type: "chips", opts: ["Vollzeit", "Teilzeit", "Beides möglich"] },
      { key: "standort", label: "Standort und Suchradius", type: "text", ph: "z.B. Iserlohn, 30km Radius" },
      { key: "besetzung", label: "Besetzungszeitpunkt", type: "chips", opts: ["Sofort", "2–4 Wochen", "1–3 Monate", "Flexibel"] },
      { key: "aufgaben", label: "Aufgaben der Position", type: "textarea", ph: "Was macht der Mitarbeiter im Alltag?" },
      { key: "qualifikationen", label: "Qualifikationsanforderungen", type: "textarea", ph: "Ausbildung, Erfahrung, Zertifikate, Führerschein..." },
      { key: "quereinstieg", label: "Quereinstieg möglich?", type: "chips", opts: ["Ja", "Nein"] },
      { key: "quereinstiegDetail", label: "Mindestqualifikationen bei Quereinstieg", type: "text", ph: "z.B. Handwerkliche Erfahrung", cond: "quereinstieg", condVal: "Ja" },
      { key: "ausschluss", label: "Ausschlusskriterien", type: "textarea", ph: "Was MUSS der Bewerber mitbringen?" },
      { key: "idealkandidat", label: "Idealen Kandidaten beschreiben", type: "textarea", ph: "Traumkandidat..." },
    ],
  },
  {
    id: "stelle2", icon: "📋", label: "2.2b Weitere Stelle", optional: true,
    fields: [
      { key: "beruf2", label: "Berufsbezeichnung (Stelle 2)", type: "text", ph: "z.B. Elektroniker" },
      { key: "zeit2", label: "Voll-/Teilzeit?", type: "chips", opts: ["Vollzeit", "Teilzeit", "Beides"] },
      { key: "ort2", label: "Standort & Radius", type: "text", ph: "z.B. Hemer, 25km" },
      { key: "aufg2", label: "Aufgaben", type: "textarea", ph: "Aufgaben..." },
      { key: "qual2", label: "Qualifikationen", type: "textarea", ph: "Anforderungen..." },
    ],
  },
  {
    id: "landingpage", icon: "🌐", label: "2.3 Landingpage",
    fields: [
      { key: "ansprache", label: "Du- oder Sie-Form?", type: "chips", opts: ["Du", "Sie"] },
      { key: "gendern", label: "Gendern?", type: "chips", opts: ["Ja", "Nein"] },
      { key: "logo", label: "Logo vorhanden?", type: "chips", opts: ["Ja – wird zugesendet", "Nein"] },
      { key: "ciFarben", label: "CI-Farben", type: "text", ph: "z.B. #023B5B, Dunkelblau" },
      { key: "ciFont", label: "CI-Schriftart", type: "text", ph: "z.B. Montserrat" },
      { key: "firmaText", label: "Kurze Unternehmensbeschreibung", type: "textarea", ph: "2–3 Sätze..." },
      { key: "benefits", label: "Mitarbeiter-Benefits", type: "textarea", ph: "Firmenwagen, 30 Tage Urlaub..." },
      { key: "testimonials", label: "Testimonials vorhanden?", type: "chips", opts: ["Schrift", "Video", "Beides", "Nein"] },
      { key: "maBilder", label: "Bilder von Mitarbeitern?", type: "chips", opts: ["Ja", "Stock nutzen", "Vor-Ort planen"] },
      { key: "kontaktBewerber", label: "Ansprechpartner für Bewerber", type: "textarea", ph: "Name:\nE-Mail:\nTelefon:" },
    ],
  },
  {
    id: "creatives", icon: "🎨", label: "2.4 Creatives",
    fields: [
      { key: "material", label: "Foto-/Videomaterial vorhanden?", type: "chips", opts: ["Fotos", "Videos", "Beides", "Nein"] },
      { key: "keinMat", label: "Falls nein: Stockfootage oder Vor-Ort?", type: "chips", opts: ["Stockfootage", "Vor-Ort", "N/A"], cond: "material", condVal: "Nein" },
      { key: "zertifikate", label: "Zertifikate? (FOCUS, DEKRA etc.)", type: "text", ph: "z.B. Top Arbeitgeber 2025" },
      { key: "logoHQ", label: "Logo in hoher Auflösung?", type: "chips", opts: ["Erhalten", "Angefragt", "Noch anfragen"] },
      { key: "ortCreatives", label: "Standort für Creatives", type: "text", ph: "z.B. Firmengebäude" },
    ],
  },
  {
    id: "meta", icon: "📱", label: "2.5 Meta Ads",
    fields: [
      { key: "fbSeite", label: "Facebook-Seite vorhanden?", type: "chips", opts: ["Ja", "Nein – erstellen"] },
      { key: "fbZugriff", label: "Facebook-Zugriffsrechte?", type: "text", ph: "Name + Rolle" },
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
    id: "abschluss", icon: "✅", label: "Abschluss",
    fields: [
      { key: "paket", label: "Empfohlenes Paket", type: "chips", opts: ["Starter (ab 990€)", "Professional (1.490€)", "Premium (2.490€)", "Enterprise"] },
      { key: "laufzeit", label: "Laufzeit", type: "chips", opts: ["1 Monat", "3 Monate", "6 Monate", "12 Monate"] },
      { key: "start", label: "Startdatum", type: "text", ph: "z.B. 01.03.2026" },
      { key: "next", label: "Nächste Schritte", type: "textarea", ph: "Angebot senden, Zugänge anfragen..." },
      { key: "notizen", label: "Sonstige Notizen", type: "textarea", ph: "Alles Wichtige..." },
      { key: "bewertung", label: "Lead-Bewertung", type: "chips", opts: ["🔥 Hot", "🟡 Warm", "🔵 Kalt", "❌ Kein Fit"] },
    ],
  },
];

// ============================================================
// INLINE STYLE OBJECTS
// ============================================================
const S = {
  // Login
  loginWrap: { minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px", background: C.bg },
  loginBox: { background: C.white, borderRadius: 20, padding: "48px 40px", boxShadow: "0 4px 30px rgba(0,0,0,0.12)", maxWidth: 440, width: "100%", textAlign: "center" },
  loginH2: { fontSize: 24, fontWeight: 700, color: C.text, marginBottom: 8 },
  loginP: { fontSize: 14, color: C.textMid, marginBottom: 28 },
  loginRow: { display: "flex", gap: 8 },
  loginInp: { flex: 1, padding: "14px 18px", borderRadius: 12, border: `2px solid ${C.border}`, fontSize: 15, outline: "none", color: C.text, background: C.white, fontFamily: "inherit" },
  loginInpErr: { flex: 1, padding: "14px 18px", borderRadius: 12, border: `2px solid ${C.red}`, fontSize: 15, outline: "none", color: C.text, background: C.white, fontFamily: "inherit" },
  loginBtn: { padding: "14px 28px", borderRadius: 12, border: "none", background: C.brand, color: C.white, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" },
  loginErr: { fontSize: 13, color: C.red, marginTop: 8 },

  // Wrapper
  wrapper: { background: C.bg, padding: "28px 0 60px", minHeight: "70vh" },
  layout: { maxWidth: 1140, margin: "0 auto", padding: "0 16px", display: "flex", gap: 24 },

  // Sidebar
  side: { width: 260, flexShrink: 0, background: C.white, borderRadius: 16, padding: 14, boxShadow: "0 2px 16px rgba(0,0,0,0.06)", position: "sticky", top: 100, alignSelf: "flex-start" },
  sideTitle: { fontSize: 15, fontWeight: 700, color: C.text, padding: "6px 10px 14px", borderBottom: "1px solid #e8edf1", marginBottom: 6 },
  sideBtn: (isActive, isSkip) => ({
    display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10,
    border: "none", background: isActive ? C.brandLight : "transparent", cursor: "pointer", textAlign: "left",
    marginBottom: 2, fontFamily: "inherit", opacity: isSkip ? 0.4 : 1,
  }),
  sideIco: { fontSize: 16 },
  sideTxt: { flex: 1 },
  sideLbl: (isActive) => ({ display: "block", fontSize: 13, fontWeight: isActive ? 700 : 500, color: C.text }),
  sideCnt: (isDone) => ({ fontSize: 11, color: isDone ? C.green : "#8fa8ba", fontWeight: isDone ? 600 : 400 }),
  sideOk: { color: C.green, fontSize: 14, fontWeight: 700 },
  copyBtn: (copied) => ({
    width: "100%", padding: "13px 16px", borderRadius: 10, border: "none",
    background: copied ? C.green : C.brand, color: C.white, fontSize: 13, fontWeight: 700,
    cursor: "pointer", marginTop: 10, fontFamily: "inherit",
  }),

  // Main
  main: { flex: 1, minWidth: 0 },
  card: { background: C.white, borderRadius: 16, padding: 32, boxShadow: "0 2px 16px rgba(0,0,0,0.06)", marginBottom: 20 },

  // Head
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #e8edf1" },
  headRow: { display: "flex", alignItems: "center", gap: 10 },
  headIco: { fontSize: 26 },
  headTitle: { fontSize: 20, fontWeight: 700, color: C.text, margin: 0 },
  headHint: { fontSize: 12, color: C.warn, fontWeight: 500, margin: "4px 0 0 36px" },
  skipBtn: { padding: "6px 16px", borderRadius: 8, fontSize: 12, border: `1.5px solid ${C.border}`, background: C.white, color: C.textMid, cursor: "pointer", fontFamily: "inherit" },

  // Fields
  fields: { display: "flex", flexDirection: "column", gap: 18 },
  label: { display: "block", fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 7 },
  input: (filled) => ({
    width: "100%", padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${filled ? C.brand : C.border}`,
    fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box",
    background: filled ? "#f8fbff" : C.white, color: C.text,
  }),
  textarea: (filled) => ({
    width: "100%", padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${filled ? C.brand : C.border}`,
    fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box", resize: "vertical",
    background: filled ? "#f8fbff" : C.white, color: C.text,
  }),
  chips: { display: "flex", flexWrap: "wrap", gap: 8 },
  chip: (sel) => ({
    padding: "9px 18px", borderRadius: 22, border: sel ? `2px solid ${C.brand}` : `1.5px solid ${C.border}`,
    background: sel ? C.brandLight : C.white, color: C.text, fontSize: 13,
    fontWeight: sel ? 700 : 500, cursor: "pointer", fontFamily: "inherit",
  }),

  // Nav
  nav: { display: "flex", justifyContent: "space-between", marginTop: 28, paddingTop: 20, borderTop: "1px solid #e8edf1" },
  outBtn: (disabled) => ({
    padding: "11px 24px", borderRadius: 10, border: `1.5px solid ${C.brand}`, background: C.white,
    color: C.brand, fontSize: 14, fontWeight: 600, cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: "inherit", opacity: disabled ? 0.3 : 1,
  }),
  priBtn: (copied) => ({
    padding: "11px 28px", borderRadius: 10, border: "none", background: copied ? C.green : C.brand,
    color: C.white, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
  }),

  // Preview
  prevSummary: { fontSize: 13, color: C.textMid, cursor: "pointer", padding: "8px 0" },
  prevPre: { background: "#0f172a", color: "#e2e8f0", padding: 20, borderRadius: 12, fontSize: 12, lineHeight: 1.7, whiteSpace: "pre-wrap", maxHeight: 400, overflow: "auto" },

  // Skipped
  skipped: { textAlign: "center", padding: "40px 0" },
  skippedP: { color: C.textMid, marginBottom: 12 },
};

// ============================================================
// SOP TOOL
// ============================================================
function SopTool() {
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
    let t = `📋 ONBOARDING CALL – ${d.firma || "N/A"}\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nDatum: ${new Date().toLocaleDateString("de-DE")}\n\n`;
    SOP.forEach((sec) => {
      if (skip[sec.id]) return;
      const hasData = sec.fields.some((f) => d[f.key] && d[f.key] !== "");
      if (!hasData) return;
      t += `${sec.icon} ${sec.label.toUpperCase()}\n────────────────────\n`;
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
    <div style={S.wrapper}>
      <div style={S.layout}>
        {/* Sidebar */}
        <div style={S.side}>
          <div style={S.sideTitle}>📞 Onboarding Call</div>
          {SOP.map((s) => {
            const p = prog(s);
            const isAct = active === s.id;
            const isDone = p.f === p.t && p.t > 0;
            return (
              <button key={s.id} onClick={() => setActive(s.id)} style={S.sideBtn(isAct, skip[s.id])}>
                <span style={S.sideIco}>{s.icon}</span>
                <div style={S.sideTxt}>
                  <span style={S.sideLbl(isAct)}>{s.label}</span>
                  <span style={S.sideCnt(isDone)}>{skip[s.id] ? "Übersprungen" : `${p.f} / ${p.t}`}</span>
                </div>
                {isDone && !skip[s.id] && <span style={S.sideOk}>✓</span>}
              </button>
            );
          })}
          <button onClick={copy} style={S.copyBtn(copied)}>
            {copied ? "✓ Kopiert!" : "📋 ClickUp-Task kopieren"}
          </button>
        </div>

        {/* Main */}
        <div style={S.main}>
          <div style={S.card}>
            <div style={S.head}>
              <div>
                <div style={S.headRow}>
                  <span style={S.headIco}>{sec.icon}</span>
                  <h3 style={S.headTitle}>{sec.label}</h3>
                </div>
                {sec.hint && <p style={S.headHint}>⚠️ {sec.hint}</p>}
              </div>
              {sec.optional && (
                <button onClick={() => setSkip((p) => ({ ...p, [active]: !p[active] }))} style={S.skipBtn}>
                  {skip[active] ? "Aktivieren" : "Überspringen"}
                </button>
              )}
            </div>

            {!skip[active] ? (
              <div style={S.fields}>
                {sec.fields.map((f) => {
                  if (f.cond && d[f.cond] !== f.condVal) return null;
                  if (f.type === "text") return (
                    <div key={f.key}>
                      <label style={S.label}>{f.label}</label>
                      <input type="text" style={S.input(!!d[f.key])} value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} />
                    </div>
                  );
                  if (f.type === "textarea") return (
                    <div key={f.key}>
                      <label style={S.label}>{f.label}</label>
                      <textarea style={S.textarea(!!d[f.key])} value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} rows={3} />
                    </div>
                  );
                  if (f.type === "chips") return (
                    <div key={f.key}>
                      <label style={S.label}>{f.label}</label>
                      <div style={S.chips}>
                        {f.opts.map((o) => (
                          <button key={o} onClick={() => u(f.key, d[f.key] === o ? "" : o)} style={S.chip(d[f.key] === o)}>
                            {d[f.key] === o && "✓ "}{o}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                  return null;
                })}
              </div>
            ) : (
              <div style={S.skipped}>
                <p style={S.skippedP}>Diese Sektion wurde übersprungen.</p>
                <button onClick={() => setSkip((p) => ({ ...p, [active]: false }))} style={S.outBtn(false)}>Doch ausfüllen</button>
              </div>
            )}

            <div style={S.nav}>
              <button style={S.outBtn(idx === 0)} onClick={() => idx > 0 && setActive(SOP[idx - 1].id)} disabled={idx === 0}>← Zurück</button>
              {idx < SOP.length - 1 ? (
                <button style={S.priBtn(false)} onClick={() => setActive(SOP[idx + 1].id)}>Weiter →</button>
              ) : (
                <button style={S.priBtn(copied)} onClick={copy}>{copied ? "✓ Kopiert!" : "📋 ClickUp-Task kopieren"}</button>
              )}
            </div>
          </div>

          <details style={{ marginTop: 12 }}>
            <summary style={S.prevSummary}>📄 Vorschau ClickUp-Text</summary>
            <pre style={S.prevPre}>{genText()}</pre>
          </details>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// LOGIN + PAGE
// ============================================================
export default function DiscoveryCallPage() {
  const [pw, setPw] = useState("");
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState(false);

  const login = () => {
    if (pw === "talentsuite2026") { setAuth(true); setError(false); }
    else setError(true);
  };

  return (
    <>
      <Head>
        <title>Onboarding Call Tool | TalentSuite</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {!auth ? (
        <div style={S.loginWrap}>
          <div style={S.loginBox}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
            <h2 style={S.loginH2}>Onboarding Call Tool</h2>
            <p style={S.loginP}>Internes Tool für das TalentSuite Team.<br />Bitte Passwort eingeben um fortzufahren.</p>
            <div style={S.loginRow}>
              <input
                type="password"
                style={error ? S.loginInpErr : S.loginInp}
                value={pw}
                onChange={(e) => { setPw(e.target.value); setError(false); }}
                onKeyDown={(e) => e.key === "Enter" && login()}
                placeholder="Passwort eingeben..."
                autoFocus
              />
              <button onClick={login} style={S.loginBtn}>Anmelden →</button>
            </div>
            {error && <div style={S.loginErr}>Falsches Passwort. Bitte erneut versuchen.</div>}
          </div>
        </div>
      ) : (
        <SopTool />
      )}
    </>
  );
}
