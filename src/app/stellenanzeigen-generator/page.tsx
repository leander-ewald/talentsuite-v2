"use client";
import React, { useState, useEffect } from "react";
import { trackMetaLead } from "@/components/MetaPixel";
import Link from "next/link";

const B = "#023B5B", D = "#011E2F", A = "#1B98E0", G = "#10B981", W = "#ffffff", L = "#f0f4f7", R = "#EF4444";

const branchenData: Record<string, { positions: string[]; defaultBenefits: number[] }> = {
  "SHK & Elektro": { positions: ["Anlagenmechaniker/in SHK", "Elektroniker/in", "Meister/in SHK", "Kundendiensttechniker/in", "Auszubildende/r SHK"], defaultBenefits: [0, 1, 3, 5, 8] },
  "Pflege & Gesundheit": { positions: ["Pflegefachkraft (m/w/d)", "Altenpfleger/in", "Krankenpfleger/in", "Pflegehelfer/in", "Praxismanager/in"], defaultBenefits: [0, 2, 4, 6, 9] },
  "Gastronomie & Hotel": { positions: ["Koch/Köchin", "Servicekraft", "Hotelfachmann/-frau", "Küchenchef/in", "Restaurantleiter/in"], defaultBenefits: [0, 1, 7, 8, 10] },
  "Logistik & Transport": { positions: ["LKW-Fahrer/in (CE)", "Lagerist/in", "Disponent/in", "Kommissionierer/in", "Fuhrparkleiter/in"], defaultBenefits: [0, 1, 3, 5, 11] },
  "Bau & Ausbau": { positions: ["Maurer/in", "Zimmerer/in", "Dachdecker/in", "Trockenbauer/in", "Bauleiter/in"], defaultBenefits: [0, 1, 3, 5, 8] },
  "Industrie & Produktion": { positions: ["Industriemechaniker/in", "Zerspanungsmechaniker/in", "Schichtleiter/in", "Qualitätsprüfer/in", "Produktionshelfer/in"], defaultBenefits: [0, 1, 3, 6, 8] },
};

