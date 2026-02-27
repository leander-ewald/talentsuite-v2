import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Robert Engel – Performance Recruiting Experte | TalentSuite",
  description: "Robert Engel ist Gründer von TalentSuite und Experte für Performance Recruiting, Social Media Marketing und Fachkräftegewinnung für den Mittelstand in Südwestfalen.",
  alternates: { canonical: "https://talentsuite.io/autor/robert-engel" },
};

const personSchema = {
  "@context": "https://schema.org", "@type": "Person", name: "Robert Engel", jobTitle: "Gründer & Geschäftsführer", url: "https://talentsuite.io/autor/robert-engel",
  sameAs: ["https://www.linkedin.com/in/robert-engel", "https://www.instagram.com/talentsuite.io", "https://www.tiktok.com/@talentsuite"],
  worksFor: { "@type": "Organization", name: "TalentSuite", alternateName: "Engel & Mühlhof GbR", url: "https://talentsuite.io", address: { "@type": "PostalAddress", addressLocality: "Iserlohn", addressRegion: "Nordrhein-Westfalen", addressCountry: "DE" } },
  knowsAbout: ["Performance Recruiting", "Social Media Recruiting", "Employer Branding", "Fachkräftegewinnung", "Social Media Marketing", "Meta Ads", "LinkedIn Recruiting", "TikTok Recruiting", "Personalgewinnung Handwerk", "Recruiting Pflege", "Recruiting Gastronomie", "Content Produktion", "Videomarketing"],
  address: { "@type": "PostalAddress", addressLocality: "Iserlohn", addressRegion: "Nordrhein-Westfalen", postalCode: "58636", addressCountry: "DE" },
};

const expertise = [
  { area: "Performance Recruiting", detail: "Datengetriebene Social-Media-Kampagnen zur Fachkräftegewinnung über Meta, Instagram, TikTok und LinkedIn" },
  { area: "Social Media Marketing", detail: "Strategische Kampagnen für KMU und Mittelstand mit messbaren Ergebnissen und klarem ROI-Fokus" },
  { area: "Employer Branding & Video", detail: "Professionelle Arbeitgebermarken-Entwicklung durch Videomarketing und Content-Produktion (MadebyMEE)" },
  { area: "Digitale Neukundengewinnung", detail: "Lead-Generierung und Kundenakquise über Meta Ads, Google Ads, LinkedIn und E-Mail-Marketing" },
  { area: "Webentwicklung & SEO", detail: "Conversion-optimierte Landingpages und Karriereseiten mit datengetriebener Suchmaschinenoptimierung" },
];

const results = [
  { metric: "100+", label: "Erfolgreiche Recruiting-Kampagnen" },
  { metric: "500+", label: "Qualifizierte Bewerbungen generiert" },
  { metric: "15+", label: "Branchen erfolgreich betreut" },
  { metric: "< 30 Tage", label: "Durchschnittliche Zeit bis erste Bewerbungen" },
];

const industries = ["SHK & Sanitärtechnik", "Elektroinstallation", "Metallverarbeitung", "Maschinenbau", "Pflege & Gesundheitswesen", "Gastronomie & Hotellerie", "Logistik & Transport", "Automobilzulieferer", "Bau & Tiefbau", "Industrieunternehmen"];

const recentArticles = [
  { title: "Performance Recruiting: Was ist das und wie funktioniert es?", href: "/blog/performance-recruiting-was-ist-das" },
  { title: "Social Media Recruiting Leitfaden 2026", href: "/blog/social-media-recruiting-leitfaden" },
  { title: "Mitarbeiter finden im Handwerk", href: "/blog/mitarbeiter-finden-handwerk" },
  { title: "Mitarbeitergewinnung im Märkischen Kreis", href: "/blog/mitarbeitergewinnung-maerkischer-kreis" },
  { title: "Pflegekräfte finden: Der komplette Guide", href: "/blog/pflegekraefte-finden" },
  { title: "Performance Recruiting Kosten: Transparenter Überblick", href: "/blog/performance-recruiting-kosten" },
  { title: "Employer Branding durch Video", href: "/blog/employer-branding-video" },
  { title: "Mitarbeitergewinnung in Südwestfalen", href: "/blog/mitarbeitergewinnung-suedwestfalen" },
];

