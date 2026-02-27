"use client";

import Link from "next/link";

const blogData = [
  {
    reading: "5 Min. Lesezeit",
    title: "Wie eine Digitalagentur Ihr Unternehmen voranbringen kann",
    desc: "Unsere Digitalagentur unterstützt Branding-Unternehmen mit ganzheitlichen Strategien. Wir liefern maßgeschneiderte Lösungen, die Sichtbarkeit, Reichweite und Wachstum messbar steigern.",
    link: "/blog/marketing",
  },
  {
    reading: "5 Min. Lesezeit",
    title: "Die neuesten Trends und Strategien mit einer Digitalagentur",
    desc: "Unsere Agentur bleibt stets am Puls der Zeit. Mit innovativen Methoden und fundierter Marktkenntnis entwickeln wir digitale Strategien, die exakt auf Ihr Business zugeschnitten sind.",
    link: "/blog/trends",
  },
  {
    reading: "5 Min. Lesezeit",
    title: "Maximierung des ROI mit der Expertise einer Digitalagentur",
    desc: "Durch transparente Prozesse und enge Zusammenarbeit erzielen wir messbare Ergebnisse. Unsere Experten sorgen dafür, dass jede Maßnahme den maximalen Nutzen für Ihr Unternehmen bringt.",
    link: "/blog/roi",
  },
];

export default function Blogs() {
  return (
    <section className="section" aria-label="Blog">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
          <div>
            <span className="section-label">Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Online-Marketing & SEO, die dich messbar und nachhaltig nach vorn bringen.
            </h2>
          </div>
          <div>
            <p className="text-[rgba(255,255,255,0.6)] leading-relaxed mb-6">
              Wir sind eine spezialisierte Digitalagentur für wachstumsstarke Marken. Mit unserem ganzheitlichen
              Ansatz im SEO bringen wir deine Marke auf das nächste Level: aus einer Hand, strategisch durchdacht
              und messbar erfolgreich. Mehr Sichtbarkeit. Mehr Reichweite. Mehr Wachstum. Und das nachhaltig.
            </p>
            <Link href="/blog" className="btn-outline">
              Mehr anzeigen
              <i className="bi bi-arrow-up-right text-xs" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogData.map((blog, i) => (
            <Link key={i} href={blog.link} className="glass-card p-6 group block">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs text-[rgba(255,255,255,0.4)] font-medium">{blog.reading}</span>
                <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[rgba(255,255,255,0.4)] group-hover:text-white group-hover:bg-[rgba(27,152,224,0.2)] transition-all">
                  <i className="bi bi-arrow-up-right text-sm" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">{blog.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
