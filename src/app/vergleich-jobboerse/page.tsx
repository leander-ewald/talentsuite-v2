import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobbörse vs. TalentSuite — Der ehrliche Vergleich | TalentSuite",
  description: "StepStone, Indeed & Co. vs. Performance Recruiting: Kosten, Reichweite, Qualität im direkten Vergleich.",
  alternates: { canonical: "https://talentsuite.io/vergleich-jobboerse" },
};

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

export default function VergleichPage() {
  return (
    <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: "72px 24px 80px", textAlign: "center" }}>
        <h1 className="text-[24px] md:text-[38px]" style={{ color: "#ffffff", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
          Jobbörse vs. <span style={{ color: "#1B98E0" }}>Performance Recruiting</span>
        </h1>
        <p className="text-[15px] md:text-[18px]" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 520, margin: "0 auto" }}>
          Der ehrliche Vergleich mit echten Zahlen. Kein Marketing-Blabla.
        </p>
      </div>
      <div className="px-3 md:px-6 py-6 md:py-16" style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ background: "#ffffff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", overflow: "hidden", marginBottom: 24 }}>
          <div className="grid grid-cols-[90px_1fr_1fr] md:grid-cols-[180px_1fr_1fr]" style={{ borderBottom: "2px solid #f0f0f0" }}>
            <div className="p-3 md:p-4" />
            <div className="p-3 md:p-4 text-center" style={{ background: "#FEF2F2" }}>
              <div className="text-[11px] md:text-[14px]" style={{ fontWeight: 700, color: "#DC2626" }}>❌ Jobbörse</div>
            </div>
            <div className="p-3 md:p-4 text-center" style={{ background: "#ECFDF5" }}>
              <div className="text-[11px] md:text-[14px]" style={{ fontWeight: 700, color: "#10B981" }}>✓ TalentSuite</div>
            </div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-[90px_1fr_1fr] md:grid-cols-[180px_1fr_1fr]" style={{ borderBottom: i < rows.length - 1 ? "1px solid #f4f4f4" : "none" }}>
              <div className="p-2.5 md:p-3.5 text-[11px] md:text-[14px]" style={{ fontWeight: 600, color: "#023B5B", background: i % 2 === 0 ? "#fafafa" : "#fff" }}>{r.label}</div>
              <div className="p-2.5 md:p-3.5 text-[11px] md:text-[13px]" style={{ color: "#DC2626", background: i % 2 === 0 ? "#fafafa" : "#fff" }}>{r.jb}</div>
              <div className="p-2.5 md:p-3.5 text-[11px] md:text-[13px]" style={{ color: "#047857", fontWeight: 600, background: i % 2 === 0 ? "#fafafa" : "#fff" }}>{r.ts}</div>
            </div>
          ))}
        </div>
        <div className="p-6 md:p-8" style={{ background: "#ffffff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 24, textAlign: "center" }}>
          <h2 className="text-[18px] md:text-[22px]" style={{ color: "#023B5B", fontWeight: 700, margin: "0 0 12px" }}>Das Ergebnis</h2>
          <p style={{ color: "#4A5568", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
            Performance Recruiting liefert <strong style={{ color: "#1B98E0" }}>3-10x mehr Bewerbungen</strong> pro investiertem Euro als klassische Jobbörsen — bei <strong style={{ color: "#10B981" }}>höherer Qualität</strong> und <strong style={{ color: "#023B5B" }}>kürzerer Time-to-Hire</strong>.
          </p>
        </div>
        <div style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", borderRadius: 16, padding: "40px 28px", textAlign: "center" }}>
          <h2 className="text-[20px] md:text-[26px]" style={{ color: "#ffffff", fontWeight: 700, margin: "0 0 8px" }}>Überzeugt?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, margin: "0 0 20px" }}>Kostenlose Recruiting-Analyse — 20 Minuten, keine Verpflichtung</p>
          <Link href="/recruiting-analyse" style={{ display: "inline-block", padding: "14px 32px", borderRadius: 10, background: "#1B98E0", color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>Jetzt Analyse starten →</Link>
        </div>
      </div>
    </div>
  );
}
