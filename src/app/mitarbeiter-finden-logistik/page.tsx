import type { Metadata } from "next";
import MitarbeiterFindenPage, { type MitarbeiterFindenData } from "@/components/MitarbeiterFindenPage";

export const metadata: Metadata = {
  title: "LKW Fahrer finden — Berufskraftfahrer & Logistiker in 30 Tagen | TalentSuite",
  description:
    "Social Recruiting f\u00FCr Logistik & Transport. 30.000+ offene Stellen, \u00D8 140 Tage Vakanzzeit. Berufskraftfahrer & Logistiker in 30 Tagen.",
};

const data: MitarbeiterFindenData = {
  source: "mitarbeiter-finden-logistik",
  industry: "Logistik & Transport",
  heroEmoji: "\u{1F69B}",
  heroTitle: "LKW Fahrer finden \u2014 Berufskraftfahrer & Logistiker in 30 Tagen",
  heroSub: "30.000+ offene Stellen \u00B7 \u00D8 140 Tage Vakanzzeit \u00B7 72% der Fachkr\u00E4fte nicht auf Jobb\u00F6rsen",
  heroHint: "20 Min. \u00B7 Unverbindlich \u00B7 Konkrete Strategie f\u00FCr Logistik & Transport",
  stats: [
    { n: "30.000+", label: "Offene Stellen", c: "#1B98E0" },
    { n: "140 Tage", label: "\u00D8 Vakanzzeit", c: "#EF4444" },
    { n: "14-20 \u20AC", label: "Kosten/Bewerbung", c: "#10B981" },
    { n: "\u00D8 30 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
  ],
  painEmoji: "\u{1F69B}",
  painTitle: "Die Situation in Logistik und Transport",
  painIntro:
    "Die Logistikbranche steht vor einer demografischen Zeitbombe. Der Altersdurchschnitt der LKW-Fahrer liegt \u00FCber 50 Jahren.",
  painBoxes: [
    {
      icon: "\u{1F534}",
      text: "Demografische Krise: Durchschnittsalter \u00FCber 50 \u2014 bis 2030 fehlen 185.000 LKW-Fahrer in Deutschland.",
      bg: "rgba(239,68,68,0.05)",
      border: "rgba(239,68,68,0.15)",
    },
    {
      icon: "\u{1F7E1}",
      text: "Sinkende Neuerwerbungen: Die Zahl der CE-F\u00FChrerschein-Neuerwerbungen sinkt seit Jahren kontinuierlich.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
    {
      icon: "\u{1F7E0}",
      text: "Image-Problem: Lange Abwesenheiten von Zuhause und k\u00F6rperliche Belastung machen den Beruf unattraktiv f\u00FCr junge Menschen.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
  ],
  failTitle: "\u274C Warum Jobb\u00F6rsen im Bereich Logistik & Transport nicht mehr funktionieren",
  failText:
    "LKW-Fahrer nutzen Smartphone-Apps und Social Media in Pausen und nach Feierabend, nicht Jobb\u00F6rsen am Desktop.",
  solutionTitle: "\u2705 Social Recruiting f\u00FCr Logistik & Transport: So funktioniert es",
  solutionIntro:
    "Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind.",
  solutionCards: [
    { icon: "\u{1F3AF}", t: "Gezielte Ansprache", d: "Wir erreichen Berufskraftfahrer im Umkreis von 50km \u2014 nach Beruf, F\u00FChrerscheinklasse und Interessen." },
    { icon: "\u{1F4F1}", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
    { icon: "\u{1F4CA}", t: "Messbare Ergebnisse", d: "14-20 \u20AC pro Bewerbung bei 11-15% Conversion. Transparent und nachvollziehbar." },
  ],
  caseText:
    "Eine Spedition in Hessen suchte 7 Monate CE-Fahrer. Social Recruiting: 27 Bewerbungen in 4 Wochen, 2 Einstellungen.",
  positionsTitle: "Diese Positionen besetzen wir im Bereich Logistik & Transport",
  positions: ["Berufskraftfahrer CE (m/w/d)", "LKW-Fahrer", "Lagerist/Fachlagerist", "Disponent", "Fuhrparkleiter"],
  seoTitle: "So gewinnen erfolgreiche Logistikunternehmen heute Fahrer",
  seoTexts: [
    "Der Fahrermangel ist strukturell und wird sich demografisch bedingt massiv versch\u00E4rfen.",
    "Erfolgreiche Unternehmen gehen aktiv auf potenzielle Kandidaten zu.",
    "Die Ergebnisse: 14-20 \u20AC pro qualifizierte Bewerbung, 11-15% Conversion-Rate, \u00D8 30 Tage bis Einstellung.",
  ],
  ctaTitle: "LKW-Fahrer oder Lageristen gesucht?",
  ctaText:
    "In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkr\u00E4fte in Ihrer Region \u00FCber Social Media erreichbar sind \u2014 und was eine Kampagne kosten w\u00FCrde.",
};

export default function Page() {
  return <MitarbeiterFindenPage data={data} />;
}
