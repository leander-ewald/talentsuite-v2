import type { Metadata } from "next";
import MitarbeiterFindenPage, { type MitarbeiterFindenData } from "@/components/MitarbeiterFindenPage";

export const metadata: Metadata = {
  title: "Pflegekr\u00E4fte finden — Pflegefachkr\u00E4fte & Pflegehelfer in 30 Tagen | TalentSuite",
  description:
    "Social Recruiting f\u00FCr Pflege & Gesundheit. 46.000+ offene Stellen, \u00D8 200+ Tage Vakanzzeit. Pflegefachkr\u00E4fte & Pflegehelfer in 30 Tagen.",
};

const data: MitarbeiterFindenData = {
  source: "mitarbeiter-finden-pflege",
  industry: "Pflege & Gesundheit",
  heroEmoji: "\u{1F3E5}",
  heroTitle: "Pflegekr\u00E4fte finden \u2014 Pflegefachkr\u00E4fte & Pflegehelfer in 30 Tagen",
  heroSub: "46.000+ offene Stellen \u00B7 \u00D8 200+ Tage Vakanzzeit \u00B7 72% der Fachkr\u00E4fte nicht auf Jobb\u00F6rsen",
  heroHint: "20 Min. \u00B7 Unverbindlich \u00B7 Konkrete Strategie f\u00FCr Pflege & Gesundheit",
  stats: [
    { n: "46.000+", label: "Offene Stellen", c: "#1B98E0" },
    { n: "200+ Tage", label: "\u00D8 Vakanzzeit", c: "#EF4444" },
    { n: "18-28 \u20AC", label: "Kosten/Bewerbung", c: "#10B981" },
    { n: "\u00D8 35 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
  ],
  painEmoji: "\u{1F3E5}",
  painTitle: "Die Situation in der Alten- und Krankenpflege",
  painIntro:
    "Die Pflege steht vor einer Belastungskrise. Steigende Patientenzahlen, alternde Belegschaften und ein dramatischer Nachwuchsmangel treffen auf die h\u00F6chsten Vakanzzeiten aller Branchen.",
  painBoxes: [
    {
      icon: "\u{1F534}",
      text: "Abw\u00E4rtsspirale: Jede unbesetzte Stelle erh\u00F6ht die Belastung des bestehenden Teams \u2014 was zu weiteren K\u00FCndigungen f\u00FChrt.",
      bg: "rgba(239,68,68,0.05)",
      border: "rgba(239,68,68,0.15)",
    },
    {
      icon: "\u{1F7E1}",
      text: "L\u00E4ngste Vakanzzeiten: Mit \u00FCber 200 Tagen durchschnittlicher Besetzungszeit ist die Pflege Schlusslicht beim Recruiting.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
    {
      icon: "\u{1F7E0}",
      text: "Wechselbereitschaft: 72% der Pflegekr\u00E4fte sind nicht aktiv auf Jobsuche, aber offen f\u00FCr bessere Angebote \u2014 Sie m\u00FCssen sie nur erreichen.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
  ],
  failTitle: "\u274C Warum Jobb\u00F6rsen im Bereich Pflege & Gesundheit nicht mehr funktionieren",
  failText:
    "Pflegekr\u00E4fte sind ersch\u00F6pft vom Alltag \u2014 sie verbringen ihre freie Zeit auf Instagram und Facebook, nicht auf Jobb\u00F6rsen.",
  solutionTitle: "\u2705 Social Recruiting f\u00FCr Pflege & Gesundheit: So funktioniert es",
  solutionIntro:
    "Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind \u2014 direkt auf Facebook, Instagram und Co.",
  solutionCards: [
    { icon: "\u{1F3AF}", t: "Gezielte Ansprache", d: "Wir erreichen Pflegefachkr\u00E4fte im Umkreis von 30km \u2014 nach Beruf, Alter und Interessen." },
    { icon: "\u{1F4F1}", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
    { icon: "\u{1F4CA}", t: "Messbare Ergebnisse", d: "18-28 \u20AC pro Bewerbung bei 14-18% Conversion. Transparent und nachvollziehbar." },
  ],
  caseText:
    "Ein Pflegeheim in Niedersachsen mit 80 Betten fand 10 Monate keine examinierte Pflegefachkraft. Social Recruiting: 31 Bewerbungen in 5 Wochen, 3 Einstellungen.",
  positionsTitle: "Diese Positionen besetzen wir im Bereich Pflege & Gesundheit",
  positions: ["Pflegefachkraft (m/w/d)", "Altenpfleger/in", "Krankenpfleger/in", "Pflegehelfer/in", "Pflegedienstleitung"],
  seoTitle: "So gewinnen erfolgreiche Pflegeeinrichtungen heute Fachkr\u00E4fte",
  seoTexts: [
    "Der Fachkr\u00E4ftemangel in der Pflege ist keine vor\u00FCbergehende Erscheinung \u2014 er ist strukturell und wird sich weiter versch\u00E4rfen.",
    "Erfolgreiche Einrichtungen setzen auf einen Paradigmenwechsel: aktiv auf Kandidaten zugehen statt warten.",
    "Die Ergebnisse: 18-28 \u20AC pro qualifizierte Bewerbung, 14-18% Conversion-Rate, \u00D8 35 Tage bis Einstellung.",
  ],
  ctaTitle: "Pflegekr\u00E4fte gesucht?",
  ctaText:
    "In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkr\u00E4fte in Ihrer Region \u00FCber Social Media erreichbar sind \u2014 und was eine Kampagne kosten w\u00FCrde.",
};

export default function Page() {
  return <MitarbeiterFindenPage data={data} />;
}
