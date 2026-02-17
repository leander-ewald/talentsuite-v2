"use client";
import React, { useState } from "react";
import Link from "next/link";

// ============================================================
// DISCOVERY CALL PAGE - talentsuite.io/discoverycall-recruiting
// Stufe 1: Interessent füllt vor dem Call aus
// Stufe 2: Robert füllt während des Calls aus (passwortgeschützt)
// ============================================================

const BRAND = "#023B5B";
const BRAND_LIGHT = "#E8F4FD";
const ACCENT = "#0EA5E9";
const SUCCESS = "#10B981";
const CALENDAR_LINK = "https://calendar.app.google/CQpLAnRw8tzQUEQz5";

// Branchen-Optionen
const BRANCHEN = [
  "SHK (Sanitär, Heizung, Klima)",
  "Elektro & Elektrotechnik",
  "Metallbau & Maschinenbau",
  "Baugewerbe & Hochbau",
  "Pflege & Gesundheitswesen",
  "Gastronomie & Hotellerie",
  "Logistik & Transport",
  "Automotive & KFZ",
  "Industrie & Produktion",
  "Immobilien",
  "IT & Software",
  "Sonstige",
];

const MITARBEITER = ["1-10", "11-25", "26-50", "51-100", "100+"];
const OFFENE_STELLEN = ["1-2", "3-5", "6-10", "10+"];
const BUDGET = [
  "Noch kein Budget geplant",
  "500-1.000€/Monat",
  "1.000-2.000€/Monat",
  "2.000-5.000€/Monat",
  "5.000€+/Monat",
];
const HERAUSFORDERUNGEN = [
  "Zu wenig Bewerbungen",
  "Falsche/unqualifizierte Bewerber",
  "Bewerber springen ab",
  "Stellenanzeigen bringen nichts",
  "Keine Zeit für aktives Recruiting",
  "Hohe Fluktuation",
  "Konkurrenz zahlt mehr",
  "Kein Employer Branding",
];
const ZEITRAHMEN = [
  "Sofort – so schnell wie möglich",
  "In den nächsten 2-4 Wochen",
  "In 1-3 Monaten",
  "Erstmal nur informieren",
];
const BISHERIGE_METHODEN = [
  "Stellenanzeigen (StepStone, Indeed, etc.)",
  "Arbeitsagentur",
  "Zeitarbeit / Personaldienstleister",
  "Social Media (selbst gemacht)",
  "Recruiting-Agentur",
  "Mund-zu-Mund / Empfehlungen",
  "Noch nichts Konkretes",
];

