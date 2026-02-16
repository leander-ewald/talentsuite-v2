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
import Industries from "../components/industries";

const acquisitionData = [
  { img: "/assets/review-img.png", name: "Neukundengewinnung basiert nur auf Empfehlungen und Zufall" },
  { img: "/assets/review-img.png", name: "Werbebudget verpufft ohne messbare Ergebnisse" },
  { img: "/assets/review-img.png", name: "Keine planbaren Anfragen oder Leads im Vertriebsprozess" },
  { img: "/assets/review-img.png", name: "Abhängigkeit von wenigen Bestandskunden gefährdet Wachstum" },
];

const acquisitionSolutions = [
  {
    number: "01",
    title: "Zielgruppen- & Marktanalyse",
    desc: "Wir identifizieren deine profitabelsten Kundensegmente, analysieren den Wettbewerb und entwickeln eine klare Positionierung. So erreichen deine Kampagnen genau die Entscheider, die dein Angebot brauchen.",
  },
  {
    number: "02",
    title: "Meta Ads & Google Ads Kampagnen",
    desc: "Wir schalten Performance-Kampagnen auf Facebook, Instagram und Google, die gezielt Anfragen generieren. Mit A/B-Tests, Retargeting und Lookalike Audiences maximieren wir deinen Return on Ad Spend (ROAS).",
  },
  {
    number: "03",
    title: "Conversion-optimierte Landingpages & Funnels",
    desc: "Statt Besucher auf eine generische Website zu schicken, leiten wir sie auf speziell entwickelte Landingpages mit klarem Call-to-Action – ob Terminbuchung, Angebotsanfrage oder Lead-Magnet.",
  },
  {
    number: "04",
    title: "Lead-Tracking, CRM-Integration & Reporting",
    desc: "Jede Anfrage wird sauber getrackt. Du siehst in Echtzeit, woher deine Leads kommen, was ein Lead kostet und welche Kampagnen den meisten Umsatz bringen. Keine Blackbox, volle Transparenz.",
  },
];

const pageTitle = "Deine Vorteile mit TalentSuite";
const steps = [
  { image: "/assets/step1.svg", desc: "Planbare Neukundenanfragen – jeden Monat" },
  { image: "/assets/step2.svg", desc: "Geringere Akquisekosten durch Datenoptimierung" },
  { image: "/assets/step3.svg", desc: "Mehr Unabhängigkeit von Empfehlungen und Zufall" },
  { image: "/assets/step4.svg", desc: "Transparentes Reporting mit echten KPIs" },
];

const industries = [
  { icon: "🔧", name: "Handwerk & Bau", detail: "SHK, Elektro, Dachdecker" },
  { icon: "🏠", name: "Immobilien", detail: "Makler, Hausverwaltung" },
  { icon: "⚖️", name: "Beratung & Coaching", detail: "Steuerberater, Coaches" },
  { icon: "🏥", name: "Gesundheit & Wellness", detail: "Praxen, Physio, Fitness" },
  { icon: "🏭", name: "B2B & Industrie", detail: "Zulieferer, Dienstleister" },
  { icon: "🍽️", name: "Gastronomie & Hotel", detail: "Restaurants, Catering" },
  { icon: "🛒", name: "E-Commerce & Retail", detail: "Online-Shops, Einzelhandel" },
  { icon: "🚗", name: "Automotive", detail: "Autohäuser, Werkstätten" },
];

const acquisitionTestimonials = [
  {
    name: "Jan Röhrig",
    role: "Leiter Medien & Kommunikation – Iserlohn Roosters",
    from: "Iserlohn",
    to: "Deutschland",
    img: "/assets/Jan.png",
    review: "TalentSuite setzt unsere Sponsoring- und Marketing-Maßnahmen hervorragend um. Durch professionelle Kampagnen und zielgerichtete Ansprache konnten wir unsere Reichweite und Sponsoren-Anfragen deutlich steigern.",
  },
  {
    name: "Viktor Brehm",
    role: "CEO – Schlafplatz",
    from: "München",
    to: "Deutschland",
    img: "/assets/Viktior.png",
    review: "Seit wir mit TalentSuite arbeiten, haben wir eine konstante Pipeline an Kundenanfragen. Die Meta-Kampagnen liefern planbare Ergebnisse und das transparente Reporting gibt uns volle Kontrolle über unser Marketing-Budget.",
  },
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "TalentSuite hat unsere Neukundengewinnung komplett auf ein neues Level gebracht. Von Social Ads über Funnel bis Reporting – alles aus einer Hand, alles messbar. Genau das, was wir als Startup gebraucht haben.",
  },
  {
    name: "Anton Specht",
    role: "CEO – Specht Immobilien",
    from: "Frankfurt",
    to: "Deutschland",
    img: "/assets/Anton.png",
    review: "Die Lead-Kampagnen von TalentSuite generieren regelmäßig qualifizierte Anfragen für unser Immobiliengeschäft. Der ROI ist deutlich höher als bei klassischer Werbung.",
  },
];

