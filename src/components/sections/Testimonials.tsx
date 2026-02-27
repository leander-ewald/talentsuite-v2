"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";

const testimonialData = [
  {
    name: "Anton Specht",
    role: "CEO - SPECHT IMMOBILIEN",
    from: "Frankfurt",
    to: "Deutschland",
    img: "/assets/Anton.png",
    review: "Dank TalentSuite konnten wir in kürzester Zeit qualifizierte Immobilienberater über Social Recruiting gewinnen. Die Prozesse laufen sauber, messbar und bringen genau die Kandidaten, die wirklich zu uns passen.",
  },
  {
    name: "Joel Schüssler",
    role: "COO - Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Marketingabteilung komplett sparen. Ob Contentproduktion, Performance Recruiting oder Neukundengewinnung – alle Bereiche liefern konstant starke Ergebnisse.",
  },
  {
    name: "Viktor Brehm",
    role: "CEO Schlafplatz",
    from: "München",
    to: "Deutschland",
    img: "/assets/Viktior.png",
    review: "Mit TalentSuite haben wir unser Wachstum systematisiert: neue Kundenanfragen täglich, automatisierte Abläufe und eine Webplattform, die skaliert. Die Zusammenarbeit ist strukturiert, effizient und absolut zuverlässig.",
  },
  {
    name: "Jan Röhrig",
    role: "Leitung Merchandise & E-Commerce - Iserlohn Roosters",
    from: "Iserlohn",
    to: "Deutschland",
    img: "/assets/Jan.png",
    review: "TalentSuite hat unseren Onlineauftritt auf ein neues Level gehoben – von der Shopstruktur bis zur technischen Umsetzung. Das Team versteht es, Marken digital stark und verkaufsfähig zu machen.",
  },
  {
    name: "Jessica Pacha-Mollé",
    role: "Head of HR Heizkurier GmbH",
    from: "Köln/Bonn",
    to: "Deutschland",
    img: "/assets/Jessicas.png",
    review: "Mit TalentSuite haben wir unsere Employer Brand spürbar gestärkt. Durch hochwertigen Content und gezielte Performance-Recruiting-Kampagnen setzen sie unsere Vorstellungen punktgenau um.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft - 24,
      behavior: "smooth",
    });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonialData.length;
        scrollToIndex(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [scrollToIndex]);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: "TalentSuite",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      ratingCount: testimonialData.length.toString(),
    },
    review: testimonialData.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: t.review,
    })),
  };

  return (
    <section className="section" aria-label="Kundenstimmen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <div className="container">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="section-label mx-auto">Kundenstimmen</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kundenstimmen</h2>
          <p className="text-[rgba(255,255,255,0.6)]">
            Was unsere Kunden über die Zusammenarbeit sagen – echte Ergebnisse,
            echte Stimmen aus Handwerk, E-Commerce und Dienstleistung.
          </p>
          <Link
            href="https://calendar.app.google/QFoADWcRwwuYUoky8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 mx-auto"
          >
            Auch so wachsen? Jetzt Termin sichern
            <i className="bi bi-telephone" />
          </Link>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonialData.map((t, i) => (
            <article
              key={i}
              className="glass-card flex-shrink-0 w-[340px] md:w-[400px] snap-start p-6 flex flex-col"
              aria-label={`Bewertung von ${t.name}`}
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.img}
                  alt={`${t.name}, ${t.role}`}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[rgba(255,255,255,0.1)]"
                />
                <div>
                  <h3 className="font-semibold text-base">{t.name}</h3>
                  <p className="text-xs text-[rgba(255,255,255,0.5)]">{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 text-[var(--color-accent)]" aria-label="5 von 5 Sternen">
                {[...Array(5)].map((_, j) => (
                  <i key={j} className="bi bi-star-fill text-sm" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[rgba(255,255,255,0.65)] leading-relaxed flex-1">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Location + Verified */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-2 text-xs text-[rgba(255,255,255,0.4)]">
                  <i className="bi bi-geo-alt" />
                  {t.from}
                  <i className="bi bi-arrow-right-short" />
                  {t.to}
                </div>
                <span className="flex items-center gap-1.5 text-xs text-[rgba(27,152,224,0.8)]">
                  <i className="bi bi-check-circle-fill" />
                  Verifiziert
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialData.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-[var(--color-accent)]"
                  : "bg-[rgba(255,255,255,0.2)]"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
