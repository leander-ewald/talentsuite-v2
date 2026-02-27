"use client";
import React from "react";
import Link from "next/link";

const positionen = [
  { name: "Koch/K\u00F6chin", slug: "gastronomie", stellen: "38.000", cpa: "10-18\u20AC" },
  { name: "Servicekraft", slug: "gastronomie", stellen: "31.000", cpa: "8-15\u20AC" },
  { name: "Hotelfachkraft", slug: "gastronomie", stellen: "18.000", cpa: "12-20\u20AC" },
];

const benefits = [
  "72% der Fachkr\u00E4fte suchen nicht aktiv \u2014 wir erreichen sie \u00FCber Social Media",
  "60-Sekunden-Bewerbung: Kein Lebenslauf, keine Registrierung",
  "Erste qualifizierte Bewerbungen in 48-72 Stunden",
  "Transparente Kosten \u2014 Sie zahlen nur f\u00FCr echte Ergebnisse",
  "Keine Mindestlaufzeit \u2014 volle Flexibilit\u00E4t",
];

export default function GastronomieHub() {
  return (
    <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)",
          padding: "48px 16px 56px",
          textAlign: "center",
        }}
        className="fuer-hero"
      >
        <style>{`@media(min-width:768px){.fuer-hero{padding:72px 24px 80px !important}}`}</style>
        <div
          style={{
            display: "inline-block",
            padding: "5px 18px",
            borderRadius: 20,
            marginBottom: 16,
            background: "rgba(27,152,224,0.15)",
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#1B98E0" }}>
            BRANCHENL&Ouml;SUNG
          </span>
        </div>
        <h1
          style={{
            color: "#ffffff",
            fontSize: 26,
            fontWeight: 800,
            margin: "0 0 12px",
            lineHeight: 1.15,
          }}
          className="fuer-h1"
        >
          <style>{`@media(min-width:768px){.fuer-h1{font-size:40px !important}}`}</style>
          Gastro-Personal finden &mdash;{" "}
          <span style={{ color: "#1B98E0" }}>
            Performance Recruiting f&uuml;r Gastronomie und Hotellerie
          </span>
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 15,
            maxWidth: 540,
            margin: "0 auto",
          }}
          className="fuer-sub"
        >
          <style>{`@media(min-width:768px){.fuer-sub{font-size:18px !important}}`}</style>
          Die Gastronomie hat ein Image-Problem beim Recruiting &mdash; Social Media ist die L&ouml;sung.
        </p>
      </div>

      <div
        style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px 48px" }}
        className="fuer-content"
      >
        <style>{`@media(min-width:768px){.fuer-content{padding:40px 24px 64px !important}}`}</style>

        <h2 style={{ color: "#023B5B", fontSize: 18, fontWeight: 700, margin: "0 0 16px" }} className="fuer-h2">
          <style>{`@media(min-width:768px){.fuer-h2{font-size:22px !important}}`}</style>
          Positionen &amp; Benchmarks
        </h2>

        <div style={{ display: "grid", gap: 12, marginBottom: 24 }}>
          {positionen.map((p, i) => (
            <Link
              key={i}
              href={"/mitarbeiter-finden-" + p.slug}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 14,
                  padding: "16px 14px",
                  boxShadow: "0 3px 14px rgba(0,0,0,0.05)",
                }}
                className="fuer-card"
              >
                <style>{`@media(min-width:768px){.fuer-card{padding:20px 20px !important}}`}</style>
                <h3 style={{ color: "#023B5B", fontSize: 16, fontWeight: 700, margin: "0 0 8px" }}>
                  {p.name}
                </h3>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ color: "#1B98E0", fontWeight: 700 }}>{p.stellen}</span>
                    <span style={{ color: "#94A3B8", fontSize: 12 }}> offene Stellen</span>
                  </div>
                  <div>
                    <span style={{ color: "#10B981", fontWeight: 700 }}>{p.cpa}</span>
                    <span style={{ color: "#94A3B8", fontSize: 12 }}> pro Bewerbung</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: 16,
            padding: "20px 18px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            marginBottom: 20,
          }}
          className="fuer-benefits"
        >
          <style>{`@media(min-width:768px){.fuer-benefits{padding:28px 24px !important}}`}</style>
          <h2 style={{ color: "#023B5B", fontSize: 18, fontWeight: 700, margin: "0 0 12px" }} className="fuer-h2b">
            <style>{`@media(min-width:768px){.fuer-h2b{font-size:22px !important}}`}</style>
            Warum Performance Recruiting?
          </h2>
          {benefits.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
              <span style={{ color: "#10B981", flexShrink: 0, marginTop: 2 }}>&check;</span>
              <span style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.6 }}>{t}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #011E2F, #023B5B)",
            borderRadius: 16,
            padding: "28px 18px",
            textAlign: "center",
          }}
          className="fuer-cta"
        >
          <style>{`@media(min-width:768px){.fuer-cta{padding:40px 28px !important}}`}</style>
          <h2
            style={{ color: "#ffffff", fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}
            className="fuer-cta-h2"
          >
            <style>{`@media(min-width:768px){.fuer-cta-h2{font-size:26px !important}}`}</style>
            Bereit f&uuml;r mehr Bewerbungen?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, margin: "0 0 20px" }}>
            Kostenlose Recruiting-Analyse in 20 Minuten
          </p>
          <a
            href="/recruiting-analyse"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              borderRadius: 10,
              background: "#1B98E0",
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Jetzt Termin sichern &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
