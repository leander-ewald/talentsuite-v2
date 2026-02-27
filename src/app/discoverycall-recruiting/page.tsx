"use client";
import React, { useState, useEffect } from "react";

const N8N_WEBHOOK_URL = "https://talentsuite.app.n8n.cloud/webhook/discovery-call";

const SOP = [
  { id: "unternehmen", icon: "🏢", label: "2.1 Unternehmen", fields: [
    { key: "firma", label: "Firmenname", type: "text", ph: "z.B. Müller Heizungsbau GmbH" },
    { key: "ansprechpartner", label: "Ansprechpartner", type: "text", ph: "z.B. Thomas Müller" },
    { key: "email", label: "E-Mail", type: "text", ph: "z.B. t.mueller@firma.de" },
    { key: "telefon", label: "Telefon", type: "text", ph: "z.B. 0171 1234567" },
    { key: "branche", label: "Branche", type: "chips", opts: ["SHK","Elektro","Metallbau","Bau","Pflege","Gastronomie","Logistik","KFZ","Industrie","Immobilien","IT","Sonstige"] },
    { key: "mitarbeiter", label: "Mitarbeiteranzahl", type: "chips", opts: ["1–10","11–25","26–50","51–100","100+"] },
    { key: "konkurrenz", label: "Wer ist die Konkurrenz des Kunden?", type: "textarea", ph: "Konkurrenzbetriebe..." },
    { key: "usp", label: "USP – Was unterscheidet den Kunden?", type: "textarea", ph: "Alleinstellungsmerkmale..." },
  ]},
  { id: "stelle", icon: "📋", label: "2.2 Stelleninfo", hint: "Für bis zu 3 Stellen wiederholen.", fields: [
    { key: "berufsbezeichnung", label: "Genaue Berufsbezeichnung", type: "text", ph: "z.B. Anlagenmechaniker SHK" },
    { key: "arbeitszeit", label: "Voll- oder Teilzeit?", type: "chips", opts: ["Vollzeit","Teilzeit","Beides möglich"] },
    { key: "standort", label: "Standort und Suchradius", type: "text", ph: "z.B. Iserlohn, 30km Radius" },
    { key: "besetzung", label: "Besetzungszeitpunkt", type: "chips", opts: ["Sofort","2–4 Wochen","1–3 Monate","Flexibel"] },
    { key: "aufgaben", label: "Aufgaben der Position", type: "textarea", ph: "Was macht der Mitarbeiter im Alltag?" },
    { key: "qualifikationen", label: "Qualifikationsanforderungen", type: "textarea", ph: "Ausbildung, Erfahrung, Zertifikate, Führerschein..." },
    { key: "quereinstieg", label: "Quereinstieg möglich?", type: "chips", opts: ["Ja","Nein"] },
    { key: "quereinstiegDetail", label: "Mindestqualifikationen Quereinstieg", type: "text", ph: "z.B. Handwerkliche Erfahrung", cond: "quereinstieg", condVal: "Ja" },
    { key: "ausschluss", label: "Ausschlusskriterien", type: "textarea", ph: "Was MUSS der Bewerber mitbringen?" },
    { key: "idealkandidat", label: "Idealen Kandidaten beschreiben", type: "textarea", ph: "Traumkandidat..." },
  ]},
  { id: "stelle2", icon: "📋", label: "2.2b Weitere Stelle", optional: true, fields: [
    { key: "beruf2", label: "Berufsbezeichnung (Stelle 2)", type: "text", ph: "z.B. Elektroniker" },
    { key: "zeit2", label: "Voll-/Teilzeit?", type: "chips", opts: ["Vollzeit","Teilzeit","Beides"] },
    { key: "ort2", label: "Standort & Radius", type: "text", ph: "z.B. Hemer, 25km" },
    { key: "aufg2", label: "Aufgaben", type: "textarea", ph: "Aufgaben..." },
    { key: "qual2", label: "Qualifikationen", type: "textarea", ph: "Anforderungen..." },
  ]},
  { id: "landingpage", icon: "🌐", label: "2.3 Landingpage", fields: [
    { key: "ansprache", label: "Du- oder Sie-Form?", type: "chips", opts: ["Du","Sie"] },
    { key: "gendern", label: "Gendern?", type: "chips", opts: ["Ja","Nein"] },
    { key: "logo", label: "Logo vorhanden?", type: "chips", opts: ["Ja – wird zugesendet","Nein"] },
    { key: "ciFarben", label: "CI-Farben", type: "text", ph: "z.B. #023B5B" },
    { key: "ciFont", label: "CI-Schriftart", type: "text", ph: "z.B. Montserrat" },
    { key: "firmaText", label: "Kurze Unternehmensbeschreibung", type: "textarea", ph: "2–3 Sätze..." },
    { key: "benefits", label: "Mitarbeiter-Benefits", type: "textarea", ph: "Firmenwagen, 30 Tage Urlaub..." },
    { key: "testimonials", label: "Testimonials vorhanden?", type: "chips", opts: ["Schrift","Video","Beides","Nein"] },
    { key: "maBilder", label: "Mitarbeiter-Bilder?", type: "chips", opts: ["Ja","Stock","Vor-Ort planen"] },
    { key: "kontaktBewerber", label: "Ansprechpartner für Bewerber", type: "textarea", ph: "Name:\nE-Mail:\nTelefon:" },
  ]},
  { id: "creatives", icon: "🎨", label: "2.4 Creatives", fields: [
    { key: "material", label: "Foto-/Videomaterial?", type: "chips", opts: ["Fotos","Videos","Beides","Nein"] },
    { key: "keinMat", label: "Stockfootage oder Vor-Ort?", type: "chips", opts: ["Stockfootage","Vor-Ort","N/A"], cond: "material", condVal: "Nein" },
    { key: "zertifikate", label: "Zertifikate?", type: "text", ph: "z.B. Top Arbeitgeber 2025" },
    { key: "logoHQ", label: "Logo HQ?", type: "chips", opts: ["Erhalten","Angefragt","Noch anfragen"] },
    { key: "ortCreatives", label: "Standort Creatives", type: "text", ph: "z.B. Firmengebäude" },
  ]},
  { id: "meta", icon: "📱", label: "2.5 Meta Ads", fields: [
    { key: "fbSeite", label: "Facebook-Seite?", type: "chips", opts: ["Ja","Nein – erstellen"] },
    { key: "fbZugriff", label: "FB-Zugriffsrechte?", type: "text", ph: "Name + Rolle" },
    { key: "fbAnfrage", label: "Zugriffsanfrage", type: "chips", opts: ["Erledigt","Ausstehend"] },
  ]},
  { id: "google", icon: "🔍", label: "2.6 Google Ads", hint: "Nur bei Bachelor+ Jobs.", fields: [
    { key: "gRelevant", label: "Google Ads relevant?", type: "chips", opts: ["Ja","Nein"] },
    { key: "gKonto", label: "Konto vorhanden?", type: "chips", opts: ["Ja","Nein"], cond: "gRelevant", condVal: "Ja" },
    { key: "gZugriff", label: "Zugriffsrechte?", type: "text", ph: "Name", cond: "gRelevant", condVal: "Ja" },
  ]},
  { id: "bewerbungen", icon: "📨", label: "2.7 Bewerbungen", fields: [
    { key: "kontaktPerson", label: "Bewerber-Kontakt?", type: "text", ph: "Name + Telefon" },
    { key: "erstgespraechTS", label: "Erstgespräch durch TS?", type: "chips", opts: ["Ja (Upsell!)","Nein"] },
  ]},
  { id: "abschluss", icon: "✅", label: "Abschluss", fields: [
    { key: "paket", label: "Paket", type: "chips", opts: ["Starter (990€)","Professional (1.490€)","Premium (2.490€)","Enterprise"] },
    { key: "laufzeit", label: "Laufzeit", type: "chips", opts: ["1 Monat","3 Monate","6 Monate","12 Monate"] },
    { key: "start", label: "Startdatum", type: "text", ph: "z.B. 01.03.2026" },
    { key: "next", label: "Nächste Schritte", type: "textarea", ph: "Angebot senden..." },
    { key: "notizen", label: "Notizen", type: "textarea", ph: "Sonstiges..." },
    { key: "bewertung", label: "Lead-Bewertung", type: "chips", opts: ["🔥 Hot","🟡 Warm","🔵 Kalt","❌ Kein Fit"] },
  ]},
];

