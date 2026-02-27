"use client";
import React, { useEffect, useState } from "react";
import { trackMetaLead } from "@/components/MetaPixel";

export default function Danke() {
  const [tracked, setTracked] = useState(false);
  useEffect(() => { if (!tracked) { trackMetaLead({ formName: "danke-benchmark", category: "leadmagnet-danke", value: 50 }); setTracked(true); } }, [tracked]);

  return (
    <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
      <div className="px-4 md:px-6 py-16 md:py-24 pb-[72px] md:pb-[104px]" style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", textAlign: "center" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", margin: "0 auto 24px", background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>💰</div>
        <h1 className="text-[24px] md:text-[36px]" style={{ color: "#ffffff", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>Ihr Benchmark ist unterwegs!</h1>
        <p className="text-[15px] md:text-[18px]" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 520, margin: "0 auto" }}>Prüfen Sie Ihr Postfach — Ihre Gehaltsdaten kommen sofort.</p>
      </div>
      <div className="px-4 md:px-6 py-6 md:py-10 pb-12 md:pb-16" style={{ maxWidth: 600, margin: "0 auto" }}>
        <div className="p-[18px] md:p-[28px] -mt-8 md:-mt-12" style={{ background: "#ffffff", borderRadius: 16, boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
          <h2 className="text-[18px] md:text-[22px]" style={{ color: "#023B5B", fontWeight: 700, margin: "0 0 16px", textAlign: "center" }}>Ihr nächster Schritt</h2>
          <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 20px", textAlign: "center" }}>
            Sie haben den Gehalts-Benchmark erhalten — aber möchten Sie wissen, was das konkret für Ihren Betrieb bedeutet?
          </p>
          <a href="/recruiting-analyse" style={{ display: "block", textAlign: "center", padding: "14px 28px", borderRadius: 10, background: "#1B98E0", color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>Kostenlose Recruiting-Analyse buchen →</a>
          <p style={{ textAlign: "center", fontSize: 12, color: "#94A3B8", marginTop: 10 }}>20 Minuten · Kostenlos · Keine Verpflichtung</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
          {[{ n: "50+", l: "Betriebe betreut" }, { n: "15-25€", l: "Ø pro Bewerbung" }, { n: "30 Tage", l: "Ø bis Einstellung" }].map((s, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 12, padding: "16px 12px", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#1B98E0" }}>{s.n}</div>
              <div style={{ fontSize: 11, color: "#64748B", marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "#94A3B8", fontSize: 13, marginTop: 24 }}>TalentSuite — Performance Recruiting für den Mittelstand</p>
      </div>
    </div>
  );
}
