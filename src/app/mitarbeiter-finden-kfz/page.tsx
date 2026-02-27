import type { Metadata } from "next";
import MitarbeiterFindenPage, { type MitarbeiterFindenData } from "@/components/MitarbeiterFindenPage";

export const metadata: Metadata = {
  title: "KFZ Mechatroniker finden — KFZ-Fachkr\u00E4fte in 30 Tagen einstellen | TalentSuite",
  description:
    "Social Recruiting f\u00FCr das KFZ-Gewerbe. 25.000+ offene Stellen, \u00D8 145 Tage Vakanzzeit. KFZ-Mechatroniker & Mechaniker in 30 Tagen.",
};

const data: MitarbeiterFindenData = {
  source: "mitarbeiter-finden-kfz",
  industry: "KFZ-Gewerbe",
  heroEmoji: "\u{1F697}",
  heroTitle: "KFZ Mechatroniker finden \u2014 KFZ-Fachkr\u00E4fte in 30 Tagen einstellen",
  heroSub: "25.000+ offene Stellen \u00B7 \u00D8 145 Tage Vakanzzeit \u00B7 72% der Fachkr\u00E4fte nicht auf Jobb\u00F6rsen",
  heroHint: "20 Min. \u00B7 Unverbindlich \u00B7 Konkrete Strategie f\u00FCr KFZ-Gewerbe",
  stats: [
    { n: "25.000+", label: "Offene Stellen", c: "#1B98E0" },
    { n: "145 Tage", label: "\u00D8 Vakanzzeit", c: "#EF4444" },
    { n: "15-22 \u20AC", label: "Kosten/Bewerbung", c: "#10B981" },
    { n: "\u00D8 28 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
  ],
  painEmoji: "\u{1F697}",
  painTitle: "Die Situation im KFZ-Gewerbe",
  painIntro:
    "Das KFZ-Gewerbe befindet sich im gr\u00F6\u00DFten Umbruch seiner Geschichte durch die Elektromobilit\u00E4t.",
  painBoxes: [
    {
      icon: "\u{1F534}",
      text: "E-Mobilit\u00E4t: Hochvolt-Technik erfordert neue Qualifikationen \u2014 der Markt f\u00FCr geschulte KFZ-Mechatroniker ist nahezu leergefegt.",
      bg: "rgba(239,68,68,0.05)",
      border: "rgba(239,68,68,0.15)",
    },
    {
      icon: "\u{1F7E1}",
      text: "Abwanderung: 72% der KFZ-Betriebe verlieren Fachkr\u00E4fte an die Industrie mit h\u00F6heren Geh\u00E4ltern.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
    {
      icon: "\u{1F7E0}",
      text: "Auslastung am Limit: 93% Werkstattauslastung bei gleichzeitigem Personalmangel.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
  ],
  failTitle: "\u274C Warum Jobb\u00F6rsen im Bereich KFZ-Gewerbe nicht mehr funktionieren",
  failText:
    "KFZ-Mechatroniker verbringen Freizeit auf YouTube und Social Media, nicht auf Jobb\u00F6rsen.",
  solutionTitle: "\u2705 Social Recruiting f\u00FCr KFZ-Gewerbe: So funktioniert es",
  solutionIntro:
    "Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind.",
  solutionCards: [
    { icon: "\u{1F3AF}", t: "Gezielte Ansprache", d: "Wir erreichen KFZ-Mechatroniker im Umkreis von 30km \u2014 nach Beruf, Alter und Interessen." },
    { icon: "\u{1F4F1}", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
    { icon: "\u{1F4CA}", t: "Messbare Ergebnisse", d: "15-22 \u20AC pro Bewerbung bei 12-16% Conversion. Transparent und nachvollziehbar." },
  ],
  caseText:
    "Ein Autohaus in Th\u00FCringen suchte 6 Monate einen Hochvolt-Mechatroniker. Social Recruiting: 16 Bewerbungen in 3 Wochen, 1 Einstellung nach 21 Tagen.",
  positionsTitle: "Diese Positionen besetzen wir im Bereich KFZ-Gewerbe",
  positions: ["KFZ-Mechatroniker (m/w/d)", "KFZ-Mechaniker", "KFZ-Meister", "Serviceberater", "Hochvolt-Techniker"],
  seoTitle: "So gewinnen erfolgreiche KFZ-Betriebe heute Fachkr\u00E4fte",
  seoTexts: [
    "Der Fachkr\u00E4ftemangel im KFZ-Gewerbe ist strukturell und wird durch die E-Mobilit\u00E4t versch\u00E4rft.",
    "Erfolgreiche Betriebe gehen aktiv auf potenzielle Kandidaten zu.",
    "Die Ergebnisse: 15-22 \u20AC pro qualifizierte Bewerbung, 12-16% Conversion-Rate, \u00D8 28 Tage bis Einstellung.",
  ],
  ctaTitle: "KFZ-Mechatroniker gesucht?",
  ctaText:
    "In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkr\u00E4fte in Ihrer Region \u00FCber Social Media erreichbar sind \u2014 und was eine Kampagne kosten w\u00FCrde.",
};

export default function Page() {
  return <MitarbeiterFindenPage data={data} />;
}
