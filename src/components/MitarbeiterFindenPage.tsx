"use client";
import React, { useState } from "react";

/* ─── Data contract for each Branchen-SEO page ─── */
export interface MitarbeiterFindenData {
  source: string;          // e.g. "mitarbeiter-finden-bau"
  industry: string;        // e.g. "Baugewerbe"
  heroEmoji: string;
  heroTitle: string;
  heroSub: string;
  heroHint: string;
  stats: { n: string; label: string; c: string }[];
  painEmoji: string;
  painTitle: string;
  painIntro: string;
  painBoxes: { icon: string; text: string; bg: string; border: string }[];
  failTitle: string;
  failText: string;
  solutionTitle: string;
  solutionIntro: string;
  solutionCards: { icon: string; t: string; d: string }[];
  caseText: string;
  positionsTitle: string;
  positions: string[];
  seoTitle: string;
  seoTexts: string[];
  ctaTitle: string;
  ctaText: string;
}

const BP_STYLES = `
/* === BRANCHEN PAGE COMPLETE RESET === */
#bp-root, #bp-root * { box-sizing: border-box !important; }
#bp-root { background: #f0f4f7 !important; }

/* === DEFAULT TEXT (light bg sections) === */
#bp-root h1 { color: #023B5B !important; font-size: 26px !important; font-weight: 800 !important; line-height: 1.2 !important; }
#bp-root h2 { color: #023B5B !important; font-size: 22px !important; font-weight: 700 !important; line-height: 1.3 !important; }
#bp-root h3 { color: #023B5B !important; font-size: 18px !important; font-weight: 700 !important; }
#bp-root h4 { color: #023B5B !important; font-size: 15px !important; font-weight: 700 !important; }
#bp-root p { color: #4A5568 !important; font-size: 15px !important; line-height: 1.7 !important; }
#bp-root span { font-size: inherit !important; }
#bp-root strong { color: inherit !important; }
#bp-root a { text-decoration: none !important; }
#bp-root input { font-family: inherit !important; }
#bp-root button { font-family: inherit !important; }

@media (min-width: 768px) {
  #bp-root h1 { font-size: 42px !important; }
  #bp-root h2 { font-size: 26px !important; }
}

/* === HERO (dark bg) === */
#bp-root .bp-hero { background: linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%) !important; }
#bp-root .bp-hero h1 { color: #ffffff !important; }
#bp-root .bp-hero p { color: rgba(255,255,255,0.8) !important; }
#bp-root .bp-hero span { color: #ffffff !important; }
#bp-root .bp-hero .bp-hero-hint { color: rgba(255,255,255,0.5) !important; font-size: 13px !important; }
#bp-root .bp-hero a { color: #023B5B !important; background: #ffffff !important; font-size: 17px !important; font-weight: 800 !important; }

/* === STATS === */
#bp-root .bp-stat-n { font-weight: 800 !important; font-size: 28px !important; }
@media (max-width: 767px) { #bp-root .bp-stat-n { font-size: 22px !important; } }
#bp-root .bp-stat-l { color: #64748B !important; font-size: 12px !important; }

/* === PAIN SECTION === */
#bp-root .bp-pain-intro { color: #4A5568 !important; }
#bp-root .bp-pain-box p { color: #334155 !important; }

/* === FAIL SECTION (red bg) === */
#bp-root .bp-fail h2 { color: #023B5B !important; }
#bp-root .bp-fail p { color: #4A5568 !important; }

/* === SOLUTION CARDS === */
#bp-root .bp-card h4 { color: #023B5B !important; font-size: 15px !important; }
#bp-root .bp-card p { color: #64748B !important; font-size: 13px !important; }

/* === CASE STUDY (green bg) === */
#bp-root .bp-case h3 { color: #023B5B !important; font-size: 18px !important; }
#bp-root .bp-case p { color: #334155 !important; }

/* === POSITION TAGS === */
#bp-root .bp-tag { color: #023B5B !important; font-size: 14px !important; font-weight: 500 !important; }

/* === SEO TEXT === */
#bp-root .bp-seo h2 { color: #023B5B !important; }
#bp-root .bp-seo p { color: #4A5568 !important; }

/* === CTA (dark bg) === */
#bp-root .bp-cta { background: linear-gradient(135deg, #011E2F, #023B5B) !important; }
#bp-root .bp-cta h2 { color: #ffffff !important; font-size: 22px !important; }
#bp-root .bp-cta p { color: rgba(255,255,255,0.7) !important; }
#bp-root .bp-cta .bp-cta-hint { color: rgba(255,255,255,0.5) !important; font-size: 13px !important; }
#bp-root .bp-cta .bp-cta-fine { color: rgba(255,255,255,0.35) !important; font-size: 12px !important; }
#bp-root .bp-cta a { color: #023B5B !important; background: #ffffff !important; font-size: 17px !important; font-weight: 800 !important; }
#bp-root .bp-cta button { color: #ffffff !important; font-size: 15px !important; border: 1px solid rgba(255,255,255,0.3) !important; }
#bp-root .bp-cta label { color: rgba(255,255,255,0.5) !important; font-size: 12px !important; }
#bp-root .bp-cta label a { color: #1B98E0 !important; background: none !important; font-size: 12px !important; font-weight: 400 !important; }
#bp-root .bp-cta input { color: #ffffff !important; font-size: 15px !important; background: rgba(255,255,255,0.08) !important; border: 1px solid rgba(255,255,255,0.15) !important; }
#bp-root .bp-cta input::placeholder { color: rgba(255,255,255,0.4) !important; }
#bp-root .bp-cta .bp-form-label { color: rgba(255,255,255,0.7) !important; font-size: 13px !important; }
#bp-root .bp-cta .bp-submit { font-size: 16px !important; font-weight: 700 !important; }
#bp-root .bp-cta h3 { color: #ffffff !important; font-size: 22px !important; }
#bp-root .bp-cta .bp-success-msg { color: rgba(255,255,255,0.7) !important; font-size: 16px !important; }

@media (min-width: 768px) {
  #bp-root .bp-cta h2 { font-size: 30px !important; }
}
`;

