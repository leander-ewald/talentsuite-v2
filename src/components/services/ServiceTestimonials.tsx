"use client";

import Link from "next/link";

interface Testimonial {
  name: string;
  role: string;
  from: string;
  to: string;
  img: string;
  review: string;
}

interface ServiceTestimonialsProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  testimonialData: Testimonial[];
}

export default function ServiceTestimonials({ title, description, link, linkText, testimonialData }: ServiceTestimonialsProps) {
  return (
    <section className="section" aria-label="Kundenstimmen">
      <div className="container">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-[rgba(255,255,255,0.6)] mb-6">{description}</p>
          <Link
            href={link || "https://calendar.app.google/QFoADWcRwwuYUoky8"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mx-auto"
          >
            {linkText || "Jetzt Termin sichern"}
            <i className="bi bi-telephone" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialData.map((t, i) => (
            <article key={i} className="glass-card p-6" aria-label={`Bewertung von ${t.name}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src={t.img} alt={`${t.name}, ${t.role}`} loading="lazy" className="w-12 h-12 rounded-full object-cover border-2 border-[rgba(255,255,255,0.1)]" />
                <div>
                  <h3 className="font-semibold text-sm">{t.name}</h3>
                  <p className="text-xs text-[rgba(255,255,255,0.5)]">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3 text-[var(--color-accent)]" aria-label="5 von 5 Sternen">
                {[...Array(5)].map((_, j) => <i key={j} className="bi bi-star-fill text-xs" />)}
              </div>
              <p className="text-sm text-[rgba(255,255,255,0.65)] leading-relaxed">&ldquo;{t.review}&rdquo;</p>
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] text-xs text-[rgba(255,255,255,0.4)]">
                <i className="bi bi-geo-alt" />{t.from}
                <i className="bi bi-arrow-right-short" />{t.to}
                <span className="ml-auto flex items-center gap-1 text-[rgba(27,152,224,0.8)]">
                  <i className="bi bi-check-circle-fill" />Verifiziert
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
