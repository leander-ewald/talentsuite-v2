"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const Process = () => {
  const progressRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline progress fill animation
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          width: "80%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        });
      }

      // Stagger process steps
      gsap.from(".process", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process_section" aria-label="Unser Prozess in 4 Schritten" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-5">
            <div className="titles text-center">
              <h2 className="text-white mb-4">In 4 Schritten zu messbarem Wachstum</h2>
              <img src="/assets/btm-bdr.svg" alt="" aria-hidden="true" className="btm_bdr" />
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <div className="process_steps">
              <div className="timeline-progress" ref={progressRef}></div>
              {processData.map((process, index) => (
                <div key={index} className="process">
                  <div className="process_icon">
                    <img src={process.image} alt={`Schritt ${index + 1}: ${process.heading}`} />
                  </div>
                  <span className="process-step-num">Schritt {index + 1}</span>
                  <h3>{process.heading}</h3>
                  <p>{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
