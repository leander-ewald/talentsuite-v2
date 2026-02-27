"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
      gsap.from(".about_content > *", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="about_section" aria-label="Über TalentSuite" ref={sectionRef}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-12 col-lg-5">
              <div className="about_content">
                {/* Verkaufspsychologie: Neugier wecken + Differenzierung */}
                <h2>Warum Unternehmen von anderen Agenturen zu uns wechseln</h2>
                <h3>Weil wir nicht bunt präsentieren, sondern messbar liefern.</h3>
                <p>
                  In den letzten 24 Monaten haben wir für über 50 Unternehmen im DACH-Raum
                  nachweislich Fachkräfte gewonnen, Neukunden-Pipelines aufgebaut und
                  E-Commerce-Umsätze gesteigert. Nicht mit Bauchgefühl, sondern mit
                  skalierbaren Systemen, die ab Woche 1 Ergebnisse liefern.
                </p>
                <p>
                  Transparent. Messbar. Reproduzierbar. Wir setzen auf strukturierte Abläufe,
                  klare KPIs und echte Performance – statt leere Versprechen.
                </p>
                <div className="hero_buttons">
                  <Link className="btns web_btns" href="https://calendar.app.google/QFoADWcRwwuYUoky8" target="_blank" rel="noopener noreferrer">
                    Jetzt kennenlernen
                    <span className="btn_arrows">
                      <i className="bi bi-arrow-up-right"></i>
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <div className="about-bento">
                <div className="bento-item">
                  <img src="/assets/about-1.png" alt="TalentSuite Team bei der Strategieentwicklung für Kunden" loading="lazy" />
                </div>
                <div className="bento-item">
                  <img src="/assets/about-2.png" alt="Datengetriebenes Marketing-Dashboard mit Kampagnen-Ergebnissen" loading="lazy" />
                </div>
                <div className="bento-item">
                  <img src="/assets/about-3.png" alt="Erfolgreiche Recruiting-Kampagne Ergebnisse auf Social Media" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
