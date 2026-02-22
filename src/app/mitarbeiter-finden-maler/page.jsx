"use client";
import React, { useState, useEffect } from "react";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

export default function Page() {
  const mob = useIsMobile();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [dsgvo, setDsgvo] = useState(false);
  const [sent, setSent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneRe = /^(\+?[0-9]{7,15})$/;
  const cleanPhone = (p) => p.replace(/[\s\-\/\(\)]/g, "");
  const emailValid = emailRe.test(form.email);
  const phoneValid = form.phone === "" || phoneRe.test(cleanPhone(form.phone));
  const canSubmit = form.name && emailValid && phoneValid && dsgvo;

  const submit = async () => {
    setSent(true);
    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "mitarbeiter-finden-maler", name: form.name, email: form.email,
          phone: form.phone || undefined, company: form.company || undefined,
          industry: "Maler- und Lackiererhandwerk",
          extra: { branche: "Maler- und Lackiererhandwerk", pageType: "branchen-landing" },
        }),
      });
    } catch (e) { console.error(e); }
  };

  return (
    <div className="branchen-page">
      <style>{`
        .branchen-page, .branchen-page * { box-sizing: border-box; }
        .branchen-page { background: #f0f4f7 !important; }
        .branchen-page h1, .branchen-page h2, .branchen-page h3, .branchen-page h4 { color: #023B5B !important; }
        .branchen-page p { color: #4A5568 !important; }
        .branchen-page span { color: #64748B !important; }
        .branchen-page label { color: rgba(255,255,255,0.7) !important; }
        .branchen-page div { color: #334155 !important; }
        .branchen-page a { text-decoration: none !important; }
        .branchen-page button { font-family: inherit; }
        .branchen-page input { font-family: inherit; }
        .branchen-page input::placeholder { color: rgba(255,255,255,0.4) !important; }
        .branchen-page .bp-hero h1, .branchen-page .bp-hero p, .branchen-page .bp-hero span { color: #ffffff !important; }
        .branchen-page .bp-hero .bp-hero-sub { color: rgba(255,255,255,0.8) !important; }
        .branchen-page .bp-hero .bp-hero-hint { color: rgba(255,255,255,0.5) !important; }
        .branchen-page .bp-hero a { color: #023B5B !important; }
        .branchen-page .bp-cta h2, .branchen-page .bp-cta h3 { color: #ffffff !important; }
        .branchen-page .bp-cta p { color: rgba(255,255,255,0.7) !important; }
        .branchen-page .bp-cta .bp-cta-hint { color: rgba(255,255,255,0.5) !important; }
        .branchen-page .bp-cta .bp-cta-fine { color: rgba(255,255,255,0.35) !important; }
        .branchen-page .bp-cta a { color: #023B5B !important; }
        .branchen-page .bp-cta button { color: #ffffff !important; }
        .branchen-page .bp-cta label { color: rgba(255,255,255,0.5) !important; }
        .branchen-page .bp-cta input { color: #ffffff !important; }
        .branchen-page .bp-stat-val { font-weight: 800 !important; }
        .branchen-page .bp-pain-red p { color: #334155 !important; }
        .branchen-page .bp-card h4 { color: #023B5B !important; }
        .branchen-page .bp-card p { color: #64748B !important; }
        .branchen-page .bp-case h3 { color: #023B5B !important; }
        .branchen-page .bp-case p { color: #334155 !important; }
        .branchen-page .bp-tag { color: #023B5B !important; }
        .branchen-page .bp-seo p { color: #4A5568 !important; }
        .branchen-page .bp-seo h2 { color: #023B5B !important; }
        .branchen-page .bp-fail h2 { color: #023B5B !important; }
        .branchen-page .bp-fail p { color: #4A5568 !important; }
        .branchen-page a { text-decoration: none; }
        .bp-hero { background: linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%); padding: ${mob ? "48px 16px 56px" : "80px 24px 88px"}; position: relative; overflow: hidden; }
        .bp-body { background: #f0f4f7 !important; padding: ${mob ? "32px 16px 48px" : "56px 24px 72px"}; }
      `}</style>

      {/* HERO */}
      <div className="bp-hero" style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: mob ? "48px 16px 56px" : "80px 24px 88px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ fontSize: 56, display: "block", marginBottom: 12 }}>🎨</span>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 26 : 42, fontWeight: 800, margin: "0 0 16px", lineHeight: 1.2 }}>
            Maler finden — Maler und Lackierer in 30 Tagen einstellen
          </h1>
          <p className="bp-hero-sub" style={{ color: "rgba(255,255,255,0.8)", fontSize: mob ? 15 : 19, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.6 }}>
            18.000+ offene Stellen · Ø 135 Tage Vakanzzeit · 72% der Fachkräfte nicht auf Jobbörsen
          </p>
          <a href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", padding: "18px 44px", background: "#ffffff", borderRadius: 12, color: "#023B5B", fontSize: 17, fontWeight: 800, textDecoration: "none", fontFamily: "inherit", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
            Kostenlose Recruiting-Analyse →
          </a>
          <p className="bp-hero-hint" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 10 }}>20 Min. · Unverbindlich · Konkrete Strategie für Maler- und Lackiererhandwerk</p>
        </div>
      </div>

      <div style={{ background: "#f0f4f7", padding: mob ? "32px 16px 48px" : "56px 24px 72px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 32 }}>
            {[
              { n: "18.000+", label: "Offene Stellen", c: "#1B98E0" },
              { n: "135 Tage", label: "Ø Vakanzzeit", c: "#EF4444" },
              { n: "13-19 €", label: "Kosten/Bewerbung", c: "#10B981" },
              { n: "Ø 26 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
            ].map((s, idx) => (
              <div key={idx} style={{ background: "#ffffff", borderRadius: 14, padding: mob ? "16px 12px" : "20px 16px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: mob ? 22 : 28, fontWeight: 800, color: s.c }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Pain Section */}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 20 : 26, fontWeight: 700, margin: "0 0 14px" }}>
              🎨 Die Situation im Maler- und Lackiererhandwerk
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>
              Das Malerhandwerk kämpft mit sinkendem Nachwuchs und steigender Nachfrage durch die EU-Sanierungspflicht.
            </p>
            <div style={{ padding: "14px 16px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 10, marginBottom: 10 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🔴</strong> Sanierungspflicht: Die EU-Gebäudeeffizienzrichtlinie treibt die Nachfrage nach Malern massiv nach oben.</p>
            </div>
            <div style={{ padding: "14px 16px", background: "#f0f4f7", border: "1px solid #E2E8F0", borderRadius: 10, marginBottom: 10 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🟡</strong> Azubi-Mangel: Die Ausbildungszahlen sinken seit Jahren. Immer weniger junge Menschen entscheiden sich für das Malerhandwerk.</p>
            </div>
            <div style={{ padding: "14px 16px", background: "#f0f4f7", border: "1px solid #E2E8F0", borderRadius: 10 }}>
              <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}><strong>🟠</strong> Konkurrenz durch Bau: Bauunternehmen werben Maler mit höheren Gehältern und Zulagen ab.</p>
            </div>
          </div>

          {/* Why Jobboards Fail */}
          <div className="bp-fail" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24 }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>
              ❌ Warum Jobbörsen im Bereich Maler- und Lackiererhandwerk nicht mehr funktionieren
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Maler und Lackierer suchen nicht aktiv auf Jobbörsen, sind aber täglich auf Social Media unterwegs.
            </p>
          </div>

          {/* Social Recruiting Solution */}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 14px" }}>
              ✅ Social Recruiting für Maler- und Lackiererhandwerk: So funktioniert es
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>
              Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr 1fr", gap: 12 }}>
              {[
                { icon: "🎯", t: "Gezielte Ansprache", d: "Wir erreichen Maler und Lackierer im Umkreis von 30km — nach Beruf, Alter und Interessen." },
                { icon: "📱", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
                { icon: "📊", t: "Messbare Ergebnisse", d: "13-19 € pro Bewerbung bei 12-16% Conversion. Transparent und nachvollziehbar." },
              ].map((s, idx) => (
                <div key={idx} className="bp-card" style={{ background: "#f0f4f7", borderRadius: 12, padding: 16, textAlign: "center" }}>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{s.icon}</span>
                  <h4 style={{ color: "#023B5B", fontSize: 15, fontWeight: 700, margin: "0 0 6px" }}>{s.t}</h4>
                  <p style={{ color: "#64748B", fontSize: 13, margin: 0, lineHeight: 1.5 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div className="bp-case" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24 }}>
            <h3 style={{ color: "#023B5B", fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>📈 Praxisbeispiel</h3>
            <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Ein Malerbetrieb in Baden-Württemberg suchte 3 Monate einen Gesellen. Social Recruiting: 15 Bewerbungen in 2 Wochen, 2 Einstellungen.
            </p>
          </div>

          {/* Positions */}
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 14px" }}>
              Diese Positionen besetzen wir im Bereich Maler- und Lackiererhandwerk
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Maler und Lackierer (m/w/d)","Malergeselle","Fahrzeuglackierer","Malermeister","Trockenbauer"].map((p, idx) => (
                <span key={idx} className="bp-tag" style={{ padding: "8px 16px", background: "rgba(27,152,224,0.1)", border: "1px solid rgba(27,152,224,0.2)", borderRadius: 8, fontSize: 14, color: "#023B5B", fontWeight: 500 }}>{p}</span>
              ))}
            </div>
          </div>

          {/* SEO Content */}
          <div className="bp-seo" style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "20px 18px" : "28px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>So gewinnen erfolgreiche Malerbetriebe heute Fachkräfte</h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>Der Fachkräftemangel im Malerhandwerk ist strukturell und wird durch die Sanierungspflicht verschärft.</p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>Erfolgreiche Betriebe gehen aktiv auf potenzielle Kandidaten zu.</p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>Die Ergebnisse: 13-19 € pro qualifizierte Bewerbung, 12-16% Conversion-Rate, Ø 26 Tage bis Einstellung.</p>
          </div>

          {/* CTA */}
          <div className="bp-cta" style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", borderRadius: 16, padding: mob ? "32px 18px" : "44px 32px", textAlign: "center" }}>
            <h2 style={{ color: "#ffffff", fontSize: mob ? 22 : 30, fontWeight: 800, margin: "0 0 10px" }}>Maler oder Lackierer gesucht?</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 17, margin: "0 0 24px", lineHeight: 1.6 }}>
              In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkräfte in Ihrer Region über Social Media erreichbar sind — und was eine Kampagne kosten würde.
            </p>
            {!showForm && !sent ? (
              <>
                <a href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", padding: "18px 44px", background: "#ffffff", borderRadius: 12, color: "#023B5B", fontSize: 17, fontWeight: 800, textDecoration: "none", fontFamily: "inherit", marginBottom: 12 }}>
                  Jetzt Termin wählen →
                </a>
                <p className="bp-cta-hint" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "8px 0 16px" }}>Oder lassen Sie sich zurückrufen:</p>
                <button onClick={() => setShowForm(true)} style={{ padding: "14px 32px", background: "none", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 10, color: "#ffffff", fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
                  Rückruf anfordern
                </button>
              </>
            ) : sent ? (
              <div>
                <span style={{ fontSize: 56 }}>✅</span>
                <h3 style={{ color: "#ffffff", fontSize: 22, fontWeight: 700, marginTop: 12 }}>Anfrage erhalten!</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, marginTop: 8 }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen, {form.name.split(" ")[0]}.</p>
              </div>
            ) : (
              <div style={{ maxWidth: 440, margin: "0 auto", textAlign: "left" }}>
                {[
                  { label: "Name *", k: "name", ph: "Max Mustermann", type: "text" },
                  { label: "E-Mail *", k: "email", ph: "max@firma.de", type: "email" },
                  { label: "Telefon", k: "phone", ph: "+49 170 1234567", type: "tel" },
                  { label: "Firma", k: "company", ph: "Firmenname", type: "text" },
                ].map((f, idx) => (
                  <div key={idx} style={{ marginBottom: 14 }}>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 4 }}>{f.label}</label>
                    <input type={f.type} value={form[f.k]} onChange={e => setForm({ ...form, [f.k]: e.target.value })} placeholder={f.ph}
                      style={{ width: "100%", padding: "12px 14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, color: "#ffffff", fontSize: 15, fontFamily: "inherit", boxSizing: "border-box", outline: "none" }} />
                    {f.k === "email" && form.email && !emailValid && <span style={{ color: "#EF4444", fontSize: 12 }}>Bitte gültige E-Mail eingeben</span>}
                    {f.k === "phone" && form.phone && !phoneValid && <span style={{ color: "#EF4444", fontSize: 12 }}>Bitte gültige Telefonnummer</span>}
                  </div>
                ))}
                <label style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "12px 0 16px", cursor: "pointer" }}>
                  <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)} style={{ marginTop: 3, accentColor: "#1B98E0" }} />
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.5 }}>
                    Ich stimme der <a href="/datenschutz" target="_blank" style={{ color: "#1B98E0" }}>Datenschutzerklärung</a> zu und bin damit einverstanden, kontaktiert zu werden.
                  </span>
                </label>
                <button onClick={submit} disabled={!canSubmit} style={{
                  width: "100%", padding: "16px", background: canSubmit ? "#ffffff" : "rgba(255,255,255,0.2)", border: "none", borderRadius: 10,
                  color: canSubmit ? "#023B5B" : "rgba(255,255,255,0.5)", fontSize: 16, fontWeight: 700, cursor: canSubmit ? "pointer" : "default", fontFamily: "inherit",
                }}>
                  Rückruf anfordern →
                </button>
              </div>
            )}
            <p className="bp-cta-fine" style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 16 }}>Robert Engel · Geschäftsführer TalentSuite · 100% kostenlos &amp; unverbindlich</p>
          </div>
        </div>
      </div>
    </div>
  );
}
