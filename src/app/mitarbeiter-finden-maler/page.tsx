import type { Metadata } from "next";
import MitarbeiterFindenPage, { type MitarbeiterFindenData } from "@/components/MitarbeiterFindenPage";

export const metadata: Metadata = {
  title: "Maler finden — Maler und Lackierer in 30 Tagen einstellen | TalentSuite",
  description:
    "Social Recruiting f\u00FCr das Maler- und Lackiererhandwerk. 18.000+ offene Stellen, \u00D8 135 Tage Vakanzzeit. Maler & Lackierer in 30 Tagen.",
};

const data: MitarbeiterFindenData = {
  source: "mitarbeiter-finden-maler",
  industry: "Maler- und Lackiererhandwerk",
  heroEmoji: "\u{1F3A8}",
  heroTitle: "Maler finden \u2014 Maler und Lackierer in 30 Tagen einstellen",
  heroSub: "18.000+ offene Stellen \u00B7 \u00D8 135 Tage Vakanzzeit \u00B7 72% der Fachkr\u00E4fte nicht auf Jobb\u00F6rsen",
  heroHint: "20 Min. \u00B7 Unverbindlich \u00B7 Konkrete Strategie f\u00FCr Maler- und Lackiererhandwerk",
  stats: [
    { n: "18.000+", label: "Offene Stellen", c: "#1B98E0" },
    { n: "135 Tage", label: "\u00D8 Vakanzzeit", c: "#EF4444" },
    { n: "13-19 \u20AC", label: "Kosten/Bewerbung", c: "#10B981" },
    { n: "\u00D8 26 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
  ],
  painEmoji: "\u{1F3A8}",
  painTitle: "Die Situation im Maler- und Lackiererhandwerk",
  painIntro:
    "Das Malerhandwerk k\u00E4mpft mit sinkendem Nachwuchs und steigender Nachfrage durch die EU-Sanierungspflicht.",
  painBoxes: [
    {
      icon: "\u{1F534}",
      text: "Sanierungspflicht: Die EU-Geb\u00E4udeeffizienzrichtlinie treibt die Nachfrage nach Malern massiv nach oben.",
      bg: "rgba(239,68,68,0.05)",
      border: "rgba(239,68,68,0.15)",
    },
    {
      icon: "\u{1F7E1}",
      text: "Azubi-Mangel: Die Ausbildungszahlen sinken seit Jahren. Immer weniger junge Menschen entscheiden sich f\u00FCr das Malerhandwerk.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
    {
      icon: "\u{1F7E0}",
      text: "Konkurrenz durch Bau: Bauunternehmen werben Maler mit h\u00F6heren Geh\u00E4ltern und Zulagen ab.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
  ],
  failTitle: "\u274C Warum Jobb\u00F6rsen im Bereich Maler- und Lackiererhandwerk nicht mehr funktionieren",
  failText:
    "Maler und Lackierer suchen nicht aktiv auf Jobb\u00F6rsen, sind aber t\u00E4glich auf Social Media unterwegs.",
  solutionTitle: "\u2705 Social Recruiting f\u00FCr Maler- und Lackiererhandwerk: So funktioniert es",
  solutionIntro:
    "Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind.",
  solutionCards: [
    { icon: "\u{1F3AF}", t: "Gezielte Ansprache", d: "Wir erreichen Maler und Lackierer im Umkreis von 30km \u2014 nach Beruf, Alter und Interessen." },
    { icon: "\u{1F4F1}", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
    { icon: "\u{1F4CA}", t: "Messbare Ergebnisse", d: "13-19 \u20AC pro Bewerbung bei 12-16% Conversion. Transparent und nachvollziehbar." },
  ],
  caseText:
    "Ein Malerbetrieb in Baden-W\u00FCrttemberg suchte 3 Monate einen Gesellen. Social Recruiting: 15 Bewerbungen in 2 Wochen, 2 Einstellungen.",
  positionsTitle: "Diese Positionen besetzen wir im Bereich Maler- und Lackiererhandwerk",
  positions: ["Maler und Lackierer (m/w/d)", "Malergeselle", "Fahrzeuglackierer", "Malermeister", "Trockenbauer"],
  seoTitle: "So gewinnen erfolgreiche Malerbetriebe heute Fachkr\u00E4fte",
  seoTexts: [
    "Der Fachkr\u00E4ftemangel im Malerhandwerk ist strukturell und wird durch die Sanierungspflicht versch\u00E4rft.",
    "Erfolgreiche Betriebe gehen aktiv auf potenzielle Kandidaten zu.",
    "Die Ergebnisse: 13-19 \u20AC pro qualifizierte Bewerbung, 12-16% Conversion-Rate, \u00D8 26 Tage bis Einstellung.",
  ],
  ctaTitle: "Maler oder Lackierer gesucht?",
  ctaText:
    "In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkr\u00E4fte in Ihrer Region \u00FCber Social Media erreichbar sind \u2014 und was eine Kampagne kosten w\u00FCrde.",
};

export default function Page() {
  return <MitarbeiterFindenPage data={data} />;
}
