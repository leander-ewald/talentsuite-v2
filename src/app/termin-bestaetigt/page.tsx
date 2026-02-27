"use client";

import { useEffect } from "react";

const ACCENT = "#2D8CFF";

export default function TerminBestaetigt() {
  useEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("data-tb-styles", "true");
    style.textContent = `
      #tb { padding-top: 80px !important; }

      #tb h1, #tb h2, #tb h3, #tb h4, #tb h5, #tb h6,
      #tb span, #tb li, #tb p, #tb div, #tb label, #tb button,
      #tb input, #tb textarea, #tb summary, #tb a {
        color: #023B5B !important;
      }

      #tb h1 { font-size: clamp(28px, 5vw, 40px) !important; line-height: 1.2 !important; font-weight: 800 !important; }
      #tb h2 { font-size: clamp(22px, 3.5vw, 28px) !important; line-height: 1.3 !important; font-weight: 700 !important; }
      #tb h3 { font-size: 16px !important; line-height: 1.4 !important; font-weight: 700 !important; }
      #tb p  { font-size: 15px !important; line-height: 1.6 !important; opacity: 1 !important; }
      #tb span { font-size: inherit !important; }

      #tb .tb-container      { max-width: 720px !important; margin: 0 auto !important; padding: 0 24px !important; }
      #tb .tb-container-wide { max-width: 960px !important; margin: 0 auto !important; padding: 0 24px !important; }
      #tb .tb-card            { background: #ffffff !important; border-radius: 20px !important; padding: 48px 40px !important; box-shadow: 0 4px 30px rgba(0,0,0,0.08) !important; }
      #tb .tb-grid-3          { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 32px !important; }
      #tb .tb-stat-val        { font-size: clamp(22px, 4vw, 30px) !important; }

      #tb [data-tb="white"]   { color: #ffffff !important; }
      #tb [data-tb="muted"]   { color: #cccccc !important; }
      #tb [data-tb="body"]    { color: #475569 !important; }
      #tb [data-tb="gray"]    { color: #64748B !important; }
      #tb [data-tb="accent"]  { color: #2D8CFF !important; }
      #tb [data-tb="link"]    { color: #2D8CFF !important; text-decoration: underline !important; }
      #tb [data-tb="pribtn"]  { color: #ffffff !important; font-size: 16px !important; }

      @media (max-width: 768px) {
        #tb { padding-top: 60px !important; }
        #tb h1 { font-size: 26px !important; }
        #tb h2 { font-size: 20px !important; }
        #tb .tb-grid-3 { grid-template-columns: 1fr !important; gap: 24px !important; }
        #tb .tb-card { padding: 28px 20px !important; border-radius: 16px !important; }
        #tb .tb-container, #tb .tb-container-wide { padding: 0 16px !important; }
        #tb .tb-stat-val { font-size: 24px !important; }
      }
      @media (max-width: 480px) {
        #tb h1 { font-size: 24px !important; }
        #tb h2 { font-size: 18px !important; }
        #tb .tb-card { padding: 24px 16px !important; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div id="tb">

        {/* HERO */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="tb-container">
            <div style={{
              width: 80, height: 80, borderRadius: "50%",
              background: "rgba(45,140,255,0.15)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              marginBottom: 32, fontSize: 40,
            }}>
              ✅
            </div>
            <h1 data-tb="white">Ihr Termin ist bestätigt!</h1>
            <p data-tb="muted" style={{ marginTop: 20 }}>
              Vielen Dank — wir freuen uns auf das Gespräch mit Ihnen.
            </p>
          </div>
        </div>

        {/* STEPS HEADING */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 data-tb="white">So geht es weiter</h2>
        </div>

        {/* STEPS CARD */}
        <div style={{ marginBottom: 60 }}>
          <div className="tb-container-wide">
            <div className="tb-card">
              <div className="tb-grid-3">
                {[
                  { icon: "📧", title: "1. Bestätigungs-E-Mail prüfen", desc: "Sie erhalten in Kürze eine Kalender-Einladung per E-Mail mit allen Details." },
                  { icon: "📋", title: "2. Kurz vorbereiten", desc: "Überlegen Sie, welche Stellen Sie besetzen möchten und was Sie bisher versucht haben." },
                  { icon: "💬", title: "3. Gespräch führen", desc: "In 20 Minuten analysieren wir gemeinsam Ihre Situation und zeigen Ihnen konkrete nächste Schritte." },
                ].map((step, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{
                      width: 60, height: 60, borderRadius: 16, background: "#f0f5fa",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      fontSize: 30, marginBottom: 20,
                    }}>
                      {step.icon}
                    </div>
                    <h3>{step.title}</h3>
                    <p data-tb="body" style={{ marginTop: 10 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WAS SIE ERWARTET */}
        <div style={{ marginBottom: 60 }}>
          <div className="tb-container">
            <div className="tb-card">
              <h2 style={{ textAlign: "center", marginBottom: 32 }}>Was Sie in der Analyse erwartet</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "Ehrliche Einschätzung Ihrer aktuellen Recruiting-Situation",
                  "Konkrete Strategie für Ihre Branche und offenen Stellen",
                  "Transparente Kalkulation — was eine Kampagne kosten würde",
                  "Quick Wins, die Sie sofort umsetzen können",
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 14,
                    padding: "14px 18px", background: "#f8fafb",
                    borderRadius: 12, borderLeft: `3px solid ${ACCENT}`,
                  }}>
                    <span data-tb="accent" style={{ fontSize: 18, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span data-tb="body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div style={{ marginBottom: 60 }}>
          <div className="tb-container">
            <div className="tb-grid-3">
              {[
                { value: "50+", label: "Betriebe betreut" },
                { value: "15-25€", label: "Ø Kosten pro Bewerbung" },
                { value: "30 Tage", label: "Ø bis zur Einstellung" },
              ].map((stat, i) => (
                <div key={i} className="tb-card" style={{ textAlign: "center", padding: "28px 16px" }}>
                  <div data-tb="accent" className="tb-stat-val" style={{ fontWeight: 800, marginBottom: 8 }}>
                    {stat.value}
                  </div>
                  <p data-tb="gray" style={{ margin: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROBERT ENGEL */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="tb-container">
            <p data-tb="white" style={{ fontWeight: 600 }}>Robert Engel · Geschäftsführer TalentSuite</p>
            <p data-tb="muted" style={{ marginTop: 10 }}>
              Fragen vorab? Schreiben Sie uns an{" "}
              <a data-tb="link" href="mailto:info@talentsuite.io">info@talentsuite.io</a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", paddingBottom: 100 }}>
          <div className="tb-container" style={{ maxWidth: 600 }}>
            <h2 data-tb="white">Bereit für messbares Wachstum?</h2>
            <p data-tb="muted" style={{ marginTop: 18, marginBottom: 32 }}>
              In einem kostenlosen Erstgespräch analysieren wir Ihre Situation und zeigen Ihnen, welche Hebel für Ihr Unternehmen den größten Impact haben.
            </p>
            <a data-tb="pribtn" href="https://calendar.app.google/QFoADWcRwwuYUoky8" style={{
              display: "inline-block", padding: "16px 36px", borderRadius: 12,
              fontWeight: 700, textDecoration: "none", background: ACCENT,
              boxShadow: "0 4px 20px rgba(45,140,255,0.3)",
            }}>
              Kostenlose Potenzialanalyse buchen
            </a>
            <p data-tb="muted" style={{ marginTop: 20, opacity: 0.6 }}>
              ✓ 100% kostenlos &nbsp;&nbsp; ✓ Unverbindlich &nbsp;&nbsp; ✓ Nächster Termin in 48h
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