const faqData = [
  {
    question: "Was bedeutet digitale Neukundengewinnung und wie funktioniert sie?",
    answer: "Digitale Neukundengewinnung umfasst alle Online-Marketing-Maßnahmen, die darauf abzielen, neue Kunden für dein Unternehmen zu generieren. Dazu gehören Performance-Kampagnen auf Meta (Facebook & Instagram) und Google, conversion-optimierte Landingpages, Retargeting und Lead-Magneten. Anders als bei klassischer Werbung sind alle Ergebnisse messbar – du siehst genau, was ein Lead kostet und welcher Kanal den besten Return on Investment liefert.",
  },
  {
    question: "Was kostet Neukundengewinnung über Performance Marketing?",
    answer: "Die Kosten setzen sich aus dem Agenturhonorar und dem Werbebudget zusammen. Das Werbebudget empfehlen wir abhängig von Branche und Zielen – für die meisten mittelständischen Unternehmen starten erfolgreiche Kampagnen ab einem monatlichen Mediabudget von 1.000–3.000 Euro. In einem kostenlosen Erstgespräch geben wir dir eine realistische Einschätzung der zu erwartenden Kosten pro Lead und des Potenzials für deine Branche.",
  },
  {
    question: "Wie schnell kommen die ersten Kundenanfragen?",
    answer: "Bei Performance-Marketing-Kampagnen kommen erste Anfragen und Leads in der Regel schon in der ersten Woche nach Kampagnenstart. Die optimale Performance erreichen wir nach 4–6 Wochen, wenn genug Daten für die algorithmische Optimierung vorhanden sind. Google Ads können sogar noch schneller Ergebnisse liefern, da hier aktiv suchende Nutzer angesprochen werden.",
  },
  {
    question: "Funktioniert das auch für Handwerksbetriebe und lokale Unternehmen?",
    answer: "Ja, gerade für Handwerksbetriebe, lokale Dienstleister und regionale Unternehmen ist digitale Neukundengewinnung besonders effektiv. Über Geo-Targeting erreichen wir potenzielle Kunden genau in deinem Einzugsgebiet. Handwerksbetriebe wie SHK-Firmen, Elektriker, Dachdecker oder Maler profitieren besonders, weil viele Wettbewerber noch kein professionelles Online-Marketing nutzen – der Vorsprung ist hier enorm.",
  },
  {
    question: "Welche Plattformen nutzt TalentSuite für die Neukundengewinnung?",
    answer: "Wir setzen auf die Kanäle, die für dein Business den besten ROI liefern. Das sind typischerweise Meta Ads (Facebook & Instagram) für B2C und regionale Dienstleister, Google Ads für aktiv suchende Kunden, und LinkedIn für B2B-Neukundengewinnung. Zusätzlich arbeiten wir mit Retargeting, Lookalike Audiences und E-Mail-Marketing, um Leads in zahlende Kunden zu verwandeln.",
  },
  {
    question: "Was unterscheidet TalentSuite von anderen Marketing-Agenturen?",
    answer: "Während viele Agenturen Reichweite und Klicks versprechen, konzentrieren wir uns auf das, was wirklich zählt: Anfragen, Leads und Umsatz. Wir sind eine Fullservice-Agentur – von der Strategie über Content-Produktion und Kampagnen bis zum Lead-Tracking. Unser transparentes Reporting zeigt dir jederzeit, was eine Kundenanfrage kostet. Und wir betreuen Unternehmen im gesamten DACH-Raum mit nachweisbaren Ergebnissen.",
  },
  {
    question: "Brauchen wir eine neue Website für die Neukundengewinnung?",
    answer: "Nicht unbedingt. Wir erstellen eigenständige, conversion-optimierte Landingpages, die unabhängig von deiner bestehenden Website funktionieren. Diese sind speziell auf ein Ziel ausgerichtet – zum Beispiel Terminbuchung oder Angebotsanfrage – und konvertieren deutlich besser als eine allgemeine Unternehmenswebsite. Deine bestehende Website bleibt davon unberührt.",
  },
  {
    question: "Können wir die Ergebnisse wirklich messen?",
    answer: "Absolut – und genau das ist unser Anspruch. Jede Kampagne wird vollständig getrackt: Impressionen, Klicks, Leads, Kosten pro Lead, Conversion Rate und Return on Ad Spend. Du bekommst regelmäßige Reports und hast Zugriff auf ein Live-Dashboard. So siehst du jederzeit, was dein Marketing-Budget bewirkt – keine Blackbox, keine Schätzungen.",
  },
];