export default function MitarbeiterFindenPage({ data }: { data: MitarbeiterFindenData }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [dsgvo, setDsgvo] = useState(false);
  const [sent, setSent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneRe = /^(\+?[0-9]{7,15})$/;
  const cleanPhone = (p: string) => p.replace(/[\s\-\/\(\)]/g, "");
  const emailValid = emailRe.test(form.email);
  const phoneValid = form.phone === "" || phoneRe.test(cleanPhone(form.phone));
  const canSubmit = form.name && emailValid && phoneValid && dsgvo;

  const submit = async () => {
    setSent(true);
    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: data.source,
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          company: form.company || undefined,
          industry: data.industry,
          extra: { branche: data.industry, pageType: "branchen-landing" },
        }),
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="bp-root" className="branchen-page">
      <style>{BP_STYLES}</style>

      {/* HERO */}
      <div
        className="bp-hero"
        style={{
          background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)",
          padding: "48px 16px 56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <style>{`@media(min-width:768px){.bp-hero{padding:80px 24px 88px !important}}`}</style>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ fontSize: 56, display: "block", marginBottom: 12 }}>{data.heroEmoji}</span>
          <h1 style={{ color: "#ffffff", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.2 }}>
            {data.heroTitle}
          </h1>
          <p
            className="bp-hero-sub"
            style={{
              color: "rgba(255,255,255,0.8)",
              maxWidth: 620,
              margin: "0 auto 24px",
              lineHeight: 1.6,
            }}
          >
            {data.heroSub}
          </p>
          <a
            href="https://calendar.app.google/QFoADWcRwwuYUoky8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "18px 44px",
              background: "#ffffff",
              borderRadius: 12,
              color: "#023B5B",
              fontSize: 17,
              fontWeight: 800,
              textDecoration: "none",
              fontFamily: "inherit",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            Kostenlose Recruiting-Analyse &rarr;
          </a>
          <p className="bp-hero-hint" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 10 }}>
            {data.heroHint}
          </p>
        </div>
      </div>

      <div style={{ background: "#f0f4f7", padding: "32px 16px 48px" }}>
        <style>{`@media(min-width:768px){#bp-root .bp-body{padding:56px 24px 72px !important}}`}</style>
        <div className="bp-body" style={{ maxWidth: 800, margin: "0 auto" }}>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <style>{`@media(min-width:768px){#bp-root .bp-stats{grid-template-columns:1fr 1fr 1fr 1fr !important}}`}</style>
            {data.stats.map((s, idx) => (
              <div
                key={idx}
                className={idx === 0 ? "bp-stats" : undefined}
                style={{
                  background: "#ffffff",
                  borderRadius: 14,
                  padding: "16px 12px",
                  textAlign: "center",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  gridColumn: idx === 0 ? undefined : undefined,
                }}
              >
                <div className="bp-stat-n" style={{ color: s.c }}>{s.n}</div>
                <div className="bp-stat-l" style={{ marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Pain Section */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: "24px 18px",
              marginBottom: 24,
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            <style>{`@media(min-width:768px){#bp-root .bp-pain{padding:32px 28px !important}}`}</style>
            <div className="bp-pain">
              <h2 style={{ color: "#023B5B", fontWeight: 700, margin: "0 0 14px" }}>
                {data.painEmoji} {data.painTitle}
              </h2>
              <p className="bp-pain-intro" style={{ margin: "0 0 16px" }}>
                {data.painIntro}
              </p>
              {data.painBoxes.map((box, idx) => (
                <div
                  key={idx}
                  className="bp-pain-box"
                  style={{
                    padding: "14px 16px",
                    background: box.bg,
                    border: `1px solid ${box.border}`,
                    borderRadius: 10,
                    marginBottom: idx < data.painBoxes.length - 1 ? 10 : 0,
                  }}
                >
                  <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                    <strong>{box.icon}</strong> {box.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Jobboards Fail */}
          <div
            className="bp-fail"
            style={{
              background: "rgba(239,68,68,0.05)",
              border: "1px solid rgba(239,68,68,0.15)",
              borderRadius: 16,
              padding: "24px 18px",
              marginBottom: 24,
            }}
          >
            <style>{`@media(min-width:768px){#bp-root .bp-fail{padding:32px 28px !important}}`}</style>
            <h2 style={{ color: "#023B5B", fontWeight: 700, margin: "0 0 12px" }}>
              {data.failTitle}
            </h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              {data.failText}
            </p>
          </div>

          {/* Social Recruiting Solution */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: "24px 18px",
              marginBottom: 24,
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            <style>{`@media(min-width:768px){#bp-root .bp-solution{padding:32px 28px !important}}`}</style>
            <div className="bp-solution">
              <h2 style={{ color: "#023B5B", fontWeight: 700, margin: "0 0 14px" }}>
                {data.solutionTitle}
              </h2>
              <p className="bp-pain-intro" style={{ margin: "0 0 16px" }}>
                {data.solutionIntro}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 12,
                }}
              >
                <style>{`@media(min-width:768px){#bp-root .bp-sol-grid{grid-template-columns:1fr 1fr 1fr !important}}`}</style>
                {data.solutionCards.map((s, idx) => (
                  <div
                    key={idx}
                    className={idx === 0 ? "bp-card bp-sol-grid" : "bp-card"}
                    style={{ background: "#f0f4f7", borderRadius: 12, padding: 16, textAlign: "center" }}
                  >
                    <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{s.icon}</span>
                    <h4 style={{ color: "#023B5B", fontSize: 15, fontWeight: 700, margin: "0 0 6px" }}>{s.t}</h4>
                    <p style={{ color: "#64748B", fontSize: 13, margin: 0, lineHeight: 1.5 }}>{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div
            className="bp-case"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: 16,
              padding: "24px 18px",
              marginBottom: 24,
            }}
          >
            <style>{`@media(min-width:768px){#bp-root .bp-case{padding:32px 28px !important}}`}</style>
            <h3 style={{ color: "#023B5B", fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>
              &#128200; Praxisbeispiel
            </h3>
            <p style={{ color: "#334155", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              {data.caseText}
            </p>
          </div>

          {/* Positions */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: "24px 18px",
              marginBottom: 24,
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            <style>{`@media(min-width:768px){#bp-root .bp-positions{padding:32px 28px !important}}`}</style>
            <div className="bp-positions">
              <h2 style={{ color: "#023B5B", fontWeight: 700, margin: "0 0 14px" }}>
                {data.positionsTitle}
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {data.positions.map((p, idx) => (
                  <span
                    key={idx}
                    className="bp-tag"
                    style={{
                      padding: "8px 16px",
                      background: "rgba(27,152,224,0.1)",
                      border: "1px solid rgba(27,152,224,0.2)",
                      borderRadius: 8,
                      fontSize: 14,
                      color: "#023B5B",
                      fontWeight: 500,
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div
            className="bp-seo"
            style={{
              background: "#ffffff",
              borderRadius: 16,
              padding: "20px 18px",
              marginBottom: 24,
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            <style>{`@media(min-width:768px){#bp-root .bp-seo{padding:28px 28px !important}}`}</style>
            <h2 style={{ color: "#023B5B", fontWeight: 700, margin: "0 0 12px" }}>{data.seoTitle}</h2>
            {data.seoTexts.map((text, idx) => (
              <p
                key={idx}
                style={{
                  color: "#4A5568",
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: idx < data.seoTexts.length - 1 ? "0 0 12px" : 0,
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div
            className="bp-cta"
            style={{
              background: "linear-gradient(135deg, #011E2F, #023B5B)",
              borderRadius: 16,
              padding: "32px 18px",
              textAlign: "center",
            }}
          >
            <style>{`@media(min-width:768px){#bp-root .bp-cta{padding:44px 32px !important}}`}</style>
            <h2 style={{ color: "#ffffff", fontWeight: 800, margin: "0 0 10px" }}>
              {data.ctaTitle}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", margin: "0 0 24px", lineHeight: 1.6 }}>
              {data.ctaText}
            </p>
            {!showForm && !sent ? (
              <>
                <a
                  href="https://calendar.app.google/QFoADWcRwwuYUoky8"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "18px 44px",
                    background: "#ffffff",
                    borderRadius: 12,
                    color: "#023B5B",
                    fontSize: 17,
                    fontWeight: 800,
                    textDecoration: "none",
                    fontFamily: "inherit",
                    marginBottom: 12,
                  }}
                >
                  Jetzt Termin w&auml;hlen &rarr;
                </a>
                <p
                  className="bp-cta-hint"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "8px 0 16px" }}
                >
                  Oder lassen Sie sich zur&uuml;ckrufen:
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  style={{
                    padding: "14px 32px",
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: 10,
                    color: "#ffffff",
                    fontSize: 15,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  R&uuml;ckruf anfordern
                </button>
              </>
            ) : sent ? (
              <div>
                <span style={{ fontSize: 56 }}>&#10004;&#65039;</span>
                <h3 style={{ color: "#ffffff", fontSize: 22, fontWeight: 700, marginTop: 12 }}>
                  Anfrage erhalten!
                </h3>
                <p className="bp-success-msg" style={{ marginTop: 8 }}>
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen, {form.name.split(" ")[0]}.
                </p>
              </div>
            ) : (
              <div style={{ maxWidth: 440, margin: "0 auto", textAlign: "left" }}>
                {[
                  { label: "Name *", k: "name" as const, ph: "Max Mustermann", type: "text" },
                  { label: "E-Mail *", k: "email" as const, ph: "max@firma.de", type: "email" },
                  { label: "Telefon", k: "phone" as const, ph: "+49 170 1234567", type: "tel" },
                  { label: "Firma", k: "company" as const, ph: "Firmenname", type: "text" },
                ].map((f, idx) => (
                  <div key={idx} style={{ marginBottom: 14 }}>
                    <label className="bp-form-label" style={{ display: "block", marginBottom: 4 }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      value={form[f.k]}
                      onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                      placeholder={f.ph}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: 8,
                        color: "#ffffff",
                        fontSize: 15,
                        fontFamily: "inherit",
                        boxSizing: "border-box",
                        outline: "none",
                      }}
                    />
                    {f.k === "email" && form.email && !emailValid && (
                      <span style={{ color: "#EF4444", fontSize: 12 }}>Bitte g&uuml;ltige E-Mail eingeben</span>
                    )}
                    {f.k === "phone" && form.phone && !phoneValid && (
                      <span style={{ color: "#EF4444", fontSize: 12 }}>Bitte g&uuml;ltige Telefonnummer</span>
                    )}
                  </div>
                ))}
                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    margin: "12px 0 16px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={dsgvo}
                    onChange={(e) => setDsgvo(e.target.checked)}
                    style={{ marginTop: 3, accentColor: "#1B98E0" }}
                  />
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.5 }}>
                    Ich stimme der{" "}
                    <a href="/datenschutz" target="_blank" style={{ color: "#1B98E0" }}>
                      Datenschutzerkl&auml;rung
                    </a>{" "}
                    zu und bin damit einverstanden, kontaktiert zu werden.
                  </span>
                </label>
                <button
                  onClick={submit}
                  disabled={!canSubmit}
                  className="bp-submit"
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: canSubmit ? "#ffffff" : "rgba(255,255,255,0.2)",
                    border: "none",
                    borderRadius: 10,
                    color: canSubmit ? "#023B5B" : "rgba(255,255,255,0.5)",
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: canSubmit ? "pointer" : "default",
                    fontFamily: "inherit",
                  }}
                >
                  R&uuml;ckruf anfordern &rarr;
                </button>
              </div>
            )}
            <p
              className="bp-cta-fine"
              style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 16 }}
            >
              Robert Engel &middot; Gesch&auml;ftsf&uuml;hrer TalentSuite &middot; 100% kostenlos &amp;
              unverbindlich
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
