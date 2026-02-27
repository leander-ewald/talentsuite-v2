"use client";
import React, { useState } from "react";
import Link from "next/link";

const blogArticles = [
  { id: 1, reading: "8 Min.", title: "Performance Recruiting: Was ist das und wie funktioniert es?", desc: "Performance Recruiting einfach erklärt: Definition, Ablauf, Kosten und warum 80% der Fachkräfte nur über Social Media erreichbar sind.", link: "/blog/performance-recruiting-was-ist-das", category: "Performance Recruiting" },
  { id: 2, reading: "7 Min.", title: "Was kostet Performance Recruiting? Preise, Modelle & ROI", desc: "Transparente Kostenübersicht: Agenturhonorar, Werbebudget, Kosten pro Bewerbung und ROI-Vergleich mit Headhuntern und Jobbörsen.", link: "/blog/performance-recruiting-kosten", category: "Performance Recruiting" },
  { id: 3, reading: "10 Min.", title: "Social Media Recruiting: Der komplette Leitfaden", desc: "Social Media Recruiting von A bis Z: Plattformen, Strategien, häufige Fehler und der optimale Prozess für erfolgreiche Personalgewinnung.", link: "/blog/social-media-recruiting-leitfaden", category: "Social Recruiting" },
  { id: 4, reading: "8 Min.", title: "Bewerberfunnel erstellen: Mobile Recruiting-Funnels", desc: "Schritt-für-Schritt Anleitung: Aufbau, Best Practices und Conversion-Tipps für Bewerberfunnels im Performance Recruiting.", link: "/blog/bewerberfunnel-erstellen", category: "Recruiting Technik" },
  { id: 5, reading: "8 Min.", title: "Recruiting ROI berechnen: Erfolg messbar machen", desc: "Die wichtigsten KPIs: Cost-per-Hire, Cost-per-Application, Time-to-Hire und Quality-of-Hire mit konkreten Benchmarks.", link: "/blog/recruiting-roi-berechnen", category: "HR-Wissen" },
  { id: 6, reading: "9 Min.", title: "Mitarbeiter finden im Handwerk: 7 Strategien", desc: "7 bewährte Strategien gegen den Fachkräftemangel im Handwerk: Von Social Recruiting über Employer Branding bis Google.", link: "/blog/mitarbeiter-finden-handwerk", category: "Recruiting Handwerk" },
  { id: 7, reading: "8 Min.", title: "Pflegekräfte finden: Personal für Kliniken und Pflege", desc: "Strategien für Kliniken, Pflegeheime und ambulante Dienste: Social Recruiting, Employer Branding und internationales Recruiting.", link: "/blog/pflegekraefte-finden", category: "Recruiting Pflege" },
  { id: 8, reading: "8 Min.", title: "Mitarbeiter finden in der Gastronomie", desc: "Trotz Personalmangel einstellen: Recruiting-Strategien für Restaurants, Hotels und die Gastronomie.", link: "/blog/mitarbeiter-finden-gastronomie", category: "Recruiting Gastronomie" },
  { id: 9, reading: "8 Min.", title: "Mitarbeiter finden in der Logistik", desc: "LKW-Fahrer, Lageristen und Disponenten gewinnen: Social Recruiting Strategien für die Logistikbranche.", link: "/blog/mitarbeiter-finden-logistik", category: "Recruiting Logistik" },
  { id: 10, reading: "7 Min.", title: "Employer Branding im Handwerk", desc: "5 Säulen für eine starke Arbeitgebermarke: Authentische Einblicke, Benefits, Mitarbeiter-Botschafter und mehr.", link: "/blog/employer-branding-handwerk", category: "Employer Branding" },
  { id: 11, reading: "8 Min.", title: "Employer Branding Video: Recruiting-Videos produzieren", desc: "Formate, Kosten und Best Practices für überzeugende Employer Branding und Recruiting Videos.", link: "/blog/employer-branding-video", category: "Employer Branding" },
  { id: 12, reading: "8 Min.", title: "TikTok Recruiting: Azubis und junge Fachkräfte", desc: "Wie Unternehmen über TikTok die Gen Z erreichen: Strategie, Content-Ideen und Best Practices.", link: "/blog/tiktok-recruiting", category: "Social Recruiting" },
  { id: 13, reading: "8 Min.", title: "LinkedIn Recruiting: Fach- und Führungskräfte gewinnen", desc: "LinkedIn Recruiting Strategie: Active Sourcing, Content und Ads für qualifizierte Kandidaten.", link: "/blog/linkedin-recruiting-strategie", category: "Social Recruiting" },
  { id: 14, reading: "10 Min.", title: "Neukundengewinnung: 10 digitale Strategien", desc: "10 bewährte Strategien für planbare Kundenanfragen: Meta Ads, Google Ads, SEO, E-Mail Marketing und mehr.", link: "/blog/neukundengewinnung-strategien", category: "Neukundengewinnung" },
  { id: 15, reading: "8 Min.", title: "Meta Ads für Leadgenerierung", desc: "Facebook und Instagram Ads richtig einsetzen: Targeting, Budget, Anzeigen und Lead-Qualifikation.", link: "/blog/meta-ads-leadgenerierung", category: "Performance Marketing" },
  { id: 16, reading: "8 Min.", title: "B2B Leadgenerierung: Strategien für Geschäftskontakte", desc: "LinkedIn, Content Marketing, Cold Outreach und Marketing Automation für planbare B2B-Leads.", link: "/blog/b2b-leadgenerierung", category: "B2B Marketing" },
  { id: 17, reading: "8 Min.", title: "Digitale Neukundengewinnung für Handwerker", desc: "Wie Handwerksbetriebe online Kundenanfragen generieren: Von Google Ads bis Social Media.", link: "/blog/digitale-neukundengewinnung-handwerk", category: "Neukundengewinnung" },
  { id: 18, reading: "8 Min.", title: "Facebook Werbung Kosten 2026", desc: "Was Facebook Werbung wirklich kostet: CPC, CPM, Budget-Empfehlungen und Branchen-Benchmarks.", link: "/blog/facebook-werbung-kosten", category: "Performance Marketing" },
  { id: 19, reading: "8 Min.", title: "Landingpage Optimierung: 12 Conversion-Tipps", desc: "12 bewährte Tipps für höhere Conversion Rates: Headline, CTA, Formulardesign und mobile UX.", link: "/blog/landing-page-optimierung", category: "Conversion" },
  { id: 20, reading: "8 Min.", title: "Conversion Rate Optimierung", desc: "Mehr Kunden und Bewerbungen aus dem gleichen Traffic: CRO Strategien und Best Practices.", link: "/blog/conversion-rate-optimierung", category: "Conversion" },
  { id: 21, reading: "8 Min.", title: "Social Media Marketing für KMU", desc: "Leitfaden für kleine Unternehmen: Plattformen, Strategien und Budgettipps für Social Media.", link: "/blog/social-media-marketing-kmu", category: "Social Media" },
  { id: 22, reading: "8 Min.", title: "Was kostet Social Media Marketing?", desc: "Preise und Budgets im Überblick: Agenturbetreuung, Content-Produktion und Werbeanzeigen.", link: "/blog/was-kostet-social-media-marketing", category: "Social Media" },
  { id: 23, reading: "8 Min.", title: "Content Marketing Strategie für KMU", desc: "Von der Planung über SEO-Content bis zur Distribution: Content Marketing Schritt für Schritt.", link: "/blog/content-marketing-strategie", category: "Content Marketing" },
  { id: 24, reading: "8 Min.", title: "Website erstellen lassen: Kosten und Anbieter", desc: "Was eine professionelle Website kostet, wie lange es dauert und worauf du achten musst.", link: "/blog/website-erstellen-lassen-kosten", category: "Webentwicklung" },
  { id: 25, reading: "8 Min.", title: "Shopify Shop erstellen: Komplett-Guide", desc: "Schritt-für-Schritt Anleitung für deinen erfolgreichen Online-Shop mit Shopify.", link: "/blog/shopify-shop-erstellen", category: "E-Commerce" },
  { id: 26, reading: "8 Min.", title: "SEO für Handwerker: Bei Google gefunden werden", desc: "Wie Handwerksbetriebe über Google neue Kunden gewinnen: Lokales SEO Schritt für Schritt.", link: "/blog/seo-fuer-handwerker", category: "SEO" },
  { id: 27, reading: "8 Min.", title: "Google Ads für Handwerksbetriebe", desc: "Kunden und Mitarbeiter über Google Werbung finden: Budget, Keywords und Praxistipps.", link: "/blog/google-ads-handwerk", category: "Online Marketing" },
  { id: 28, reading: "8 Min.", title: "Fachkräftemangel Deutschland 2026", desc: "Aktuelle Zahlen, am stärksten betroffene Branchen und konkrete Lösungsansätze für Unternehmen.", link: "/blog/fachkraeftemangel-deutschland", category: "HR-Wissen" },
  { id: 29, reading: "8 Min.", title: "Personalgewinnung 2026: Trends und Strategien", desc: "Die wichtigsten Trends und Strategien für erfolgreiche Mitarbeitergewinnung im Jahr 2026.", link: "/blog/personalgewinnung-2026", category: "HR-Wissen" },
  { id: 30, reading: "8 Min.", title: "Recruiting Agentur Vergleich: Den richtigen Partner finden", desc: "Worauf du bei der Auswahl einer Recruiting Agentur achten musst: Leistungen, Kosten und Warnsignale.", link: "/blog/recruiting-agentur-vergleich", category: "HR-Wissen" },
  { id: 31, reading: "10 Min.", title: "Mitarbeitergewinnung im Märkischen Kreis", desc: "Performance Recruiting für alle 15 Städte und Gemeinden im Märkischen Kreis. Lokale Agentur aus Iserlohn.", link: "/blog/mitarbeitergewinnung-maerkischer-kreis", category: "Lokales Recruiting" },
  { id: 32, reading: "8 Min.", title: "Mitarbeitergewinnung in Südwestfalen", desc: "Die stärkste Industrieregion braucht neue Recruiting-Wege: Performance Recruiting für Südwestfalen.", link: "/blog/mitarbeitergewinnung-suedwestfalen", category: "Lokales Recruiting" },
  { id: 33, reading: "7 Min.", title: "Mitarbeitergewinnung in Iserlohn", desc: "Fachkräfte finden in Iserlohn: Social Recruiting für Handwerk, Pflege, Industrie und Gastronomie.", link: "/blog/mitarbeitergewinnung-iserlohn", category: "Lokales Recruiting" },
  { id: 34, reading: "7 Min.", title: "Mitarbeitergewinnung in Hemer", desc: "Mitarbeiter finden in Hemer: Performance Recruiting für die Sanitär- und Industriestadt.", link: "/blog/mitarbeitergewinnung-hemer", category: "Lokales Recruiting" },
  { id: 35, reading: "7 Min.", title: "Mitarbeitergewinnung in Menden", desc: "Fachkräfte gewinnen in Menden (Sauerland): Social Media Recruiting für den Industriestandort.", link: "/blog/mitarbeitergewinnung-menden", category: "Lokales Recruiting" },
  { id: 36, reading: "7 Min.", title: "Mitarbeitergewinnung in Hagen", desc: "Mitarbeiter finden in Hagen: Performance Recruiting für die Großstadt am Tor zum Sauerland.", link: "/blog/mitarbeitergewinnung-hagen", category: "Lokales Recruiting" },
  { id: 37, reading: "7 Min.", title: "Mitarbeitergewinnung in Lüdenscheid", desc: "Fachkräfte gewinnen in Lüdenscheid: Social Recruiting für die Kreisstadt des Märkischen Kreises.", link: "/blog/mitarbeitergewinnung-luedenscheid", category: "Lokales Recruiting" },
  { id: 38, reading: "7 Min.", title: "Mitarbeitergewinnung in Dortmund", desc: "Mitarbeiter finden in Dortmund: Performance Recruiting für die Großstadt im östlichen Ruhrgebiet.", link: "/blog/mitarbeitergewinnung-dortmund", category: "Lokales Recruiting" },
  { id: 39, reading: "7 Min.", title: "Mitarbeitergewinnung in Arnsberg", desc: "Fachkräfte gewinnen in Arnsberg: Social Recruiting für die Regierungshauptstadt Südwestfalens.", link: "/blog/mitarbeitergewinnung-arnsberg", category: "Lokales Recruiting" },
  { id: 40, reading: "7 Min.", title: "Mitarbeitergewinnung in Unna", desc: "Mitarbeiter finden in Unna: Performance Recruiting für die Kreisstadt im Kreis Unna.", link: "/blog/mitarbeitergewinnung-unna", category: "Lokales Recruiting" },
  { id: 41, reading: "7 Min.", title: "Mitarbeitergewinnung in Schwerte", desc: "Fachkräfte gewinnen in Schwerte: Social Recruiting am Tor zum Sauerland.", link: "/blog/mitarbeitergewinnung-schwerte", category: "Lokales Recruiting" },
  { id: 42, reading: "7 Min.", title: "Mitarbeitergewinnung in Altena", desc: "Mitarbeiter finden in Altena: Performance Recruiting für den historischen Industriestandort.", link: "/blog/mitarbeitergewinnung-altena", category: "Lokales Recruiting" },
  { id: 43, reading: "7 Min.", title: "Mitarbeitergewinnung in Plettenberg", desc: "Fachkräfte gewinnen in Plettenberg: Social Recruiting für die Industriestadt im Lennetal.", link: "/blog/mitarbeitergewinnung-plettenberg", category: "Lokales Recruiting" },
  { id: 44, reading: "7 Min.", title: "Mitarbeitergewinnung in Werdohl", desc: "Mitarbeiter finden in Werdohl: Performance Recruiting für die Industriestadt an der Lenne.", link: "/blog/mitarbeitergewinnung-werdohl", category: "Lokales Recruiting" },
  { id: 45, reading: "7 Min.", title: "Mitarbeitergewinnung in Meinerzhagen", desc: "Fachkräfte gewinnen in Meinerzhagen: Social Recruiting für die Heimat von Otto Fuchs.", link: "/blog/mitarbeitergewinnung-meinerzhagen", category: "Lokales Recruiting" },
  { id: 46, reading: "7 Min.", title: "Mitarbeitergewinnung in Balve", desc: "Mitarbeiter finden in Balve: Performance Recruiting für die kleinste Stadt im Märkischen Kreis.", link: "/blog/mitarbeitergewinnung-balve", category: "Lokales Recruiting" },
  { id: 47, reading: "7 Min.", title: "Mitarbeitergewinnung in Neuenrade", desc: "Fachkräfte gewinnen in Neuenrade: Social Recruiting für die Stadt im Hönnetal.", link: "/blog/mitarbeitergewinnung-neuenrade", category: "Lokales Recruiting" },
  { id: 48, reading: "7 Min.", title: "Mitarbeitergewinnung in Halver", desc: "Mitarbeiter finden in Halver: Performance Recruiting im südwestlichen Märkischen Kreis.", link: "/blog/mitarbeitergewinnung-halver", category: "Lokales Recruiting" },
  { id: 49, reading: "7 Min.", title: "Mitarbeitergewinnung in Kierspe", desc: "Fachkräfte gewinnen in Kierspe: Social Recruiting für den südlichen Märkischen Kreis.", link: "/blog/mitarbeitergewinnung-kierspe", category: "Lokales Recruiting" },
  { id: 50, reading: "7 Min.", title: "Mitarbeitergewinnung in Fröndenberg", desc: "Mitarbeiter finden in Fröndenberg/Ruhr: Performance Recruiting an der Ruhr.", link: "/blog/mitarbeitergewinnung-froendenberg", category: "Lokales Recruiting" },
  { id: 51, reading: "7 Min.", title: "Mitarbeitergewinnung in Schalksmühle", desc: "Fachkräfte gewinnen in Schalksmühle: Social Recruiting zwischen Lüdenscheid und Hagen.", link: "/blog/mitarbeitergewinnung-schalksmühle", category: "Lokales Recruiting" },
  { id: 52, reading: "7 Min.", title: "Mitarbeitergewinnung in Nachrodt-Wiblingwerde", desc: "Mitarbeiter finden in Nachrodt-Wiblingwerde: Performance Recruiting an der Lenne.", link: "/blog/mitarbeitergewinnung-nachrodt-wiblingwerde", category: "Lokales Recruiting" },
];

