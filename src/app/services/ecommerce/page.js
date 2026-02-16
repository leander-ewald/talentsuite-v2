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

const ecomData = [
  { img: "/assets/review-img.png", name: "Online-Shop generiert kaum Umsatz trotz Produkten" },
  { img: "/assets/review-img.png", name: "Hohe Warenkorbabbrüche und niedrige Conversion Rate" },
  { img: "/assets/review-img.png", name: "Keine Strategie für Ads, SEO und Kundenrückgewinnung" },
  { img: "/assets/review-img.png", name: "Wachstum stagniert, weil Shop nicht skalierbar aufgebaut ist" },
];

const ecomSolutions = [
  {
    number: "01",
    title: "E-Commerce Strategie & Consulting",
    desc: "Wir analysieren deinen Markt, deine Zielgruppe und deine Wettbewerber – und entwickeln eine E-Commerce-Strategie, die auf planbares Wachstum ausgerichtet ist. Von der Produktpositionierung bis zur Preisgestaltung.",
  },
  {
    number: "02",
    title: "Shopify Shop-Entwicklung & Optimierung",
    desc: "Wir entwickeln und optimieren Shopify-Shops, die konvertieren: UX-optimiertes Design, schnelle Ladezeiten, mobile-first und mit allen nötigen Integrationen – von Payment über Fulfillment bis Analytics.",
  },
  {
    number: "03",
    title: "Logistik-Automatisierung & Fulfillment",
    desc: "Wir automatisieren Bestellprozesse, Lagerhaltung und Versand. Mit den richtigen Tools und Anbindungen läuft dein Fulfillment effizient und skalierbar – damit du dich aufs Wachstum konzentrieren kannst.",
  },
  {
    number: "04",
    title: "SEO, Ads & Performance Marketing",
    desc: "Google Shopping, Meta Ads, Retargeting und E-Mail-Marketing: Wir bringen Traffic auf deinen Shop und verwandeln Besucher in Käufer. Datenbasiert optimiert für maximalen Return on Ad Spend.",
  },
];

const pageTitle = "Was du mit TalentSuite bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Professioneller Online-Shop, der konvertiert" },
  { image: "/assets/step2.svg", desc: "Optimierte UX für weniger Kaufabbrüche" },
  { image: "/assets/step3.svg", desc: "Mehr Sichtbarkeit durch SEO und Ads" },
  { image: "/assets/step4.svg", desc: "Skalierbare Prozesse für nachhaltiges Wachstum" },
];

const ecomTestimonials = [
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "TalentSuite hat unseren E-Commerce komplett aufgebaut – von Shopify-Entwicklung über Logistik-Anbindung bis Performance Marketing. Die Umsätze steigen kontinuierlich und die Prozesse laufen reibungslos.",
  },
  {
    name: "Viktor Brehm",
    role: "CEO – Schlafplatz",
    from: "München",
    to: "Deutschland",
    img: "/assets/Viktior.png",
    review: "Unser Online-Shop wurde von TalentSuite komplett überarbeitet – besseres UX-Design, schnellere Ladezeiten und optimierte Kaufprozesse. Die Conversion Rate hat sich deutlich verbessert.",
  },
  {
    name: "Jan Röhrig",
    role: "Leiter Medien & Kommunikation – Iserlohn Roosters",
    from: "Iserlohn",
    to: "Deutschland",
    img: "/assets/Jan.png",
    review: "Für unseren Merchandise-Shop liefert TalentSuite kreative Kampagnen, die Fans begeistern und den Umsatz steigern. Die Kombination aus Content und Performance Marketing funktioniert hervorragend.",
  },
  {
    name: "Anton Specht",
    role: "CEO – Specht Immobilien",
    from: "Frankfurt",
    to: "Deutschland",
    img: "/assets/Anton.png",
    review: "TalentSuite hat unsere digitale Präsenz und Lead-Generierung über Performance Marketing deutlich verbessert. Die datenbasierte Herangehensweise überzeugt mit echten, messbaren Ergebnissen.",
  },
];

