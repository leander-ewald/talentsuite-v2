"use client";
import React from "react";
import Head from "next/head";
import MainSection from "../components/mainSection";
import Steps from "../components/steps";
import Testimonials from "../components/testimonials";
import Solution from "../components/solution";
import Traditional from "../components/traditional";
import Appointment from "../components/appointment";

const ecommerceData = [
  { img: "/assets/review-img.png", name: "Keine klare E-Commerce-Strategie" },
  { img: "/assets/review-img.png", name: "Hohe Abbruchraten im Bestellprozess" },
  { img: "/assets/review-img.png", name: "Fehlende Verzahnung von Marketing und Technik" },
  { img: "/assets/review-img.png", name: "Mangelnde Skalierbarkeit und Performance" },
];

const ecommerceSolutions = [
  {
    number: "01",
    title: "E-Commerce Strategie & Consulting",
    desc: "Marktanalyse, Zielgruppendefinition und Wettbewerbspositionierung – wir entwickeln eine datengetriebene Strategie für nachhaltiges Wachstum.",
  },
  {
    number: "02",
    title: "Shopify Shop-Entwicklung",
    desc: "Performante, conversion-optimierte Online-Shops auf Shopify – responsive, schnell und skalierbar für jede Unternehmensgröße.",
  },
  {
    number: "03",
    title: "Logistik & Automatisierung",
    desc: "Nahtlose Integration von Fulfillment, Versand und Warenwirtschaft für maximale Effizienz und Kundenzufriedenheit.",
  },
  {
    number: "04",
    title: "SEO, Ads & Performance Marketing",
    desc: "Google Shopping, Meta Ads, SEO-optimierte Produktseiten und Retargeting – für mehr Traffic, Conversions und Umsatz.",
  },
];

const pageTitle = "Deine Vorteile mit TalentSuite E-Commerce";
const steps = [
  { image: "/assets/step1.svg", desc: "Maßgeschneiderte Shop-Lösung für dein Business" },
  { image: "/assets/step2.svg", desc: "Optimierte Nutzererfahrung für höhere Conversions" },
  { image: "/assets/step3.svg", desc: "Mehr Sichtbarkeit durch gezieltes Performance Marketing" },
  { image: "/assets/step4.svg", desc: "Skalierbarkeit und Stabilität für nachhaltiges Wachstum" },
];

const ecommerceTestimonials = [
  {
    name: "Jan Röhrig",
    role: "Leitung Merchandise & E-Commerce – Iserlohn Roosters",
    from: "Iserlohn",
    to: "Deutschland",
    img: "/assets/jan.png",
    review: "TalentSuite hat unseren Onlineauftritt auf ein neues Level gehoben – von der Shopstruktur bis zur technischen Umsetzung. Das Team versteht es, Marken digital stark und verkaufsfähig zu machen.",
  },
  {
    name: "Viktor Brehm",
    role: "CEO – Schlafplatz",
    from: "München",
    to: "Deutschland",
    img: "/assets/Viktior.png",
    review: "Mit TalentSuite haben wir unser Wachstum systematisiert: neue Kundenanfragen täglich, automatisierte Abläufe und eine Webplattform, die skaliert.",
  },
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Marketingabteilung komplett sparen. Alle Bereiche liefern konstant starke Ergebnisse.",
  },
  {
    name: "Anton Specht",
    role: "CEO – Specht Immobilien",
    from: "Frankfurt",
    to: "Deutschland",
    img: "/assets/Anton.png",
    review: "TalentSuite hat es geschafft, unsere gesamte Online-Präsenz professionell aufzubauen. Von der Strategie bis zur Umsetzung – alles aus einer Hand und auf höchstem Niveau.",
  },
];

const ECommerce = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fullservice E-Commerce",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Fullservice E-Commerce Agentur: Shopify-Entwicklung, Logistik-Automatisierung, SEO und Performance Marketing für Online-Shops im DACH-Raum.",
    "serviceType": "E-Commerce Entwicklung & Marketing",
  };

  return (
    <>
      <Head>
        <title>E-Commerce Agentur | Shopify Entwicklung & Online Marketing | TalentSuite</title>
        <meta name="description" content="Fullservice E-Commerce Agentur: Shopify-Entwicklung, Logistik-Automatisierung, SEO & Performance Marketing. Mehr Umsatz für deinen Online-Shop. Jetzt kostenloses Erstgespräch." />
        <meta name="keywords" content="E-Commerce Agentur, Shopify Entwicklung, Online-Shop erstellen, E-Commerce Beratung, Shop Marketing, Shopify Agentur, Online-Shop Agentur DACH" />
        <link rel="canonical" href="https://talentsuite.io/services/ecommerce" />
        <meta property="og:title" content="E-Commerce Agentur | Shopify & Online Marketing | TalentSuite" />
        <meta property="og:description" content="Fullservice E-Commerce: Von der Shopify-Entwicklung über Logistik bis zum Performance Marketing – alles aus einer Hand." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talentsuite.io/services/ecommerce" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Dein E-Commerce braucht<br />mehr als nur einen Shop.</>}
        description="Wir begleiten dich von der Strategie über Technik bis hin zu Marketing – damit dein Onlinehandel nachhaltig wächst und skaliert."
        buttonText="Jetzt E-Commerce Beratung buchen"
        buttonLink="https://calendly.com/talentsuite"
        imageSrc="/assets/services-img.png"
        imageAlt="E-Commerce Agentur – Shopify Entwicklung und Online-Shop Marketing"
      />

      <Traditional
        title="Viele E-Commerce Projekte scheitern an fehlender Strategie."
        description="Ein Onlineshop allein reicht heute nicht aus. Komplexe technische Anforderungen, wechselnde Kundenbedürfnisse und ein dynamisches Wettbewerbsumfeld stellen viele Händler vor große Herausforderungen."
        data={ecommerceData}
      />

      <Solution
        title="Unsere Lösung: Fullservice E-Commerce aus einer Hand"
        description="Wir entwickeln für dich eine individuelle E-Commerce-Strategie und setzen sie technisch und marketingseitig konsequent um – von der ersten Analyse bis zur Skalierung."
        items={ecommerceSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Kundenstimmen"
        description="Was unsere Kunden über die E-Commerce-Zusammenarbeit sagen – echte Ergebnisse aus verschiedenen Branchen."
        link="https://calendly.com/talentsuite"
        linkText="Auch so wachsen? Jetzt Termin sichern"
        testimonialData={ecommerceTestimonials}
      />

      <Appointment
        heading="Lass uns gemeinsam deine E-Commerce-Potenziale entfesseln. Vereinbare jetzt ein kostenloses Erstgespräch."
        buttonText="Jetzt Termin anfragen"
        buttonLink="https://calendly.com/talentsuite"
      />
    </>
  );
};

export default ECommerce;
