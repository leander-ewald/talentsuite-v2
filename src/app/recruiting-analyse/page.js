"use client";

import Head from "next/head";
import { useState } from "react";

const ACCENT = "#2D8CFF";
const BRAND = "#023B5B";

function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: "#ffffff",
        borderRadius: 14,
        padding: "20px 24px",
        cursor: "pointer",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.2s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <h3 style={{ margin: 0 }}>{question}</h3>
        <span data-ra="accent" style={{ fontSize: 22, fontWeight: 600, flexShrink: 0, transition: "transform 0.3s", transform: open ? "rotate(45deg)" : "rotate(0)" }}>+</span>
      </div>
      {open && (
        <p data-ra="body" style={{ marginTop: 14, marginBottom: 0 }}>{answer}</p>
      )}
    </div>
  );
}

export default function RecruitingAnalyse() {
  return (
    <>
      <Head>
        <title>Kostenlose Recruiting-Analyse | TalentSuite</title>
        <meta name="description" content="Kostenlose Recruiting-Analyse — Fachkräfte finden in 30 Tagen. In 20 Minuten erfahren Sie, wie Sie qualifizierte Fachkräfte über Social Media finden." />
        <link rel="canonical" href="https://talentsuite.io/recruiting-analyse" />
        <meta property="og:title" content="Kostenlose Recruiting-Analyse | TalentSuite" />
        <meta property="og:description" content="In 20 Minuten erfahren Sie, wie Sie Fachkräfte über Social Media finden — konkret, ehrlich und auf Ihre Branche zugeschnitten." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talentsuite.io/recruiting-analyse" />
      </Head>

      <div id="ra">

        {/* ══════════ HERO ══════════ */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div className="ra-container">
            <p data-ra="muted" style={{ marginBottom: 16, fontSize: 14, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              20 Minuten · 100% kostenlos · Unverbindlich
            </p>
            <h1 data-ra="white">
              Kostenlose Recruiting-Analyse für Ihren Betrieb
            </h1>
            <p data-ra="muted" style={{ marginTop: 20, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
              In 20 Minuten erfahren Sie, wie Sie qualifizierte Fachkräfte über Social Media finden — konkret, ehrlich und auf Ihre Branche zugeschnitten.
            </p>
            <div style={{ marginTop: 32 }}>
              <a data-ra="pribtn" href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" style={{
                display: "inline-block", padding: "16px 36px", borderRadius: 12,
                fontWeight: 700, textDecoration: "none", background: ACCENT,
                boxShadow: "0 4px 20px rgba(45,140,255,0.3)",
              }}>
                Jetzt Termin wählen →
              </a>
            </div>
            <p data-ra="muted" style={{ marginTop: 16, opacity: 0.6 }}>
              Mit Robert Engel, Geschäftsführer TalentSuite
            </p>
          </div>
        </div>

        {/* ══════════ STATS ══════════ */}
        <div style={{ marginBottom: 80 }}>
          <div className="ra-container-wide">
            <div className="ra-grid-4">
              {[
                { value: "50+", label: "Unternehmen betreut" },
                { value: "15-25€", label: "Ø Kosten pro Bewerbung" },
                { value: "30 Tage", label: "Ø Zeit bis zur Einstellung" },
                { value: "12-18%", label: "Ø Conversion-Rate" },
              ].map((stat, i) => (
                <div key={i} className="ra-card" style={{ textAlign: "center", padding: "28px 16px" }}>
                  <div data-ra="accent" className="ra-stat-val" style={{ fontWeight: 800, marginBottom: 8 }}>
                    {stat.value}
                  </div>
                  <p data-ra="gray" style={{ margin: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ WAS SIE ERFAHREN ══════════ */}
        <div style={{ marginBottom: 80 }}>
          <div className="ra-container-wide">
            <h2 data-ra="white" style={{ textAlign: "center", marginBottom: 40 }}>Was Sie in der Analyse erfahren</h2>
            <div className="ra-grid-3">
              {[
                { icon: "📊", title: "Analyse Ihrer Situation", desc: "Wir schauen uns Ihre offenen Stellen, bisherigen Recruiting-Maßnahmen und Ihre Branche an." },
                { icon: "🎯", title: "Konkrete Strategie", desc: "Sie erfahren, über welche Kanäle und mit welcher Ansprache Sie Ihre Zielgruppe am besten erreichen." },
                { icon: "💰", title: "Transparente Kalkulation", desc: "Sie erhalten eine ehrliche Einschätzung, was eine Kampagne kosten würde und welche Ergebnisse realistisch sind." },
              ].map((step, i) => (
                <div key={i} className="ra-card" style={{ textAlign: "center" }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: 16, background: "#f0f5fa",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: 30, marginBottom: 20,
                  }}>
                    {step.icon}
                  </div>
                  <h3>{step.title}</h3>
                  <p data-ra="body" style={{ marginTop: 10 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ WARUM KEINE BEWERBUNGEN ══════════ */}
        <div style={{ marginBottom: 80 }}>
          <div className="ra-container">
            <div className="ra-card">
              <h2 style={{ textAlign: "center", marginBottom: 28 }}>Warum die meisten Betriebe keine Bewerbungen bekommen</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <p data-ra="body" style={{ margin: 0 }}>
                  Die Wahrheit ist unbequem: 72% aller Fachkräfte in Deutschland sind nicht aktiv auf Jobsuche. Sie scrollen nicht auf StepStone, Indeed oder der Jobbörse der Arbeitsagentur. Aber sie verbringen täglich 90+ Minuten auf Social Media — auf Facebook, Instagram und TikTok.
                </p>
                <p data-ra="body" style={{ margin: 0 }}>
                  Klassische Stellenanzeigen auf Jobportalen erreichen nur die 20-28% der Fachkräfte, die aktiv suchen. Das bedeutet: Sie konkurrieren mit hunderten anderen Betrieben um denselben kleinen Pool an Bewerbern. Das treibt die Kosten hoch und die Qualität runter.
                </p>
                <p data-ra="body" style={{ margin: 0 }}>
                  Performance Recruiting über Social Media dreht dieses Verhältnis um. Sie erreichen die 80% passiver Fachkräfte, die zwar nicht aktiv suchen, aber für das richtige Angebot offen sind. Mit branchenspezifischen Kampagnen, authentischen Arbeitgebereinblicken und einem Bewerbungsprozess, der in unter 60 Sekunden funktioniert.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════ FAQ ══════════ */}
        <div style={{ marginBottom: 80 }}>
          <div className="ra-container">
            <h2 data-ra="white" style={{ textAlign: "center", marginBottom: 32 }}>Häufige Fragen</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <FAQ
                question="Ist das wirklich kostenlos?"
                answer="Ja, zu 100%. Die Recruiting-Analyse ist unser Kennenlernen. Wir schauen uns Ihre Situation an und geben Ihnen eine ehrliche Einschätzung — ohne Verpflichtung, ohne versteckte Kosten."
              />
              <FAQ
                question="Ich wurde schon mal von einer Agentur enttäuscht."
                answer="Das hören wir leider oft. Deshalb arbeiten wir datenbasiert und transparent. Sie sehen jederzeit, was Ihre Kampagne kostet und welche Ergebnisse sie liefert. Keine leeren Versprechen."
              />
              <FAQ
                question="Lohnt sich das bei nur 1-2 offenen Stellen?"
                answer="Absolut. Gerade wenn Sie nur wenige Stellen besetzen müssen, ist eine gezielte Kampagne effizienter als monatelanges Warten auf Jobbörsen."
              />
              <FAQ
                question="Wie schnell sehe ich Ergebnisse?"
                answer="In der Regel erhalten Sie die ersten Bewerbungen innerhalb der ersten 7-14 Tage nach Kampagnenstart. Die meisten unserer Kunden stellen innerhalb von 30 Tagen ein."
              />
            </div>
          </div>
        </div>

        {/* ══════════ FINAL CTA ══════════ */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="ra-container" style={{ maxWidth: 600 }}>
            <h2 data-ra="white">Bereit, Fachkräfte zu finden?</h2>
            <p data-ra="muted" style={{ marginTop: 14, marginBottom: 32 }}>
              20 Minuten, die den Unterschied machen können. Kostenlos und unverbindlich.
            </p>
            <a data-ra="pribtn" href="https://calendar.app.google/CQpLAnRw8tzQUEQz5" style={{
              display: "inline-block", padding: "16px 36px", borderRadius: 12,
              fontWeight: 700, textDecoration: "none", background: ACCENT,
              boxShadow: "0 4px 20px rgba(45,140,255,0.3)",
            }}>
              Jetzt Termin wählen →
            </a>
            <p data-ra="muted" style={{ marginTop: 16, opacity: 0.6 }}>
              Robert Engel · Geschäftsführer TalentSuite · Keine Verpflichtung
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
