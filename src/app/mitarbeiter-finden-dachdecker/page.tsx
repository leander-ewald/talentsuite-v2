import type { Metadata } from "next";
import MitarbeiterFindenPage, { type MitarbeiterFindenData } from "@/components/MitarbeiterFindenPage";

export const metadata: Metadata = {
  title: "Dachdecker finden — Dachdecker & Spengler in 30 Tagen einstellen | TalentSuite",
  description:
    "Social Recruiting f\u00FCr das Dachdeckerhandwerk. 12.000+ offene Stellen, \u00D8 160 Tage Vakanzzeit. Dachdecker & Spengler in 30 Tagen.",
};

const data: MitarbeiterFindenData = {
  source: "mitarbeiter-finden-dachdecker",
  industry: "Dachdeckerhandwerk",
  heroEmoji: "\u{1F3E0}",
  heroTitle: "Dachdecker finden \u2014 Dachdecker & Spengler in 30 Tagen einstellen",
  heroSub: "12.000+ offene Stellen \u00B7 \u00D8 160 Tage Vakanzzeit \u00B7 72% der Fachkr\u00E4fte nicht auf Jobb\u00F6rsen",
  heroHint: "20 Min. \u00B7 Unverbindlich \u00B7 Konkrete Strategie f\u00FCr Dachdeckerhandwerk",
  stats: [
    { n: "12.000+", label: "Offene Stellen", c: "#1B98E0" },
    { n: "160 Tage", label: "\u00D8 Vakanzzeit", c: "#EF4444" },
    { n: "17-25 \u20AC", label: "Kosten/Bewerbung", c: "#10B981" },
    { n: "\u00D8 32 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
  ],
  painEmoji: "\u{1F3E0}",
  painTitle: "Die Situation im Dachdeckerhandwerk",
  painIntro:
    "Das Dachdeckerhandwerk geh\u00F6rt zu den am st\u00E4rksten vom Fachkr\u00E4ftemangel betroffenen Gewerken.",
  painBoxes: [
    {
      icon: "\u{1F534}",
      text: "Klimawandel-Folgen: St\u00FCrme, Starkregen und neue D\u00E4mmpflichten sorgen f\u00FCr volle Auftragsb\u00FCcher \u2014 aber die Kapazit\u00E4ten fehlen.",
      bg: "rgba(239,68,68,0.05)",
      border: "rgba(239,68,68,0.15)",
    },
    {
      icon: "\u{1F7E1}",
      text: "Risiko-Image: H\u00F6henarbeit schreckt viele junge Menschen ab. Moderne Sicherheitsstandards werden zu wenig kommuniziert.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
    {
      icon: "\u{1F7E0}",
      text: "Kleine Betriebsgr\u00F6\u00DFen: Die meisten Dachdeckerbetriebe haben unter 10 Mitarbeiter und keine HR-Abteilung.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
  ],
  failTitle: "\u274C Warum Jobb\u00F6rsen im Bereich Dachdeckerhandwerk nicht mehr funktionieren",
  failText:
    "Dachdecker suchen nicht auf LinkedIn oder Indeed \u2014 sie sind auf Facebook und Instagram unterwegs.",
  solutionTitle: "\u2705 Social Recruiting f\u00FCr Dachdeckerhandwerk: So funktioniert es",
  solutionIntro:
    "Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind.",
  solutionCards: [
    { icon: "\u{1F3AF}", t: "Gezielte Ansprache", d: "Wir erreichen Dachdecker im Umkreis von 30km \u2014 nach Beruf, Alter und Interessen." },
    { icon: "\u{1F4F1}", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
    { icon: "\u{1F4CA}", t: "Messbare Ergebnisse", d: "17-25 \u20AC pro Bewerbung bei 10-14% Conversion. Transparent und nachvollziehbar." },
  ],
  caseText:
    "Ein Dachdeckerbetrieb im Rheinland suchte 9 Monate einen Gesellen. Social Recruiting: 12 Bewerbungen in 3 Wochen, 1 Einstellung unter 2.000 \u20AC Gesamtkosten.",
  positionsTitle: "Diese Positionen besetzen wir im Bereich Dachdeckerhandwerk",
  positions: ["Dachdecker (m/w/d)", "Spengler/Klempner", "Dachdeckermeister", "Zimmerer (Dachstuhl)", "Dachdeckerhelfer"],
  seoTitle: "So gewinnen erfolgreiche Dachdeckerbetriebe heute Fachkr\u00E4fte",
  seoTexts: [
    "Der Fachkr\u00E4ftemangel im Dachdeckerhandwerk ist strukturell und wird durch den Klimawandel versch\u00E4rft.",
    "Erfolgreiche Betriebe gehen aktiv auf potenzielle Kandidaten zu.",
    "Die Ergebnisse: 17-25 \u20AC pro qualifizierte Bewerbung, 10-14% Conversion-Rate, \u00D8 32 Tage bis Einstellung.",
  ],
  ctaTitle: "Dachdecker oder Spengler gesucht?",
  ctaText:
    "In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkr\u00E4fte in Ihrer Region \u00FCber Social Media erreichbar sind \u2014 und was eine Kampagne kosten w\u00FCrde.",
};

export default function Page() {
  return <MitarbeiterFindenPage data={data} />;
}
