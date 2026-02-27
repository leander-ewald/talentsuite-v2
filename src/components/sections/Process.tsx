"use client";

const processData = [
  {
    image: "/assets/step1.svg",
    heading: "Analyse & Audit",
    desc: "Wir analysieren deine aktuelle Situation, Zielgruppe und Wettbewerb – und identifizieren die größten Wachstumshebel für dein Unternehmen.",
  },
  {
    image: "/assets/step2.svg",
    heading: "Strategie & Konzept",
    desc: "Auf Basis der Daten entwickeln wir eine maßgeschneiderte Strategie mit klaren KPIs und messbaren Meilensteinen.",
  },
  {
    image: "/assets/step3.svg",
    heading: "Umsetzung & Launch",
    desc: "Unser Team setzt Kampagnen, Content und Systeme um – professionell und schnell. Erste Ergebnisse ab Woche 1.",
  },
  {
    image: "/assets/step4.svg",
    heading: "Optimierung & Skalierung",
    desc: "Durch laufende Datenanalyse optimieren wir kontinuierlich und skalieren, was nachweislich funktioniert.",
  },
];

export default function Process() {
  return (
    <section className="section" aria-label="Unser Prozess in 4 Schritten">
      <div className="container">
        <div className="text-center mb-10 sm:mb-16">
          <span className="section-label mx-auto">So arbeiten wir</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">In 4 Schritten zu messbarem Wachstum</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(27,152,224,0.3)] to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {processData.map((step, i) => (
              <div key={i} className="relative text-center group">
                {/* Step Number Circle */}
                <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-6 rounded-xl sm:rounded-2xl bg-[rgba(27,152,224,0.08)] border border-[rgba(27,152,224,0.2)] flex items-center justify-center group-hover:bg-[rgba(27,152,224,0.15)] group-hover:border-[rgba(27,152,224,0.4)] transition-all duration-300">
                  <img src={step.image} alt={`Schritt ${i + 1}: ${step.heading}`} className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                {/* Step Label */}
                <span className="text-[10px] sm:text-xs font-semibold text-[var(--color-accent)] tracking-wider uppercase mb-1 sm:mb-2 block">
                  Schritt {i + 1}
                </span>

                <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3">{step.heading}</h3>
                <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
