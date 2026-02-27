"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playBtn = useRef<HTMLButtonElement>(null);
  const pauseBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    const heroEl = document.querySelector(".hero-section") as HTMLElement;
    if (!heroEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const targetBtn = video.paused ? playBtn.current : pauseBtn.current;
      if (!targetBtn) return;
      gsap.to(targetBtn, {
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const updateButtons = () => {
      if (video.paused) {
        gsap.to(playBtn.current, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
        gsap.to(pauseBtn.current, { opacity: 0, y: 20, duration: 0.3 });
      } else {
        gsap.to(pauseBtn.current, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
        gsap.to(playBtn.current, { opacity: 0, y: 20, duration: 0.3 });
      }
    };

    const handleHoverIn = () => updateButtons();
    const handleHoverOut = () => {
      gsap.to([playBtn.current, pauseBtn.current], {
        opacity: 0, y: 20, duration: 0.4, ease: "power3.in",
      });
    };

    heroEl.addEventListener("mouseenter", handleHoverIn);
    heroEl.addEventListener("mouseleave", handleHoverOut);
    heroEl.addEventListener("mousemove", handleMouseMove);

    return () => {
      heroEl.removeEventListener("mouseenter", handleHoverIn);
      heroEl.removeEventListener("mouseleave", handleHoverOut);
      heroEl.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play(); else video.pause();
    setTimeout(() => {
      if (!video) return;
      if (video.paused) {
        gsap.to(playBtn.current, { opacity: 1, y: 0, duration: 0.3 });
        gsap.to(pauseBtn.current, { opacity: 0, y: 20, duration: 0.3 });
      } else {
        gsap.to(pauseBtn.current, { opacity: 1, y: 0, duration: 0.3 });
        gsap.to(playBtn.current, { opacity: 0, y: 20, duration: 0.3 });
      }
    }, 100);
  };

  const stats = [
    { value: "50+", label: "Unternehmen aus DACH" },
    { value: "5M+", label: "Ausgelieferte Impressionen" },
    { value: "6M+ €", label: "Verwaltetes Werbebudget" },
  ];

  return (
    <section className="hero-section relative min-h-screen flex items-end pb-16 pt-32 overflow-hidden" aria-label="Startbereich">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        preload="metadata"
        aria-hidden="true"
      >
        <source src="https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[rgba(9,22,34,0.7)] to-[rgba(9,22,34,0.4)]" />

      {/* Video Controls */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <button
          ref={playBtn}
          className="absolute w-16 h-16 rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur-lg border border-[rgba(255,255,255,0.2)] text-white text-2xl flex items-center justify-center cursor-pointer opacity-0 translate-y-5 -translate-x-1/2"
          onClick={togglePlay}
          aria-label="Video abspielen"
        >
          <i className="bi bi-play-fill" />
        </button>
        <button
          ref={pauseBtn}
          className="absolute w-16 h-16 rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur-lg border border-[rgba(255,255,255,0.2)] text-white text-2xl flex items-center justify-center cursor-pointer opacity-0 translate-y-5 -translate-x-1/2"
          onClick={togglePlay}
          aria-label="Video pausieren"
        >
          <i className="bi bi-pause-fill" />
        </button>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Keine Bewerber?<br />
            Keine Neukunden?<br />
            <span className="text-[var(--color-accent)]">Wir ändern das – mit System.</span>
          </h1>
          <p className="text-lg text-[rgba(255,255,255,0.7)] mb-8 max-w-lg">
            50+ Unternehmen im DACH-Raum vertrauen auf TalentSuite als ihre Fullservice-Agentur
            für Performance Recruiting, Neukundengewinnung und E-Commerce.
            Messbar, planbar und ab Woche 1 ergebnisorientiert.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://calendar.app.google/QFoADWcRwwuYUoky8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Kostenlose Potenzialanalyse sichern
              <i className="bi bi-arrow-up-right" />
            </Link>
          </div>
          <p className="text-sm text-[rgba(255,255,255,0.4)] mt-4">
            ✓ Kostenlos & unverbindlich &nbsp; ✓ Erste Ergebnisse in 30 Tagen &nbsp; ✓ Kein Risiko
          </p>
          <div className="flex items-center gap-6 mt-6">
            <img src="/assets/meta-logo.svg" alt="Offizieller Meta Business Partner" className="h-8 opacity-60" />
            <img src="/assets/google-logo.svg" alt="Google Partner Agentur" className="h-8 opacity-60" />
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-stretch justify-end gap-0 ml-auto max-w-2xl">
          <div className="flex items-center bg-[rgba(255,255,255,0.04)] backdrop-blur-lg border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden" aria-label="Unsere Ergebnisse in Zahlen">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center">
                <div className="text-center px-6 md:px-10 py-5">
                  <span className="block text-3xl md:text-4xl font-semibold text-[rgba(255,255,255,0.9)]" style={{ fontFamily: "var(--font-display)" }}>
                    {stat.value}
                  </span>
                  <span className="text-xs text-[rgba(255,255,255,0.5)] mt-1 block">{stat.label}</span>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-12 bg-[rgba(255,255,255,0.1)]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons (right side on desktop) */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-10">
          {[
            { href: "https://www.tiktok.com/@talentsuite", icon: "bi-tiktok", label: "TikTok" },
            { href: "https://www.youtube.com/@talentsuite", icon: "bi-youtube", label: "YouTube" },
            { href: "https://www.instagram.com/talentsuite.io/", icon: "bi-instagram", label: "Instagram" },
            { href: "https://www.facebook.com/profile.php?id=100095016041438&locale=de_DE", icon: "bi-facebook", label: "Facebook" },
            { href: "https://www.linkedin.com/company/talentsuiteio/", icon: "bi-linkedin", label: "LinkedIn" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`TalentSuite auf ${s.label}`}
              className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[rgba(255,255,255,0.5)] hover:text-white hover:border-[rgba(255,255,255,0.3)] transition-all"
            >
              <i className={`bi ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
