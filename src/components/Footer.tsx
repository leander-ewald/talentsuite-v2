"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { href: "/services/performanceRecruiting", label: "Performance Recruiting" },
  { href: "/services/customerAcquisition", label: "Neukundengewinnung" },
  { href: "/services/ecommerce", label: "Fullservice E-Commerce" },
  { href: "/services/socialMediaManagement", label: "Social Media Management" },
  { href: "/services/contentProduktion", label: "Content Produktion" },
  { href: "/services/webDevelopment", label: "Web Development" },
];

const socialLinks = [
  { href: "https://www.tiktok.com/@talentsuite", icon: "bi-tiktok", label: "TikTok" },
  { href: "https://www.youtube.com/@talentsuite", icon: "bi-youtube", label: "YouTube" },
  { href: "https://www.instagram.com/talentsuite.io/", icon: "bi-instagram", label: "Instagram" },
  { href: "https://www.facebook.com/profile.php?id=100095016041438&locale=de_DE", icon: "bi-facebook", label: "Facebook" },
  { href: "https://www.linkedin.com/company/talentsuiteio/", icon: "bi-linkedin", label: "LinkedIn" },
];

const regionLinks = [
  { href: "/blog/mitarbeitergewinnung-maerkischer-kreis", label: "Märkischer Kreis" },
  { href: "/blog/mitarbeitergewinnung-suedwestfalen", label: "Südwestfalen" },
  { href: "/blog/mitarbeitergewinnung-iserlohn", label: "Iserlohn" },
  { href: "/blog/mitarbeitergewinnung-hemer", label: "Hemer" },
  { href: "/blog/mitarbeitergewinnung-menden", label: "Menden" },
  { href: "/blog/mitarbeitergewinnung-hagen", label: "Hagen" },
  { href: "/blog/mitarbeitergewinnung-luedenscheid", label: "Lüdenscheid" },
  { href: "/blog/mitarbeitergewinnung-dortmund", label: "Dortmund" },
  { href: "/blog/mitarbeitergewinnung-arnsberg", label: "Arnsberg" },
  { href: "/blog/mitarbeitergewinnung-unna", label: "Unna" },
  { href: "/blog/mitarbeitergewinnung-schwerte", label: "Schwerte" },
  { href: "/blog/mitarbeitergewinnung-altena", label: "Altena" },
];

export default function Footer() {
  const pathname = usePathname();
  const hideFooter = pathname === "/madeByMe";
  if (hideFooter) return null;

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="section relative overflow-hidden" aria-label="Jetzt starten">
        <div className="glow top-0 left-1/2 -translate-x-1/2" />
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Bereit für messbares Wachstum?
          </h2>
          <p className="text-[rgba(255,255,255,0.6)] text-lg max-w-xl mx-auto mb-8">
            In einem kostenlosen Erstgespräch analysieren wir deine Situation und zeigen dir,
            welche Hebel für dein Unternehmen den größten Impact haben.
          </p>
          <Link
            href="https://calendar.app.google/QFoADWcRwwuYUoky8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            Kostenlose Potenzialanalyse buchen
            <i className="bi bi-arrow-up-right" />
          </Link>
          <p className="text-sm text-[rgba(255,255,255,0.4)] mt-6">
            ✓ 100% kostenlos &nbsp; ✓ Unverbindlich &nbsp; ✓ Nächster Termin in 48h
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgba(0,0,0,0.2)] border-t border-[rgba(255,255,255,0.06)]">
        <div className="container py-16">
          {/* Top: Logo + Social */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
            <Link href="/" aria-label="TalentSuite Startseite">
              <img src="/logo.png" alt="TalentSuite Logo" className="h-8 w-auto" />
            </Link>
            <nav className="flex items-center gap-3" aria-label="Social Media">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white hover:border-[rgba(255,255,255,0.2)] transition-all"
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="h-px bg-[rgba(255,255,255,0.06)] mb-12" />

          {/* Grid: 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: About */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Über TalentSuite</h4>
              <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">
                Fullservice-Agentur für Performance Recruiting, Neukundengewinnung und E-Commerce im DACH-Raum.
                50+ Unternehmen vertrauen auf unsere Systeme.
              </p>
            </div>

            {/* Col 2: Services */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Dienstleistungen</h4>
              <nav className="flex flex-col gap-2.5" aria-label="Services Navigation">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="text-sm text-[rgba(255,255,255,0.5)] hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 3: Resources */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Ressourcen</h4>
              <nav className="flex flex-col gap-2.5">
                <Link href="/blog" className="text-sm text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="/so-funktionierts" className="text-sm text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">
                  So funktioniert&apos;s
                </Link>
                <Link href="/preise" className="text-sm text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">
                  Preise
                </Link>
                <Link
                  href="https://calendar.app.google/QFoADWcRwwuYUoky8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[rgba(255,255,255,0.5)] hover:text-white transition-colors"
                >
                  Termin buchen
                </Link>
              </nav>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm text-[rgba(255,255,255,0.5)]">
                <span>TalentSuite</span>
                <span>Iserlohn, NRW</span>
                <a href="mailto:info@talentsuite.io" className="hover:text-white transition-colors">
                  info@talentsuite.io
                </a>
              </div>
            </div>
          </div>

          {/* Regional Links */}
          <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 mb-8">
            <p className="text-xs font-semibold text-[rgba(255,255,255,0.35)] uppercase tracking-wider mb-3">
              Mitarbeitergewinnung in der Region
            </p>
            <nav className="flex flex-wrap gap-x-4 gap-y-1.5" aria-label="Regionale Seiten">
              {regionLinks.map((r, i) => (
                <span key={r.href} className="flex items-center gap-4">
                  <Link
                    href={r.href}
                    className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors"
                  >
                    {r.label}
                  </Link>
                  {i < regionLinks.length - 1 && <span className="text-[rgba(255,255,255,0.12)]">|</span>}
                </span>
              ))}
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[rgba(255,255,255,0.35)]">
              Copyright © {currentYear} TalentSuite – Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4 text-xs text-[rgba(255,255,255,0.35)]">
              <Link href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutzerklärung
              </Link>
              <span>•</span>
              <Link href="/agb" className="hover:text-white transition-colors">
                AGB
              </Link>
              <span>•</span>
              <Link href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
