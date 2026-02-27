"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="section" aria-label="Über TalentSuite">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="section-label">Über uns</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Warum Unternehmen von anderen Agenturen zu uns wechseln
            </h2>
            <h3 className="text-base sm:text-lg font-medium text-[var(--color-accent)] mb-4 sm:mb-6">
              Weil wir nicht bunt präsentieren, sondern messbar liefern.
            </h3>
            <p className="text-sm sm:text-base text-[rgba(255,255,255,0.6)] mb-4 leading-relaxed">
              In den letzten 24 Monaten haben wir für über 50 Unternehmen im DACH-Raum
              nachweislich Fachkräfte gewonnen, Neukunden-Pipelines aufgebaut und
              E-Commerce-Umsätze gesteigert. Nicht mit Bauchgefühl, sondern mit
              skalierbaren Systemen, die ab Woche 1 Ergebnisse liefern.
            </p>
            <p className="text-sm sm:text-base text-[rgba(255,255,255,0.6)] mb-6 sm:mb-8 leading-relaxed">
              Transparent. Messbar. Reproduzierbar. Wir setzen auf strukturierte Abläufe,
              klare KPIs und echte Performance – statt leere Versprechen.
            </p>
            <Link
              href="https://calendar.app.google/QFoADWcRwwuYUoky8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Jetzt kennenlernen
              <i className="bi bi-arrow-up-right" />
            </Link>
          </div>

          {/* Images: Bento Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] flex-1">
                <img
                  src="/assets/about-1.png"
                  alt="TalentSuite Team bei der Strategieentwicklung für Kunden"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] flex-1">
                <img
                  src="/assets/about-2.png"
                  alt="Datengetriebenes Marketing-Dashboard mit Kampagnen-Ergebnissen"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pt-6 sm:pt-10">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] h-full">
                <img
                  src="/assets/about-3.png"
                  alt="Erfolgreiche Recruiting-Kampagne Ergebnisse auf Social Media"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