const CustomerAcquisition = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Neukundengewinnung",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Digitale Neukundengewinnung mit System: Meta Ads, Google Ads und conversion-optimierte Funnels für planbare Kundenanfragen im DACH-Raum.",
    "serviceType": "Digitale Neukundengewinnung",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Kostenloses Erstgespräch",
    },
  };

  return (
    <>
      <Head>
        <title>Neukundengewinnung Agentur | Digitale Leadgenerierung | TalentSuite</title>
        <meta name="description" content="Digitale Neukundengewinnung mit System: Meta Ads, Google Ads & Funnel-Strategien für planbare Kundenanfragen. 50+ Unternehmen im DACH-Raum vertrauen TalentSuite." />
        <meta name="keywords" content="Neukundengewinnung, Leadgenerierung, Kundenakquise digital, Performance Marketing Agentur, Meta Ads Agentur, Google Ads Agentur, Neukundengewinnung Handwerk, B2B Leadgenerierung DACH" />
        <link rel="canonical" href="https://talentsuite.io/services/customerAcquisition" />
        <meta property="og:title" content="Neukundengewinnung Agentur | TalentSuite" />
        <meta property="og:description" content="Planbare Kundenanfragen über Performance Marketing – messbar, skalierbar, profitabel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talentsuite.io/services/customerAcquisition" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Neukundengewinnung<br />mit System –<br />nicht mit Hoffnung.</>}
        description="Wir generieren planbare Kundenanfragen über Meta Ads, Google Ads und conversion-optimierte Funnels. Datenbasiert, messbar und skalierbar – für Unternehmen im gesamten DACH-Raum."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
        imageSrc="/assets/services-img.png"
        imageAlt="Neukundengewinnung Agentur – Digitale Leadgenerierung über Performance Marketing"
      />

      <Traditional
        title="Neukundengewinnung darf kein Zufall sein."
        description="Wenn dein Wachstum von Empfehlungen, Netzwerken und Glück abhängt, bist du verwundbar. Einer deiner Top-Kunden springt ab – und plötzlich fehlen 30% vom Umsatz. Digitale Neukundengewinnung macht dein Business unabhängig und planbar."
        data={acquisitionData}
      />

      <Solution
        title="Unsere Lösung: Digitale Neukundengewinnung"
        description="Wir bauen dir ein System, das Monat für Monat qualifizierte Anfragen liefert – automatisiert, optimiert und vollständig messbar. Von der ersten Anzeige bis zum abgeschlossenen Auftrag."
        items={acquisitionSolutions}
      />

      <Industries
        title="Branchen, die wir erfolgreich betreuen"
        description="Unser System zur Neukundengewinnung funktioniert für Dienstleister, Handwerker, E-Commerce und B2B-Unternehmen. Wir passen Strategie und Kanäle individuell an dein Geschäftsmodell an."
        industries={industries}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Das sagen unsere Kunden"
        description="Echte Ergebnisse aus verschiedenen Branchen – von Sport-Sponsoring über Immobilien bis Food-Tech."
        link="https://calendly.com/talentsuite"
        linkText="Auch planbar wachsen? Jetzt Termin sichern"
        testimonialData={acquisitionTestimonials}
      />

      <ServiceFaqs
        title="Häufige Fragen zur Neukundengewinnung"
        description="Alles, was du über digitale Neukundengewinnung, Kosten und Ergebnisse wissen musst."
        faqData={faqData}
        accordionId="caFaq"
      />

      <Appointment
        heading="Bereit für planbare Kundenanfragen? In einem kostenlosen Erstgespräch analysieren wir dein Potenzial und zeigen dir, wie digitale Neukundengewinnung für dein Unternehmen funktioniert."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
      />
    </>
  );
};

export default CustomerAcquisition;
