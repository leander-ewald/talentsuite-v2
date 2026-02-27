"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Pre-Footer CTA Section */}
      <section aria-label="Jetzt starten" className="pre-footer-cta-section">
        <div className="container pre-footer-cta">
          <h2>Bereit für messbares Wachstum?</h2>
          <p className="pre-footer-cta-text">
            In einem kostenlosen Erstgespräch analysieren wir deine Situation und zeigen dir,
            welche Hebel für dein Unternehmen den größten Impact haben.
          </p>
          <Link
            className="btns web_btns"
            href="https://calendar.app.google/QFoADWcRwwuYUoky8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", margin: "0 auto" }}
          >
            Kostenlose Potenzialanalyse buchen
            <span className="btn_arrows">
              <i className="bi bi-arrow-up-right"></i>
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </Link>
          <p className="pre-footer-cta-small">
            ✓ 100% kostenlos &nbsp; ✓ Unverbindlich &nbsp; ✓ Nächster Termin in 48h
          </p>
        </div>
      </section>

      <footer>
        <img src="/assets/circle.png" className="blur_image" alt="" aria-hidden="true" />
        <div className="container">
          {/* 4-Column Grid */}
          <div className="footer-grid">
            {/* Column 1: Brand */}
            <div className="footer-col">
              <Link href="/" aria-label="TalentSuite Startseite">
                <img src="/logo.png" alt="TalentSuite Logo" className="logo" />
              </Link>
              <p>
                Fullservice-Agentur für Performance Recruiting, Neukundengewinnung und E-Commerce im DACH-Raum.
              </p>
              <nav className="social_icons" aria-label="Social Media">
                <a href="https://www.tiktok.com/@talentsuite" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <i className="bi bi-tiktok"></i>
                </a>
                <a href="https://www.youtube.com/@talentsuite" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="https://www.instagram.com/talentsuite.io/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100095016041438&locale=de_DE" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/talentsuiteio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </nav>
            </div>

            {/* Column 2: Leistungen */}
            <div className="footer-col">
              <h4>Leistungen</h4>
              <Link href="/services/performanceRecruiting">Performance Recruiting</Link>
              <Link href="/services/customerAcquisition">Neukundengewinnung</Link>
              <Link href="/services/ecommerce">Fullservice E-Commerce</Link>
              <Link href="/services/socialMediaManagement">Social Media</Link>
              <Link href="/services/contentProduktion">Content Produktion</Link>
              <Link href="/services/webDevelopment">Web Development</Link>
            </div>

            {/* Column 3: Regionen */}
            <div className="footer-col">
              <h4>Regionen</h4>
              <Link href="/blog/mitarbeitergewinnung-maerkischer-kreis">Märkischer Kreis</Link>
              <Link href="/blog/mitarbeitergewinnung-suedwestfalen">Südwestfalen</Link>
              <Link href="/blog/mitarbeitergewinnung-iserlohn">Iserlohn</Link>
              <Link href="/blog/mitarbeitergewinnung-hemer">Hemer</Link>
              <Link href="/blog/mitarbeitergewinnung-menden">Menden</Link>
              <Link href="/blog/mitarbeitergewinnung-hagen">Hagen</Link>
              <Link href="/blog/mitarbeitergewinnung-luedenscheid">Lüdenscheid</Link>
              <Link href="/blog/mitarbeitergewinnung-dortmund">Dortmund</Link>
            </div>

            {/* Column 4: Rechtliches */}
            <div className="footer-col">
              <h4>Rechtliches</h4>
              <Link href="/datenschutz">Datenschutzerklärung</Link>
              <Link href="/agb">AGB</Link>
              <Link href="/impressum">Impressum</Link>
            </div>
          </div>

          {/* Divider */}
          <div className="devider">
            <span></span>
          </div>

          {/* Bottom Bar */}
          <div className="btm_bar" style={{ marginTop: 0 }}>
            <p>Copyright © {currentYear} TalentSuite – Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
