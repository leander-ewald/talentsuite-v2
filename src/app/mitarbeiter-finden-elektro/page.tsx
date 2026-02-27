import type { Metadata } from "next";
import MitarbeiterFindenPage, { type MitarbeiterFindenData } from "@/components/MitarbeiterFindenPage";

export const metadata: Metadata = {
  title: "Elektriker finden — Elektroniker & Elektroinstallateure in 30 Tagen | TalentSuite",
  description:
    "Social Recruiting f\u00FCr das Elektrohandwerk. 55.000+ offene Stellen, \u00D8 170 Tage Vakanzzeit. Elektroniker & Elektroinstallateure in 30 Tagen.",
};

const data: MitarbeiterFindenData = {
  source: "mitarbeiter-finden-elektro",
  industry: "Elektrohandwerk",
  heroEmoji: "\u26A1",
  heroTitle: "Elektriker finden \u2014 Elektroniker & Elektroinstallateure in 30 Tagen",
  heroSub: "55.000+ offene Stellen \u00B7 \u00D8 170 Tage Vakanzzeit \u00B7 72% der Fachkr\u00E4fte nicht auf Jobb\u00F6rsen",
  heroHint: "20 Min. \u00B7 Unverbindlich \u00B7 Konkrete Strategie f\u00FCr Elektrohandwerk",
  stats: [
    { n: "55.000+", label: "Offene Stellen", c: "#1B98E0" },
    { n: "170 Tage", label: "\u00D8 Vakanzzeit", c: "#EF4444" },
    { n: "16-24 \u20AC", label: "Kosten/Bewerbung", c: "#10B981" },
    { n: "\u00D8 32 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
  ],
  painEmoji: "\u26A1",
  painTitle: "Die Situation im Elektrohandwerk",
  painIntro:
    "Das Elektrohandwerk erlebt einen beispiellosen Nachfrageboom. E-Mobilit\u00E4t, Photovoltaik und Smart Home treiben den Bedarf an qualifizierten Elektronikern auf Rekordniveau.",
  painBoxes: [
    {
      icon: "\u{1F534}",
      text: "E-Mobilit\u00E4t und PV-Boom: Jede Wallbox, jede PV-Anlage braucht einen Elektriker \u2014 die Nachfrage \u00FCbersteigt das Angebot um ein Vielfaches.",
      bg: "rgba(239,68,68,0.05)",
      border: "rgba(239,68,68,0.15)",
    },
    {
      icon: "\u{1F7E1}",
      text: "Sicherheitsrelevanz: Elektroarbeiten erfordern zertifizierte Fachkr\u00E4fte. Unqualifiziertes Personal einzusetzen ist keine Option.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
    {
      icon: "\u{1F7E0}",
      text: "Nachwuchsmangel: 12% weniger Auszubildende als vor 5 Jahren. Der Nachwuchs reicht nicht, um die Abg\u00E4nge zu kompensieren.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
  ],
  failTitle: "\u274C Warum Jobb\u00F6rsen im Bereich Elektrohandwerk nicht mehr funktionieren",
  failText:
    "Elektroniker sind technisch affin und verbringen ihre Freizeit auf YouTube, Instagram und Facebook \u2014 nicht auf StepStone oder Indeed.",
  solutionTitle: "\u2705 Social Recruiting f\u00FCr Elektrohandwerk: So funktioniert es",
  solutionIntro:
    "Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind \u2014 direkt auf Facebook, Instagram und Co.",
  solutionCards: [
    { icon: "\u{1F3AF}", t: "Gezielte Ansprache", d: "Wir erreichen Elektroniker im Umkreis von 30km \u2014 nach Beruf, Alter und Interessen." },
    { icon: "\u{1F4F1}", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
    { icon: "\u{1F4CA}", t: "Messbare Ergebnisse", d: "16-24 \u20AC pro Bewerbung bei 11-15% Conversion. Transparent und nachvollziehbar." },
  ],
  caseText:
    "Ein Elektrobetrieb in Bayern mit 8 Mitarbeitern suchte 6 Monate einen Elektroniker f\u00FCr Energie- und Geb\u00E4udetechnik. Social Recruiting: 18 Bewerbungen in 4 Wochen, 1 Einstellung.",
  positionsTitle: "Diese Positionen besetzen wir im Bereich Elektrohandwerk",
  positions: ["Elektroniker (m/w/d)", "Elektroinstallateur", "Elektrotechniker", "Elektromeister", "Elektroniker EGT"],
  seoTitle: "So gewinnen erfolgreiche Elektrobetriebe heute Fachkr\u00E4fte",
  seoTexts: [
    "Der Fachkr\u00E4ftemangel im Elektrohandwerk ist keine vor\u00FCbergehende Erscheinung \u2014 er ist strukturell.",
    "Erfolgreiche Betriebe setzen auf einen Paradigmenwechsel: aktiv auf Kandidaten zugehen statt warten.",
    "Die Ergebnisse: 16-24 \u20AC pro qualifizierte Bewerbung, 11-15% Conversion-Rate, \u00D8 32 Tage bis Einstellung.",
  ],
  ctaTitle: "Elektroniker gesucht?",
  ctaText:
    "In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkr\u00E4fte in Ihrer Region \u00FCber Social Media erreichbar sind \u2014 und was eine Kampagne kosten w\u00FCrde.",
};

export default function Page() {
  return <MitarbeiterFindenPage data={data} />;
}
