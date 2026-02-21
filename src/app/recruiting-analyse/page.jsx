"use client";
import React, { useState, useEffect } from "react";

const B = "#023B5B", D = "#011E2F", A = "#1B98E0", G = "#10B981", W = "#ffffff", L = "#f0f4f7", R = "#EF4444";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

const steps = [
  { icon: "📊", title: "Analyse Ihrer Situation", desc: "Wir schauen uns Ihre offenen Stellen, bisherigen Recruiting-Maßnahmen und Ihre Branche an." },
  { icon: "🎯", title: "Konkrete Strategie", desc: "Sie erfahren, über welche Kanäle und mit welcher Ansprache Sie Ihre Zielgruppe am besten erreichen." },
  { icon: "💰", title: "Transparente Kalkulation", desc: "Sie erhalten eine ehrliche Einschätzung, was eine Kampagne kosten würde und welche Ergebnisse realistisch sind." },
];

const results = [
  { n: "50+", l: "Unternehmen betreut" },
  { n: "15-25€", l: "Ø Kosten pro Bewerbung" },
  { n: "30 Tage", l: "Ø Zeit bis zur Einstellung" },
  { n: "12-18%", l: "Ø Conversion-Rate" },
];

const objections = [
  { q: "Ist das wirklich kostenlos?", a: "Ja, zu 100%. Die Analyse ist eine unverbindliche Erstberatung. Wir zeigen Ihnen, ob und wie wir helfen können. Kein Vertrag, kein Kleingedrucktes." },
  { q: "Ich wurde schon mal von einer Agentur enttäuscht.", a: "Das hören wir oft. Der Unterschied: Wir sind auf Handwerk, Pflege & Gastro spezialisiert. Keine generischen Templates, sondern branchenspezifische Kampagnen mit messbaren Ergebnissen." },
  { q: "Lohnt sich das bei nur 1-2 offenen Stellen?", a: "Gerade dann. Jede unbesetzte Stelle kostet Sie 5.000-8.000€ pro Monat an Produktivitätsverlust. Eine gezielte Kampagne rechnet sich oft schon nach wenigen Wochen." },
  { q: "Wie schnell sehe ich Ergebnisse?", a: "Die ersten Bewerbungen kommen in der Regel innerhalb von 7-14 Tagen nach Kampagnenstart. Eine Einstellung erreichen unsere Kunden im Schnitt nach 30 Tagen." },
];

export default function RecruitingAnalyse() {
  const mob = useIsMobile();
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${D} 0%, ${B} 50%, #0A4D72 100%)`, padding: mob ? "48px 16px 56px" : "80px 24px 88px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${A}12, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ display: "inline-block", background: `${G}20`, color: G, padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
            20 Minuten · 100% kostenlos · Unverbindlich
          </span>
          <h1 style={{ color: W, fontSize: mob ? 28 : 44, fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
            Kostenlose Recruiting-Analyse für Ihren Betrieb
          </h1>
          <p style={{ color: `${W}80`, fontSize: mob ? 16 : 20, maxWidth: 620, margin: "0 auto 28px", lineHeight: 1.6 }}>
            In 20 Minuten erfahren Sie, wie Sie qualifizierte Fachkräfte über Social Media finden — konkret, ehrlich und auf Ihre Branche zugeschnitten.
          </p>
          <a href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", padding: "18px 48px", background: W, borderRadius: 12, color: B, fontSize: 18, fontWeight: 800, textDecoration: "none", fontFamily: "inherit", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
            Jetzt Termin wählen →
          </a>
          <p style={{ color: `${W}50`, fontSize: 13, marginTop: 12 }}>Mit Robert Engel, Geschäftsführer TalentSuite</p>
        </div>
      </div>

      <div style={{ background: L, padding: mob ? "32px 16px 48px" : "56px 24px 72px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

          {/* Results bar */}
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 36 }}>
            {results.map((r, i) => (
              <div key={i} style={{ background: W, borderRadius: 14, padding: "18px 14px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: A }}>{r.n}</div>
                <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>{r.l}</div>
              </div>
            ))}
          </div>

          {/* What you get */}
          <div style={{ background: W, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: B, fontSize: mob ? 20 : 24, fontWeight: 700, margin: "0 0 20px", textAlign: "center" }}>
              Was Sie in der Analyse erfahren
            </h2>
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < steps.length - 1 ? 20 : 0, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${A}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <h3 style={{ color: B, fontSize: 17, fontWeight: 700, margin: "0 0 4px" }}>{s.title}</h3>
                  <p style={{ color: "#64748B", fontSize: 15, margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SEO content */}
          <div style={{ background: W, borderRadius: 16, padding: mob ? "20px 18px" : "28px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>Warum die meisten Betriebe keine Bewerbungen bekommen</h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
              Die Wahrheit ist unbequem: 72% aller Fachkräfte in Deutschland sind nicht aktiv auf Jobsuche. Sie scrollen nicht auf StepStone, Indeed oder der Jobbörse der Arbeitsagentur. Aber sie verbringen täglich 90+ Minuten auf Social Media — auf Facebook, Instagram und TikTok.
            </p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
              Klassische Stellenanzeigen auf Jobportalen erreichen nur die 20-28% der Fachkräfte, die aktiv suchen. Das bedeutet: Sie konkurrieren mit hunderten anderen Betrieben um denselben kleinen Pool an Bewerbern. Das treibt die Kosten hoch und die Qualität runter.
            </p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Performance Recruiting über Social Media dreht dieses Verhältnis um. Sie erreichen die 80% passiver Fachkräfte, die zwar nicht aktiv suchen, aber für das richtige Angebot offen sind. Mit branchenspezifischen Kampagnen, authentischen Arbeitgebereinblicken und einem Bewerbungsprozess, der in unter 60 Sekunden funktioniert.
            </p>
          </div>

          {/* FAQ / Objections */}
          <div style={{ background: W, borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ color: B, fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 16px" }}>Häufige Fragen</h2>
            {objections.map((o, i) => (
              <div key={i} style={{ borderBottom: i < objections.length - 1 ? `1px solid ${L}` : "none" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{
                  width: "100%", padding: "14px 0", background: "none", border: "none", cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "inherit", textAlign: "left",
                }}>
                  <span style={{ color: B, fontSize: 15, fontWeight: 600 }}>{o.q}</span>
                  <span style={{ color: A, fontSize: 18, transition: "transform 0.2s", transform: openFaq === i ? "rotate(180deg)" : "none" }}>▼</span>
                </button>
                {openFaq === i && <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 14px", paddingLeft: 0 }}>{o.a}</p>}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ background: `linear-gradient(135deg, ${D}, ${B})`, borderRadius: 16, padding: mob ? "32px 18px" : "44px 32px", textAlign: "center" }}>
            <h2 style={{ color: W, fontSize: mob ? 22 : 28, fontWeight: 800, margin: "0 0 12px" }}>
              Bereit, Fachkräfte zu finden?
            </h2>
            <p style={{ color: `${W}70`, fontSize: mob ? 15 : 17, margin: "0 0 24px", lineHeight: 1.6, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
              20 Minuten, die den Unterschied machen können. Kostenlos und unverbindlich.
            </p>
            <a href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", padding: "18px 48px", background: W, borderRadius: 12, color: B, fontSize: 18, fontWeight: 800, textDecoration: "none", fontFamily: "inherit" }}>
              Jetzt Termin wählen →
            </a>
            <p style={{ color: `${W}40`, fontSize: 12, marginTop: 12 }}>Robert Engel · Geschäftsführer TalentSuite · Keine Verpflichtung</p>
          </div>
        </div>
      </div>
    </>
  );
}
