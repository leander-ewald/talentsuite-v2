"use client";

import Link from "next/link";

interface MainSectionProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
  trustBadges?: boolean;
}

export default function MainSection({ title, description, buttonText, buttonLink = "https://calendar.app.google/QFoADWcRwwuYUoky8", imageSrc, imageAlt, trustBadges = true }: MainSectionProps) {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden" aria-label={typeof imageAlt === "string" ? imageAlt : "Service Hero"}>
      <div className="glow -top-32 -right-32" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">{title}</h1>
            <p className="text-lg text-[rgba(255,255,255,0.65)] leading-relaxed mb-8">{description}</p>
            <Link href={buttonLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {buttonText}
              <i className="bi bi-arrow-up-right" />
            </Link>
            {trustBadges && (
              <p className="text-sm text-[rgba(255,255,255,0.4)] mt-4">
                ✓ Kostenlos & unverbindlich &nbsp; ✓ Erste Ergebnisse in 30 Tagen &nbsp; ✓ Kein Risiko
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <img src={imageSrc} alt={imageAlt} className="max-w-full h-auto rounded-2xl" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}
