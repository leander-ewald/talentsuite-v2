import type { Metadata } from "next";
import MitarbeiterFindenPage, { type MitarbeiterFindenData } from "@/components/MitarbeiterFindenPage";

export const metadata: Metadata = {
  title: "Personal Gastronomie finden — K\u00F6che & Servicekr\u00E4fte in 30 Tagen | TalentSuite",
  description:
    "Social Recruiting f\u00FCr Gastronomie & Hotellerie. 38.000+ offene Stellen, \u00D8 130 Tage Vakanzzeit. K\u00F6che & Servicekr\u00E4fte in 30 Tagen.",
};

const data: MitarbeiterFindenData = {
  source: "mitarbeiter-finden-gastronomie",
  industry: "Gastronomie & Hotellerie",
  heroEmoji: "\u{1F37D}\uFE0F",
  heroTitle: "Personal Gastronomie finden \u2014 K\u00F6che & Servicekr\u00E4fte in 30 Tagen",
  heroSub: "38.000+ offene Stellen \u00B7 \u00D8 130 Tage Vakanzzeit \u00B7 72% der Fachkr\u00E4fte nicht auf Jobb\u00F6rsen",
  heroHint: "20 Min. \u00B7 Unverbindlich \u00B7 Konkrete Strategie f\u00FCr Gastronomie & Hotellerie",
  stats: [
    { n: "38.000+", label: "Offene Stellen", c: "#1B98E0" },
    { n: "130 Tage", label: "\u00D8 Vakanzzeit", c: "#EF4444" },
    { n: "12-18 \u20AC", label: "Kosten/Bewerbung", c: "#10B981" },
    { n: "\u00D8 25 Tage", label: "Bis zur Einstellung", c: "#1B98E0" },
  ],
  painEmoji: "\u{1F37D}\uFE0F",
  painTitle: "Die Situation in der Gastronomie und Hotellerie",
  painIntro:
    "Die Gastronomie hat seit COVID einen Exodus erlebt. 275.000 Fachkr\u00E4fte haben die Branche dauerhaft verlassen.",
  painBoxes: [
    {
      icon: "\u{1F534}",
      text: "Post-COVID-Exodus: 275.000 Fachkr\u00E4fte haben die Gastronomie seit 2020 dauerhaft verlassen \u2014 sie kommen nicht zur\u00FCck.",
      bg: "rgba(239,68,68,0.05)",
      border: "rgba(239,68,68,0.15)",
    },
    {
      icon: "\u{1F7E1}",
      text: "Eingeschr\u00E4nkter Betrieb: 58% der Gastrobetriebe k\u00F6nnen ihr Angebot nicht mehr vollst\u00E4ndig aufrechterhalten.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
    {
      icon: "\u{1F7E0}",
      text: "Arbeitszeiten-Problem: Abend-, Wochenend- und Feiertagsarbeit schreckt viele potenzielle Bewerber ab.",
      bg: "#f0f4f7",
      border: "#E2E8F0",
    },
  ],
  failTitle: "\u274C Warum Jobb\u00F6rsen im Bereich Gastronomie & Hotellerie nicht mehr funktionieren",
  failText:
    "Gastro-Fachkr\u00E4fte suchen nicht aktiv \u2014 sie scrollen durch Instagram und TikTok. Wer sie dort nicht anspricht, existiert f\u00FCr sie nicht.",
  solutionTitle: "\u2705 Social Recruiting f\u00FCr Gastronomie & Hotellerie: So funktioniert es",
  solutionIntro:
    "Statt auf die 20% zu warten, die aktiv suchen, sprechen wir die 80% an, die passiv offen sind.",
  solutionCards: [
    { icon: "\u{1F3AF}", t: "Gezielte Ansprache", d: "Wir erreichen K\u00F6che und Servicekr\u00E4fte im Umkreis von 30km \u2014 nach Beruf, Alter und Interessen." },
    { icon: "\u{1F4F1}", t: "60-Sekunden-Bewerbung", d: "Kein Anschreiben, kein Lebenslauf-Upload. Bewerben direkt vom Smartphone in unter einer Minute." },
    { icon: "\u{1F4CA}", t: "Messbare Ergebnisse", d: "12-18 \u20AC pro Bewerbung bei 15-20% Conversion. Transparent und nachvollziehbar." },
  ],
  caseText:
    "Ein Restaurant in M\u00FCnchen suchte 4 Monate Koch und Servicepersonal. Social Recruiting: 42 Bewerbungen in 3 Wochen, 3 Einstellungen inkl. Sous-Chef.",
  positionsTitle: "Diese Positionen besetzen wir im Bereich Gastronomie & Hotellerie",
  positions: ["Koch (m/w/d)", "Servicekraft", "K\u00FCchenchef", "Restaurantfachmann/-frau", "Hotelfachkraft"],
  seoTitle: "So gewinnen erfolgreiche Gastrobetriebe heute Fachkr\u00E4fte",
  seoTexts: [
    "Der Fachkr\u00E4ftemangel in der Gastronomie ist strukturell und hat sich durch die Pandemie massiv versch\u00E4rft.",
    "Erfolgreiche Betriebe gehen aktiv auf potenzielle Kandidaten zu, statt zu warten.",
    "Die Ergebnisse: 12-18 \u20AC pro qualifizierte Bewerbung, 15-20% Conversion-Rate, \u00D8 25 Tage bis Einstellung.",
  ],
  ctaTitle: "Koch oder Servicekraft gesucht?",
  ctaText:
    "In 20 Minuten zeigen wir Ihnen, wie viele passende Fachkr\u00E4fte in Ihrer Region \u00FCber Social Media erreichbar sind \u2014 und was eine Kampagne kosten w\u00FCrde.",
};

export default function Page() {
  return <MitarbeiterFindenPage data={data} />;
}
