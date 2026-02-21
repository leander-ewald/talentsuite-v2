"use client";
import React, { useState, useEffect } from "react";

const B = "#023B5B", D = "#011E2F", A = "#1B98E0", G = "#10B981", W = "#ffffff", L = "#f0f4f7", R = "#EF4444", Y = "#F59E0B";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

const fmt = n => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const data = {
  "SHK & Elektro": {
    positions: [
      { title: "Anlagenmechaniker/in SHK", min: 34000, mid: 40000, max: 48000, top: 55000 },
      { title: "Elektroniker/in", min: 32000, mid: 38000, max: 45000, top: 52000 },
      { title: "Meister/in SHK", min: 42000, mid: 50000, max: 60000, top: 70000 },
      { title: "Kundendiensttechniker/in", min: 36000, mid: 42000, max: 50000, top: 58000 },
    ],
    topBenefits: ["Firmenfahrzeug (auch privat)", "Betriebliche Altersvorsorge", "30 Tage Urlaub", "Hochwertige Werkzeuge", "Weiterbildungsbudget"],
    insight: "SHK-Fachkräfte mit Wärmepumpen-Erfahrung verdienen bis zu 15% über dem Branchenschnitt.",
  },
  "Pflege & Gesundheit": {
    positions: [
      { title: "Pflegefachkraft", min: 33000, mid: 39000, max: 46000, top: 53000 },
      { title: "Altenpfleger/in", min: 30000, mid: 36000, max: 42000, top: 48000 },
      { title: "Pflegedienstleitung", min: 42000, mid: 50000, max: 60000, top: 68000 },
      { title: "Pflegehelfer/in", min: 26000, mid: 30000, max: 34000, top: 38000 },
    ],
    topBenefits: ["Flexible Schichtmodelle", "Zuschläge (Nacht/WE/Feiertag)", "Deutschlandticket", "Fort- und Weiterbildungen", "4-Tage-Woche"],
    insight: "Pflegekräfte wechseln selten nur für Gehalt. Verlässliche Dienstpläne und Teamklima sind entscheidend.",
  },
  "Gastronomie & Hotel": {
    positions: [
      { title: "Koch/Köchin", min: 28000, mid: 34000, max: 40000, top: 48000 },
      { title: "Küchenchef/in", min: 36000, mid: 44000, max: 55000, top: 65000 },
      { title: "Servicekraft", min: 24000, mid: 28000, max: 33000, top: 38000 },
      { title: "Hotelfachmann/-frau", min: 26000, mid: 32000, max: 38000, top: 44000 },
    ],
    topBenefits: ["Kostenlose Verpflegung", "Trinkgeld-Beteiligung", "Flexible Arbeitszeiten", "Freie Wochenenden (wenn möglich)", "Weiterbildungen"],
    insight: "Seit COVID hat die Branche tausende Fachkräfte dauerhaft verloren. Attraktive Bedingungen sind jetzt Pflicht.",
  },
  "Logistik & Transport": {
    positions: [
      { title: "LKW-Fahrer/in (CE)", min: 32000, mid: 38000, max: 46000, top: 54000 },
      { title: "Lagerist/in", min: 28000, mid: 33000, max: 38000, top: 43000 },
      { title: "Disponent/in", min: 34000, mid: 40000, max: 48000, top: 56000 },
      { title: "Fuhrparkleiter/in", min: 40000, mid: 48000, max: 58000, top: 66000 },
    ],
    topBenefits: ["Moderne Fahrzeuge", "Planbare Touren", "Betriebliche Altersvorsorge", "Keine Wochenendarbeit", "Überstundenvergütung"],
    insight: "Durchschnittsalter LKW-Fahrer: über 50 Jahre. Moderne Fahrzeuge und planbare Touren ziehen junge Fahrer an.",
  },
  "Bau & Ausbau": {
    positions: [
      { title: "Maurer/in", min: 32000, mid: 38000, max: 44000, top: 50000 },
      { title: "Zimmerer/in", min: 33000, mid: 39000, max: 46000, top: 52000 },
      { title: "Bauleiter/in", min: 45000, mid: 55000, max: 68000, top: 80000 },
      { title: "Dachdecker/in", min: 30000, mid: 36000, max: 42000, top: 50000 },
    ],
    topBenefits: ["Firmenwagen", "Hochwertige Ausrüstung", "Betriebliche Altersvorsorge", "Überdurchschnittlicher Lohn", "Schlechtwettergeld"],
    insight: "Im Bauhandwerk zählen Ausstattungsqualität und Planungssicherheit neben dem Gehalt am meisten.",
  },
};

