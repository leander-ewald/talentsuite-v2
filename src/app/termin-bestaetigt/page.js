"use client";

import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

/*
 * TERMIN BESTÄTIGT – Confirmation Page
 * ─────────────────────────────────────
 * globals.css sets: h1,h2,h3,p,span { color: #fff !important }
 * This CANNOT be overridden by inline styles.
 * Solution: useEffect injects a <style> tag with triple-ID specificity
 * (#tb#tb#tb selector) which beats any !important tag selector.
 */

const BRAND = "#023B5B";
const ACCENT = "#2D8CFF";

export default function TerminBestaetigt() {
  // ── Inject high-specificity CSS overrides ──
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* Triple-ID specificity beats any tag-level !important */
      #tb#tb#tb {
        color: #ffffff !important;
      }

      /* WHITE CARD areas: dark text */
      #tb#tb#tb [data-tb="card"] h2,
      #tb#tb#tb [data-tb="card"] h3,
      #tb#tb#tb [data-tb="card"] p,
      #tb#tb#tb [data-tb="card"] span,
      #tb#tb#tb [data-tb="card"] div {
        color: #1a1a1a !important;
      }
      #tb#tb#tb [data-tb="card"] [data-tb="sub"] {
        color: #555555 !important;
      }
      #tb#tb#tb [data-tb="card"] [data-tb="accent"] {
        color: ${ACCENT} !important;
      }
      #tb#tb#tb [data-tb="card"] [data-tb="stat-val"] {
        color: ${BRAND} !important;
      }
      #tb#tb#tb [data-tb="card"] [data-tb="stat-lbl"] {
        color: #666666 !important;
      }
      #tb#tb#tb [data-tb="card"] [data-tb="check-txt"] {
        color: #333333 !important;
      }

      /* DARK BG areas: white text */
      #tb#tb#tb [data-tb="light"] {
        color: #ffffff !important;
      }
      #tb#tb#tb [data-tb="light-sub"] {
        color: #d0d0d0 !important;
      }
      #tb#tb#tb [data-tb="light-muted"] {
        color: #cccccc !important;
      }
      #tb#tb#tb [data-tb="link"] {
        color: ${ACCENT} !important;
        text-decoration: underline !important;
      }
      #tb#tb#tb [data-tb="btn"] {
        color: #ffffff !important;
        background: ${ACCENT} !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <Head>
        <title>Termin bestätigt | TalentSuite</title>
        <meta name="description" content="Ihr Termin mit TalentSuite ist bestätigt." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div id="tb">
        {/* ══════════ HERO – Dark bg ══════════ */}
        <section style={{ textAlign: "center", padding: "60px 24px 50px", maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            width: 72, height: 72, borderRadius: "50%",
            background: "rgba(45,140,255,0.15)",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            marginBottom: 24, fontSize: 36,
          }}>
            ✅
          </div>

          <h1 data-tb="light" style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.2 }}>
            Ihr Termin ist bestätigt!
          </h1>
          <p data-tb="light-sub" style={{ fontSize: "clamp(16px,2.5vw,19px)", margin: 0, lineHeight: 1.6 }}>
            Vielen Dank — wir freuen uns auf das Gespräch mit Ihnen.
          </p>
        </section>

        {/* ══════════ STEPS HEADING – Dark bg ══════════ */}
        <section style={{ padding: "0 24px 0", maxWidth: 900, margin: "0 auto" }}>
          <h2 data-tb="light" style={{ fontSize: "clamp(22px,4vw,30px)", fontWeight: 700, textAlign: "center", margin: "0 0 32px" }}>
            So geht es weiter
          </h2>
        </section>

        {/* ══════════ STEPS – White card ══════════ */}
        <section style={{ padding: "0 24px 60px", maxWidth: 900, margin: "0 auto" }}>
          <div data-tb="card" style={{
            background: "#ffffff", borderRadius: 20,
            padding: "clamp(24px,5vw,44px)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
              {[
                { icon: "📧", title: "1. Bestätigungs-E-Mail prüfen", desc: "Sie erhalten in Kürze eine Kalender-Einladung per E-Mail mit allen Details." },
                { icon: "📋", title: "2. Kurz vorbereiten", desc: "Überlegen Sie, welche Stellen Sie besetzen möchten und was Sie bisher versucht haben." },
                { icon: "💬", title: "3. Gespräch führen", desc: "In 20 Minuten analysieren wir gemeinsam Ihre Situation und zeigen Ihnen konkrete nächste Schritte." },
              ].map((step, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14, background: "#f0f5fa",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: 28, marginBottom: 16,
                  }}>
                    {step.icon}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px" }}>{step.title}</h3>
                  <p data-tb="sub" style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ WAS SIE ERWARTET – White card ══════════ */}
        <section style={{ padding: "0 24px 60px", maxWidth: 720, margin: "0 auto" }}>
          <div data-tb="card" style={{
            background: "#ffffff", borderRadius: 20,
            padding: "clamp(28px,5vw,44px)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
          }}>
            <h2 style={{ fontSize: "clamp(20px,3.5vw,26px)", fontWeight: 700, margin: "0 0 28px", textAlign: "center" }}>
              Was Sie in der Analyse erwartet
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Ehrliche Einschätzung Ihrer aktuellen Recruiting-Situation",
                "Konkrete Strategie für Ihre Branche und offenen Stellen",
                "Transparente Kalkulation — was eine Kampagne kosten würde",
                "Quick Wins, die Sie sofort umsetzen können",
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  padding: "12px 16px", background: "#f8fafb",
                  borderRadius: 10, borderLeft: `3px solid ${ACCENT}`,
                }}>
                  <span data-tb="accent" style={{ fontSize: 18, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span data-tb="check-txt" style={{ fontSize: 15, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ STATS – White cards ══════════ */}
        <section style={{ padding: "0 24px 60px", maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, textAlign: "center" }}>
            {[
              { value: "50+", label: "Betriebe betreut" },
              { value: "15-25€", label: "Ø Kosten pro Bewerbung" },
              { value: "30 Tage", label: "Ø bis zur Einstellung" },
            ].map((stat, i) => (
              <div key={i} data-tb="card" style={{
                background: "#ffffff", borderRadius: 14, padding: "24px 12px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }}>
                <div data-tb="stat-val" style={{ fontSize: "clamp(22px,4vw,30px)", fontWeight: 800, marginBottom: 6 }}>
                  {stat.value}
                </div>
                <div data-tb="stat-lbl" style={{ fontSize: "clamp(11px,2vw,13px)", lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════ ROBERT ENGEL – Dark bg ══════════ */}
        <section style={{ padding: "0 24px 60px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p data-tb="light" style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px" }}>
            Robert Engel · Geschäftsführer TalentSuite
          </p>
          <p data-tb="light-muted" style={{ fontSize: 14, margin: 0 }}>
            Fragen vorab? Schreiben Sie uns an{" "}
            <a data-tb="link" href="mailto:info@talentsuite.io">info@talentsuite.io</a>
          </p>
        </section>

        {/* ══════════ CTA – Dark bg ══════════ */}
        <section style={{ padding: "60px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 data-tb="light" style={{ fontSize: "clamp(22px,4vw,28px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.3 }}>
              Bereit für messbares Wachstum?
            </h2>
            <p data-tb="light-sub" style={{ fontSize: 15, lineHeight: 1.6, margin: "0 0 28px" }}>
              In einem kostenlosen Erstgespräch analysieren wir Ihre Situation und zeigen Ihnen, welche Hebel für Ihr Unternehmen den größten Impact haben.
            </p>
            <a data-tb="btn" href="https://calendar.app.google/mU29snzEsgqsnMXy8" style={{
              display: "inline-block", padding: "14px 32px", borderRadius: 10,
              fontSize: 16, fontWeight: 700, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(45,140,255,0.3)",
            }}>
              Kostenlose Potenzialanalyse buchen
            </a>
            <p data-tb="light-muted" style={{ fontSize: 12, margin: "16px 0 0" }}>
              ✓ 100% kostenlos &nbsp;&nbsp; ✓ Unverbindlich &nbsp;&nbsp; ✓ Nächster Termin in 48h
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
