"use client";

import Head from "next/head";

const ACCENT = "#2D8CFF";
const BRAND = "#023B5B";

export default function TerminBestaetigt() {
  return (
    <>
      <Head>
        <title>Termin bestätigt | TalentSuite</title>
        <meta name="description" content="Ihr Termin mit TalentSuite ist bestätigt." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div id="tb">

        {/* ══════════ HERO ══════════ */}
        <div className="tb-section" style={{ textAlign: "center", paddingTop: 100, paddingBottom: 60 }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
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

        {/* ══════════ STEPS HEADING ══════════ */}
        <div className="tb-section" style={{ textAlign: "center", paddingBottom: 40 }}>
          <h2 data-tb="white">So geht es weiter</h2>
        </div>

        {/* ══════════ STEPS CARD ══════════ */}
        <div className="tb-section" style={{ paddingBottom: 80 }}>
          <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
            <div style={{
              background: "#ffffff", borderRadius: 20,
              padding: "48px 40px",
              boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
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

        {/* ══════════ WAS SIE ERWARTET ══════════ */}
        <div className="tb-section" style={{ paddingBottom: 80 }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
            <div style={{
              background: "#ffffff", borderRadius: 20,
              padding: "48px 40px",
              boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
            }}>
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

        {/* ══════════ STATS ══════════ */}
        <div className="tb-section" style={{ paddingBottom: 80 }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, textAlign: "center" }}>
              {[
                { value: "50+", label: "Betriebe betreut" },
                { value: "15-25€", label: "Ø Kosten pro Bewerbung" },
                { value: "30 Tage", label: "Ø bis zur Einstellung" },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: "#ffffff", borderRadius: 16, padding: "28px 16px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                }}>
                  <div data-tb="accent" style={{ fontWeight: 800, marginBottom: 8 }} className="tb-stat-val">
                    {stat.value}
                  </div>
                  <p data-tb="gray" style={{ margin: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ ROBERT ENGEL ══════════ */}
        <div className="tb-section" style={{ textAlign: "center", paddingBottom: 80 }}>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
            <p data-tb="white" style={{ fontWeight: 600 }}>
              Robert Engel · Geschäftsführer TalentSuite
            </p>
            <p data-tb="muted" style={{ marginTop: 10 }}>
              Fragen vorab? Schreiben Sie uns an{" "}
              <a data-tb="link" href="mailto:info@talentsuite.io">info@talentsuite.io</a>
            </p>
          </div>
        </div>

        {/* ══════════ CTA ══════════ */}
        <div className="tb-section" style={{ textAlign: "center", padding: "80px 24px 100px" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 data-tb="white">Bereit für messbares Wachstum?</h2>
            <p data-tb="muted" style={{ marginTop: 18, marginBottom: 32 }}>
              In einem kostenlosen Erstgespräch analysieren wir Ihre Situation und zeigen Ihnen, welche Hebel für Ihr Unternehmen den größten Impact haben.
            </p>
            <a data-tb="pribtn" href="https://calendar.app.google/mU29snzEsgqsnMXy8" style={{
              display: "inline-block", padding: "16px 36px", borderRadius: 12,
              fontWeight: 700, textDecoration: "none",
              background: ACCENT,
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