export default function GehaltsBenchmark() {
  const mob = useIsMobile();
  const [branche, setBranche] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [dsgvo, setDsgvo] = useState(false);
  const [sent, setSent] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const d = data[branche];
  const canSubmit = form.name && emailRe.test(form.email) && dsgvo;

  const submit = async () => {
    setSent(true);
    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "gehalts-benchmark", name: form.name, email: form.email, phone: form.phone || undefined, industry: branche, extra: { branche } }),
      });
    } catch (e) { console.error(e); }
  };

  return (
    <>
      <div style={{ background: `linear-gradient(135deg, ${D} 0%, ${B} 50%, #0A4D72 100%)`, padding: mob ? "40px 16px 48px" : "64px 24px 72px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: `${A}20`, color: A, padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Daten 2026 · Kostenlos · Branchenspezifisch</span>
          <h1 style={{ color: W, fontSize: mob ? 26 : 40, fontWeight: 800, margin: "0 0 14px", lineHeight: 1.2 }}>Gehalts- & Benefits-Benchmark 2026</h1>
          <p style={{ color: `${W}80`, fontSize: mob ? 15 : 18, maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>Was verdienen Fachkräfte in Ihrer Branche? Und welche Benefits bieten Top-Arbeitgeber?</p>
        </div>
      </div>

      <div style={{ background: L, padding: mob ? "32px 16px 48px" : "48px 24px 72px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ background: W, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 14px" }}>Wählen Sie Ihre Branche</h2>
            <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 10 }}>
              {Object.keys(data).map(b => (
                <button key={b} onClick={() => { setBranche(b); setShowForm(false); setSent(false); }}
                  style={{ padding: "14px 16px", background: branche === b ? A : L, border: `2px solid ${branche === b ? A : "transparent"}`, borderRadius: 10, cursor: "pointer", fontFamily: "inherit", fontSize: 15, fontWeight: 600, color: branche === b ? W : B, textAlign: "left", transition: "all 0.2s" }}>{b}</button>
              ))}
            </div>
          </div>

          {d && (
            <>
              <div style={{ background: W, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <h3 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 20px" }}>💰 Gehälter {branche} (Jahresbrutto)</h3>
                {d.positions.map((p, i) => (
                  <div key={i} style={{ marginBottom: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ color: B, fontSize: 15, fontWeight: 600 }}>{p.title}</span>
                      <span style={{ color: "#64748B", fontSize: 13 }}>{fmt(p.mid)} Median</span>
                    </div>
                    <div style={{ position: "relative", height: 28, background: L, borderRadius: 8, overflow: "hidden" }}>
                      <div style={{ position: "absolute", left: `${(p.min / (p.top * 1.1)) * 100}%`, width: `${((p.top - p.min) / (p.top * 1.1)) * 100}%`, height: "100%", background: `linear-gradient(90deg, ${Y}30, ${G}30)`, borderRadius: 8 }} />
                      <div style={{ position: "absolute", left: `${(p.mid / (p.top * 1.1)) * 100}%`, width: 3, height: "100%", background: A, borderRadius: 2 }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>{fmt(p.min)}</span>
                      <span style={{ fontSize: 12, color: G, fontWeight: 600 }}>Top: {fmt(p.top)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: W, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <h3 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 14px" }}>🎯 Top Benefits von Arbeitgebern</h3>
                {d.topBenefits.map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i < d.topBenefits.length - 1 ? `1px solid ${L}` : "none" }}>
                    <span style={{ width: 28, height: 28, borderRadius: "50%", background: `${G}15`, color: G, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ color: "#334155", fontSize: 15 }}>{b}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: `${A}08`, border: `1px solid ${A}20`, borderRadius: 14, padding: mob ? "18px" : "24px", marginBottom: 24 }}>
                <p style={{ color: B, fontSize: mob ? 15 : 16, fontWeight: 600, margin: 0, lineHeight: 1.6 }}>💡 {d.insight}</p>
              </div>

              <div style={{ background: `linear-gradient(135deg, ${D}, ${B})`, borderRadius: 16, padding: mob ? "28px 18px" : "36px 32px", textAlign: "center" }}>
                <h3 style={{ color: W, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 8px" }}>Gehalt allein reicht nicht.</h3>
                <p style={{ color: `${W}70`, fontSize: 15, margin: "0 0 20px", lineHeight: 1.6 }}>40% der Betriebe haben Gehälter erhöht und finden trotzdem niemanden. Der Unterschied: <strong style={{ color: A }}>Sichtbarkeit</strong> über Social Media Recruiting.</p>
                {!showForm && !sent ? (
                  <button onClick={() => setShowForm(true)} style={{ padding: "16px 40px", background: W, border: "none", borderRadius: 10, color: B, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Kostenlose Recruiting-Analyse →</button>
                ) : sent ? (
                  <div><span style={{ fontSize: 48 }}>✅</span><p style={{ color: W, fontSize: 18, fontWeight: 600, marginTop: 12 }}>Anfrage erhalten!</p></div>
                ) : (
                  <div style={{ maxWidth: 400, margin: "0 auto", textAlign: "left" }}>
                    {[{ key: "name", label: "Name *", ph: "Max Mustermann" }, { key: "email", label: "E-Mail *", ph: "max@firma.de", type: "email" }, { key: "phone", label: "Telefon", ph: "+49 170 1234567", type: "tel" }].map(f => (
                      <div key={f.key} style={{ marginBottom: 12 }}>
                        <label style={{ color: `${W}70`, fontSize: 13, display: "block", marginBottom: 4 }}>{f.label}</label>
                        <input type={f.type || "text"} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.ph}
                          style={{ width: "100%", padding: "11px 14px", background: `${W}10`, border: `1px solid ${W}20`, borderRadius: 8, color: W, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box" }} />
                      </div>
                    ))}
                    <label style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "8px 0 14px", cursor: "pointer" }}>
                      <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)} style={{ marginTop: 3, accentColor: A }} />
                      <span style={{ color: `${W}50`, fontSize: 12, lineHeight: 1.5 }}>Ich stimme der <a href="/datenschutz" target="_blank" style={{ color: A }}>Datenschutzerklärung</a> zu.</span>
                    </label>
                    <button onClick={submit} disabled={!canSubmit} style={{ width: "100%", padding: "14px", background: canSubmit ? W : `${W}20`, border: "none", borderRadius: 10, color: canSubmit ? B : `${W}50`, fontSize: 16, fontWeight: 700, cursor: canSubmit ? "pointer" : "default", fontFamily: "inherit" }}>Analyse anfordern →</button>
                  </div>
                )}
              </div>
            </>
          )}

          <div style={{ background: W, borderRadius: 16, padding: mob ? "20px 18px" : "28px 28px", marginTop: 28, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>Gehälter vergleichen: Warum Sichtbarkeit wichtiger ist als Gehalt</h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>Laut dem aktuellen Mittelstandsbarometer haben bereits 40% der KMU ihre Gehälter erhöht — und finden trotzdem keine Bewerber. Das zeigt: Gehalt ist eine notwendige, aber keine hinreichende Bedingung. Was zählt, ist das Gesamtpaket aus Vergütung, Benefits, Arbeitsumfeld und vor allem Sichtbarkeit als Arbeitgeber.</p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>72% der Fachkräfte sind nicht aktiv auf Jobsuche. Sie erreichen diese passiven Kandidaten nur über Social Media Recruiting — mit branchenspezifischen Kampagnen, die genau die richtige Zielgruppe ansprechen.</p>
          </div>
        </div>
      </div>
    </>
  );
}
