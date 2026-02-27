import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study: 23 Bewerbungen für SHK-Betrieb | TalentSuite",
  description: "Wie ein SHK-Betrieb im Sauerland mit TalentSuite 23 qualifizierte Bewerbungen in 4 Wochen erhalten und 3 Anlagenmechaniker eingestellt hat.",
  alternates: { canonical: "https://talentsuite.io/case-study/shk-sauerland" },
};

const timeline = [
  { tag: "Woche 1", title: "Analyse & Setup", desc: "Zielgruppenanalyse, Stellenprofil erstellt, Kampagne aufgesetzt, Bewerberfunnel gebaut." },
  { tag: "Woche 2", title: "Erste Bewerbungen", desc: "7 Bewerbungen eingegangen. 4 davon qualifiziert. Erste Gespräche geführt." },
  { tag: "Woche 3", title: "Optimierung", desc: "Anzeigen optimiert, CPA von 22€ auf 15€ gesenkt. 9 weitere Bewerbungen." },
  { tag: "Woche 4", title: "Einstellungen", desc: "23 Bewerbungen gesamt. 3 Anlagenmechaniker eingestellt. Kampagne erfolgreich abgeschlossen." },
];

export default function CaseStudySHK() {
  return (
    <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: "72px 24px 80px", textAlign: "center" }}>
        <Link href="/case-studies" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", display: "block", marginBottom: 12 }}>← Alle Case Studies</Link>
        <div style={{ display: "inline-block", padding: "5px 18px", borderRadius: 20, marginBottom: 16, background: "rgba(16,185,129,0.15)" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#10B981" }}>SHK · SAUERLAND</span>
        </div>
        <h1 className="text-[24px] md:text-[36px]" style={{ color: "#ffffff", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
          23 Bewerbungen in <span style={{ color: "#1B98E0" }}>4 Wochen</span>
        </h1>
        <p className="text-[15px] md:text-[18px]" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 520, margin: "0 auto" }}>
          3 Anlagenmechaniker eingestellt — ohne Jobbörse, ohne Headhunter.
        </p>
      </div>
      <div className="px-4 md:px-6 py-6 md:py-10" style={{ maxWidth: 700, margin: "0 auto" }}>
        <div className="grid grid-cols-4 gap-2.5 mb-6" style={{ marginTop: -36 }}>
          {[{ n: "23", l: "Bewerbungen" }, { n: "4", l: "Wochen" }, { n: "17€", l: "pro Bewerbung" }, { n: "3", l: "Einstellungen" }].map((s, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 12, padding: "16px 8px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
              <div className="text-[20px] md:text-[26px]" style={{ fontWeight: 800, color: i === 3 ? "#10B981" : "#1B98E0" }}>{s.n}</div>
              <div style={{ fontSize: 10, color: "#64748B", marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#ffffff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20 }}>
          <h2 className="text-[18px] md:text-[22px]" style={{ color: "#023B5B", fontWeight: 700, margin: "0 0 12px" }}>Ausgangslage</h2>
          <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            Ein familiengeführter SHK-Betrieb mit 14 Mitarbeitern im Sauerland suchte seit über 6 Monaten vergeblich nach Anlagenmechanikern. Jobbörsen wie StepStone und Indeed brachten insgesamt nur 3 Bewerbungen — keine davon qualifiziert. Der Geschäftsführer musste bereits Aufträge ablehnen und die bestehenden Mitarbeiter leisteten regelmäßig Überstunden.
          </p>
        </div>
        <div style={{ background: "#ffffff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20 }}>
          <h2 className="text-[18px] md:text-[22px]" style={{ color: "#023B5B", fontWeight: 700, margin: "0 0 16px" }}>Kampagnen-Verlauf</h2>
          {timeline.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < timeline.length - 1 ? 20 : 0 }}>
              <div style={{ width: 80, flexShrink: 0 }}>
                <span style={{ padding: "4px 10px", borderRadius: 8, background: "#E8F4FD", color: "#023B5B", fontSize: 11, fontWeight: 700 }}>{t.tag}</span>
              </div>
              <div>
                <h3 style={{ color: "#023B5B", fontSize: 16, fontWeight: 700, margin: "0 0 4px" }}>{t.title}</h3>
                <p style={{ color: "#64748B", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "#ffffff", borderRadius: 16, padding: "32px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20, borderLeft: "4px solid #1B98E0" }}>
          <p className="text-[16px] md:text-[18px]" style={{ color: "#023B5B", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 12px" }}>
            &ldquo;Erst war ich skeptisch — noch eine Agentur, die viel verspricht. Aber nach 6 Wochen hatten wir 3 neue Mitarbeiter eingestellt. Alles über Social Media. Die Bewerbungen waren qualitativ besser als alles, was wir von Jobbörsen kannten.&rdquo;
          </p>
          <p style={{ color: "#64748B", fontSize: 14, margin: 0 }}>— M. Weber, Geschäftsführer · SHK-Betrieb, 14 Mitarbeiter</p>
          <div style={{ marginTop: 8 }}>⭐⭐⭐⭐⭐</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", borderRadius: 16, padding: "40px 28px", textAlign: "center", marginTop: 24 }}>
          <h2 className="text-[20px] md:text-[26px]" style={{ color: "#ffffff", fontWeight: 700, margin: "0 0 8px" }}>Das gleiche Ergebnis für Ihren Betrieb?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, margin: "0 0 20px" }}>Kostenlose Recruiting-Analyse in 20 Minuten</p>
          <Link href="/recruiting-analyse" style={{ display: "inline-block", padding: "14px 32px", borderRadius: 10, background: "#1B98E0", color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>Jetzt Termin sichern →</Link>
        </div>
      </div>
    </div>
  );
}
