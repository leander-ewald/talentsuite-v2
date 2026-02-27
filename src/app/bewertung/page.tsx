"use client";
import React, { useState } from "react";

const B = "#023B5B", G = "#10B981", W = "#ffffff", RED = "#EF4444", GOLD = "#FBBF24";

const npsColors = (score: number) => {
  if (score <= 6) return { bg: `${RED}18`, border: RED, text: RED };
  if (score <= 8) return { bg: `${GOLD}18`, border: GOLD, text: "#92400E" };
  return { bg: `${G}18`, border: G, text: G };
};

export default function BewertungPage() {
  const [step, setStep] = useState(0);
  const [nps, setNps] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");

  const isPromoter = nps !== null && nps >= 9;
  const isPassive = nps !== null && nps >= 7 && nps <= 8;

  const title = step === 0 ? "Wie zufrieden sind Sie mit TalentSuite?" : step === 1 && isPromoter ? "Vielen Dank! ⭐" : step === 1 ? "Danke für Ihre Ehrlichkeit." : "🙏 Vielen Dank!";
  const subtitle = step === 0 ? "Ihre Meinung hilft uns, besser zu werden." : step === 1 && isPromoter ? "Würden Sie Ihre Erfahrung auf Google teilen?" : step === 1 ? "Ihr Feedback hilft uns, besser zu werden." : "Wir schätzen Ihr Feedback sehr.";

  return (
    <div style={{ background: "#f0f4f7", minHeight: "60vh" }}>
      <div style={{ background: `linear-gradient(135deg, #011E2F, ${B})`, padding: "112px 20px 72px", textAlign: "center" }}>
        <div style={{ letterSpacing: 4, fontSize: 11, fontWeight: 700, marginBottom: 10, color: "#1B98E0" }}>TALENTSUITE</div>
        <h1 className="text-[22px] md:text-[36px]" style={{ fontWeight: 800, lineHeight: 1.2, maxWidth: 520, margin: "0 auto 10px", color: W }}>{title}</h1>
        <p className="text-[13px] md:text-[15px]" style={{ maxWidth: 440, margin: "0 auto", color: "rgba(255,255,255,0.6)" }}>{subtitle}</p>
      </div>

      <div className="px-4 pb-12" style={{ maxWidth: 540, margin: "-40px auto 0" }}>
        {step === 0 && (
          <div style={{ background: W, borderRadius: 16, boxShadow: "0 4px 28px rgba(0,0,0,0.07)", padding: "32px 28px", textAlign: "center" }}>
            <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 4px" }}>Wie wahrscheinlich empfehlen Sie TalentSuite weiter?</p>
            <p style={{ color: "#64748B", fontSize: 12, margin: "0 0 22px" }}>0 = sehr unwahrscheinlich • 10 = sehr wahrscheinlich</p>
            <div className="flex justify-center gap-1.5 md:gap-2 flex-wrap mb-5">
              {Array.from({ length: 11 }, (_, i) => {
                const c = npsColors(i);
                const sel = nps === i;
                const hov = hover === i;
                return (
                  <button key={i} onClick={() => setNps(i)} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                    className="w-9 h-9 md:w-[42px] md:h-[42px] text-[13px] md:text-[14px]"
                    style={{ borderRadius: 10, border: `2px solid ${sel ? c.border : hov ? "#CBD5E1" : "#E2E8F0"}`, background: sel ? c.bg : hov ? "#F8FAFC" : W, fontWeight: sel ? 800 : 600, cursor: "pointer", transition: "all 0.15s" }}>
                    {i}
                  </button>
                );
              })}
            </div>
            {nps !== null && (
              <div style={{ padding: "8px 18px", borderRadius: 10, display: "inline-block", marginBottom: 18, background: npsColors(nps).bg, fontSize: 13, fontWeight: 600 }}>
                {nps >= 9 && "🌟 Promoter — Das freut uns sehr!"}
                {nps >= 7 && nps <= 8 && "👍 Zufrieden — Danke für Ihr Feedback!"}
                {nps <= 6 && "📝 Wir wollen uns verbessern."}
              </div>
            )}
            <div>
              <button onClick={() => nps !== null && setStep(1)} style={{ width: "100%", padding: 14, borderRadius: 12, border: "none", background: nps !== null ? B : "#E2E8F0", color: W, fontSize: 15, fontWeight: 700, cursor: nps !== null ? "pointer" : "default", opacity: nps === null ? 0.6 : 1 }}>Weiter →</button>
            </div>
          </div>
        )}

        {step === 1 && isPromoter && (
          <div style={{ background: W, borderRadius: 16, boxShadow: "0 4px 28px rgba(0,0,0,0.07)", padding: "32px 28px", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 10 }}>⭐</div>
            <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 8px" }}>Ihre Bewertung bedeutet uns viel!</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, margin: "0 0 22px", color: "#4A5568" }}>Würden Sie sich 2 Minuten Zeit nehmen und Ihre Erfahrung auf Google teilen? Das hilft anderen Unternehmen, uns zu finden.</p>
            <div style={{ background: "#f0f4f7", borderRadius: 12, padding: "16px 20px", marginBottom: 22, textAlign: "left" }}>
              <p style={{ fontSize: 12, fontWeight: 700, margin: "0 0 10px" }}>Inspiration für Ihre Bewertung:</p>
              {["Welches Problem hatten Sie vor TalentSuite?", "Wie hat TalentSuite geholfen?", "Welche konkreten Ergebnisse haben Sie erzielt?"].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 5 }}>
                  <span style={{ color: "#1B98E0", fontSize: 12 }}>→</span>
                  <span style={{ fontSize: 13, color: "#4A5568" }}>{t}</span>
                </div>
              ))}
            </div>
            <a href="https://g.page/talentsuite/review" target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: 14, borderRadius: 12, textDecoration: "none", background: B, textAlign: "center", fontSize: 15, fontWeight: 700, color: W }}>⭐ Jetzt auf Google bewerten →</a>
            <button onClick={() => setStep(2)} style={{ marginTop: 14, background: "none", border: "none", fontSize: 12, cursor: "pointer", textDecoration: "underline", color: "#64748B" }}>Lieber nicht, danke</button>
          </div>
        )}

        {step === 1 && !isPromoter && (
          <div style={{ background: W, borderRadius: 16, boxShadow: "0 4px 28px rgba(0,0,0,0.07)", padding: "32px 28px" }}>
            <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 6px" }}>{isPassive ? "Was können wir besser machen?" : "Wir nehmen Ihr Feedback ernst."}</h3>
            <p style={{ color: "#64748B", fontSize: 13, margin: "0 0 18px" }}>{isPassive ? "Ihr Feedback hilft uns, von gut zu herausragend zu kommen." : "Bitte teilen Sie uns mit, was wir verbessern können. Robert Engel wird sich persönlich bei Ihnen melden."}</p>
            <textarea placeholder="Was hätten wir besser machen können?" value={feedback} onChange={e => setFeedback(e.target.value)} style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "2px solid #cdd8e0", fontSize: 14, minHeight: 110, resize: "vertical", boxSizing: "border-box", outline: "none", background: W }} />
            <button onClick={() => setStep(2)} style={{ width: "100%", padding: 14, borderRadius: 12, border: "none", marginTop: 14, background: B, color: W, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Feedback absenden</button>
          </div>
        )}

        {step === 2 && (
          <div style={{ background: "#ECFDF5", borderRadius: 16, padding: "36px 32px", textAlign: "center", boxShadow: "0 4px 28px rgba(0,0,0,0.07)" }}>
            <div style={{ fontSize: 48 }}>🙏</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, margin: "12px 0 8px", color: "#065F46" }}>Vielen Dank für Ihre Zeit!</h3>
            <p style={{ fontSize: 14, margin: "0 0 20px", lineHeight: 1.6, color: "#047857" }}>{isPromoter ? "Ihre Bewertung hilft anderen Unternehmen, den richtigen Partner für ihre Fachkräftesuche zu finden." : "Wir werden Ihr Feedback sorgfältig prüfen. Robert Engel meldet sich persönlich bei Ihnen."}</p>
            <a href="https://www.talentsuite.io" style={{ display: "inline-block", padding: "11px 28px", background: G, borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 700, color: W }}>Zurück zu TalentSuite</a>
          </div>
        )}

        <div className="flex justify-center gap-4 md:gap-7 mt-7 flex-wrap">
          {["🔒 100% vertraulich", "⏱ Dauert nur 2 Min.", "❤️ Hilft uns enorm"].map((t, i) => (
            <span key={i} style={{ fontSize: 11, color: "#64748B" }}>{t}</span>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 11, padding: "20px 0 0", color: "#64748B" }}>TalentSuite — Performance Recruiting für den Mittelstand</p>
      </div>
    </div>
  );
}
