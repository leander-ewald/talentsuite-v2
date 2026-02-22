"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

export default function VergleichPage() {
  const mob = useIsMobile();
  const rows = [
    { label: "Reichweite", jb: "Nur aktiv Suchende (15-28%)", ts: "Aktive + passive Kandidaten (85%)" },
    { label: "Kosten/Bewerbung", jb: "80-250€", ts: "15-25€" },
    { label: "Erste Bewerbungen", jb: "Tage bis Wochen", ts: "48-72 Stunden" },
    { label: "Qualität", jb: "Oft unqualifiziert", ts: "Vorqualifiziert durch Funnel" },
    { label: "Targeting", jb: "Breit, kaum steuerbar", ts: "Branche, Region, Beruf, Alter" },
    { label: "Messbarkeit", jb: "Klicks & Aufrufe", ts: "CPL, CPA, ROI" },
    { label: "Mindestlaufzeit", jb: "Oft 30 Tage", ts: "Flexibel, keine Bindung" },
    { label: "Arbeitgebermarke", jb: "Standard-Template", ts: "Individuelles Employer Branding" },
  ];

  return (
    <>
      <Head>
        <title>Jobbörse vs. TalentSuite — Der ehrliche Vergleich | TalentSuite</title>
        <meta name="description" content="StepStone, Indeed & Co. vs. Performance Recruiting: Kosten, Reichweite, Qualität im direkten Vergleich." />
      </Head>
      <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
        <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: mob ? "48px 16px 56px" : "72px 24px 80px", textAlign: "center" }}>
          <h1 style={{ color: "#ffffff", fontSize: mob ? 24 : 38, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
            Jobbörse vs. <span style={{ color: "#1B98E0" }}>Performance Recruiting</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: mob ? 15 : 18, maxWidth: 520, margin: "0 auto" }}>
            Der ehrliche Vergleich mit echten Zahlen. Kein Marketing-Blabla.
          </p>
        </div>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: mob ? "24px 12px 48px" : "40px 24px 64px" }}>
          <div style={{ background: "#ffffff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", overflow: "hidden", marginBottom: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: mob ? "90px 1fr 1fr" : "180px 1fr 1fr", borderBottom: "2px solid #f0f0f0" }}>
              <div style={{ padding: mob ? "12px 8px" : "16px 20px" }} />
              <div style={{ padding: mob ? "12px 8px" : "16px 20px", textAlign: "center", background: "#FEF2F2" }}>
                <div style={{ fontSize: mob ? 11 : 14, fontWeight: 700, color: "#DC2626" }}>❌ Jobbörse</div>
              </div>
              <div style={{ padding: mob ? "12px 8px" : "16px 20px", textAlign: "center", background: "#ECFDF5" }}>
                <div style={{ fontSize: mob ? 11 : 14, fontWeight: 700, color: "#10B981" }}>✓ TalentSuite</div>
              </div>
            </div>
            {rows.map((r, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: mob ? "90px 1fr 1fr" : "180px 1fr 1fr", borderBottom: i < rows.length - 1 ? "1px solid #f4f4f4" : "none" }}>
                <div style={{ padding: mob ? "10px 8px" : "14px 20px", fontSize: mob ? 11 : 14, fontWeight: 600, color: "#023B5B", background: i % 2 === 0 ? "#fafafa" : "#fff" }}>{r.label}</div>
                <div style={{ padding: mob ? "10px 8px" : "14px 20px", fontSize: mob ? 11 : 13, color: "#DC2626", background: i % 2 === 0 ? "#fafafa" : "#fff" }}>{r.jb}</div>
                <div style={{ padding: mob ? "10px 8px" : "14px 20px", fontSize: mob ? 11 : 13, color: "#047857", fontWeight: 600, background: i % 2 === 0 ? "#fafafa" : "#fff" }}>{r.ts}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#ffffff", borderRadius: 16, padding: mob ? "24px 18px" : "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 24, textAlign: "center" }}>
            <h2 style={{ color: "#023B5B", fontSize: mob ? 18 : 22, fontWeight: 700, margin: "0 0 12px" }}>Das Ergebnis</h2>
            <p style={{ color: "#4A5568", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
              Performance Recruiting liefert <strong style={{ color: "#1B98E0" }}>3-10x mehr Bewerbungen</strong> pro investiertem Euro als klassische Jobbörsen — bei <strong style={{ color: "#10B981" }}>höherer Qualität</strong> und <strong style={{ color: "#023B5B" }}>kürzerer Time-to-Hire</strong>.
            </p>
          </div>
          <div style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", borderRadius: 16, padding: mob ? "28px 18px" : "40px 28px", textAlign: "center" }}>
            <h2 style={{ color: "#ffffff", fontSize: mob ? 20 : 26, fontWeight: 700, margin: "0 0 8px" }}>Überzeugt?</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, margin: "0 0 20px" }}>Kostenlose Recruiting-Analyse — 20 Minuten, keine Verpflichtung</p>
            <a href="/recruiting-analyse" style={{ display: "inline-block", padding: "14px 32px", borderRadius: 10, background: "#1B98E0", color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>Jetzt Analyse starten →</a>
          </div>
        </div>
      </div>
    </>
  );
}