const allBenefits = [
  { id: 0, label: "Überdurchschnittliches Gehalt", icon: "💰" },
  { id: 1, label: "30 Tage Urlaub", icon: "🌴" },
  { id: 2, label: "Flexible Arbeitszeiten", icon: "⏰" },
  { id: 3, label: "Betriebliche Altersvorsorge", icon: "🏦" },
  { id: 4, label: "4-Tage-Woche möglich", icon: "📅" },
  { id: 5, label: "Firmenfahrzeug (auch privat)", icon: "🚗" },
  { id: 6, label: "Fort- und Weiterbildungen", icon: "📚" },
  { id: 7, label: "Kostenlose Verpflegung", icon: "🍽️" },
  { id: 8, label: "Hochwertige Arbeitsausrüstung", icon: "🛠️" },
  { id: 9, label: "Zuschuss zum Deutschlandticket", icon: "🚊" },
  { id: 10, label: "Trinkgeld-Beteiligung", icon: "💵" },
  { id: 11, label: "Keine Wochenendarbeit", icon: "🏠" },
  { id: 12, label: "Familiäres Team", icon: "🤝" },
  { id: 13, label: "Moderne Arbeitsplätze", icon: "✨" },
  { id: 14, label: "Mitarbeiter-Empfehlungsbonus", icon: "🎁" },
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function generateAd({ branche, position, company, standort, benefits, customPosition }: { branche: string; position: string; company: string; standort: string; benefits: number[]; customPosition: string }) {
  const pos = customPosition || position;
  const bList = benefits.map(id => allBenefits.find(b => b.id === id)).filter(Boolean);
  const benefitsText = bList.map(b => `✅ ${b!.label}`).join("\n");

  return `${pos} (m/w/d) — ${company || "[Ihr Firmenname]"} in ${standort || "[Standort]"}

Du suchst einen Arbeitgeber, der dich wirklich wertschätzt? Dann bist du bei uns genau richtig.

Wir sind ${company || "[Ihr Firmenname]"} aus ${standort || "[Standort]"} und suchen ab sofort Verstärkung als ${pos} (m/w/d).

Was wir dir bieten:

${benefitsText}

Was du mitbringst:

\u2022 Abgeschlossene Ausbildung im relevanten Bereich oder vergleichbare Qualifikation
\u2022 Motivation und Teamgeist
\u2022 Zuverlässigkeit und eigenverantwortliches Arbeiten

Klingt gut? Dann bewirb dich jetzt — unkompliziert und schnell!

📱 Bewerbung in 60 Sekunden: [Link zu deiner Karriereseite]
📧 Oder per E-Mail an: [E-Mail-Adresse]
📞 Fragen? Ruf uns an: [Telefonnummer]

Wir freuen uns auf dich! 💪

${company || "[Ihr Firmenname]"} \u00b7 ${standort || "[Standort]"}`;
}

export default function StellenanzeigenGenerator() {
  const [step, setStep] = useState(0);
  const [branche, setBranche] = useState("");
  const [position, setPosition] = useState("");
  const [customPosition, setCustomPosition] = useState("");
  const [company, setCompany] = useState("");
  const [standort, setStandort] = useState("");
  const [benefits, setBenefits] = useState<number[]>([]);
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [dsgvo, setDsgvo] = useState(false);
  const [sent, setSent] = useState(false);

  /* CSS Override: kills globals.css white text on light backgrounds */
  useEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("data-sg-styles", "true");
    style.textContent = `
      #sg h1, #sg h2, #sg h3, #sg h4, #sg h5, #sg h6 { color: #023B5B !important; }
      #sg p, #sg span, #sg label, #sg div, #sg li, #sg button, #sg a, #sg pre { color: inherit !important; }

      #sg [data-sg="white"]  { color: #ffffff !important; }
      #sg [data-sg="muted"]  { color: rgba(255,255,255,0.5) !important; }
      #sg [data-sg="muted7"] { color: rgba(255,255,255,0.7) !important; }
      #sg [data-sg="muted8"] { color: rgba(255,255,255,0.8) !important; }
      #sg [data-sg="brand"]  { color: #023B5B !important; }
      #sg [data-sg="gray"]   { color: #64748B !important; }
      #sg [data-sg="body"]   { color: #4A5568 !important; }
      #sg [data-sg="slate"]  { color: #334155 !important; }
      #sg [data-sg="accent"] { color: #1B98E0 !important; }
      #sg [data-sg="green"]  { color: #10B981 !important; }
      #sg [data-sg="btnw"]   { color: #ffffff !important; }
      #sg [data-sg="btnb"]   { color: #023B5B !important; }
      #sg [data-sg="dis"]    { color: #CBD5E1 !important; }
      #sg [data-sg="input"]  { color: #023B5B !important; }
      #sg [data-sg="inputw"] { color: #ffffff !important; }
      #sg [data-sg="ph"]     { color: rgba(255,255,255,0.5) !important; }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const selectBranch = (b: string) => {
    setBranche(b);
    setPosition("");
    setCustomPosition("");
    setBenefits(branchenData[b]?.defaultBenefits || []);
    setStep(1);
  };

  const toggleBenefit = (id: number) => {
    setBenefits(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]);
  };

  const generate = () => {
    setGenerated(generateAd({ branche, position, company, standort, benefits, customPosition }));
    setStep(3);
  };

  const copy = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const canSubmit = form.name && emailRe.test(form.email) && dsgvo;

  const submit = async () => {
    setSent(true);
    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "stellenanzeigen-generator",
          name: form.name, email: form.email, phone: form.phone || undefined,
          company: company || undefined, industry: branche,
          extra: { position: customPosition || position, standort, benefitCount: benefits.length },
        }),
      });
    } catch (e) { console.error(e); }
    trackMetaLead({ formName: "stellenanzeigen-generator", category: "leadmagnet", value: 100 });
  };

  return (
    <div id="sg">
      {/* Hero */}
      <div className="px-4 md:px-6 pt-28 md:pt-[96px] pb-12 md:pb-[68px]" style={{ background: `linear-gradient(135deg, ${D} 0%, ${B} 50%, #0A4D72 100%)` }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span data-sg="green" style={{ display: "inline-block", background: `${G}20`, padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 14 }}>
            100% kostenlos · In 60 Sekunden fertig
          </span>
          <h1 data-sg="white" className="text-[26px] md:text-[40px]" style={{ fontWeight: 800, margin: "0 0 14px", lineHeight: 1.2 }}>
            Stellenanzeige schreiben — in 60 Sekunden
          </h1>
          <p data-sg="muted8" className="text-[15px] md:text-[18px]" style={{ maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Professionelle Stellenanzeige mit Branchenvorlage erstellen. Kostenlos, sofort einsetzbar.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-6 py-8 md:py-12 pb-12 md:pb-[72px]" style={{ background: L }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

          {/* Step 0: Branch */}
          {step === 0 && (
            <div className="p-6 md:p-8" style={{ background: W, borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <h2 data-sg="brand" className="text-[18px] md:text-[22px]" style={{ fontWeight: 700, margin: "0 0 16px" }}>Schritt 1: Branche wählen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {Object.keys(branchenData).map(b => (
                  <button key={b} onClick={() => selectBranch(b)} data-sg="brand" style={{
                    padding: "16px", background: L, border: "2px solid transparent", borderRadius: 12,
                    cursor: "pointer", fontFamily: "inherit", fontSize: 15, fontWeight: 600, textAlign: "left", transition: "all 0.2s",
                  }}>{b}</button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Position + Details */}
          {step === 1 && (
            <div className="p-6 md:p-8" style={{ background: W, borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <h2 data-sg="brand" className="text-[18px] md:text-[22px]" style={{ fontWeight: 700, margin: "0 0 16px" }}>Schritt 2: Position & Details</h2>
              <label data-sg="gray" style={{ display: "block", fontSize: 13, marginBottom: 4, fontWeight: 500 }}>Position auswählen *</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                {branchenData[branche]?.positions.map(p => (
                  <button key={p} onClick={() => { setPosition(p); setCustomPosition(""); }} data-sg="brand" style={{
                    padding: "10px 16px", borderRadius: 8, border: `2px solid ${position === p ? A : "#E2E8F0"}`,
                    background: position === p ? `${A}10` : W, cursor: "pointer", fontSize: 14, fontFamily: "inherit", fontWeight: position === p ? 600 : 400,
                  }}>{p}</button>
                ))}
              </div>
              <label data-sg="gray" style={{ display: "block", fontSize: 13, marginBottom: 4, fontWeight: 500 }}>Oder eigene Position eingeben</label>
              <input data-sg="input" value={customPosition} onChange={e => { setCustomPosition(e.target.value); setPosition(""); }} placeholder="z.B. Obermonteur Heizungstechnik"
                style={{ width: "100%", padding: "11px 14px", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box", marginBottom: 14 }} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label data-sg="gray" style={{ display: "block", fontSize: 13, marginBottom: 4, fontWeight: 500 }}>Firmenname</label>
                  <input data-sg="input" value={company} onChange={e => setCompany(e.target.value)} placeholder="Mustermann GmbH"
                    style={{ width: "100%", padding: "11px 14px", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label data-sg="gray" style={{ display: "block", fontSize: 13, marginBottom: 4, fontWeight: 500 }}>Standort</label>
                  <input data-sg="input" value={standort} onChange={e => setStandort(e.target.value)} placeholder="z.B. Dortmund"
                    style={{ width: "100%", padding: "11px 14px", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box" }} />
                </div>
              </div>
              <button onClick={() => setStep(2)} disabled={!position && !customPosition} data-sg={(position || customPosition) ? "btnw" : "dis"}
                style={{ marginTop: 20, padding: "14px 32px", background: (position || customPosition) ? `linear-gradient(135deg, ${A}, #0F7BC0)` : "#CBD5E1", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: (position || customPosition) ? "pointer" : "default", fontFamily: "inherit" }}>
                Weiter zu Benefits →
              </button>
            </div>
          )}

          {/* Step 2: Benefits */}
          {step === 2 && (
            <div className="p-6 md:p-8" style={{ background: W, borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <h2 data-sg="brand" className="text-[18px] md:text-[22px]" style={{ fontWeight: 700, margin: "0 0 6px" }}>Schritt 3: Benefits auswählen</h2>
              <p data-sg="gray" style={{ fontSize: 14, margin: "0 0 16px" }}>Wählen Sie die Benefits, die Sie tatsächlich bieten. Authentizität gewinnt.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {allBenefits.map(b => (
                  <button key={b.id} onClick={() => toggleBenefit(b.id)} data-sg="brand" style={{
                    padding: "12px 14px", borderRadius: 10, border: `2px solid ${benefits.includes(b.id) ? G : "#E2E8F0"}`,
                    background: benefits.includes(b.id) ? `${G}08` : W, cursor: "pointer", fontFamily: "inherit",
                    fontSize: 14, textAlign: "left", transition: "all 0.15s", display: "flex", alignItems: "center", gap: 8,
                  }}>
                    <span>{b.icon}</span> {b.label}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                <button onClick={() => setStep(1)} data-sg="gray" style={{ padding: "14px 24px", background: "none", border: "1px solid #E2E8F0", borderRadius: 10, cursor: "pointer", fontFamily: "inherit", fontSize: 14 }}>← Zurück</button>
                <button onClick={generate} disabled={benefits.length < 2} data-sg={benefits.length >= 2 ? "btnw" : "dis"}
                  style={{ flex: 1, padding: "14px", background: benefits.length >= 2 ? `linear-gradient(135deg, ${A}, #0F7BC0)` : "#CBD5E1", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: benefits.length >= 2 ? "pointer" : "default", fontFamily: "inherit" }}>
                  Stellenanzeige generieren ✨
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Result */}
          {step === 3 && (
            <div>
              <div className="p-6 md:p-8" style={{ background: W, borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h2 data-sg="brand" className="text-[18px] md:text-[22px]" style={{ fontWeight: 700, margin: 0 }}>Ihre Stellenanzeige</h2>
                  <button onClick={copy} data-sg={copied ? "btnw" : "accent"} style={{ padding: "8px 16px", background: copied ? G : `${A}10`, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "inherit" }}>
                    {copied ? "✅ Kopiert!" : "📋 Kopieren"}
                  </button>
                </div>
                <pre data-sg="slate" style={{ background: L, padding: 20, borderRadius: 12, fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-wrap", wordWrap: "break-word", margin: 0, fontFamily: "inherit", border: "1px solid #E2E8F0" }}>
                  {generated}
                </pre>
                <button onClick={() => { setStep(0); setGenerated(""); setBranche(""); setPosition(""); setCustomPosition(""); setCompany(""); setStandort(""); setBenefits([]); }}
                  data-sg="accent" style={{ marginTop: 14, background: "none", border: "none", cursor: "pointer", fontSize: 14, fontFamily: "inherit", fontWeight: 500 }}>
                  🔄 Neue Anzeige erstellen
                </button>
              </div>

              {/* Upsell CTA */}
              <div className="p-7 md:p-9" style={{ background: `linear-gradient(135deg, ${D}, ${B})`, borderRadius: 16, textAlign: "center" }}>
                <h3 data-sg="white" className="text-[18px] md:text-[22px]" style={{ fontWeight: 700, margin: "0 0 10px" }}>
                  Diese Anzeige bringt auf Jobbörsen 5-10 Bewerbungen.
                </h3>
                <p data-sg="muted7" className="text-[15px] md:text-[17px]" style={{ margin: "0 0 6px", lineHeight: 1.6 }}>
                  Mit Social Recruiting erreichen Sie <strong data-sg="accent">3-5x so viele</strong> — weil Sie die 80% passiver Kandidaten ansprechen, die keine Jobbörse nutzen.
                </p>
                <p data-sg="muted" style={{ fontSize: 14, margin: "0 0 20px" }}>
                  ⌀ 15-25 € pro Bewerbung · ⌀ 30 Tage bis zur Einstellung
                </p>
                {!showForm ? (
                  <button onClick={() => setShowForm(true)} data-sg="btnb" style={{
                    padding: "16px 40px", background: W, border: "none", borderRadius: 10,
                    fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                  }}>
                    Kostenlose Recruiting-Analyse buchen →
                  </button>
                ) : !sent ? (
                  <div style={{ maxWidth: 400, margin: "0 auto", textAlign: "left" }}>
                    {([
                      { key: "name" as const, label: "Name *", ph: "Max Mustermann" },
                      { key: "email" as const, label: "E-Mail *", ph: "max@firma.de", type: "email" },
                      { key: "phone" as const, label: "Telefon", ph: "+49 170 1234567", type: "tel" },
                    ]).map(f => (
                      <div key={f.key} style={{ marginBottom: 12 }}>
                        <label data-sg="muted7" style={{ fontSize: 13, display: "block", marginBottom: 4 }}>{f.label}</label>
                        <input type={f.type || "text"} data-sg="inputw" value={form[f.key]} onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))} placeholder={f.ph}
                          style={{ width: "100%", padding: "11px 14px", background: `${W}10`, border: `1px solid ${W}20`, borderRadius: 8, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box" }} />
                      </div>
                    ))}
                    <label style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "8px 0 14px", cursor: "pointer" }}>
                      <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)} style={{ marginTop: 3, accentColor: A }} />
                      <span data-sg="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
                        Ich stimme der <Link href="/datenschutz" target="_blank" data-sg="accent" style={{ textDecoration: "underline" }}>Datenschutzerklärung</Link> zu.
                      </span>
                    </label>
                    <button onClick={submit} disabled={!canSubmit} data-sg={canSubmit ? "btnb" : "muted"}
                      style={{
                        width: "100%", padding: "14px", background: canSubmit ? W : `${W}20`, border: "none", borderRadius: 10,
                        fontSize: 16, fontWeight: 700, cursor: canSubmit ? "pointer" : "default", fontFamily: "inherit",
                      }}>
                      Analyse anfordern →
                    </button>
                  </div>
                ) : (
                  <div>
                    <span style={{ fontSize: 48 }}>✅</span>
                    <p data-sg="white" style={{ fontSize: 18, fontWeight: 600, marginTop: 12 }}>Anfrage erhalten! Wir melden uns innerhalb von 24h bei Ihnen.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* SEO Bottom Content */}
          <div className="p-5 md:p-7" style={{ background: W, borderRadius: 16, marginTop: 28, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 data-sg="brand" className="text-[18px] md:text-[22px]" style={{ fontWeight: 700, margin: "0 0 12px" }}>
              Stellenanzeige schreiben: Worauf kommt es an?
            </h2>
            <p data-sg="body" style={{ fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
              Eine gute Stellenanzeige entscheidet darüber, ob sich qualifizierte Fachkräfte bei Ihnen bewerben oder bei der Konkurrenz. Im Handwerk, in der Pflege und in der Gastronomie gelten dabei besondere Regeln: Fachkräfte in diesen Branchen wollen keine langen, formellen Texte — sie wollen auf den Punkt wissen, was Sie bieten und was sie erwartet.
            </p>
            <h3 data-sg="brand" style={{ fontSize: 17, fontWeight: 700, margin: "16px 0 8px" }}>Die 5 wichtigsten Elemente einer erfolgreichen Stellenanzeige</h3>
            <p data-sg="body" style={{ fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
              Erstens, ein klarer Jobtitel ohne Kreativbegriffe — „Anlagenmechaniker SHK" statt „Haustechnik-Hero". Zweitens, Benefits vor Anforderungen: Kandidaten wollen zuerst wissen, was für sie drin ist. Drittens, konkreter Standort mit Umkreis. Viertens, ein unkomplizierter Bewerbungsweg — idealerweise in unter 60 Sekunden per Smartphone. Und fünftens, echte Einblicke statt Floskeln: Was macht Ihren Betrieb besonders?
            </p>
            <h3 data-sg="brand" style={{ fontSize: 17, fontWeight: 700, margin: "16px 0 8px" }}>Warum Stellenanzeigen allein nicht reichen</h3>
            <p data-sg="body" style={{ fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Selbst die perfekte Stellenanzeige erreicht auf Jobbörsen nur die 20% der Fachkräfte, die aktiv suchen. Die restlichen 80% — oft die qualifiziertesten — sind zwar offen für einen Wechsel, besuchen aber keine Jobportale. Um diese passiven Kandidaten zu erreichen, braucht es Social Media Recruiting: Ihre Stellenanzeige wird dort platziert, wo die Zielgruppe tatsächlich ist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
