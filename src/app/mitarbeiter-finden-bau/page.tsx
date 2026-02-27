import type { Metadata } from "next";
import MitarbeiterFindenPage, { type MitarbeiterFindenData } from "@/components/MitarbeiterFindenPage";

export const metadata: Metadata = {
  title: "Mitarbeiter Bau finden — Maurer, Zimmerer & Bauleiter in 30 Tagen | TalentSuite",
  description:
    "Social Recruiting für das Baugewerbe. 55.000+ offene Stellen, Ø 155 Tage Vakanzzeit. Wir finden Maurer, Zimmerer und Bauleiter in 30 Tagen.",
};

const data: MitarbeiterFindenData = {
  source: "mitarbeiter-finden-bau",
  industry: "Baugewerbe",
  heroEmoji: "\u{1F3D7}\uFE0F",
  heroTitle: "Mitarbeiter Bau finden \u2014 Maurer, Zimmerer & Bauleiter in 30 Tagen",
  heroSub: "55.000+ offene Stellen \u00B7 \u00D8 155 Tage Vakanzzeit \u00B7 72% der Fachkr\u00E4fte nicht auf Jobb\u00F6rsen",
  heroHint: "20 Min. \u00B7 Unverbindlich \u00B7 Konkrete Strategie f\u00FCr Baugewerbe",
  stats: [
    { n: "55.000+", label: "Offene Stellen", c: "#1B98E0" },
    { n: "155 Tage", label: "\u00D8 Vakanzzeit", c: "#EF4444" },
    { n: "16-24 \u20AC", label: "Kosten/Bewerbung", c: "#10B981" },
    { n: "\u00D8 30 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
  ],
  painEmoji: "\u{1F3D7}\uFE0F",
  painTitle: "Die Situation im Baugewerbe",
  painIntro:
    "Das Baugewerbe leidet unter chronischem Fachkr\u00E4ftemangel. Physische Belastung, Saisonarbeit und alternde Belegschaften.",
  painBoxes: [
    {
      icon: "\u{1F534}",
      text: "Auftr\u00E4ge ablehnen: 62% der Baubetriebe m\u00FCssen regelm\u00E4\u00DFig Auftr\u00E4ge ablehnen \u2014 nicht aus Mangel an Arbeit, sondern an Arbeitern.",
      bg: "rgba(239,68,68,0.05)",
      border: "rgba(239,68,68,0.15)",
    },
    {
      icon: "\u{1F7E1}",
      text: "Saisonale Schwankungen: Im Fr\u00FChjahr explodiert die Nachfrage, aber qualifizierte Kr\u00E4fte sind dann bereits vergeben.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
    {
      icon: "\u{1F7E0}",
      text: "K\u00F6rperliche Belastung: Schwere k\u00F6rperliche Arbeit schreckt junge Menschen ab \u2014 das Image muss sich wandeln.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
  ],
  failTitle: "\u274C Warum Jobb\u00F6rsen im Bereich Baugewerbe nicht mehr funktionieren",
  failText:
    "Bauarbeiter suchen nicht auf StepStone \u2014 sie sind nach Feierabend auf Facebook und Instagram unterwegs.",
  solutionTitle: "\u2705 Social Recruiting f\u00FCr Baugewerbe: So funktioniert es",
  solutionIntro:
    "Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind.",
  solutionCards: [
    { icon: "\u{1F3AF}", t: "Gezielte Ansprache", d: "Wir erreichen Maurer und Zimmerer im Umkreis von 30km \u2014 nach Beruf, Alter und Interessen." },
    { icon: "\u{1F4F1}", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
    { icon: "\u{1F4CA}", t: "Messbare Ergebnisse", d: "16-24 \u20AC pro Bewerbung bei 10-14% Conversion. Transparent und nachvollziehbar." },
  ],
  caseText:
    "Ein Bauunternehmen in Sachsen-Anhalt suchte 5 Monate einen Polier. Social Recruiting: 19 Bewerbungen in 3 Wochen, 1 Einstellung.",
  positionsTitle: "Diese Positionen besetzen wir im Bereich Baugewerbe",
  positions: ["Maurer (m/w/d)", "Zimmerer", "Bauleiter", "Betonbauer", "Polier"],
  seoTitle: "So gewinnen erfolgreiche Baubetriebe heute Fachkr\u00E4fte",
  seoTexts: [
    "Der Fachkr\u00E4ftemangel im Baugewerbe ist strukturell und wird sich weiter versch\u00E4rfen.",
    "Erfolgreiche Betriebe gehen aktiv auf potenzielle Kandidaten zu.",
    "Die Ergebnisse: 16-24 \u20AC pro qualifizierte Bewerbung, 10-14% Conversion-Rate, \u00D8 30 Tage bis Einstellung.",
  ],
  ctaTitle: "Maurer oder Zimmerer gesucht?",
  ctaText:
    "In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkr\u00E4fte in Ihrer Region \u00FCber Social Media erreichbar sind \u2014 und was eine Kampagne kosten w\u00FCrde.",
};

export default function Page() {
  return <MitarbeiterFindenPage data={data} />;
}
