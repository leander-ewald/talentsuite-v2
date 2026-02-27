import type { Metadata } from "next";
import MitarbeiterFindenPage, { type MitarbeiterFindenData } from "@/components/MitarbeiterFindenPage";

export const metadata: Metadata = {
  title: "Produktionsmitarbeiter finden — CNC-Fachkr\u00E4fte & Maschinenf\u00FChrer in 30 Tagen | TalentSuite",
  description:
    "Social Recruiting f\u00FCr Produktion & Industrie. 45.000+ offene Stellen, \u00D8 175 Tage Vakanzzeit. CNC-Fachkr\u00E4fte & Maschinenf\u00FChrer in 30 Tagen.",
};

const data: MitarbeiterFindenData = {
  source: "mitarbeiter-finden-produktion",
  industry: "Produktion & Industrie",
  heroEmoji: "\u2699\uFE0F",
  heroTitle: "Produktionsmitarbeiter finden \u2014 CNC-Fachkr\u00E4fte & Maschinenf\u00FChrer in 30 Tagen",
  heroSub: "45.000+ offene Stellen \u00B7 \u00D8 175 Tage Vakanzzeit \u00B7 72% der Fachkr\u00E4fte nicht auf Jobb\u00F6rsen",
  heroHint: "20 Min. \u00B7 Unverbindlich \u00B7 Konkrete Strategie f\u00FCr Produktion & Industrie",
  stats: [
    { n: "45.000+", label: "Offene Stellen", c: "#1B98E0" },
    { n: "175 Tage", label: "\u00D8 Vakanzzeit", c: "#EF4444" },
    { n: "18-26 \u20AC", label: "Kosten/Bewerbung", c: "#10B981" },
    { n: "\u00D8 32 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
  ],
  painEmoji: "\u2699\uFE0F",
  painTitle: "Die Situation in der Produktion und Industrie",
  painIntro:
    "Die deutsche Industrie steht vor einer Qualifikationsl\u00FCcke durch Industrie 4.0, Automatisierung und Digitalisierung.",
  painBoxes: [
    {
      icon: "\u{1F534}",
      text: "Industrie 4.0: CNC-, SPS- und IoT-Kompetenzen werden immer wichtiger, aber die Ausbildung hinkt hinterher.",
      bg: "rgba(239,68,68,0.05)",
      border: "rgba(239,68,68,0.15)",
    },
    {
      icon: "\u{1F7E1}",
      text: "Schichtarbeit: Wechselschicht und Nachtarbeit schrecken viele potenzielle Bewerber ab.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
    {
      icon: "\u{1F7E0}",
      text: "Konzern-Konkurrenz: Gro\u00DFe Industrieunternehmen bieten h\u00F6here Geh\u00E4lter und bessere Benefits als der Mittelstand.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
  ],
  failTitle: "\u274C Warum Jobb\u00F6rsen im Bereich Produktion & Industrie nicht mehr funktionieren",
  failText:
    "Produktionsmitarbeiter suchen nicht aktiv auf Karriereportalen \u2014 sie nutzen Social Media nach der Schicht.",
  solutionTitle: "\u2705 Social Recruiting f\u00FCr Produktion & Industrie: So funktioniert es",
  solutionIntro:
    "Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind.",
  solutionCards: [
    { icon: "\u{1F3AF}", t: "Gezielte Ansprache", d: "Wir erreichen Industriemechaniker und CNC-Fachkr\u00E4fte im Umkreis von 30km." },
    { icon: "\u{1F4F1}", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
    { icon: "\u{1F4CA}", t: "Messbare Ergebnisse", d: "18-26 \u20AC pro Bewerbung bei 12-16% Conversion. Transparent und nachvollziehbar." },
  ],
  caseText:
    "Ein Maschinenbauer in NRW suchte 8 Monate CNC-Fachkr\u00E4fte. Social Recruiting: 22 Bewerbungen in 4 Wochen, 2 Einstellungen.",
  positionsTitle: "Diese Positionen besetzen wir im Bereich Produktion & Industrie",
  positions: ["Industriemechaniker (m/w/d)", "CNC-Fachkraft", "Maschinenf\u00FChrer", "Produktionsmitarbeiter", "SPS-Programmierer"],
  seoTitle: "So gewinnen erfolgreiche Produktionsbetriebe heute Fachkr\u00E4fte",
  seoTexts: [
    "Der Fachkr\u00E4ftemangel in der Produktion ist strukturell und wird durch Industrie 4.0 versch\u00E4rft.",
    "Erfolgreiche Betriebe gehen aktiv auf potenzielle Kandidaten zu.",
    "Die Ergebnisse: 18-26 \u20AC pro qualifizierte Bewerbung, 12-16% Conversion-Rate, \u00D8 32 Tage bis Einstellung.",
  ],
  ctaTitle: "CNC-Fachkraft oder Maschinenf\u00FChrer gesucht?",
  ctaText:
    "In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkr\u00E4fte in Ihrer Region \u00FCber Social Media erreichbar sind \u2014 und was eine Kampagne kosten w\u00FCrde.",
};

export default function Page() {
  return <MitarbeiterFindenPage data={data} />;
}
