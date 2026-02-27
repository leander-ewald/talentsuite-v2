"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqsProps {
  title?: string;
  description?: string;
  faqData: FaqItem[];
}

export default function ServiceFaqs({ title, description, faqData }: ServiceFaqsProps) {
  const [openIndex, setOpenIndex] = useState(0);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="section" aria-label="Häufig gestellte Fragen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <div className="container">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title || "Häufig gestellte Fragen"}</h2>
          {description && <p className="text-[rgba(255,255,255,0.6)] leading-relaxed">{description}</p>}
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqData.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "active" : ""}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <button className="faq-button" onClick={() => setOpenIndex(openIndex === i ? -1 : i)} aria-expanded={openIndex === i} itemProp="name">
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className={`grid transition-all duration-300 ${openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div className="overflow-hidden">
                  <div className="faq-answer" itemProp="text">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