const B = "#023B5B", W = "#ffffff", BL = "#E8F4FD", BD = "#cdd8e0", G = "#10B981";

type SopField = { key: string; label: string; type: string; ph?: string; opts?: string[]; cond?: string; condVal?: string };
type SopSection = { id: string; icon: string; label: string; hint?: string; optional?: boolean; fields: SopField[] };

const sopData = SOP as SopSection[];

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

function SopTool() {
  const mob = useIsMobile();
  const [active, setActive] = useState(sopData[0].id);
  const [d, setD] = useState<Record<string, string>>({});
  const [skip, setSkip] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string | null>(null);
  const u = (k: string, v: string) => setD((p) => ({ ...p, [k]: v }));

  const prog = (sec: SopSection) => {
    const vis = sec.fields.filter((f: SopField) => !f.cond || d[f.cond!] === f.condVal);
    const fill = vis.filter((f: SopField) => d[f.key] && d[f.key] !== "");
    return { f: fill.length, t: vis.length };
  };

  const genText = () => {
    let t = `📋 ONBOARDING CALL – ${d.firma || "N/A"}\n━━━━━━━━━━━━━━━━━━\nDatum: ${new Date().toLocaleDateString("de-DE")}\n\n`;
    sopData.forEach((sec: SopSection) => {
      if (skip[sec.id]) return;
      const has = sec.fields.some((f: SopField) => d[f.key] && d[f.key] !== "");
      if (!has) return;
      t += `${sec.icon} ${sec.label.toUpperCase()}\n──────────\n`;
      sec.fields.forEach((f: SopField) => {
        if (f.cond && d[f.cond] !== f.condVal) return;
        if (d[f.key]) t += `${f.label}: ${d[f.key]}\n`;
      });
      t += `\n`;
    });
    return t;
  };

  const copy = () => { navigator.clipboard.writeText(genText()); setCopied(true); setTimeout(() => setCopied(false), 3000); };

  const handleSubmitToClickUp = async () => {
    setSubmitting(true); setSubmitResult(null);
    try {
      const payload = {
        lead: { firma: d.firma || "", name: d.ansprechpartner || "", email: d.email || "", telefon: d.telefon || "", branche: d.branche || "", mitarbeiter: d.mitarbeiter || "", konkurrenz: d.konkurrenz || "", usp: d.usp || "", offeneStellen: d.berufsbezeichnung || "" },
        call: { berufsbezeichnung: d.berufsbezeichnung || "", arbeitszeit: d.arbeitszeit || "", standort: d.standort || "", besetzung: d.besetzung || "", aufgaben: d.aufgaben || "", qualifikationen: d.qualifikationen || "", quereinstieg: d.quereinstieg || "", quereinstiegDetail: d.quereinstiegDetail || "", ausschluss: d.ausschluss || "", idealkandidat: d.idealkandidat || "", beruf2: d.beruf2 || "", zeit2: d.zeit2 || "", ort2: d.ort2 || "", aufg2: d.aufg2 || "", qual2: d.qual2 || "", ansprache: d.ansprache || "", gendern: d.gendern || "", logo: d.logo || "", ciFarben: d.ciFarben || "", ciFont: d.ciFont || "", firmaText: d.firmaText || "", benefits: d.benefits || "", testimonials: d.testimonials || "", maBilder: d.maBilder || "", kontaktBewerber: d.kontaktBewerber || "", material: d.material || "", keinMat: d.keinMat || "", zertifikate: d.zertifikate || "", logoHQ: d.logoHQ || "", ortCreatives: d.ortCreatives || "", fbSeite: d.fbSeite || "", fbZugriff: d.fbZugriff || "", fbAnfrage: d.fbAnfrage || "", gRelevant: d.gRelevant || "", gKonto: d.gKonto || "", gZugriff: d.gZugriff || "", kontaktPerson: d.kontaktPerson || "", erstgespraechTS: d.erstgespraechTS || "", empfohlenesPaket: d.paket || "", timeline: d.laufzeit || "", naechsteSchritte: d.next || "", notizen: d.notizen || "", bewertung: d.bewertung || "", start: d.start || "" },
      };
      const response = await fetch(N8N_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json();
      setSubmitResult(result.success ? "success" : "error");
    } catch { setSubmitResult("error"); } finally { setSubmitting(false); setTimeout(() => setSubmitResult(null), 5000); }
  };

  const sec = sopData.find((s) => s.id === active)!;
  const idx = sopData.findIndex((s) => s.id === active);
  const getBtnStyle = () => ({ background: submitting ? "#94A3B8" : submitResult === "success" ? G : submitResult === "error" ? "#DC2626" : B, cursor: submitting ? "not-allowed" as const : "pointer" as const });
  const getBtnText = () => submitting ? "⏳ Senden..." : submitResult === "success" ? "✅ ClickUp-Doc erstellt!" : submitResult === "error" ? "❌ Fehler – Nochmal?" : "🚀 ClickUp-Doc erstellen";

  return (
    <div style={{ background: "#f0f4f7", padding: mob ? "16px 0 40px" : "28px 0 60px", minHeight: "70vh" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: mob ? "0 12px" : "0 16px", display: "flex", flexDirection: mob ? "column" : "row", gap: mob ? 12 : 24 }}>
        {mob ? (
          <div style={{ background: W, borderRadius: 12, padding: "10px 6px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 8px 8px", borderBottom: "1px solid #e8edf1", marginBottom: 8 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>📞 Onboarding Call</div>
              <div style={{ fontSize: 12, color: "#64748B" }}>{idx + 1} / {sopData.length}</div>
            </div>
            <div style={{ display: "flex", overflowX: "auto", gap: 6, paddingBottom: 4 }}>
              {sopData.map((s) => { const p = prog(s); const isAct = active === s.id; const isDone = p.f === p.t && p.t > 0; return (
                <button key={s.id} onClick={() => setActive(s.id)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", borderRadius: 8, border: isAct ? `2px solid ${B}` : "1.5px solid transparent", background: isAct ? BL : "transparent", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, opacity: skip[s.id] ? 0.4 : 1 }}>
                  <span style={{ fontSize: 14 }}>{s.icon}</span><span style={{ fontSize: 12, fontWeight: isAct ? 700 : 500 }}>{s.label.replace(/^2\.\d+b?\s*/, "")}</span>{isDone && !skip[s.id] && <span style={{ fontSize: 12, fontWeight: 700, color: G }}>✓</span>}
                </button>
              ); })}
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              <button onClick={handleSubmitToClickUp} disabled={submitting} style={{ flex: 1, padding: "10px 12px", borderRadius: 8, border: "none", ...getBtnStyle(), fontSize: 12, fontWeight: 700, color: W }}>
                {getBtnText()}
              </button>
              <button onClick={copy} style={{ padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${BD}`, background: copied ? G : W, fontSize: 12, fontWeight: 600, cursor: "pointer", color: copied ? W : "#334155" }}>
                {copied ? "✓" : "📋"}
              </button>
            </div>
          </div>
        ) : (
          <div style={{ width: 260, flexShrink: 0, background: W, borderRadius: 16, padding: 14, boxShadow: "0 2px 16px rgba(0,0,0,0.06)", position: "sticky", top: 100, alignSelf: "flex-start" }}>
            <div style={{ fontSize: 15, fontWeight: 700, padding: "6px 10px 14px", borderBottom: "1px solid #e8edf1", marginBottom: 6 }}>📞 Onboarding Call</div>
            {sopData.map((s) => { const p = prog(s); const isAct = active === s.id; const isDone = p.f === p.t && p.t > 0; return (
              <button key={s.id} onClick={() => setActive(s.id)} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, border: "none", background: isAct ? BL : "transparent", cursor: "pointer", textAlign: "left", marginBottom: 2, opacity: skip[s.id] ? 0.4 : 1 }}>
                <div style={{ fontSize: 16, lineHeight: 1 }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: isAct ? 700 : 500 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: "#64748B" }}>{skip[s.id] ? "Skip" : `${p.f} / ${p.t}`}</div>
                </div>
                {isDone && !skip[s.id] && <div style={{ fontSize: 14, fontWeight: 700, color: G }}>✓</div>}
              </button>
            ); })}
            <button onClick={handleSubmitToClickUp} disabled={submitting} style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: "none", ...getBtnStyle(), fontSize: 13, fontWeight: 700, color: W, marginTop: 10, transition: "all 0.3s ease" }}>{getBtnText()}</button>
            <button onClick={copy} style={{ width: "100%", padding: "10px 16px", borderRadius: 10, border: `1.5px solid ${BD}`, background: copied ? G : W, fontSize: 12, fontWeight: 600, cursor: "pointer", color: copied ? W : "#334155", marginTop: 6, transition: "all 0.3s ease" }}>{copied ? "✓ Kopiert!" : "📋 Fallback: Text kopieren"}</button>
          </div>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ background: W, borderRadius: mob ? 12 : 16, padding: mob ? "20px 16px" : 32, boxShadow: "0 2px 16px rgba(0,0,0,0.06)", marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: mob ? 16 : 24, paddingBottom: mob ? 12 : 16, borderBottom: "1px solid #e8edf1", flexWrap: "wrap", gap: 8 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ fontSize: mob ? 22 : 26 }}>{sec.icon}</div>
                  <div style={{ fontSize: mob ? 17 : 20, fontWeight: 700 }}>{sec.label}</div>
                </div>
                {sec.hint && <div style={{ fontSize: 11, fontWeight: 500, marginTop: 4, marginLeft: mob ? 30 : 36, color: "#F59E0B" }}>{`⚠️ ${sec.hint}`}</div>}
              </div>
              {sec.optional && (
                <button onClick={() => setSkip((p) => ({ ...p, [active]: !p[active] }))} style={{ padding: "5px 12px", borderRadius: 8, fontSize: 12, border: `1.5px solid ${BD}`, background: W, cursor: "pointer" }}>
                  {skip[active] ? "Aktivieren" : "Überspringen"}
                </button>
              )}
            </div>

            {!skip[active] ? (
              <div style={{ display: "flex", flexDirection: "column", gap: mob ? 14 : 18 }}>
                {sec.fields.map((f) => {
                  if (f.cond && d[f.cond] !== f.condVal) return null;
                  if (f.type === "text") return (
                    <div key={f.key}>
                      <div style={{ fontSize: mob ? 13 : 14, fontWeight: 700, marginBottom: 6 }}>{f.label}</div>
                      <input type="text" style={{ width: "100%", padding: mob ? "10px 12px" : "12px 16px", borderRadius: 10, border: `1.5px solid ${d[f.key] ? B : BD}`, fontSize: mob ? 15 : 14, outline: "none", boxSizing: "border-box", background: d[f.key] ? "#f8fbff" : W }} value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} />
                    </div>
                  );
                  if (f.type === "textarea") return (
                    <div key={f.key}>
                      <div style={{ fontSize: mob ? 13 : 14, fontWeight: 700, marginBottom: 6 }}>{f.label}</div>
                      <textarea style={{ width: "100%", padding: mob ? "10px 12px" : "12px 16px", borderRadius: 10, border: `1.5px solid ${d[f.key] ? B : BD}`, fontSize: mob ? 15 : 14, outline: "none", boxSizing: "border-box", resize: "vertical", background: d[f.key] ? "#f8fbff" : W }} value={d[f.key] || ""} onChange={(e) => u(f.key, e.target.value)} placeholder={f.ph} rows={3} />
                    </div>
                  );
                  if (f.type === "chips") return (
                    <div key={f.key}>
                      <div style={{ fontSize: mob ? 13 : 14, fontWeight: 700, marginBottom: 6 }}>{f.label}</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: mob ? 6 : 8 }}>
                        {f.opts?.map((o) => { const sel = d[f.key] === o; return (
                          <button key={o} onClick={() => u(f.key, sel ? "" : o)} style={{ padding: mob ? "8px 14px" : "9px 18px", borderRadius: 22, border: sel ? `2px solid ${B}` : `1.5px solid ${BD}`, background: sel ? BL : W, fontSize: 13, fontWeight: sel ? 700 : 500, cursor: "pointer" }}>
                            {sel && "✓ "}{o}
                          </button>
                        ); })}
                      </div>
                    </div>
                  );
                  return null;
                })}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div>Übersprungen</div>
                <button onClick={() => setSkip((p) => ({ ...p, [active]: false }))} style={{ marginTop: 12, padding: "8px 20px", borderRadius: 8, border: `1.5px solid ${B}`, background: W, cursor: "pointer" }}>Doch ausfüllen</button>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: mob ? 20 : 28, paddingTop: mob ? 14 : 20, borderTop: "1px solid #e8edf1", gap: 8 }}>
              <button onClick={() => idx > 0 && setActive(sopData[idx - 1].id)} disabled={idx === 0} style={{ padding: mob ? "10px 16px" : "11px 24px", borderRadius: 10, border: `1.5px solid ${B}`, background: W, fontSize: mob ? 13 : 14, fontWeight: 600, cursor: idx === 0 ? "not-allowed" : "pointer", opacity: idx === 0 ? 0.3 : 1 }}>← Zurück</button>
              {idx < sopData.length - 1 ? (
                <button onClick={() => setActive(sopData[idx + 1].id)} style={{ padding: mob ? "10px 20px" : "11px 28px", borderRadius: 10, border: "none", background: B, color: W, fontSize: mob ? 13 : 14, fontWeight: 700, cursor: "pointer" }}>Weiter →</button>
              ) : (
                <button onClick={handleSubmitToClickUp} disabled={submitting} style={{ padding: mob ? "10px 16px" : "11px 28px", borderRadius: 10, border: "none", ...getBtnStyle(), fontSize: mob ? 12 : 14, fontWeight: 700, color: W, transition: "all 0.3s ease" }}>{getBtnText()}</button>
              )}
            </div>
          </div>

          <details style={{ marginTop: 12 }}>
            <summary style={{ fontSize: 13, cursor: "pointer", padding: "8px 0", color: "#64748B" }}>📄 Vorschau ClickUp-Text</summary>
            <pre style={{ background: "#0f172a", color: W, padding: mob ? 14 : 20, borderRadius: 12, fontSize: 11, lineHeight: 1.7, whiteSpace: "pre-wrap", maxHeight: 300, overflow: "auto" }}>{genText()}</pre>
          </details>
        </div>
      </div>
    </div>
  );
}

export default function DiscoveryCallPage() {
  const mob = useIsMobile();
  const [pw, setPw] = useState("");
  const [auth, setAuth] = useState(false);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    fetch("/api/auth/verify-password")
      .then((res) => { if (res.ok) setAuth(true); })
      .catch(() => {})
      .finally(() => setCheckingSession(false));
  }, []);

  const login = async () => {
    setLoading(true);
    setErr(false);
    try {
      const res = await fetch("/api/auth/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      if (res.ok) {
        setAuth(true);
      } else {
        setErr(true);
      }
    } catch {
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  if (checkingSession) return null;

  return (
    <>
      {!auth ? (
        <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: mob ? "40px 16px" : "60px 20px", background: "#f0f4f7" }}>
          <div style={{ background: "#ffffff", borderRadius: mob ? 16 : 20, padding: mob ? "32px 20px" : "48px 40px", boxShadow: "0 4px 30px rgba(0,0,0,0.12)", maxWidth: 440, width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: mob ? 40 : 48, marginBottom: 16 }}>🔒</div>
            <h2 style={{ fontSize: mob ? 20 : 24, fontWeight: 700, marginBottom: 8 }}>Onboarding Call Tool</h2>
            <p style={{ fontSize: mob ? 13 : 14, marginBottom: 24, color: "#64748B" }}>Internes Tool für das TalentSuite Team.<br />Passwort eingeben um fortzufahren.</p>
            <div style={{ display: "flex", flexDirection: mob ? "column" : "row", gap: 8 }}>
              <input type="password" style={{ flex: 1, padding: "14px 16px", borderRadius: 12, border: `2px solid ${err ? "#ef4444" : "#cdd8e0"}`, fontSize: 16, outline: "none", background: "#ffffff" }} value={pw} onChange={(e) => { setPw(e.target.value); setErr(false); }} onKeyDown={(e) => e.key === "Enter" && login()} placeholder="Passwort eingeben..." autoFocus />
              <button onClick={login} disabled={loading} style={{ padding: "14px 28px", borderRadius: 12, border: "none", background: "#023B5B", color: W, fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", whiteSpace: "nowrap" }}>{loading ? "Prüfe..." : "Anmelden →"}</button>
            </div>
            {err && <div style={{ fontSize: 13, marginTop: 8, color: "#ef4444" }}>Falsches Passwort.</div>}
          </div>
        </div>
      ) : (
        <SopTool />
      )}
    </>
  );
}
