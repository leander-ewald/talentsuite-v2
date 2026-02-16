"use client";
import React from "react";
import Head from "next/head";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";
import ServiceFaqs from "../components/serviceFaqs";

const webData = [
  { img: "/assets/review-img.png", name: "Veraltetes Design, das Besucher sofort abschreckt" },
  { img: "/assets/review-img.png", name: "Keine Sichtbarkeit bei Google – Kunden finden dich nicht" },
  { img: "/assets/review-img.png", name: "Langsame Ladezeiten kosten Conversions und Rankings" },
  { img: "/assets/review-img.png", name: "Website generiert keine Anfragen oder Bewerbungen" },
];

const webSolutions = [
  {
    number: "01",
    title: "UX/UI Design & Conversion-Optimierung",
    desc: "Wir gestalten Websites, die nicht nur gut aussehen, sondern konvertieren. Jede Seite wird mit klarer Nutzerführung, überzeugenden Call-to-Actions und mobiloptimiertem Design entwickelt – damit aus Besuchern Kunden oder Bewerber werden.",
  },
  {
    number: "02",
    title: "Moderne Webentwicklung mit React & Next.js",
    desc: "Wir entwickeln mit modernsten Technologien: React, Next.js, Tailwind CSS und headless CMS-Anbindungen. Das Ergebnis sind ultraschnelle, SEO-optimierte Websites, die sich jederzeit erweitern lassen – keine WordPress-Altlast.",
  },
  {
    number: "03",
    title: "SEO-Optimierung & technisches Setup",
    desc: "Jede Website wird von Anfang an für Suchmaschinen optimiert: semantisches HTML, Meta-Daten, Schema.org Markup, Core Web Vitals Optimierung, XML-Sitemaps und technische SEO-Grundlagen. Damit dein Unternehmen bei Google gefunden wird.",
  },
  {
    number: "04",
    title: "Hosting, Wartung & laufende Betreuung",
    desc: "Nach dem Launch lassen wir dich nicht allein. Wir kümmern uns um Hosting, Sicherheitsupdates, Performance-Monitoring und inhaltliche Aktualisierungen. Deine Website bleibt schnell, sicher und immer auf dem neuesten Stand.",
  },
];

const pageTitle = "Was du mit TalentSuite bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Professionelle Website, die konvertiert und rankt" },
  { image: "/assets/step2.svg", desc: "Bessere Sichtbarkeit bei Google durch SEO" },
  { image: "/assets/step3.svg", desc: "Ultraschnelle Ladezeiten – mobil und desktop" },
  { image: "/assets/step4.svg", desc: "Wartung und Hosting – alles aus einer Hand" },
];

const webTestimonials = [
  {
    name: "Anton Specht",
    role: "CEO – Specht Immobilien",
    from: "Frankfurt",
    to: "Deutschland",
    img: "/assets/Anton.png",
    review: "TalentSuite hat unsere Website komplett neu entwickelt – modern, schnell und endlich sichtbar bei Google. Die Conversion Rate hat sich verdoppelt und wir erhalten deutlich mehr Anfragen über die Website.",
  },
  {
    name: "Viktor Brehm",
    role: "CEO – Schlafplatz",
    from: "München",
    to: "Deutschland",
    img: "/assets/Viktior.png",
    review: "Unsere neue Website von TalentSuite lädt blitzschnell, sieht professionell aus und ist perfekt auf mobile Nutzer optimiert. Die Zusammenarbeit war unkompliziert und das Ergebnis hat unsere Erwartungen übertroffen.",
  },
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "TalentSuite hat unsere E-Commerce Website mit Shopify-Anbindung entwickelt – technisch sauber, nutzerfreundlich und performance-optimiert. Endlich eine Website, die nicht nur gut aussieht, sondern auch verkauft.",
  },
];