export default function AuthorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <section style={{ background: "linear-gradient(135deg, #023B5B 0%, #035a8c 100%)", color: "white", padding: "4rem 1.5rem 3rem" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center text-4xl font-bold shrink-0" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", border: "3px solid rgba(255,255,255,0.3)" }}>RE</div>
            <div>
              <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7, marginBottom: 4 }}>Autor & Experte</div>
              <h1 style={{ fontSize: "2rem", fontWeight: 800, margin: "0 0 6px" }}>Robert Engel</h1>
              <p style={{ fontSize: "1.1rem", opacity: 0.85, margin: 0 }}>Gründer & Geschäftsführer bei TalentSuite</p>
              <p style={{ fontSize: "0.95rem", opacity: 0.65, margin: "4px 0 0" }}>Engel & Mühlhof GbR · Iserlohn, Nordrhein-Westfalen</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>Über Robert Engel</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>Robert Engel ist Gründer und Geschäftsführer von TalentSuite, einer Performance Recruiting Agentur mit Sitz in Iserlohn. Unter der Marke TalentSuite (Engel & Mühlhof GbR) unterstützt er mittelständische Unternehmen in Südwestfalen und dem Märkischen Kreis dabei, qualifizierte Fachkräfte über datengetriebene Social-Media-Kampagnen zu gewinnen.</p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>Sein Ansatz verbindet tiefes Verständnis des regionalen Arbeitsmarktes mit modernsten Performance-Marketing-Methoden. Statt auf klassische Stellenanzeigen zu setzen, die in Zeiten des Fachkräftemangels kaum noch funktionieren, erreicht TalentSuite auch passiv suchende Kandidaten dort, wo sie täglich unterwegs sind: auf Social Media.</p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>Neben TalentSuite betreibt Robert die Videomarke MadebyMEE, die auf Employer-Branding-Videos und Social-Media-Content für KMU spezialisiert ist. Diese Kombination aus Recruiting-Expertise und professioneller Content-Produktion ermöglicht es seinen Kunden, sich als attraktive Arbeitgeber zu positionieren und gleichzeitig messbare Bewerbungsergebnisse zu erzielen.</p>
          </div>

          <div className="mb-12">
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>Ergebnisse & Erfolge</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {results.map((r, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "1.25rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: 4 }}>{r.metric}</div>
                  <div style={{ fontSize: "0.88rem", opacity: 0.7 }}>{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>Fachgebiete & Expertise</h2>
            {expertise.map((e, i) => (
              <div key={i} style={{ padding: "1rem 1.25rem", marginBottom: "0.75rem", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", borderRadius: 10, borderLeft: "3px solid #1B98E0" }}>
                <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>{e.area}</div>
                <div style={{ fontSize: "0.92rem", opacity: 0.75, lineHeight: 1.6 }}>{e.detail}</div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>Branchenerfahrung</h2>
            <p style={{ fontSize: "0.95rem", opacity: 0.7, marginBottom: "0.75rem" }}>Robert Engel und sein Team haben erfolgreich Recruiting-Kampagnen in folgenden Branchen umgesetzt:</p>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind, i) => (
                <span key={i} style={{ background: "rgba(27,152,224,0.1)", color: "#4da6d9", padding: "6px 14px", borderRadius: 8, fontSize: "0.88rem", fontWeight: 500 }}>{ind}</span>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>Regionale Expertise</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>Mit Sitz in Iserlohn kennt Robert den Arbeitsmarkt in Südwestfalen und dem Märkischen Kreis aus erster Hand. Er versteht die besonderen Herausforderungen der Region: eine starke Industriebasis mit über 150 Weltmarktführern, aber gleichzeitig wachsender Fachkräftemangel, insbesondere in den Bereichen Handwerk, Pflege und Gastronomie.</p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>Seine Kunden kommen aus dem gesamten Märkischen Kreis – von Iserlohn, Hemer und Menden über Lüdenscheid und Altena bis nach Plettenberg und Werdohl – sowie aus dem erweiterten Einzugsgebiet einschließlich Hagen, Dortmund, Arnsberg, Unna und Schwerte.</p>
          </div>

          <div className="mb-12" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "1.75rem" }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>Kontakt & Profile</h2>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/robert-engel" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: "#0A66C2", color: "white", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: "0.92rem" }}>LinkedIn Profil</a>
              <a href="https://www.instagram.com/talentsuite.io" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", color: "white", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: "0.92rem" }}>Instagram</a>
              <Link href="/contact" style={{ padding: "10px 20px", background: "#023B5B", color: "white", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: "0.92rem" }}>Kontakt aufnehmen</Link>
            </div>
          </div>

          <div className="mb-12">
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>Veröffentlichte Artikel</h2>
            <p style={{ fontSize: "0.95rem", opacity: 0.65, marginBottom: "1rem" }}>Robert teilt sein Wissen regelmäßig im TalentSuite Blog. Hier eine Auswahl seiner Fachbeiträge:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {recentArticles.map((a, i) => (
                <Link key={i} href={a.href} style={{ display: "block", padding: "0.85rem 1rem", background: "rgba(255,255,255,0.02)", borderRadius: 10, textDecoration: "none", color: "#fff", fontWeight: 600, fontSize: "0.92rem", border: "1px solid rgba(255,255,255,0.08)" }}>→ {a.title}</Link>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/blog" style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>Alle Artikel ansehen →</Link>
            </div>
          </div>

          <div style={{ background: "linear-gradient(135deg, #023B5B 0%, #035a8c 100%)", borderRadius: 16, padding: "2.5rem", textAlign: "center" }}>
            <h3 style={{ color: "white", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Kostenloses Erstgespräch mit Robert</h3>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "1.5rem", maxWidth: 500, margin: "0 auto 1.5rem" }}>Lass uns gemeinsam herausfinden, wie du mit Performance Recruiting qualifizierte Fachkräfte für dein Unternehmen gewinnst.</p>
            <a href="https://calendar.app.google/QFoADWcRwwuYUoky8" style={{ display: "inline-block", background: "white", color: "#fff", padding: "14px 36px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "1.05rem" }}>Jetzt Termin buchen</a>
          </div>
        </div>
      </section>
    </>
  );
}
