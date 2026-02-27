"use client";
import React, { useState } from "react";
import Link from "next/link";

const B = "#023B5B", G = "#10B981", W = "#ffffff", GR = "#64748B", L = "#f0f4f7";

const programs = [
  {
    id: "kunden", label: "Für Kunden", emoji: "⭐", prize: "500€",
    desc: "Empfehlen Sie TalentSuite an ein Unternehmen in Ihrem Netzwerk.",
    steps: ["Kontaktdaten des Unternehmens teilen", "TalentSuite kontaktiert den Lead", "Bei Vertragsabschluss: 500€ für Sie"],
    details: ["Keine Obergrenze — 5 Empfehlungen = 2.500€", "Auszahlung innerhalb von 14 Tagen", "Gültig für aktive und ehemalige Kunden"],
  },
  {
    id: "partner", label: "Für Partner", emoji: "🤝", prize: "500€ / 10%",
    desc: "Steuerberater, Berater, Verbände & Agenturen: Empfehlen Sie Ihren Klienten TalentSuite.",
    steps: ["Partnervereinbarung abschließen", "Klienten mit Recruiting-Bedarf empfehlen", "500€ Einmalprämie oder 10% Provision"],
    details: ["Eigener Partner-Dashboard & Tracking", "Monatliches Reporting", "Verkaufsunterlagen werden bereitgestellt"],
  },
];

const faqs = [
  { q: "Gibt es eine Obergrenze?", a: "Nein. 10 Empfehlungen = 5.000€. Keine Limits." },
  { q: "Wann erhalte ich die Prämie?", a: "Innerhalb von 14 Tagen nach Zahlungseingang des Neukunden." },
  { q: "Was zählt als erfolgreiche Empfehlung?", a: "Der empfohlene Kontakt schließt einen Vertrag mit TalentSuite ab." },
  { q: "Kann ich auch ehemalige Kontakte empfehlen?", a: "Ja, solange der Kontakt nicht bereits in unserem CRM ist." },
  { q: "Wie erfahre ich den Status meiner Empfehlung?", a: "Sie erhalten Updates per E-Mail bei jedem Statuswechsel." },
];