const categories = [...new Set(blogArticles.map(a => a.category))];

export default function BlogPage() {
  const [filter, setFilter] = useState("Alle");
  const filtered = filter === "Alle" ? blogArticles : blogArticles.filter(a => a.category === filter);

  return (
    <div style={{ minHeight: "60vh" }}>
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Blog: Recruiting, Marketing &amp; Digitales Wachstum</h1>
          <p className="text-base md:text-lg text-[rgba(255,255,255,0.6)] mb-6">Praxiswissen aus über 100 Projekten: Performance Recruiting, Neukundengewinnung, Social Media Marketing und Employer Branding für KMU im DACH-Raum.</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
            <button onClick={() => setFilter("Alle")} style={{ padding: "6px 16px", borderRadius: "20px", border: filter === "Alle" ? "2px solid var(--color-accent)" : "1px solid rgba(255,255,255,0.15)", background: filter === "Alle" ? "var(--color-accent)" : "rgba(255,255,255,0.05)", color: filter === "Alle" ? "white" : "rgba(255,255,255,0.7)", fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }}>Alle ({blogArticles.length})</button>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{ padding: "6px 16px", borderRadius: "20px", border: filter === cat ? "2px solid var(--color-accent)" : "1px solid rgba(255,255,255,0.15)", background: filter === cat ? "var(--color-accent)" : "rgba(255,255,255,0.05)", color: filter === cat ? "white" : "rgba(255,255,255,0.7)", fontWeight: "500", fontSize: "0.85rem", cursor: "pointer" }}>{cat}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((article) => (
              <Link key={article.id} href={article.link} className="glass-card p-5 block group" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span className="badge">{article.category}</span>
                  <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>{article.reading}</span>
                </div>
                <h3 className="text-base font-semibold mb-2 leading-snug group-hover:text-[var(--color-accent)] transition-colors">{article.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">{article.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
