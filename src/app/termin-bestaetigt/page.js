"use client";

import Head from "next/head";
import Link from "next/link";

/*
 * TERMIN BESTÄTIGT – Confirmation Page
 * ─────────────────────────────────────
 * FIX: All text uses WebkitTextFillColor + color to override globals.css
 * White card sections → DARK text (#1a1a1a, #555)
 * Dark background sections → WHITE text (#fff, #e0e0e0)
 * No reliance on CSS variables or inherited colors.
 */

const BRAND = "#023B5B";
const ACCENT = "#2D8CFF";

export default function TerminBestaetigt() {
  return (
    <>
      <Head>
        <title>Termin bestätigt | TalentSuite</title>
        <meta
          name="description"
          content="Ihr Termin mit TalentSuite ist bestätigt. So bereiten Sie sich optimal auf das Gespräch vor."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* ══════════ HERO – sits on dark global background ══════════ */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 24px 50px",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "rgba(45, 140, 255, 0.15)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
            fontSize: 36,
          }}
        >
          ✅
        </div>

        <h1
          style={{
            color: "#ffffff",
            WebkitTextFillColor: "#ffffff",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 800,
            margin: "0 0 16px",
            lineHeight: 1.2,
          }}
        >
          <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>
            Ihr Termin ist bestätigt!
          </span>
        </h1>
        <p
          style={{
            color: "#d0d0d0",
            WebkitTextFillColor: "#d0d0d0",
            fontSize: "clamp(16px, 2.5vw, 19px)",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: "#d0d0d0", WebkitTextFillColor: "#d0d0d0" }}>
            Vielen Dank — wir freuen uns auf das Gespräch mit Ihnen.
          </span>
        </p>
      </section>

      {/* ══════════ STEPS – White card on dark bg ══════════ */}
      <section
        style={{
          padding: "0 24px 60px",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "#ffffff",
            WebkitTextFillColor: "#ffffff",
            fontSize: "clamp(22px, 4vw, 30px)",
            fontWeight: 700,
            textAlign: "center",
            margin: "0 0 32px",
          }}
        >
          <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>
            So geht es weiter
          </span>
        </h2>

        <div
          style={{
            background: "#ffffff",
            borderRadius: 20,
            padding: "clamp(24px, 5vw, 44px)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 32,
            }}
          >
            {[
              {
                icon: "📧",
                title: "1. Bestätigungs-E-Mail prüfen",
                desc: "Sie erhalten in Kürze eine Kalender-Einladung per E-Mail mit allen Details.",
              },
              {
                icon: "📋",
                title: "2. Kurz vorbereiten",
                desc: "Überlegen Sie, welche Stellen Sie besetzen möchten und was Sie bisher versucht haben.",
              },
              {
                icon: "💬",
                title: "3. Gespräch führen",
                desc: "In 20 Minuten analysieren wir gemeinsam Ihre Situation und zeigen Ihnen konkrete nächste Schritte.",
              },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "#f0f5fa",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    marginBottom: 16,
                  }}
                >
                  {step.icon}
                </div>
                <h3
                  style={{
                    color: "#1a1a1a",
                    WebkitTextFillColor: "#1a1a1a",
                    fontSize: 16,
                    fontWeight: 700,
                    margin: "0 0 8px",
                  }}
                >
                  <span style={{ color: "#1a1a1a", WebkitTextFillColor: "#1a1a1a" }}>
                    {step.title}
                  </span>
                </h3>
                <p
                  style={{
                    color: "#555555",
                    WebkitTextFillColor: "#555555",
                    fontSize: 14,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  <span style={{ color: "#555555", WebkitTextFillColor: "#555555" }}>
                    {step.desc}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WAS SIE ERWARTET – White card ══════════ */}
      <section
        style={{
          padding: "0 24px 60px",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: 20,
            padding: "clamp(28px, 5vw, 44px)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#1a1a1a",
              WebkitTextFillColor: "#1a1a1a",
              fontSize: "clamp(20px, 3.5vw, 26px)",
              fontWeight: 700,
              margin: "0 0 28px",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#1a1a1a", WebkitTextFillColor: "#1a1a1a" }}>
              Was Sie in der Analyse erwartet
            </span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Ehrliche Einschätzung Ihrer aktuellen Recruiting-Situation",
              "Konkrete Strategie für Ihre Branche und offenen Stellen",
              "Transparente Kalkulation — was eine Kampagne kosten würde",
              "Quick Wins, die Sie sofort umsetzen können",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "12px 16px",
                  background: "#f8fafb",
                  borderRadius: 10,
                  borderLeft: `3px solid ${ACCENT}`,
                }}
              >
                <span
                  style={{
                    color: ACCENT,
                    WebkitTextFillColor: ACCENT,
                    fontSize: 18,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    color: "#333333",
                    WebkitTextFillColor: "#333333",
                    fontSize: 15,
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ STATS – White cards ══════════ */}
      <section
        style={{
          padding: "0 24px 60px",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            textAlign: "center",
          }}
        >
          {[
            { value: "50+", label: "Betriebe betreut" },
            { value: "15-25€", label: "Ø Kosten pro Bewerbung" },
            { value: "30 Tage", label: "Ø bis zur Einstellung" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                borderRadius: 14,
                padding: "24px 12px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  color: BRAND,
                  WebkitTextFillColor: BRAND,
                  fontSize: "clamp(22px, 4vw, 30px)",
                  fontWeight: 800,
                  marginBottom: 6,
                }}
              >
                <span style={{ color: BRAND, WebkitTextFillColor: BRAND }}>
                  {stat.value}
                </span>
              </div>
              <div
                style={{
                  color: "#666666",
                  WebkitTextFillColor: "#666666",
                  fontSize: "clamp(11px, 2vw, 13px)",
                  lineHeight: 1.4,
                }}
              >
                <span style={{ color: "#666666", WebkitTextFillColor: "#666666" }}>
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ ROBERT ENGEL – Dark bg ══════════ */}
      <section
        style={{
          padding: "0 24px 60px",
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#ffffff",
            WebkitTextFillColor: "#ffffff",
            fontSize: 16,
            fontWeight: 600,
            margin: "0 0 8px",
          }}
        >
          <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>
            Robert Engel · Geschäftsführer TalentSuite
          </span>
        </p>
        <p
          style={{
            color: "#cccccc",
            WebkitTextFillColor: "#cccccc",
            fontSize: 14,
            margin: 0,
          }}
        >
          <span style={{ color: "#cccccc", WebkitTextFillColor: "#cccccc" }}>
            Fragen vorab? Schreiben Sie uns an{" "}
          </span>
          <a
            href="mailto:info@talentsuite.io"
            style={{
              color: ACCENT,
              WebkitTextFillColor: ACCENT,
              textDecoration: "underline",
            }}
          >
            info@talentsuite.io
          </a>
        </p>
      </section>

      {/* ══════════ CTA – Dark bg ══════════ */}
      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              color: "#ffffff",
              WebkitTextFillColor: "#ffffff",
              fontSize: "clamp(22px, 4vw, 28px)",
              fontWeight: 700,
              margin: "0 0 14px",
              lineHeight: 1.3,
            }}
          >
            <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>
              Bereit für messbares Wachstum?
            </span>
          </h2>
          <p
            style={{
              color: "#d0d0d0",
              WebkitTextFillColor: "#d0d0d0",
              fontSize: 15,
              lineHeight: 1.6,
              margin: "0 0 28px",
            }}
          >
            <span style={{ color: "#d0d0d0", WebkitTextFillColor: "#d0d0d0" }}>
              In einem kostenlosen Erstgespräch analysieren wir Ihre Situation und
              zeigen Ihnen, welche Hebel für Ihr Unternehmen den größten Impact
              haben.
            </span>
          </p>
          <a
            href="https://calendar.app.google/mU29snzEsgqsnMXy8"
            style={{
              display: "inline-block",
              background: ACCENT,
              color: "#ffffff",
              WebkitTextFillColor: "#ffffff",
              padding: "14px 32px",
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(45,140,255,0.3)",
            }}
          >
            Kostenlose Potenzialanalyse buchen
          </a>
          <p
            style={{
              color: "#cccccc",
              WebkitTextFillColor: "#cccccc",
              fontSize: 12,
              margin: "16px 0 0",
            }}
          >
            <span style={{ color: "#cccccc", WebkitTextFillColor: "#cccccc" }}>
              ✓ 100% kostenlos &nbsp;&nbsp; ✓ Unverbindlich &nbsp;&nbsp; ✓
              Nächster Termin in 48h
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
