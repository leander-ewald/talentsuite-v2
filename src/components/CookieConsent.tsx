"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    const consent = document.cookie.split(";").find((c) => c.trim().startsWith("cookie_consent="));
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    document.cookie = "cookie_consent=accepted; path=/; max-age=31536000; SameSite=Lax";
    setShow(false);
    window.dispatchEvent(new Event("cookieConsentAccepted"));
  };

  const acceptEssential = () => {
    document.cookie = "cookie_consent=essential; path=/; max-age=31536000; SameSite=Lax";
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999999] p-4 md:p-5">
      <div className="max-w-[680px] mx-auto bg-[rgba(9,22,34,0.97)] border border-[rgba(255,255,255,0.12)] rounded-3xl p-7 backdrop-blur-[40px] shadow-[0_-8px_40px_rgba(0,0,0,0.4),inset_0_-18px_84px_rgba(226,232,255,0.06)]">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">🍪</span>
          <div>
            <h4 className="text-lg font-semibold text-[rgba(255,255,255,0.95)] mb-2">
              Wir respektieren deine Privatsphäre
            </h4>
            <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.65)]">
              Wir verwenden Cookies, um dein Erlebnis zu verbessern und unsere Website zu optimieren.
              Einige Cookies sind technisch notwendig, andere helfen uns, die Nutzung zu analysieren
              und Inhalte zu personalisieren.{" "}
              <a href="/datenschutz" className="text-[var(--color-accent-light)] underline">
                Mehr erfahren
              </a>
            </p>
          </div>
        </div>

        {details && (
          <div className="my-4 p-4 bg-[rgba(255,255,255,0.04)] rounded-xl border border-[rgba(255,255,255,0.08)] text-[13px] text-[rgba(255,255,255,0.6)] leading-relaxed space-y-2">
            <p>
              <strong className="text-[rgba(255,255,255,0.85)]">Notwendig:</strong> Session-Cookies,
              Cookie-Einstellung (immer aktiv)
            </p>
            <p>
              <strong className="text-[rgba(255,255,255,0.85)]">Analyse & Marketing:</strong> Google
              Tag Manager, Google Analytics, Meta Pixel – zur Messung der Website-Performance und
              Optimierung unserer Werbeanzeigen.
            </p>
            <p>
              <strong className="text-[rgba(255,255,255,0.85)]">Drittanbieter:</strong> Videos werden
              über DigitalOcean CDN bereitgestellt. Dabei wird deine IP-Adresse übermittelt.
            </p>
          </div>
        )}

        <div className="flex gap-2.5 flex-wrap mt-4">
          <button onClick={acceptAll} className="btn-primary flex-1 min-w-[160px] justify-center">
            Alle akzeptieren
          </button>
          <button onClick={acceptEssential} className="btn-outline flex-1 min-w-[160px] justify-center">
            Nur notwendige
          </button>
          <button
            onClick={() => setDetails(!details)}
            className="px-5 py-3 text-sm text-[rgba(255,255,255,0.5)] bg-transparent border-none cursor-pointer underline"
          >
            {details ? "Weniger" : "Details"}
          </button>
        </div>
      </div>
    </div>
  );
}
