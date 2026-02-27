import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preise | TalentSuite — Transparentes Performance Recruiting",
  description: "Transparente Preise für Performance Recruiting: Ab 1.490€ pro Kampagne. Keine versteckten Kosten.",
  alternates: { canonical: "https://talentsuite.io/preise" },
};

const plans = [
  { name: "Starter", price: "ab 1.490€", period: "pro Kampagne", desc: "Für Betriebe, die Performance Recruiting testen möchten.", features: ["1 offene Stelle", "Meta Ads Kampagne", "60-Sekunden-Bewerberfunnel", "2 Wochen Laufzeit", "Echtzeit-Dashboard", "E-Mail-Support"], popular: false },
  { name: "Professional", price: "ab 2.490€", period: "pro Monat", desc: "Für Betriebe mit mehreren offenen Stellen und laufendem Bedarf.", features: ["Bis zu 3 offene Stellen", "Laufende Optimierung", "A/B-Testing", "Wöchentliches Reporting", "Employer Branding Beratung", "Telefon- & E-Mail-Support", "Keine Mindestlaufzeit"], popular: true },
  { name: "Enterprise", price: "Individuell", period: "auf Anfrage", desc: "Für größere Unternehmen mit komplexen Anforderungen.", features: ["Unbegrenzte Stellen", "Multi-Channel (Meta + LinkedIn + Google)", "Video-Produktion (MadebyMEE)", "Dedizierter Account Manager", "Monatliche Strategie-Calls", "Custom Reporting", "Employer Branding Komplett"], popular: false },
];

export default function PreisePage() {
  return (
    <>
      <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
        <div className="px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16" style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", textAlign: "center" }}>
          <h1 className="text-[22px] sm:text-[26px] md:text-[40px]" style={{ color: "#ffffff", fontWeight: 800, margin: "0 0 12px" }}>
            Transparente <span style={{ color: "#1B98E0" }}>Preise</span>
          </h1>
          <p className="text-[15px] md:text-[18px]" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 520, margin: "0 auto" }}>Keine versteckten Kosten. Keine Mindestlaufzeit. Messbare Ergebnisse.</p>
        </div>
        <div className="px-4 md:px-6 py-10 md:py-16" style={{ maxWidth: 960, margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ marginTop: -40 }}>
            {plans.map((p, i) => (
              <div key={i} className="p-5 sm:p-7" style={{ background: "#ffffff", borderRadius: 16, boxShadow: p.popular ? "0 8px 40px rgba(27,152,224,0.2)" : "0 4px 20px rgba(0,0,0,0.06)", border: p.popular ? "2px solid #1B98E0" : "1px solid #e8e8e8", position: "relative" }}>
                {p.popular && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "4px 16px", borderRadius: 12, background: "#1B98E0", color: "#ffffff", fontSize: 11, fontWeight: 700 }}>BELIEBT</div>}
                <h3 style={{ color: "#023B5B", fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>{p.name}</h3>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 28, fontWeight: 800, color: "#1B98E0" }}>{p.price}</span>
                  <span style={{ fontSize: 13, color: "#94A3B8", marginLeft: 4 }}>{p.period}</span>
                </div>
                <p style={{ color: "#64748B", fontSize: 13, margin: "0 0 16px", lineHeight: 1.5 }}>{p.desc}</p>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#10B981", flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ color: "#4A5568", fontSize: 13, lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
                <Link href="/recruiting-analyse" style={{ display: "block", textAlign: "center", marginTop: 20, padding: "12px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14, background: p.popular ? "#1B98E0" : "#023B5B", color: "#ffffff" }}>
                  {p.popular ? "Jetzt beraten lassen" : p.name === "Starter" ? "Jetzt starten" : "Angebot anfordern"} →
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap mt-8">
            {["Keine Mindestlaufzeit", "Transparente Kosten", "DSGVO-konform", "Erste Bewerbungen in 48h"].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ color: "#10B981" }}>✓</span>
                <span style={{ color: "#64748B", fontSize: 13 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
