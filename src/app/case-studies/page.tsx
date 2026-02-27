"use client";
import React, { useState } from "react";
import Link from "next/link";

const cases = [
  { slug: "shk-sauerland", branche: "SHK", firma: "SHK-Betrieb, Sauerland", bewerbungen: 23, wochen: 4, cpa: "17€", einstellungen: 3, quote: "Erst war ich skeptisch — jetzt haben wir 3 neue Mitarbeiter." },
  { slug: "pflege-nrw", branche: "Pflege", firma: "Pflegedienst, NRW", bewerbungen: 18, wochen: 5, cpa: "22€", einstellungen: 2, quote: "Qualifizierte Pflegekräfte über Social Media — das hätten wir nicht erwartet." },
  { slug: "gastro-koeln", branche: "Gastro", firma: "Restaurant-Gruppe, Köln", bewerbungen: 31, wochen: 3, cpa: "12€", einstellungen: 4, quote: "In 3 Wochen mehr Bewerbungen als in 6 Monaten auf Jobbörsen." },
  { slug: "elektro-hessen", branche: "Elektro", firma: "Elektrobetrieb, Hessen", bewerbungen: 15, wochen: 4, cpa: "19€", einstellungen: 2, quote: "Endlich Elektriker gefunden — und das ohne Headhunter." },
  { slug: "bau-ruhr", branche: "Bau", firma: "Bauunternehmen, Ruhrgebiet", bewerbungen: 27, wochen: 5, cpa: "15€", einstellungen: 3, quote: "Performance Recruiting hat unseren Fachkräftemangel gelöst." },
  { slug: "logistik-nds", branche: "Logistik", firma: "Logistikunternehmen, Niedersachsen", bewerbungen: 20, wochen: 4, cpa: "16€", einstellungen: 2, quote: "LKW-Fahrer über Facebook finden? Funktioniert besser als alles andere." },
];

const branches = ["Alle", "SHK", "Pflege", "Gastro", "Elektro", "Bau", "Logistik"];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState("Alle");
  const filtered = filter === "Alle" ? cases : cases.filter(c => c.branche === filter);

  return (
    <div style={{ background: "#f0f4f7", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #011E2F 0%, #023B5B 50%, #0A4D72 100%)", padding: "72px 24px 80px", textAlign: "center" }}>
        <div style={{ display: "inline-block", padding: "5px 18px", borderRadius: 20, marginBottom: 16, background: "rgba(27,152,224,0.15)" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#1B98E0" }}>ECHTE ERGEBNISSE</span>
        </div>
        <h1 className="text-[26px] md:text-[40px]" style={{ color: "#ffffff", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
          Case Studies: <span style={{ color: "#1B98E0" }}>Unsere Kundenerfolge</span>
        </h1>
        <p className="text-[15px] md:text-[18px]" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
          Echte Zahlen. Echte Betriebe. Messbare Ergebnisse.
        </p>
      </div>
      <div className="px-4 md:px-6 py-6 md:py-10" style={{ maxWidth: 900, margin: "0 auto" }}>
        <div className="flex gap-2 flex-wrap justify-center mb-8" style={{ marginTop: -32 }}>
          {branches.map(b => (
            <button key={b} onClick={() => setFilter(b)} style={{
              padding: "8px 18px", borderRadius: 20, border: filter === b ? "2px solid #023B5B" : "1.5px solid #ddd",
              background: filter === b ? "#E8F4FD" : "#ffffff", color: filter === b ? "#023B5B" : "#64748B",
              fontSize: 13, fontWeight: filter === b ? 600 : 400, cursor: "pointer",
            }}>
              {filter === b && "✓ "}{b}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((c, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ padding: "4px 12px", borderRadius: 12, background: "#E8F4FD", color: "#023B5B", fontSize: 11, fontWeight: 700 }}>{c.branche}</span>
                <span style={{ fontSize: 12, color: "#94A3B8" }}>{c.firma}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[{n: c.bewerbungen, l: "Bewerbungen", col: "#1B98E0"}, {n: c.wochen + " Wo.", l: "Laufzeit", col: "#023B5B"}, {n: c.cpa, l: "pro Bewerbung", col: "#10B981"}].map((s, j) => (
                  <div key={j} style={{ textAlign: "center", padding: "10px 4px", background: "#f8fafb", borderRadius: 8 }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: s.col }}>{s.n}</div>
                    <div style={{ fontSize: 10, color: "#64748B" }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: "#4A5568", fontSize: 14, fontStyle: "italic", margin: "0 0 16px", lineHeight: 1.5 }}>&ldquo;{c.quote}&rdquo;</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#10B981", fontSize: 13, fontWeight: 600 }}>✓ {c.einstellungen} Einstellungen</span>
                <Link href={"/case-study/" + c.slug} style={{ color: "#1B98E0", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Details →</Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "linear-gradient(135deg, #011E2F, #023B5B)", borderRadius: 16, padding: "40px 28px", textAlign: "center", marginTop: 32 }}>
          <h2 className="text-[20px] md:text-[26px]" style={{ color: "#ffffff", fontWeight: 700, margin: "0 0 8px" }}>Bereit für mehr Bewerbungen?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, margin: "0 0 20px" }}>Kostenlose Recruiting-Analyse in 20 Minuten</p>
          <Link href="/recruiting-analyse" style={{ display: "inline-block", padding: "14px 32px", borderRadius: 10, background: "#1B98E0", color: "#ffffff", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>Jetzt Termin sichern →</Link>
        </div>
      </div>
    </div>
  );
}