const faqData = [
  {
    question: "Mit welchen Technologien entwickelt TalentSuite Websites?",
    answer: "Wir setzen auf moderne Web-Technologien: React und Next.js als Frontend-Framework, Tailwind CSS für das Styling und Vercel für performantes Hosting. Je nach Projekt nutzen wir headless CMS-Lösungen (Strapi, Contentful, Sanity) oder Shopify für E-Commerce. Warum kein WordPress? Weil moderne Frameworks deutlich schnellere Ladezeiten, bessere SEO-Performance und mehr Flexibilität bieten – ohne Plugin-Chaos und Sicherheitsrisiken.",
  },
  {
    question: "Was kostet eine professionelle Website bei TalentSuite?",
    answer: "Die Kosten hängen vom Umfang ab: Eine Business-Landingpage mit wenigen Seiten startet bei einem anderen Budget als ein kompletter E-Commerce-Shop oder ein Web-Portal. Alle Projekte werden individuell kalkuliert – transparent und ohne versteckte Kosten. In einem kostenlosen Erstgespräch analysieren wir deinen Bedarf und erstellen ein konkretes Angebot mit klarem Zeitplan.",
  },
  {
    question: "Wie lange dauert die Entwicklung einer Website?",
    answer: "Eine einfache Business-Website mit 5–10 Seiten realisieren wir in der Regel in 4–6 Wochen. Komplexere Projekte wie E-Commerce-Shops, Web-Applikationen oder Websites mit umfangreichen Integrationen dauern 8–12 Wochen. Der genaue Zeitplan hängt von Umfang, Feedback-Zyklen und Content-Zulieferung ab. Wir kommunizieren den Zeitplan transparent von Anfang an.",
  },
  {
    question: "Ist die Website auch für Suchmaschinen optimiert?",
    answer: "Ja, SEO ist bei uns kein Add-on, sondern Standard. Jede Website wird mit technischem SEO-Fundament entwickelt: semantisches HTML5, optimierte Meta-Daten, Schema.org strukturierte Daten, XML-Sitemaps, Robots.txt, Core Web Vitals Optimierung und mobile-first Design. Dazu erhalten alle Seiten individuelle Title-Tags, Meta-Descriptions und eine saubere URL-Struktur. Optional bieten wir auch laufende SEO-Betreuung mit Content-Strategie an.",
  },
  {
    question: "Können wir die Website selbst bearbeiten?",
    answer: "Ja – je nach Technologie-Stack. Bei Projekten mit headless CMS kannst du Texte, Bilder und Inhalte selbst bearbeiten, ohne technische Kenntnisse. Für statische Next.js Websites bieten wir eine einfache Content-Verwaltung oder übernehmen inhaltliche Aktualisierungen als Teil unserer Wartungspakete. Du entscheidest, wie viel Kontrolle du haben möchtest.",
  },
  {
    question: "Bietet TalentSuite auch Hosting und Wartung an?",
    answer: "Ja, wir bieten Komplett-Pakete inklusive Hosting, Sicherheitsupdates, Performance-Monitoring, Backups und inhaltlichen Aktualisierungen. Wir hosten auf Vercel für optimale Performance oder auf deiner bevorzugten Infrastruktur. So ist deine Website immer schnell, sicher und auf dem neuesten Stand – ohne dass du dich darum kümmern musst.",
  },
  {
    question: "Erstellt TalentSuite auch Landingpages für Kampagnen?",
    answer: "Ja, Landingpages sind ein Kernbereich unserer Arbeit. Für Performance-Recruiting-Kampagnen, Neukundengewinnung und Produktlaunches erstellen wir conversion-optimierte Landingpages mit klarem Ziel: Terminbuchung, Bewerbung oder Angebotsanfrage. Diese Seiten sind eigenständig, schnell und werden A/B-getestet für maximale Conversion Rate.",
  },
  {
    question: "Kann TalentSuite auch bestehende Websites redesignen?",
    answer: "Ja, wir übernehmen sowohl komplette Website-Neuentwicklungen als auch Redesigns bestehender Websites. Bei einem Redesign analysieren wir zunächst die aktuelle Seite – Performance, UX, SEO-Status, Conversion-Schwachstellen – und entwickeln daraus ein Optimierungskonzept. Je nach Zustand empfehlen wir entweder einen Relaunch mit moderner Technologie oder gezielte Verbesserungen an der bestehenden Seite.",
  },
];

const WebDevelopment = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Webentwicklung",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Professionelle Webentwicklung mit React & Next.js: UX/UI Design, SEO-Optimierung, Landingpages und E-Commerce-Entwicklung für Unternehmen im DACH-Raum.",
    "serviceType": "Webentwicklung",
    "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "price": "0", "priceCurrency": "EUR", "description": "Kostenloses Erstgespräch" },
  };

  return (
    <>
      <Head>
        <title>Webentwicklung Agentur | React, Next.js & SEO | TalentSuite</title>
        <meta name="description" content="Professionelle Webentwicklung mit React & Next.js: UX/UI Design, SEO-Optimierung, Landingpages und E-Commerce. Websites, die konvertieren und ranken. Jetzt Beratung buchen." />
        <meta name="keywords" content="Webentwicklung Agentur, Website erstellen lassen, React Entwicklung, Next.js Agentur, UX Design, SEO Agentur, Landingpage erstellen, E-Commerce Entwicklung DACH" />
        <link rel="canonical" href="https://talentsuite.io/services/webDevelopment" />
        <meta property="og:title" content="Webentwicklung Agentur | TalentSuite" />
        <meta property="og:description" content="Moderne Websites mit React & Next.js – schnell, SEO-optimiert und conversion-stark." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talentsuite.io/services/webDevelopment" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Deine Website<br />ist dein bester<br />Vertriebler – oder nicht.</>}
        description="Wir entwickeln Websites, die nicht nur gut aussehen, sondern Kunden und Bewerber überzeugen. Mit modernster Technologie, SEO-Optimierung und conversion-orientiertem Design."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
        imageSrc="/assets/services-img.png"
        imageAlt="Webentwicklung Agentur – React & Next.js Websites mit UX Design und SEO"
      />

      <Traditional
        title="Eine schöne Website reicht nicht – sie muss konvertieren."
        description="98% aller Website-Besucher verlassen eine Seite, ohne zu handeln. Der Grund: schlechtes UX-Design, langsame Ladezeiten und fehlende Handlungsaufforderungen. Eine Website, die nicht konvertiert, ist eine teure digitale Visitenkarte – mehr nicht."
        data={webData}
      />

      <Solution
        title="Unsere Lösung: Websites, die performen"
        description="Wir entwickeln Websites mit einem klaren Ziel: mehr Anfragen, mehr Bewerbungen, mehr Umsatz. Technisch auf dem neuesten Stand, gestalterisch überzeugend und für Suchmaschinen optimiert."
        items={webSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Das sagen unsere Kunden"
        description="Echte Ergebnisse – von Immobilien über E-Commerce bis Food-Tech."
        link="https://calendly.com/talentsuite"
        linkText="Auch eine Website, die performt? Jetzt Termin sichern"
        testimonialData={webTestimonials}
      />

      <ServiceFaqs
        title="Häufige Fragen zur Webentwicklung"
        description="Alles über Technologien, Kosten, Zeitrahmen und SEO bei unseren Website-Projekten."
        faqData={faqData}
        accordionId="wdFaq"
      />

      <Appointment
        heading="Bereit für eine Website, die performt? In einem kostenlosen Erstgespräch analysieren wir deine aktuelle Seite und zeigen dir das Optimierungspotenzial."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
      />
    </>
  );
};

export default WebDevelopment;