// ============================================================
// STUFE 1: INTERESSENTEN-FORMULAR
// ============================================================
function InteressentenFormular({ onComplete }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    firma: "",
    name: "",
    email: "",
    telefon: "",
    branche: "",
    brancheSonstige: "",
    mitarbeiter: "",
    offeneStellen: "",
    herausforderungen: [],
    bisherige: [],
    zeitrahmen: "",
    anmerkungen: "",
  });

  const update = (key, val) => setData((d) => ({ ...d, [key]: val }));
  const toggleArray = (key, val) => {
    setData((d) => ({
      ...d,
      [key]: d[key].includes(val)
        ? d[key].filter((v) => v !== val)
        : [...d[key], val],
    }));
  };

  const steps = [
    // Step 0: Kontaktdaten
    {
      title: "Über Sie & Ihr Unternehmen",
      subtitle: "Damit wir uns optimal auf das Gespräch vorbereiten können",
      icon: "👤",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <InputField label="Firmenname *" value={data.firma} onChange={(v) => update("firma", v)} placeholder="z.B. Müller Heizungsbau GmbH" />
          <InputField label="Ihr Name *" value={data.name} onChange={(v) => update("name", v)} placeholder="z.B. Thomas Müller" />
          <InputField label="E-Mail *" value={data.email} onChange={(v) => update("email", v)} placeholder="z.B. t.mueller@firma.de" type="email" />
          <InputField label="Telefon" value={data.telefon} onChange={(v) => update("telefon", v)} placeholder="z.B. 0171 1234567" type="tel" />
        </div>
      ),
      valid: data.firma && data.name && data.email,
    },
    // Step 1: Branche & Größe
    {
      title: "Branche & Unternehmensgröße",
      subtitle: "Hilft uns, branchenspezifische Lösungen vorzubereiten",
      icon: "🏢",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8, display: "block" }}>Branche *</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {BRANCHEN.map((b) => (
                <ChipButton key={b} label={b} selected={data.branche === b} onClick={() => update("branche", b)} />
              ))}
            </div>
            {data.branche === "Sonstige" && (
              <InputField label="" value={data.brancheSonstige} onChange={(v) => update("brancheSonstige", v)} placeholder="Welche Branche?" style={{ marginTop: 8 }} />
            )}
          </div>
          <div>
            <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8, display: "block" }}>Mitarbeiteranzahl *</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {MITARBEITER.map((m) => (
                <ChipButton key={m} label={m} selected={data.mitarbeiter === m} onClick={() => update("mitarbeiter", m)} />
              ))}
            </div>
          </div>
          <div>
            <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8, display: "block" }}>Wie viele Stellen sind aktuell offen? *</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {OFFENE_STELLEN.map((o) => (
                <ChipButton key={o} label={o} selected={data.offeneStellen === o} onClick={() => update("offeneStellen", o)} />
              ))}
            </div>
          </div>
        </div>
      ),
      valid: data.branche && data.mitarbeiter && data.offeneStellen,
    },
    // Step 2: Herausforderungen
    {
      title: "Ihre aktuelle Situation",
      subtitle: "Was sind Ihre größten Recruiting-Herausforderungen?",
      icon: "🎯",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8, display: "block" }}>Größte Herausforderungen (mehrere möglich) *</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {HERAUSFORDERUNGEN.map((h) => (
                <ChipButton key={h} label={h} selected={data.herausforderungen.includes(h)} onClick={() => toggleArray("herausforderungen", h)} />
              ))}
            </div>
          </div>
          <div>
            <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8, display: "block" }}>Was haben Sie bisher probiert? (mehrere möglich)</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {BISHERIGE_METHODEN.map((b) => (
                <ChipButton key={b} label={b} selected={data.bisherige.includes(b)} onClick={() => toggleArray("bisherige", b)} />
              ))}
            </div>
          </div>
        </div>
      ),
      valid: data.herausforderungen.length > 0,
    },
    // Step 3: Zeitrahmen & Abschluss
    {
      title: "Zeitrahmen & Anmerkungen",
      subtitle: "Wann möchten Sie starten?",
      icon: "⏰",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8, display: "block" }}>Wann sollen die Stellen besetzt werden? *</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {ZEITRAHMEN.map((z) => (
                <ChipButton key={z} label={z} selected={data.zeitrahmen === z} onClick={() => update("zeitrahmen", z)} />
              ))}
            </div>
          </div>
          <div>
            <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8, display: "block" }}>Gibt es noch etwas, das wir wissen sollten?</label>
            <textarea
              value={data.anmerkungen}
              onChange={(e) => update("anmerkungen", e.target.value)}
              placeholder="z.B. bestimmte Positionen, besondere Anforderungen, Wünsche..."
              rows={3}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1.5px solid #ddd", fontSize: 14, fontFamily: "inherit", resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
          </div>
        </div>
      ),
      valid: data.zeitrahmen,
    },
  ];

  const currentStep = steps[step];
  const isLast = step === steps.length - 1;

  const handleSubmit = () => {
    onComplete(data);
  };

  return (
    <div>
      {/* Progress Bar */}
      <div style={{ display: "flex", gap: 6, marginBottom: 32 }}>
        {steps.map((_, i) => (
          <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= step ? BRAND : "#e0e0e0", transition: "background 0.3s" }} />
        ))}
      </div>

      {/* Step Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <span style={{ fontSize: 24 }}>{currentStep.icon}</span>
          <span style={{ fontSize: 12, color: "#999", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Schritt {step + 1} von {steps.length}</span>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: BRAND, margin: "4px 0" }}>{currentStep.title}</h2>
        <p style={{ fontSize: 14, color: "#666", margin: 0 }}>{currentStep.subtitle}</p>
      </div>

      {/* Step Content */}
      {currentStep.content}

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28, paddingTop: 20, borderTop: "1px solid #eee" }}>
        <button
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 0}
          style={{ padding: "10px 24px", borderRadius: 8, border: `1.5px solid ${BRAND}`, background: "#fff", color: BRAND, cursor: step === 0 ? "not-allowed" : "pointer", fontSize: 14, fontWeight: 600, opacity: step === 0 ? 0.3 : 1 }}
        >
          ← Zurück
        </button>
        {isLast ? (
          <button
            onClick={handleSubmit}
            disabled={!currentStep.valid}
            style={{ padding: "12px 32px", borderRadius: 8, border: "none", background: currentStep.valid ? SUCCESS : "#ccc", color: "#fff", cursor: currentStep.valid ? "pointer" : "not-allowed", fontSize: 15, fontWeight: 700 }}
          >
            ✓ Absenden & Termin buchen
          </button>
        ) : (
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!currentStep.valid}
            style={{ padding: "12px 28px", borderRadius: 8, border: "none", background: currentStep.valid ? BRAND : "#ccc", color: "#fff", cursor: currentStep.valid ? "pointer" : "not-allowed", fontSize: 14, fontWeight: 600 }}
          >
            Weiter →
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================================
// STUFE 2: DISCOVERY CALL TOOL (internes Tool für Robert)
// ============================================================
function DiscoveryCallTool({ leadData }) {
  const [data, setData] = useState({
    budget: "",
    entscheider: "",
    entscheiderRolle: "",
    timeline: "",
    schmerzpunkt: "",
    aktuelleKosten: "",
    erwartungen: "",
    einwaende: "",
    naechsteSchritte: "",
    bewertung: "",
    notizen: "",
    empfohlenesPaket: "",
  });
  const [copied, setCopied] = useState(false);

  const update = (key, val) => setData((d) => ({ ...d, [key]: val }));

  const PAKETE = ["Starter (ab 990€)", "Professional (ab 1.490€)", "Premium (ab 2.490€)", "Enterprise (individuell)"];
  const BEWERTUNGEN = ["🔥 Hot – sofort abschlussbereit", "🟡 Warm – Follow-up nötig", "🔵 Kalt – langfristiger Lead", "❌ Kein Fit"];

  const generateClickUpText = () => {
    const lead = leadData || {};
    return `📋 DISCOVERY CALL – ${lead.firma || "N/A"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 KONTAKT
Firma: ${lead.firma || "N/A"}
Ansprechpartner: ${lead.name || "N/A"}
E-Mail: ${lead.email || "N/A"}
Telefon: ${lead.telefon || "N/A"}

🏢 UNTERNEHMEN
Branche: ${lead.branche || "N/A"}${lead.brancheSonstige ? ` (${lead.brancheSonstige})` : ""}
Mitarbeiter: ${lead.mitarbeiter || "N/A"}
Offene Stellen: ${lead.offeneStellen || "N/A"}

🎯 SITUATION (vom Interessenten)
Herausforderungen: ${lead.herausforderungen?.join(", ") || "N/A"}
Bisherige Methoden: ${lead.bisherige?.join(", ") || "N/A"}
Zeitrahmen: ${lead.zeitrahmen || "N/A"}
Anmerkungen: ${lead.anmerkungen || "-"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 DISCOVERY CALL NOTIZEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 Budget: ${data.budget || "N/A"}
👔 Entscheider: ${data.entscheider || "N/A"} (${data.entscheiderRolle || "N/A"})
⏰ Timeline: ${data.timeline || "N/A"}
🔥 Größter Schmerzpunkt: ${data.schmerzpunkt || "N/A"}
💸 Aktuelle Recruiting-Kosten: ${data.aktuelleKosten || "N/A"}
📊 Erwartungen: ${data.erwartungen || "N/A"}
⚠️ Einwände: ${data.einwaende || "N/A"}

📦 Empfohlenes Paket: ${data.empfohlenesPaket || "N/A"}
📝 Nächste Schritte: ${data.naechsteSchritte || "N/A"}

${data.bewertung || ""}

💬 Zusätzliche Notizen:
${data.notizen || "-"}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateClickUpText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div>
      <div style={{ background: "#FFF7ED", border: "1px solid #FED7AA", borderRadius: 10, padding: 16, marginBottom: 24 }}>
        <p style={{ margin: 0, fontSize: 13, color: "#9A3412" }}>
          🔒 <strong>Internes Tool</strong> — Nur für dich während des Discovery Calls sichtbar. Fülle die Felder aus und kopiere am Ende alles als ClickUp-Task.
        </p>
      </div>

      {/* Lead-Zusammenfassung */}
      {leadData && (
        <div style={{ background: BRAND_LIGHT, borderRadius: 10, padding: 16, marginBottom: 24 }}>
          <h4 style={{ margin: "0 0 8px 0", fontSize: 14, color: BRAND }}>📋 Lead-Daten (vom Interessenten ausgefüllt):</h4>
          <div style={{ fontSize: 13, color: "#333", lineHeight: 1.6 }}>
            <strong>{leadData.firma}</strong> · {leadData.branche} · {leadData.mitarbeiter} MA · {leadData.offeneStellen} offene Stellen<br />
            {leadData.name} · {leadData.email} · {leadData.telefon}<br />
            Herausforderungen: {leadData.herausforderungen?.join(", ")}<br />
            Zeitrahmen: {leadData.zeitrahmen}
          </div>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <InputField label="💰 Monatliches Budget" value={data.budget} onChange={(v) => update("budget", v)} placeholder="z.B. 1.500€/Monat" />
          <InputField label="💸 Aktuelle Recruiting-Kosten" value={data.aktuelleKosten} onChange={(v) => update("aktuelleKosten", v)} placeholder="z.B. 3.000€ für Zeitarbeit" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <InputField label="👔 Wer entscheidet?" value={data.entscheider} onChange={(v) => update("entscheider", v)} placeholder="z.B. Thomas Müller" />
          <InputField label="Rolle des Entscheiders" value={data.entscheiderRolle} onChange={(v) => update("entscheiderRolle", v)} placeholder="z.B. Geschäftsführer" />
        </div>
        <InputField label="⏰ Gewünschte Timeline" value={data.timeline} onChange={(v) => update("timeline", v)} placeholder="z.B. Sofort, nächste Woche starten" />
        <InputField label="🔥 Größter Schmerzpunkt (in seinen Worten)" value={data.schmerzpunkt} onChange={(v) => update("schmerzpunkt", v)} placeholder='z.B. "Wir verlieren Aufträge weil uns Leute fehlen"' />
        <InputField label="📊 Was erwartet der Kunde?" value={data.erwartungen} onChange={(v) => update("erwartungen", v)} placeholder="z.B. 10 Bewerbungen im ersten Monat" />
        <InputField label="⚠️ Einwände / Bedenken" value={data.einwaende} onChange={(v) => update("einwaende", v)} placeholder='z.B. "Hatten schon mal eine Agentur, hat nicht funktioniert"' />

        <div>
          <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8, display: "block" }}>📦 Empfohlenes Paket</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {PAKETE.map((p) => (
              <ChipButton key={p} label={p} selected={data.empfohlenesPaket === p} onClick={() => update("empfohlenesPaket", p)} />
            ))}
          </div>
        </div>

        <InputField label="📝 Nächste Schritte" value={data.naechsteSchritte} onChange={(v) => update("naechsteSchritte", v)} placeholder="z.B. Angebot senden bis Freitag, Follow-up Montag" />

        <div>
          <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8, display: "block" }}>Lead-Bewertung</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {BEWERTUNGEN.map((b) => (
              <ChipButton key={b} label={b} selected={data.bewertung === b} onClick={() => update("bewertung", b)} />
            ))}
          </div>
        </div>

        <div>
          <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8, display: "block" }}>💬 Zusätzliche Notizen</label>
          <textarea
            value={data.notizen}
            onChange={(e) => update("notizen", e.target.value)}
            placeholder="Freitext Notizen zum Call..."
            rows={4}
            style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1.5px solid #ddd", fontSize: 14, fontFamily: "inherit", resize: "vertical", outline: "none", boxSizing: "border-box" }}
          />
        </div>
      </div>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        style={{
          width: "100%", marginTop: 24, padding: "16px 24px", borderRadius: 10, border: "none",
          background: copied ? SUCCESS : BRAND, color: "#fff", fontSize: 16, fontWeight: 700,
          cursor: "pointer", transition: "background 0.3s",
        }}
      >
        {copied ? "✓ In Zwischenablage kopiert – jetzt in ClickUp einfügen!" : "📋 Alles als ClickUp-Task kopieren"}
      </button>
    </div>
  );
}

// ============================================================
// ERFOLGS-SEITE NACH ABSENDEN
// ============================================================
function ErfolgsSeite({ data }) {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
      <h2 style={{ fontSize: 26, fontWeight: 700, color: BRAND, marginBottom: 8 }}>Vielen Dank, {data.name?.split(" ")[0]}!</h2>
      <p style={{ fontSize: 16, color: "#555", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
        Wir haben Ihre Angaben erhalten und bereiten uns optimal auf Ihr Erstgespräch vor. Buchen Sie jetzt einen passenden Termin:
      </p>
      <a
        href={CALENDAR_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block", padding: "16px 40px", background: BRAND, color: "#fff",
          borderRadius: 10, fontSize: 17, fontWeight: 700, textDecoration: "none",
          boxShadow: "0 4px 14px rgba(2,59,91,0.3)",
        }}
      >
        🗓 Jetzt Termin buchen
      </a>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 20 }}>
        <span style={{ fontSize: 13, color: "#888" }}>✓ 100% kostenlos</span>
        <span style={{ fontSize: 13, color: "#888" }}>✓ Unverbindlich</span>
        <span style={{ fontSize: 13, color: "#888" }}>✓ 15-20 Minuten</span>
      </div>

      {/* Case Studies */}
      <div style={{ marginTop: 48, textAlign: "left", maxWidth: 500, margin: "48px auto 0" }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: BRAND, marginBottom: 16, textAlign: "center" }}>Das sagen unsere Kunden:</h3>
        <TestimonialMini emoji="🚚" firma="Spedition Huckschlag" result="150+ Lagerlogistiker & 50+ LKW-Fahrer Bewerbungen" link="https://youtu.be/X6YgtmkyGLo" />
        <TestimonialMini emoji="🏒" firma="Iserlohn Roosters" result="70 Bewerbungen, 30 Servicekräfte eingestellt" link="https://youtu.be/uUfwkiSFnTs" />
        <TestimonialMini emoji="🏠" firma="Specht & Partner" result="5 neue Immobilienmakler eingestellt" link="https://youtu.be/e_trKcpqhYA" />
      </div>
    </div>
  );
}

// ============================================================
// SHARED COMPONENTS
// ============================================================
function InputField({ label, value, onChange, placeholder, type = "text", style = {} }) {
  return (
    <div style={style}>
      {label && <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 6, display: "block" }}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid #ddd", fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
        onFocus={(e) => (e.target.style.borderColor = BRAND)}
        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
      />
    </div>
  );
}

function ChipButton({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px", borderRadius: 20,
        border: selected ? `2px solid ${BRAND}` : "1.5px solid #ddd",
        background: selected ? BRAND_LIGHT : "#fff",
        color: selected ? BRAND : "#555",
        fontSize: 13, fontWeight: selected ? 600 : 400,
        cursor: "pointer", transition: "all 0.2s",
        whiteSpace: "nowrap",
      }}
    >
      {selected && "✓ "}{label}
    </button>
  );
}

function TestimonialMini({ emoji, firma, result, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block", marginBottom: 10 }}>
      <div style={{ background: "#f8fafb", borderRadius: 8, padding: "12px 16px", borderLeft: `3px solid ${BRAND}`, transition: "box-shadow 0.2s" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>{emoji} {firma}</span>
          <span style={{ fontSize: 11, color: BRAND }}>▶ Video</span>
        </div>
        <div style={{ fontSize: 13, color: "#555", marginTop: 2 }}>{result}</div>
      </div>
    </a>
  );
}

// ============================================================
// HAUPTSEITE
// ============================================================
export default function DiscoveryCallPage() {
  const [mode, setMode] = useState("lead"); // "lead" | "success" | "internal"
  const [leadData, setLeadData] = useState(null);
  const [showInternal, setShowInternal] = useState(false);
  const [password, setPassword] = useState("");

  const handleLeadComplete = (data) => {
    setLeadData(data);
    setMode("success");
  };

  const handleInternalAccess = () => {
    if (password === "talentsuite2026") {
      setShowInternal(true);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f7f9fb" }}>
      {/* Header */}
      <div style={{ background: BRAND, padding: "20px 0", textAlign: "center" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "none", fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>
          TalentSuite
        </Link>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "32px 20px 60px" }}>

        {/* LEAD MODUS */}
        {mode === "lead" && (
          <>
            {/* Hero */}
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <div style={{ display: "inline-block", background: BRAND_LIGHT, color: BRAND, fontSize: 12, fontWeight: 600, padding: "4px 14px", borderRadius: 20, marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>
                Kostenlos & Unverbindlich
              </div>
              <h1 style={{ fontSize: 28, fontWeight: 800, color: BRAND, margin: "0 0 8px", lineHeight: 1.2 }}>
                Ihre kostenlose Potenzialanalyse
              </h1>
              <p style={{ fontSize: 15, color: "#666", margin: 0, lineHeight: 1.5 }}>
                Füllen Sie das kurze Formular aus, damit wir uns optimal auf Ihr Erstgespräch vorbereiten können. Dauert nur 2 Minuten.
              </p>
            </div>

            {/* Trust Badges */}
            <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
              {["✓ 100% kostenlos", "✓ Unverbindlich", "✓ Ergebnisse in 48h"].map((t) => (
                <span key={t} style={{ fontSize: 12, color: "#888", fontWeight: 500 }}>{t}</span>
              ))}
            </div>

            {/* Formular Card */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <InteressentenFormular onComplete={handleLeadComplete} />
            </div>

            {/* Social Proof */}
            <div style={{ marginTop: 32 }}>
              <TestimonialMini emoji="🚚" firma="Spedition Huckschlag" result="150+ Lagerlogistiker & 50+ LKW-Fahrer Bewerbungen" link="https://youtu.be/X6YgtmkyGLo" />
              <TestimonialMini emoji="🏒" firma="Iserlohn Roosters" result="70 Bewerbungen, 30 Servicekräfte eingestellt" link="https://youtu.be/uUfwkiSFnTs" />
              <TestimonialMini emoji="🏠" firma="Specht & Partner" result="5 neue Immobilienmakler eingestellt" link="https://youtu.be/e_trKcpqhYA" />
            </div>
          </>
        )}

        {/* ERFOLGS-SEITE */}
        {mode === "success" && <ErfolgsSeite data={leadData} />}

        {/* INTERNES TOOL (versteckter Zugang) */}
        <div style={{ marginTop: 60, borderTop: "1px solid #eee", paddingTop: 20 }}>
          {!showInternal ? (
            <div style={{ textAlign: "center" }}>
              <button
                onClick={() => setMode(mode === "internal_login" ? "lead" : "internal_login")}
                style={{ background: "none", border: "none", color: "#ccc", fontSize: 11, cursor: "pointer" }}
              >
                🔒
              </button>
              {mode === "internal_login" && (
                <div style={{ marginTop: 12, display: "flex", gap: 8, justifyContent: "center" }}>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleInternalAccess()}
                    placeholder="Passwort"
                    style={{ padding: "8px 14px", borderRadius: 6, border: "1px solid #ddd", fontSize: 13, width: 160 }}
                  />
                  <button
                    onClick={handleInternalAccess}
                    style={{ padding: "8px 16px", borderRadius: 6, border: "none", background: BRAND, color: "#fff", fontSize: 13, cursor: "pointer" }}
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: BRAND, margin: "0 0 20px", display: "flex", alignItems: "center", gap: 8 }}>
                📞 Discovery Call Tool
              </h2>
              <DiscoveryCallTool leadData={leadData} />
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "20px 0 30px", color: "#aaa", fontSize: 11 }}>
        TalentSuite — Engel & Mühlhof GbR · <Link href="/datenschutz" style={{ color: "#aaa" }}>Datenschutz</Link> · <Link href="/impressum" style={{ color: "#aaa" }}>Impressum</Link>
      </div>
    </div>
  );
}
