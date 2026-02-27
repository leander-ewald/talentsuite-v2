"use client";
import React, { useState } from "react";
import Link from "next/link";

const B = "#023B5B", D = "#011E2F", A = "#1B98E0", G = "#10B981", W = "#ffffff", L = "#f0f4f7", R = "#EF4444";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const toolkitItems = [
  {
    icon: "📋", title: "Onboarding-Checkliste (erste 90 Tage)",
    desc: "Tag-für-Tag-Plan für die erfolgreiche Einarbeitung neuer Mitarbeiter. Von der Begrüßung am ersten Tag bis zum Feedbackgespräch nach 3 Monaten.",
    preview: ["Tag 1: Arbeitsplatz vorbereitet, Team-Vorstellung, Willkommensmappe", "Woche 1: Einarbeitungsplan besprechen, Buddy/Mentor zuweisen", "Monat 1: Erstes Feedbackgespräch, Erwartungen abgleichen", "Monat 2: Eigenverantwortliche Aufgaben, Schulungsbedarf klären", "Monat 3: Probezeitgespräch, Ziele für nächstes Quartal setzen"],
    stat: "Gutes Onboarding senkt die Frühfluktuation um bis zu 82%",
  },
  {
    icon: "💬", title: "Mitarbeitergespräch-Leitfaden",
    desc: "10 bewährte Fragen für vierteljährliche Check-ins, die echtes Feedback ermöglichen und inneren Kündigungen vorbeugen.",
    preview: ["Wie zufrieden bist du mit deinen aktuellen Aufgaben? (1-10)", "Was war dein größter Erfolg im letzten Quartal?", "Gibt es etwas, das dich bei der Arbeit frustriert?", "Wo möchtest du dich in den nächsten 6 Monaten weiterentwickeln?", "Was kann ich als Führungskraft besser machen?"],
    stat: "42% der Kündigungen passieren wegen des direkten Vorgesetzten — Gespräche beugen vor",
  },
  {
    icon: "⚡", title: "15 Quick Wins für Arbeitgeberattraktivität",
    desc: "Sofort umsetzbare Maßnahmen, die Ihren Betrieb als Arbeitgeber attraktiver machen — ohne großes Budget.",
    preview: ["Kostenlos: Persönliche Geburtstagskarte vom Chef", "Kostenlos: Flexible Start- und Endzeiten (30-Min-Fenster)", "Günstig: Monatliches Team-Frühstück (ca. 50€)", "Günstig: Getränke-Flatrate (Kaffee, Wasser, Saft)", "Mittel: Jährliches Weiterbildungsbudget (500€ pro MA)"],
    stat: "Kleine Maßnahmen haben oft mehr Wirkung als Gehaltserhöhungen",
  },
];

