"use client";

import Link from "next/link";

const serviceData = [
  {
    title: "Performance Recruiting",
    desc: "Innerhalb von 30 Tagen qualifizierte Bewerbungen auf deinem Tisch – ohne Headhunter, ohne Stellenbörsen. Über Social Media Funnels, die funktionieren.",
    link: "/services/performanceRecruiting",
    badge: "ø 40+ Bewerbungen",
    icon: "bi-people-fill",
  },
  {
    title: "Neukundengewinnung",
    desc: "Planbar 15–40 qualifizierte Kundenanfragen pro Monat – automatisiert über Ads, Funnels und intelligente Follow-Up-Systeme.",
    link: "/services/customerAcquisition",
    badge: "Planbar skalierbar",
    icon: "bi-graph-up-arrow",
  },
  {
    title: "Fullservice E-Commerce",
    desc: "Von 0 auf Shop oder vom Shop zum Umsatzrekord – wir bauen, optimieren und skalieren deinen Online-Handel. Strategie bis Technik.",
    link: "/services/ecommerce",
    badge: "Ganzheitlich",
    icon: "bi-cart-check-fill",
  },
  {
    title: "Social Media Management",
    desc: "Deine Marke auf Autopilot: Strategie, Content & Community-Management, das Engagement und Reichweite messbar steigert.",
    link: "/services/socialMediaManagement",
    badge: "Kanalübergreifend",
    icon: "bi-megaphone-fill",
  },
  {
    title: "Content Produktion",
    desc: "Videos, Ads & Social Formate, die konvertieren – professionell produziert und auf deine Zielgruppe zugeschnitten.",
    link: "/services/contentProduktion",
    badge: "Conversionstark",
    icon: "bi-camera-reels-fill",
  },
  {
    title: "Web & App Development",
    desc: "Individuelle Websites, Plattformen und Apps, die verkaufen – schnell, skalierbar und auf Conversion optimiert.",
    link: "/services/webDevelopment",
    badge: "Maßgeschneidert",
    icon: "bi-code-slash",
  },
];

export default function Services() {
  return (
    <section className="section relative" aria-label="Unsere Dienstleistungen">
      <div className="glow -top-48 -right-48" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-label mx-auto">Was wir tun</span>
          <h2 className="text-3xl md:text-4xl font-bold">Unsere Kernleistungen</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {serviceData.map((service, i) => (
            <div key={i} className="glass-card p-7 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(27,152,224,0.1)] flex items-center justify-center text-[var(--color-accent)]">
                  <i className={`bi ${service.icon}`} />
                </div>
                <span className="badge">{service.badge}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-[rgba(255,255,255,0.55)] leading-relaxed flex-1">
                {service.desc}
              </p>
              <Link href={service.link} className="btn-outline mt-6 self-start !py-2.5 !px-5 !text-sm">
                So funktioniert&apos;s
                <i className="bi bi-arrow-up-right text-xs" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
