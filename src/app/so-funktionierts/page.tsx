import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "So funktioniert Performance Recruiting | TalentSuite",
  description: "In 4 Schritten zu qualifizierten Bewerbungen: Analyse → Kampagne → Bewerbungen → Einstellung.",
  alternates: { canonical: "https://talentsuite.io/so-funktionierts" },
};

const steps = [
  { nr: "01", icon: "📊", title: "Kostenlose Analyse", desc: "In 20 Minuten analysieren wir Ihre Situation: Welche Stellen sind offen? Wie viele Fachkräfte sind in Ihrer Region über Social Media erreichbar? Was ist realistisch?", details: ["Branchenspezifische Zielgruppenanalyse", "Regionale Reichweiten-Prognose", "Konkrete Kosten-Kalkulation", "Keine Verpflichtung"] },
  { nr: "02", icon: "🎯", title: "Kampagne aufsetzen", desc: "Wir erstellen Ihre maßgeschneiderte Recruiting-Kampagne: Zielgruppe definieren, Anzeigen gestalten, Bewerberfunnel bauen — alles innerhalb von 5 Werktagen.", details: ["Zielgruppen-Targeting nach Beruf, Region & Interessen", "Professionelle Anzeigen-Erstellung", "60-Sekunden-Bewerbungsfunnel", "DSGVO-konforme Datenverarbeitung"] },
  { nr: "03", icon: "📱", title: "Bewerbungen erhalten", desc: "Ihre Anzeigen erreichen Fachkräfte dort, wo sie täglich 2,5 Stunden verbringen: auf Social Media. Die 60-Sekunden-Bewerbung senkt die Hürde maximal.", details: ["Erste Bewerbungen in 48-72 Stunden", "Qualifizierte Vorauswahl durch smarte Fragen", "Automatische Benachrichtigung per E-Mail", "Echtzeit-Dashboard mit allen Bewerbungen"] },
  { nr: "04", icon: "✅", title: "Einstellen & skalieren", desc: "Sie führen Gespräche mit qualifizierten Kandidaten und stellen ein. Wir optimieren die Kampagne laufend für noch bessere Ergebnisse.", details: ["Laufende Kampagnen-Optimierung", "Wöchentliches Reporting", "A/B-Testing für maximale Performance", "Skalierung bei Bedarf"] },
];

export default function SoFunktionierts() {
  return (
    <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
      <div className="px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16" style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", textAlign: "center" }}>
        <h1 className="text-[22px] sm:text-[26px] md:text-[40px]" style={{ color: "#ffffff", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.2 }}>
          So funktioniert <span style={{ color: "#1B98E0" }}>Performance Recruiting</span>
        </h1>
        <p className="text-[15px] md:text-[18px]" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 520, margin: "0 auto" }}>
          Von der Analyse bis zur Einstellung — in 4 klaren Schritten.
        </p>
      </div>
      <div className="px-4 md:px-6 py-8 md:py-12" style={{ maxWidth: 740, margin: "0 auto" }}>
        {steps.map((s, i) => (
          <div key={i} className="p-5 sm:p-7" style={{ background: "#ffffff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20, borderLeft: "4px solid #1B98E0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 32 }}>{s.icon}</span>
              <div>
                <span style={{ color: "#1B98E0", fontSize: 13, fontWeight: 700 }}>SCHRITT {s.nr}</span>
                <h2 className="text-[20px] md:text-[24px]" style={{ color: "#023B5B", fontWeight: 700, margin: 0 }}>{s.title}</h2>
              </div>
            </div>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>{s.desc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {s.details.map((d, j) => (
                <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: "#10B981", fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ color: "#64748B", fontSize: 14, lineHeight: 1.5 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="p-6 sm:p-10" style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", borderRadius: 16, textAlign: "center", marginTop: 12 }}>
          <h2 className="text-[20px] md:text-[26px]" style={{ color: "#ffffff", fontWeight: 700, margin: "0 0 8px" }}>Bereit für Schritt 1?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, margin: "0 0 20px" }}>Kostenlose Recruiting-Analyse — 20 Minuten, keine Verpflichtung</p>
          <Link href="/recruiting-analyse" className="text-sm sm:text-base" style={{ display: "inline-block", padding: "12px 24px", borderRadius: 10, background: "#1B98E0", color: "#ffffff", fontWeight: 700, textDecoration: "none" }}>Jetzt Analyse starten →</Link>
        </div>
      </div>
    </div>
  );
}