export default function MitarbeiterBindung() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [dsgvo, setDsgvo] = useState(false);
  const [sent, setSent] = useState(false);
  const [openItem, setOpenItem] = useState(0);

  const emailValid = emailRe.test(form.email);
  const canSubmit = form.name && emailValid && dsgvo;

  const submit = async () => {
    setSent(true);
    try {
      await fetch("/api/leadmagnet-capture", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "mitarbeiter-bindung",
          name: form.name, email: form.email, phone: form.phone || undefined, company: form.company || undefined,
          extra: { toolkit: "full" },
        }),
      });
    } catch (e) { console.error(e); }
  };

  return (
    <>
      {/* Hero */}
      <div className="px-4 md:px-6 pt-28 md:pt-32 pb-12 md:pb-[72px]" style={{ background: `linear-gradient(135deg, ${D} 0%, ${B} 50%, #0A4D72 100%)` }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: `${G}20`, color: G, padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 14 }}>3 Dokumente · Sofort einsetzbar · Kostenlos</span>
          <h1 className="text-[26px] md:text-[40px]" style={{ color: W, fontWeight: 800, margin: "0 0 14px", lineHeight: 1.2 }}>
            Mitarbeiter-Bindungs-Toolkit
          </h1>
          <p className="text-[15px] md:text-[18px]" style={{ color: `${W}80`, maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Onboarding-Checkliste, Gesprächsleitfaden und 15 Quick Wins — alles, was Sie brauchen, um Mitarbeiter zu halten und Fluktuation zu senken.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-6 py-8 md:py-12 pb-12 md:pb-[72px]" style={{ background: L }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

          {/* Stats bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3" style={{ marginBottom: 28 }}>
            {[
              { n: "30.000€+", l: "Ø Kosten einer Neueinstellung", c: R },
              { n: "82%", l: "Weniger Frühfluktuation durch gutes Onboarding", c: G },
              { n: "42%", l: "Kündigen wegen des Vorgesetzten", c: A },
            ].map((s, i) => (
              <div key={i} style={{ background: W, borderRadius: 14, padding: "18px 14px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: s.c }}>{s.n}</div>
                <div style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Toolkit items with preview */}
          {toolkitItems.map((item, i) => (
            <div key={i} style={{ background: W, borderRadius: 16, marginBottom: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", overflow: "hidden" }}>
              <button onClick={() => setOpenItem(openItem === i ? -1 : i)} className="p-[18px] md:p-[22px]" style={{
                width: "100%", background: "none", border: "none",
                cursor: "pointer", display: "flex", alignItems: "center", gap: 14, fontFamily: "inherit", textAlign: "left",
              }}>
                <span style={{ fontSize: 32 }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 className="text-[16px] md:text-[18px]" style={{ color: B, fontWeight: 700, margin: 0 }}>{item.title}</h3>
                  <p style={{ color: "#64748B", fontSize: 14, margin: "4px 0 0" }}>{item.desc}</p>
                </div>
                <span style={{ color: A, fontSize: 20, transition: "transform 0.2s", transform: openItem === i ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
              </button>
              {openItem === i && (
                <div className="px-4 md:px-6 pb-[18px] md:pb-[22px]">
                  <div style={{ background: L, borderRadius: 12, padding: 16, marginBottom: 10 }}>
                    <p style={{ color: "#64748B", fontSize: 13, fontWeight: 600, margin: "0 0 8px" }}>📄 Vorschau:</p>
                    {item.preview.map((p, j) => (
                      <p key={j} style={{ color: "#4A5568", fontSize: 14, margin: "4px 0", lineHeight: 1.5 }}>{"\u2022"} {p}</p>
                    ))}
                    <p style={{ color: "#94A3B8", fontSize: 12, fontStyle: "italic", marginTop: 8, marginBottom: 0 }}>... und vieles mehr im vollständigen Dokument</p>
                  </div>
                  <div style={{ background: `${A}06`, border: `1px solid ${A}15`, borderRadius: 10, padding: "10px 14px" }}>
                    <p style={{ color: B, fontSize: 14, fontWeight: 600, margin: 0 }}>💡 {item.stat}</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* SEO content */}
          <div className="p-5 md:p-7" style={{ background: W, borderRadius: 16, marginBottom: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 className="text-[18px] md:text-[22px]" style={{ color: B, fontWeight: 700, margin: "0 0 12px" }}>Warum Mitarbeiterbindung wichtiger ist als Recruiting</h2>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
              Die meisten Unternehmen konzentrieren sich ausschließlich auf die Gewinnung neuer Mitarbeiter — dabei ist die Bindung bestehender Mitarbeiter mindestens genauso wichtig. Eine Neueinstellung kostet im Schnitt das 0,5- bis 1,5-fache eines Jahresgehalts, wenn man Recruiting-Kosten, Einarbeitung und Produktivitätsverlust berücksichtigt. Gleichzeitig zeigt der Gallup Engagement Index, dass Unternehmen mit hoher Mitarbeiterbindung 21% profitabler sind.
            </p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
              Besonders in Branchen mit ohnehin hohem Fachkräftemangel — Handwerk, Pflege, Gastronomie — ist jeder bestehende Mitarbeiter Gold wert. Ein strukturiertes Onboarding, regelmäßige Feedbackgespräche und kleine Wertschätzungsgesten können den Unterschied zwischen 10% und 30% Fluktuation ausmachen.
            </p>
            <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Das Mitarbeiter-Bindungs-Toolkit von TalentSuite gibt Ihnen drei sofort einsetzbare Werkzeuge an die Hand, die nachweislich die Mitarbeiterbindung stärken. Entwickelt für den Mittelstand — ohne komplizierte HR-Systeme, ohne großes Budget.
            </p>
          </div>

          {/* Download form */}
          <div className="p-7 md:p-9" style={{ background: `linear-gradient(135deg, ${D}, ${B})`, borderRadius: 16 }}>
            {!sent ? (
              <>
                <h2 className="text-[20px] md:text-[24px]" style={{ color: W, fontWeight: 700, margin: "0 0 8px", textAlign: "center" }}>
                  Komplettes Toolkit kostenlos herunterladen
                </h2>
                <p style={{ color: `${W}70`, fontSize: 15, textAlign: "center", margin: "0 0 24px" }}>
                  Alle 3 Dokumente als PDF — sofort einsetzbar in Ihrem Betrieb.
                </p>
                <div style={{ maxWidth: 480, margin: "0 auto" }}>
                  {([
                    { key: "name" as const, label: "Name *", ph: "Max Mustermann" },
                    { key: "email" as const, label: "E-Mail *", ph: "max@firma.de", type: "email" },
                    { key: "phone" as const, label: "Telefon", ph: "+49 170 1234567", type: "tel" },
                    { key: "company" as const, label: "Firma", ph: "Firmenname" },
                  ]).map(f => (
                    <div key={f.key} style={{ marginBottom: 12 }}>
                      <label style={{ color: `${W}70`, fontSize: 13, display: "block", marginBottom: 4 }}>{f.label}</label>
                      <input type={f.type || "text"} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.ph}
                        style={{ width: "100%", padding: "12px 14px", background: `${W}08`, border: `1px solid ${W}15`, borderRadius: 8, color: W, fontSize: 15, fontFamily: "inherit", boxSizing: "border-box" }} />
                      {f.key === "email" && form.email && !emailValid && <span style={{ color: R, fontSize: 12 }}>Bitte gültige E-Mail eingeben</span>}
                    </div>
                  ))}
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "8px 0 16px", cursor: "pointer" }}>
                    <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)} style={{ marginTop: 3, accentColor: A }} />
                    <span style={{ color: `${W}50`, fontSize: 12, lineHeight: 1.5 }}>
                      Ich stimme der <Link href="/datenschutz" target="_blank" style={{ color: A }}>Datenschutzerklärung</Link> zu und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verarbeitet werden.
                    </span>
                  </label>
                  <button onClick={submit} disabled={!canSubmit} style={{
                    width: "100%", padding: "16px", background: canSubmit ? W : `${W}20`, border: "none", borderRadius: 10,
                    color: canSubmit ? B : `${W}50`, fontSize: 16, fontWeight: 700, cursor: canSubmit ? "pointer" : "default", fontFamily: "inherit",
                  }}>
                    Toolkit kostenlos herunterladen →
                  </button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: 48 }}>✅</span>
                <h3 style={{ color: W, fontSize: 22, fontWeight: 700, margin: "12px 0 8px" }}>Toolkit wird zugestellt!</h3>
                <p style={{ color: `${W}70`, fontSize: 15, margin: "0 0 20px" }}>Wir senden Ihnen die 3 Dokumente an {form.email}.</p>
                <a href="https://calendar.app.google/QFoADWcRwwuYUoky8" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", padding: "14px 32px", background: `linear-gradient(135deg, ${A}, #0F7BC0)`, borderRadius: 10, color: W, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
                  Kostenlose Recruiting-Analyse buchen →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