export default function EmpfehlungPage() {
  const [active, setActive] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", referral: "", message: "" });
  const [dsgvo, setDsgvo] = useState(false);
  const [sent, setSent] = useState(false);
  const p = programs[active];
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email);
  const phoneClean = form.phone.replace(/[\s\-\/\(\)]/g, "");
  const phoneValid = /^(\+?[0-9]{7,15})$/.test(phoneClean);
  const canSubmit = form.name && emailValid && phoneValid && form.company && dsgvo;

  return (
    <div style={{ background: L, minHeight: "60vh" }}>
      <div style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", padding: "52px 20px 72px", textAlign: "center" }}>
        <div style={{ display: "inline-block", padding: "5px 18px", borderRadius: 20, marginBottom: 16, background: `${G}22` }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: G }}>EMPFEHLUNGSPROGRAMM</span>
        </div>
        <h1 className="text-[20px] md:text-[32px]" style={{ fontWeight: 800, lineHeight: 1.15, maxWidth: 580, margin: "0 auto 14px", color: W }}>
          Empfehlen Sie uns weiter. <span style={{ color: G }}>Verdienen Sie mit.</span>
        </h1>
        <p className="text-[14px] md:text-[15px]" style={{ maxWidth: 460, margin: "0 auto", lineHeight: 1.5, color: "rgba(255,255,255,0.6)" }}>
          Bis zu 500€ für jede erfolgreiche Empfehlung — ohne Obergrenze.
        </p>
        <div className="flex justify-center gap-6 md:gap-10 mt-7 flex-wrap">
          {[{ n: "500€", l: "Pro Empfehlung" }, { n: "∞", l: "Keine Obergrenze" }, { n: "14 Tage", l: "Auszahlung" }].map((s, i) => (
            <div key={i}>
              <div className="text-[24px] md:text-[30px]" style={{ fontWeight: 800, color: W }}>{s.n}</div>
              <div style={{ fontSize: 11, marginTop: 2, color: "rgba(255,255,255,0.6)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-12" style={{ maxWidth: 660, margin: "-40px auto 0" }}>
        <div className="flex gap-2 mb-4">
          {programs.map((prog, i) => (
            <button key={i} onClick={() => setActive(i)} className="flex-1 p-3 md:p-3.5 text-center" style={{
              borderRadius: 12, border: `2px solid ${active === i ? B : "#E2E8F0"}`,
              background: active === i ? W : "#ffffff80", boxShadow: active === i ? "0 4px 16px rgba(0,0,0,0.08)" : "none", cursor: "pointer",
            }}>
              <div className="text-[20px] md:text-[24px]">{prog.emoji}</div>
              <div className="text-[11px] md:text-[12px]" style={{ fontWeight: 700, marginTop: 4 }}>{prog.label}</div>
              <div className="text-[17px] md:text-[20px]" style={{ fontWeight: 800, marginTop: 2, color: active === i ? G : "#94A3B8" }}>{prog.prize}</div>
            </button>
          ))}
        </div>

        <div style={{ background: W, borderRadius: 16, boxShadow: "0 4px 28px rgba(0,0,0,0.07)", overflow: "hidden", marginBottom: 20 }}>
          <div className="p-5 md:p-7">
            <p style={{ fontSize: 15, lineHeight: 1.6, margin: "0 0 22px" }}>{p.desc}</p>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, marginBottom: 14, color: "#1B98E0" }}>SO FUNKTIONIERT&apos;S</div>
            {p.steps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: i === p.steps.length - 1 ? G : B, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: W }}>{i + 1}</span>
                </div>
                <span style={{ fontSize: 14 }}>{s}</span>
              </div>
            ))}
            <div style={{ background: L, borderRadius: 10, padding: "16px 20px", marginTop: 18 }}>
              {p.details.map((d, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: i < p.details.length - 1 ? 7 : 0 }}>
                  <span style={{ fontSize: 14, color: G }}>✓</span>
                  <span style={{ fontSize: 13 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {!sent ? (
          <div style={{ background: W, borderRadius: 16, boxShadow: "0 4px 28px rgba(0,0,0,0.07)", padding: "28px 28px" }}>
            <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 4px" }}>Jetzt empfehlen</h3>
            <p style={{ color: GR, fontSize: 13, margin: "0 0 20px" }}>Füllen Sie das Formular aus — wir kümmern uns um den Rest.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { key: "name", label: "Ihr Name", ph: "Max Mustermann", type: "text" },
                { key: "email", label: "Ihre E-Mail", ph: "max@firma.de", type: "email" },
                { key: "phone", label: "Ihre Telefonnummer", ph: "+49 170 1234567", type: "tel" },
                { key: "company", label: "Empfohlenes Unternehmen", ph: "Firma GmbH", type: "text" },
                { key: "referral", label: "Ansprechpartner", ph: "Name des Kontakts", type: "text" },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>{f.label}</label>
                  <input placeholder={f.ph} type={f.type} value={form[f.key as keyof typeof form]} onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: `2px solid ${f.key === "email" && form.email && !emailValid ? "#F87171" : f.key === "phone" && form.phone && !phoneValid ? "#F87171" : "#cdd8e0"}`, fontSize: 14, outline: "none", marginTop: 5, boxSizing: "border-box", background: W }} />
                  {f.key === "email" && form.email && !emailValid && <p style={{ color: "#F87171", fontSize: 11, marginTop: 3 }}>Bitte geben Sie eine gültige E-Mail-Adresse ein.</p>}
                  {f.key === "phone" && form.phone && !phoneValid && <p style={{ color: "#F87171", fontSize: 11, marginTop: 3 }}>Bitte geben Sie eine gültige Telefonnummer ein.</p>}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12 }}>
              <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>Nachricht (optional)</label>
              <textarea placeholder="Kontext zur Empfehlung..." value={form.message} onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "2px solid #cdd8e0", fontSize: 14, outline: "none", marginTop: 5, minHeight: 80, resize: "vertical", boxSizing: "border-box", background: W }} />
            </div>
            <button onClick={() => { if (!canSubmit) return; setSent(true); fetch("/api/leadmagnet-capture", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ source: "empfehlung", name: form.name, email: form.email, phone: form.phone, extra: { referralCompany: form.company, referralContact: form.referral, message: form.message } }) }).catch(err => console.error("Lead capture error:", err)); }}
              disabled={!canSubmit}
              style={{ width: "100%", padding: 14, background: canSubmit ? B : "#ccc", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: canSubmit ? "pointer" : "default", marginTop: 16, opacity: canSubmit ? 1 : 0.5, color: W }}>
              Empfehlung einreichen →
            </button>
            <label style={{ display: "flex", alignItems: "flex-start", gap: 10, marginTop: 12, cursor: "pointer" }}>
              <input type="checkbox" checked={dsgvo} onChange={e => setDsgvo(e.target.checked)} style={{ width: 18, height: 18, marginTop: 2, accentColor: B, flexShrink: 0 }} />
              <span style={{ color: GR, fontSize: 11, lineHeight: 1.5 }}>
                Ich stimme der <Link href="/datenschutz" target="_blank" style={{ color: B, textDecoration: "underline" }}>Datenschutzerklärung</Link> zu und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verarbeitet werden.
              </span>
            </label>
          </div>
        ) : (
          <div style={{ background: "#ECFDF5", borderRadius: 16, padding: "36px 32px", textAlign: "center", boxShadow: "0 4px 28px rgba(0,0,0,0.07)" }}>
            <div style={{ fontSize: 44 }}>🎉</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, margin: "12px 0 6px", color: "#065F46" }}>Empfehlung eingereicht!</h3>
            <p style={{ fontSize: 14, margin: "0 0 4px", color: "#047857" }}>Vielen Dank, {form.name}! Wir kontaktieren {form.company} in Kürze.</p>
            <p style={{ fontSize: 13, color: "#047857" }}>Sie erhalten eine Bestätigung an {form.email}.</p>
            <button onClick={() => { setSent(false); setDsgvo(false); setForm({ name: "", email: "", phone: "", company: "", referral: "", message: "" }); }}
              style={{ marginTop: 18, padding: "11px 28px", background: G, border: "none", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", color: W }}>
              Weitere Empfehlung einreichen
            </button>
          </div>
        )}

        <div style={{ background: W, borderRadius: 16, boxShadow: "0 4px 28px rgba(0,0,0,0.07)", padding: "28px 28px", marginTop: 20 }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 18px" }}>Häufige Fragen</h3>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #e8edf1" : "none", paddingBottom: 12, marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{faq.q}</div>
              <div style={{ fontSize: 13, marginTop: 3, color: "#4A5568" }}>{faq.a}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 11, padding: "24px 0 0", color: GR }}>TalentSuite — Performance Recruiting für den Mittelstand</p>
      </div>
    </div>
  );
}
