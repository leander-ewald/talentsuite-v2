import type { Metadata } from "next";
import MitarbeiterFindenPage, { type MitarbeiterFindenData } from "@/components/MitarbeiterFindenPage";

export const metadata: Metadata = {
  title: "SHK Fachkr\u00E4fte finden — Anlagenmechaniker & Monteure in 30 Tagen | TalentSuite",
  description:
    "Social Recruiting f\u00FCr das SHK-Handwerk. 68.000+ offene Stellen, \u00D8 165 Tage Vakanzzeit. Anlagenmechaniker & Monteure in 30 Tagen.",
};

const data: MitarbeiterFindenData = {
  source: "mitarbeiter-finden-shk",
  industry: "SHK-Handwerk",
  heroEmoji: "\u{1F527}",
  heroTitle: "SHK Fachkr\u00E4fte finden \u2014 Anlagenmechaniker & Monteure in 30 Tagen",
  heroSub: "68.000+ offene Stellen \u00B7 \u00D8 165 Tage Vakanzzeit \u00B7 72% der Fachkr\u00E4fte nicht auf Jobb\u00F6rsen",
  heroHint: "20 Min. \u00B7 Unverbindlich \u00B7 Konkrete Strategie f\u00FCr SHK-Handwerk",
  stats: [
    { n: "68.000+", label: "Offene Stellen", c: "#1B98E0" },
    { n: "165 Tage", label: "\u00D8 Vakanzzeit", c: "#EF4444" },
    { n: "15-22 \u20AC", label: "Kosten/Bewerbung", c: "#10B981" },
    { n: "\u00D8 28 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
  ],
  painEmoji: "\u{1F527}",
  painTitle: "Die Situation im SHK-Handwerk",
  painIntro:
    "Das SHK-Handwerk steht unter enormem Druck. Der W\u00E4rmepumpen-Boom, steigende Sanierungspflichten und der demografische Wandel treffen auf eine schrumpfende Fachkr\u00E4ftebasis.",
  painBoxes: [
    {
      icon: "\u{1F534}",
      text: "W\u00E4rmepumpen-Boom: Die Nachfrage nach Installateuren hat sich verdreifacht \u2014 62% der Betriebe lehnen bereits Auftr\u00E4ge ab.",
      bg: "rgba(239,68,68,0.05)",
      border: "rgba(239,68,68,0.15)",
    },
    {
      icon: "\u{1F7E1}",
      text: "\u00DCberalterung: Der Altersdurchschnitt im SHK-Handwerk steigt kontinuierlich. Viele erfahrene Monteure gehen in den n\u00E4chsten Jahren in Rente.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
    {
      icon: "\u{1F7E0}",
      text: "Konkurrenz durch Industrie: Gro\u00DFe Hersteller werben SHK-Fachkr\u00E4fte mit h\u00F6heren Geh\u00E4ltern und geregelten Arbeitszeiten ab.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
  ],
  failTitle: "\u274C Warum Jobb\u00F6rsen im Bereich SHK-Handwerk nicht mehr funktionieren",
  failText:
    "SHK-Monteure verbringen ihre Abende auf Social Media, nicht auf Jobb\u00F6rsen. Wer sie dort nicht anspricht, verliert sie an den Wettbewerb.",
  solutionTitle: "\u2705 Social Recruiting f\u00FCr SHK-Handwerk: So funktioniert es",
  solutionIntro:
    "Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind \u2014 direkt auf Facebook, Instagram und Co.",
  solutionCards: [
    { icon: "\u{1F3AF}", t: "Gezielte Ansprache", d: "Wir erreichen Anlagenmechaniker im Umkreis von 30km \u2014 nach Beruf, Alter und Interessen." },
    { icon: "\u{1F4F1}", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
    { icon: "\u{1F4CA}", t: "Messbare Ergebnisse", d: "15-22 \u20AC pro Bewerbung bei 12-18% Conversion. Transparent und nachvollziehbar." },
  ],
  caseText:
    "Ein SHK-Betrieb in NRW mit 12 Mitarbeitern suchte 8 Monate erfolglos einen Anlagenmechaniker. Social Recruiting: 23 Bewerbungen in 3 Wochen, 2 Einstellungen.",
  positionsTitle: "Diese Positionen besetzen wir im Bereich SHK-Handwerk",
  positions: ["Anlagenmechaniker SHK (m/w/d)", "Kundendiensttechniker", "Gas-Wasser-Installateur", "Heizungsbauer", "SHK-Meister"],
  seoTitle: "So gewinnen erfolgreiche SHK-Betriebe heute Fachkr\u00E4fte",
  seoTexts: [
    "Der Fachkr\u00E4ftemangel im SHK-Handwerk ist keine vor\u00FCbergehende Erscheinung \u2014 er ist strukturell und wird sich durch die Energiewende weiter versch\u00E4rfen.",
    "Erfolgreiche Betriebe setzen deshalb auf einen Paradigmenwechsel: Statt darauf zu warten, dass Bewerber zu ihnen kommen, gehen sie aktiv auf potenzielle Kandidaten zu.",
    "Die Ergebnisse sprechen f\u00FCr sich: 15-22 \u20AC pro qualifizierte Bewerbung, 12-18% Conversion-Rate und durchschnittlich 28 Tage bis zur Einstellung.",
  ],
  ctaTitle: "Anlagenmechaniker gesucht?",
  ctaText:
    "In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkr\u00E4fte in Ihrer Region \u00FCber Social Media erreichbar sind \u2014 und was eine Kampagne kosten w\u00FCrde.",
};

export default function Page() {
  return <MitarbeiterFindenPage data={data} />;
}