const faqData = [
  {
    question: "Was bietet TalentSuite als E-Commerce Agentur?",
    answer: "Wir bieten Fullservice E-Commerce: Von der Strategie und Shop-Entwicklung (Shopify) über UX-Optimierung und Logistik-Automatisierung bis zu Performance Marketing (Google Shopping, Meta Ads, SEO) und E-Mail-Marketing. Alles aus einer Hand – du bekommst ein komplettes System für planbaren Online-Umsatz, nicht nur einzelne Bausteine.",
  },
  {
    question: "Warum setzt TalentSuite auf Shopify?",
    answer: "Shopify ist die weltweit führende E-Commerce-Plattform – zuverlässig, skalierbar und mit einem riesigen Ökosystem an Apps und Integrationen. Für die meisten mittelständischen E-Commerce-Unternehmen ist Shopify die beste Wahl: schneller Launch, geringe Wartungskosten, hervorragende Payment-Integration und einfache Handhabung. Für spezielle Anforderungen arbeiten wir auch mit WooCommerce oder headless Commerce-Lösungen.",
  },
  {
    question: "Was kostet die Entwicklung eines Online-Shops?",
    answer: "Die Kosten variieren je nach Umfang: Ein schlanker Shopify-Shop mit wenigen Produkten und Standard-Design startet bei einem anderen Budget als ein individuell designter Shop mit Custom-Funktionen und Systemintegrationen. In einem kostenlosen Erstgespräch besprechen wir deine Anforderungen und erstellen ein transparentes Angebot mit klarem Zeitplan und Leistungsumfang.",
  },
  {
    question: "Wie steigert TalentSuite den Umsatz meines Online-Shops?",
    answer: "Durch eine Kombination aus technischer Optimierung und strategischem Marketing: Wir verbessern die Conversion Rate durch UX-Optimierung und A/B-Tests, steigern den Traffic durch SEO und Google Shopping, gewinnen neue Kunden über Meta Ads und Retargeting, und erhöhen den Kundenwert durch E-Mail-Marketing und Automatisierungen. Alles wird datenbasiert optimiert und transparent reportet.",
  },
  {
    question: "Kann TalentSuite auch einen bestehenden Shop optimieren?",
    answer: "Ja, wir optimieren bestehende Shopify-Shops und andere Plattformen. Typische Optimierungen: Conversion Rate Optimierung (CRO) durch besseres UX-Design, Ladezeit-Optimierung für bessere Rankings und Nutzererfahrung, SEO-Audit und -Optimierung, Checkout-Optimierung zur Reduktion von Kaufabbrüchen und Setup von Tracking und Analytics für datenbasierte Entscheidungen.",
  },
  {
    question: "Unterstützt TalentSuite auch bei Fulfillment und Logistik?",
    answer: "Ja, wir helfen dir bei der Automatisierung deiner Logistikprozesse: Anbindung von Fulfillment-Dienstleistern, automatische Bestellverarbeitung, Versandlabel-Generierung, Lagerbestandsmanagement und Retouren-Management. Ziel ist es, manuelle Aufwände zu minimieren, damit du dich auf Marketing und Wachstum konzentrieren kannst.",
  },
  {
    question: "Welche Werbekanäle nutzt TalentSuite für E-Commerce Marketing?",
    answer: "Die wichtigsten Kanäle für E-Commerce sind: Google Shopping und Google Ads für aktiv suchende Käufer, Meta Ads (Facebook & Instagram) für Awareness und Retargeting, TikTok Ads für jüngere Zielgruppen, E-Mail-Marketing für Bestandskunden und Warenkorbabbrecher, und SEO für organischen Traffic. Welcher Mix am besten funktioniert, hängt von deiner Zielgruppe und deinen Produkten ab – wir testen und optimieren kontinuierlich.",
  },
];

const EComerce = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-Commerce Agentur",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Fullservice E-Commerce Agentur: Shopify-Entwicklung, UX-Optimierung, Logistik-Automatisierung und Performance Marketing für planbaren Online-Umsatz.",
    "serviceType": "E-Commerce",
    "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "price": "0", "priceCurrency": "EUR", "description": "Kostenloses Erstgespräch" },
  };

  return (
    <>
      <Head>
        <title>E-Commerce Agentur | Shopify Entwicklung & Online Marketing | TalentSuite</title>
        <meta name="description" content="Fullservice E-Commerce Agentur: Shopify-Entwicklung, UX-Optimierung, Logistik-Automatisierung, SEO & Performance Marketing. Mehr Umsatz für deinen Online-Shop. Jetzt Beratung buchen." />
        <meta name="keywords" content="E-Commerce Agentur, Shopify Entwicklung, Online-Shop erstellen, E-Commerce Beratung, Shop Marketing, Google Shopping Agentur, Shopify Agentur DACH, Online-Shop Optimierung" />
        <link rel="canonical" href="https://talentsuite.io/services/ecommerce" />
        <meta property="og:title" content="E-Commerce Agentur | TalentSuite" />
        <meta property="og:description" content="Shopify-Shops, die verkaufen – Entwicklung, Optimierung und Marketing aus einer Hand." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talentsuite.io/services/ecommerce" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Dein E-Commerce<br />braucht mehr als<br />nur einen Shop.</>}
        description="Wir bauen und skalieren E-Commerce-Geschäfte: Von Shopify-Entwicklung über UX-Optimierung und Logistik-Automatisierung bis Performance Marketing. Alles für planbaren Online-Umsatz."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
        imageSrc="/assets/services-img.png"
        imageAlt="E-Commerce Agentur – Shopify Entwicklung, UX-Optimierung und Performance Marketing"
      />

      <Traditional
        title="Ein Shop allein bringt keinen Umsatz."
        description="Die meisten Online-Shops scheitern nicht am Produkt – sondern an fehlender Strategie, schlechter UX und mangelndem Marketing. Ohne Sichtbarkeit, ohne Conversion-Optimierung und ohne Automatisierung bleibt dein Shop eine teure digitale Lagerhalle."
        data={ecomData}
      />

      <Solution
        title="Unsere Lösung: E-Commerce mit System"
        description="Wir verbinden Shop-Entwicklung, UX-Optimierung, Logistik und Marketing zu einem System, das planbar Umsatz generiert – nicht nur Traffic."
        items={ecomSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Das sagen unsere Kunden"
        description="Echte Ergebnisse aus E-Commerce, Food-Tech, Merchandise und mehr."
        link="https://calendly.com/talentsuite"
        linkText="Auch mehr Shop-Umsatz? Jetzt Termin sichern"
        testimonialData={ecomTestimonials}
      />

      <ServiceFaqs
        title="Häufige Fragen zu E-Commerce"
        description="Alles über Shopify-Entwicklung, Kosten, Marketing und Logistik-Automatisierung."
        faqData={faqData}
        accordionId="ecFaq"
      />

      <Appointment
        heading="Bereit für mehr Online-Umsatz? In einem kostenlosen Erstgespräch analysieren wir deinen Shop und zeigen dir das Wachstumspotenzial."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
      />
    </>
  );
};

export default EComerce;
