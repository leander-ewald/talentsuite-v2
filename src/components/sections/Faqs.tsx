"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Was kostet die Zusammenarbeit mit TalentSuite?",
    answer:
      "Unsere Preise richten sich nach dem Leistungsumfang und deinen Zielen. In einem kostenlosen Erstgespräch analysieren wir deine Situation und erstellen ein individuelles Angebot – transparent, ohne versteckte Kosten. Die Investition rechnet sich in der Regel innerhalb der ersten Wochen durch messbare Ergebnisse.",
  },
  {
    question: "Wie schnell sehen wir erste Ergebnisse?",
    answer:
      "Erste Ergebnisse – etwa qualifizierte Bewerbungen oder Kundenanfragen – sind bei den meisten Projekten bereits in den ersten 2–4 Wochen sichtbar. Unsere Systeme sind auf schnelle Umsetzung ausgelegt. Die volle Performance entfaltet sich erfahrungsgemäß nach 6–8 Wochen, wenn die Kampagnen durchoptimiert sind.",
  },
  {
    question: "Warum sollten wir mit einer Agentur arbeiten, statt eine Inhouse-Lösung aufzubauen?",
    answer:
      "Eine Inhouse-Marketingabteilung bedeutet hohe Fixkosten, lange Einarbeitungszeiten und Abhängigkeit von einzelnen Personen. Mit TalentSuite bekommt ihr sofort Zugriff auf ein komplettes, eingespieltes Team aus Experten – ohne Vorlaufzeit. Unsere Prozesse sind erprobt, skalierbar und liefern ab Woche 1 Ergebnisse.",
  },
  {
    question: "Funktioniert das auch in unserer Branche?",
    answer:
      "Ja – unsere Systeme funktionieren branchenübergreifend. Wir betreuen Unternehmen aus Handwerk, Gastronomie, Immobilien, E-Commerce, Gesundheitswesen und vielen weiteren Branchen. Die Strategie wird immer individuell auf deine Zielgruppe und dein Geschäftsmodell zugeschnitten.",
  },
  {
    question: "Wie stellt ihr sicher, dass die Maßnahmen zu unserem Unternehmen passen?",
    answer:
      "Wir arbeiten datenbasiert, nicht nach Bauchgefühl. Vor jedem Projekt analysieren wir Zielgruppe, Marktposition und Schwachstellen. Daraus entwickeln wir eine individuelle Strategie mit klaren KPIs – kein Copy-Paste, sondern maßgeschneiderte Umsetzung.",
  },
  {
    question: "Können wir die Ergebnisse wirklich messen?",
    answer:
      "Absolut. Unsere Arbeit ist voll durchgetrackt – von der ersten Anzeige bis zur Bewerbung oder Kundenanfrage. Ihr seht in Echtzeit, welche Kampagnen performen, wie viele Leads generiert werden und was eine Conversion kostet. Volle Transparenz, keine Blackbox.",
  },
  {
    question: "Was, wenn wir schon mit einer Agentur schlechte Erfahrungen gemacht haben?",
    answer:
      "Genau deshalb wurde TalentSuite gegründet. Bei uns läuft alles über strukturierte Prozesse, klare Projektpläne und transparente Kommunikation – mit einem festen Ansprechpartner und definierten Zielen. Unser Anspruch ist es, genau das zu bieten, was andere Agenturen versprechen – aber nicht halten.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="section relative" aria-label="Häufig gestellte Fragen">
      <div className="glow -top-32 -left-32" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-14">
          <span className="section-label mx-auto">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold">Häufig gestellte Fragen</h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "active" : ""}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
                itemProp="name"
              >
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="overflow-hidden">
                  <div className="faq-answer" itemProp="text">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
