"use client";
import React from "react";
import Link from "next/link";
import AuthorBox, { AuthorMini } from "./AuthorBox";

interface RelatedArticle {
  href: string;
  title: string;
  category: string;
}

interface BlogArticleProps {
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonical?: string;
  publishDate?: string;
  updatedDate?: string;
  readingTime?: string;
  category?: string;
  children: React.ReactNode;
  relatedArticles?: RelatedArticle[];
  tldr?: string[];
  authorName?: string;
  authorRole?: string;
  authorBio?: string;
  authorCredentials?: string[];
  authorLinkedin?: string;
}

const BlogArticle = ({
  title, publishDate, updatedDate, readingTime, category,
  children, relatedArticles,
  authorName, authorRole, authorBio, authorCredentials, authorLinkedin
}: BlogArticleProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    author: {
      "@type": "Person",
      name: authorName || "Robert Engel",
      jobTitle: authorRole || "Gründer & Geschäftsführer",
      url: "https://talentsuite.io/autor/robert-engel",
      sameAs: [authorLinkedin || "https://www.linkedin.com/in/robert-engel"],
      worksFor: { "@type": "Organization", name: "TalentSuite", url: "https://talentsuite.io" },
    },
    publisher: {
      "@type": "Organization", name: "TalentSuite", url: "https://talentsuite.io",
      logo: { "@type": "ImageObject", url: "https://talentsuite.io/logo.png" },
    },
    datePublished: publishDate || "2026-02-16",
    dateModified: updatedDate || publishDate || "2026-02-16",
    inLanguage: "de-DE",
    isPartOf: { "@type": "Blog", name: "TalentSuite Blog", url: "https://talentsuite.io/blog" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <section className="section" style={{ paddingBottom: "1rem" }}>
        <div className="container max-w-3xl">
          <div style={{ marginBottom: "0.75rem", display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
            {category && <span className="badge">{category}</span>}
            {readingTime && <span style={{ opacity: 0.6, fontSize: "0.9rem" }}>{readingTime}</span>}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">{title}</h1>
          <AuthorMini
            name={authorName || "Robert Engel"}
            role={authorRole || "Gründer & Geschäftsführer"}
            date={publishDate}
            updatedDate={updatedDate}
          />
        </div>
      </section>

      <section style={{ paddingBottom: "3rem" }}>
        <div className="container max-w-3xl">
          <article style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "rgba(255,255,255,0.8)" }}>
            {children}
          </article>

          <AuthorBox
            name={authorName}
            role={authorRole}
            bio={authorBio}
            credentials={authorCredentials}
            linkedin={authorLinkedin}
          />

          <div style={{ background: "linear-gradient(135deg, #023B5B 0%, #035a8c 100%)", borderRadius: "16px", padding: "2rem", marginTop: "1.5rem", marginBottom: "2rem", textAlign: "center" }}>
            <h3 style={{ color: "white", fontSize: "1.4rem", marginBottom: "0.75rem" }}>Bereit für messbare Ergebnisse?</h3>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "1.25rem" }}>In einem kostenlosen Erstgespräch analysieren wir deine Situation und zeigen dir konkret, wie wir helfen können.</p>
            <a href="https://calendar.app.google/QFoADWcRwwuYUoky8" style={{ display: "inline-block", background: "white", color: "#023B5B", padding: "12px 32px", borderRadius: "8px", fontWeight: "700", textDecoration: "none" }}>Jetzt kostenloses Erstgespräch buchen</a>
          </div>

          {relatedArticles && relatedArticles.length > 0 && (
            <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Weitere Artikel</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedArticles.map((article, i) => (
                  <Link key={i} href={article.href} className="glass-card" style={{ display: "block", padding: "1rem", textDecoration: "none", color: "inherit" }}>
                    <span style={{ fontSize: "0.8rem", opacity: 0.5 }}>{article.category}</span>
                    <p style={{ fontWeight: "600", margin: "4px 0 0", fontSize: "0.95rem" }}>{article.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link href="/blog" style={{ color: "#4da6d9", fontWeight: "600" }}>&larr; Zurück zur Übersicht</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArticle;
