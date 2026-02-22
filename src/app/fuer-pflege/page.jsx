"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

const positionen = [{"name":"Pflegefachkraft","slug":"pflege","stellen":"78.000","cpa":"18-28€"},{"name":"Pflegehelfer","slug":"pflege","stellen":"42.000","cpa":"14-20€"},{"name":"Pflegedienstleitung","slug":"pflege","stellen":"12.000","cpa":"25-40€"}];

export default function PflegeHub() {
  const mob = useIsMobile();
  return (
    <>
      <Head>
        <title>Pflegekräfte finden — Performance Recruiting für Pflegeeinrichtungen | TalentSuite</title>
        <meta name="description" content="Performance Recruiting für Pflegeeinrichtungen. Qualifizierte Bewerbungen ab 15€ über Social Media." />
      </Head>
      <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
        <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: mob ? "48px 16px 56px" : "72px 24px 80px", textAlign: "center" }}>
          <div style={{ display: "inline-block", padding: "5px 18px", borderRadius: 20, marginBottom: 16, background: "rgba(27,152,224,0.15)" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#1B98E0" }}>BRANCHENLÖSUNG</span>
          </div>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 26 : 40, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
            Pflegekräfte finden — <span style={{ color: "#1B98E0" }}>Performance Recruiting für Pflegeeinrichtungen</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 18, maxWidth: 540, margin: "0 auto" }}>Der Pflegenotstand ist real — aber Ihre Lösung muss nicht Zeitarbeit sein.</p>
        </div>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: mob ? "24px 16px 48px" : "40px 24px 64px" }}>
          <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 16px" }}>Positionen & Benchmarks</h2>
          <div style={{ display: "grid", gap: 12, marginBottom: 24 }}>
            {positionen.map((p, i) => (
              <Link key={i} href={"/mitarbeiter-finden-" + p.slug} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "#ffffff", borderRadius: 14, padding: mob ? "16px 14px" : "20px 20px", boxShadow: "0 3px 14px rgba(0,0,0,0.05)" }}>
                  <h3 style={{ color: "#023B5B", fontSize: 16, fontWeight: 700, margin: "0 0 8px" }}>{p.name}</h3>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div><span style={{ color: "#1B98E0", fontWeight: 700 }}>{p.stellen}</span><span style={{ color: "#94A3B8", fontSize: 12 }}> offene Stellen</span></div>
                    <div><span style={{ color: "#10B981", fontWeight: 700 }}>{p.cpa}</span><span style={{ color: "#94A3B8", fontSize: 12 }}> pro Bewerbung</span></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "20px 18px" : "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20 }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>Warum Performance Recruiting?</h2>
            {["72% der Fachkräfte suchen nicht aktiv — wir erreichen sie über Social Media", "60-Sekunden-Bewerbung: Kein Lebenslauf, keine Registrierung", "Erste qualifizierte Bewerbungen in 48-72 Stunden", "Transparente Kosten — Sie zahlen nur für echte Ergebnisse", "Keine Mindestlaufzeit — volle Flexibilität"].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#10B981", flexShrink: 0, marginTop: 2 }}>✓</span>
                <span style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.6 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", borderRadius: 16, padding: mob ? "28px 18px" : "40px 28px", textAlign: "center" }}>
            <h2 style={{ color: "#ffffff", fontSize: mob ? 20 : 26, fontWeight: 700, margin: "0 0 8px" }}>Bereit für mehr Bewerbungen?</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, margin: "0 0 20px" }}>Kostenlose Recruiting-Analyse in 20 Minuten</p>
            <a href="/recruiting-analyse" style={{ display: "inline-block", padding: "14px 32px", borderRadius: 10, background: "#1B98E0", color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>Jetzt Termin sichern →</a>
          </div>
        </div>
      </div>
    </>
  );
}
