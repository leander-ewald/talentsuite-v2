"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 80);
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`header${isScrolled ? " header-scrolled" : ""}`}
        ref={headerRef}
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-130px)",
          transition: "transform 0.3s ease",
        }}
      >
        <nav className="navbar navbar-expand-lg">
          <Link href="/" aria-label="TalentSuite Startseite">
            <img className="logo" src="/logo.png" alt="TalentSuite Logo" />
          </Link>
          {/* Custom hamburger for mobile */}
          <button
            className="header-hamburger"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menü öffnen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/* Bootstrap toggler fallback */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Navigation öffnen"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">Startseite</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dienstleistungen
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/services/performanceRecruiting">Performance Recruiting</Link></li>
                  <li><Link className="dropdown-item" href="/services/customerAcquisition">Neukundengewinnung</Link></li>
                  <li><Link className="dropdown-item" href="/services/ecommerce">Fullservice E-Commerce</Link></li>
                  <li><Link className="dropdown-item" href="/services/socialMediaManagement">Social Media Management</Link></li>
                  <li><Link className="dropdown-item" href="/services/contentProduktion">Content Produktion</Link></li>
                  <li><Link className="dropdown-item" href="/services/webDevelopment">Webentwicklung</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="https://made-by-mee.vercel.app/" target="_blank" rel="noopener noreferrer">MadeByMEE</a></li>
                </ul>
              </li>
            </ul>
            <Link href="https://calendar.app.google/QFoADWcRwwuYUoky8" className="btns header-cta" aria-label="Erstgespräch vereinbaren">
              Erstgespräch vereinbaren
              <span className="btn_arrows">
                <i className="bi bi-arrow-up-right"></i>
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Fullscreen mobile overlay menu */}
      <div className={`mobile-menu-overlay${mobileMenuOpen ? " active" : ""}`}>
        <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label="Menü schließen">
          <i className="bi bi-x-lg"></i>
        </button>
        <Link className="mobile-nav-link" href="/" onClick={() => setMobileMenuOpen(false)}>Startseite</Link>
        <Link className="mobile-nav-link" href="#" onClick={(e) => e.preventDefault()}>Dienstleistungen</Link>
        <Link className="mobile-sub-link" href="/services/performanceRecruiting" onClick={() => setMobileMenuOpen(false)}>Performance Recruiting</Link>
        <Link className="mobile-sub-link" href="/services/customerAcquisition" onClick={() => setMobileMenuOpen(false)}>Neukundengewinnung</Link>
        <Link className="mobile-sub-link" href="/services/ecommerce" onClick={() => setMobileMenuOpen(false)}>Fullservice E-Commerce</Link>
        <Link className="mobile-sub-link" href="/services/socialMediaManagement" onClick={() => setMobileMenuOpen(false)}>Social Media Management</Link>
        <Link className="mobile-sub-link" href="/services/contentProduktion" onClick={() => setMobileMenuOpen(false)}>Content Produktion</Link>
        <Link className="mobile-sub-link" href="/services/webDevelopment" onClick={() => setMobileMenuOpen(false)}>Webentwicklung</Link>
        <a className="mobile-menu-cta" href="https://calendar.app.google/QFoADWcRwwuYUoky8" target="_blank" rel="noopener noreferrer">
          Erstgespräch vereinbaren
        </a>
      </div>
    </>
  );
}
