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

const smmData = [
  { img: "/assets/review-img.png", name: "Kein Plan, kein Content-Kalender, keine Konsistenz" },
  { img: "/assets/review-img.png", name: "Posten ohne Strategie bringt weder Reichweite noch Kunden" },
  { img: "/assets/review-img.png", name: "Social Media frisst Zeit, die im Kerngeschäft fehlt" },
  { img: "/assets/review-img.png", name: "Community wächst nicht, Interaktionen bleiben aus" },
];

const smmSolutions = [
  {
    number: "01",
    title: "Social Media Strategie & Positionierung",
    desc: "Wir analysieren deine Zielgruppe, deine Wettbewerber und deinen Markt – und entwickeln daraus eine Social Media Strategie, die zu deiner Marke passt und messbare Ergebnisse liefert. Mit klarem Redaktionsplan und Content-Fahrplan.",
  },
  {
    number: "02",
    title: "Content-Erstellung & Redaktionsplanung",
    desc: "Von Grafiken über Reels und Stories bis zu Karussell-Posts: Wir erstellen hochwertigen Content, der deine Marke professionell positioniert und für Interaktion sorgt. Alles wird im Voraus geplant und freigegeben.",
  },
  {
    number: "03",
    title: "Community Management & Engagement",
    desc: "Wir reagieren auf Kommentare, beantworten Nachrichten und bauen eine aktive Community rund um deine Marke auf. Denn Social Media lebt von Dialog – nicht von Monolog.",
  },
  {
    number: "04",
    title: "Reporting, Analyse & Optimierung",
    desc: "Monatliche Reports zeigen dir, welche Inhalte funktionieren, wie deine Community wächst und welche Maßnahmen optimiert werden. Datenbasierte Entscheidungen statt Bauchgefühl.",
  },
];

const pageTitle = "Was du mit TalentSuite bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Professioneller Social Media Auftritt ohne eigenen Aufwand" },
  { image: "/assets/step2.svg", desc: "Mehr Reichweite, Follower und Interaktionen" },
  { image: "/assets/step3.svg", desc: "Stärkere Markenbekanntheit und Vertrauen" },
  { image: "/assets/step4.svg", desc: "Messbare Ergebnisse mit transparentem Reporting" },
];

const smmTestimonials = [
  {
    name: "Jan Röhrig",
    role: "Leiter Medien & Kommunikation – Iserlohn Roosters",
    from: "Iserlohn",
    to: "Deutschland",
    img: "/assets/Jan.png",
    review: "TalentSuite überzeugt durch kreative Content-Strategien und professionelle Umsetzung. Unsere Social Media Kanäle haben deutlich an Reichweite und Engagement gewonnen.",
  },
  {
    name: "Jessica Pacha-Mollé",
    role: "Head of HR – Heizkurier GmbH",
    from: "Köln/Bonn",
    to: "Deutschland",
    img: "/assets/Jessicas.png",
    review: "Die Social Media Betreuung durch TalentSuite hat unsere Online-Präsenz komplett transformiert. Professioneller Content, pünktliche Postings und echte Community-Arbeit – genau das hat uns gefehlt.",
  },
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "Als Food-Startup ist Social Media für uns überlebenswichtig. TalentSuite liefert konstant hochwertigen Content, der unsere Marke authentisch transportiert und echte Ergebnisse bringt.",
  },
];

const faqData = [
  {
    question: "Was beinhaltet Social Media Management bei TalentSuite?",
    answer: "Unser Social Media Management umfasst die komplette Betreuung deiner Social Media Kanäle: Strategieentwicklung, Content-Erstellung (Grafiken, Reels, Stories, Karussell-Posts), Redaktionsplanung, Posting, Community Management, Kommentar- und Nachrichtenbeantwortung sowie monatliches Reporting mit konkreten KPIs. Wir übernehmen alles – du gibst nur noch Freigaben und konzentrierst dich auf dein Kerngeschäft.",
  },
  {
    question: "Welche Social Media Plattformen betreut TalentSuite?",
    answer: "Wir betreuen alle relevanten Plattformen: Instagram, Facebook, LinkedIn, TikTok und auf Wunsch auch YouTube, Pinterest oder X (ehemals Twitter). Welche Plattformen für dein Unternehmen am sinnvollsten sind, hängt von deiner Zielgruppe ab. In einem Erstgespräch analysieren wir das gemeinsam und empfehlen dir die Kanäle mit dem größten Potenzial.",
  },
  {
    question: "Was kostet Social Media Management?",
    answer: "Die Kosten richten sich nach dem Umfang der Betreuung: Anzahl der Plattformen, Posting-Frequenz, Art des Contents (Grafiken vs. Video) und ob Community Management enthalten ist. Wir bieten maßgeschneiderte Pakete für verschiedene Budgets. In einem kostenlosen Erstgespräch besprechen wir deine Ziele und erstellen ein individuelles Angebot – transparent und ohne versteckte Kosten.",
  },
  {
    question: "Wie oft wird auf unseren Kanälen gepostet?",
    answer: "Die optimale Posting-Frequenz hängt von der Plattform und deinen Zielen ab. Als Richtwert empfehlen wir: Instagram 3–5 Posts pro Woche plus Stories, Facebook 3–4 Posts pro Woche, LinkedIn 2–3 Posts pro Woche, TikTok 3–5 Videos pro Woche. Wichtiger als die reine Frequenz ist die Qualität und Konsistenz des Contents. Wir stimmen den Redaktionsplan individuell auf dein Unternehmen ab.",
  },
  {
    question: "Erstellt TalentSuite auch Videos und Reels?",
    answer: "Ja – Videocontent ist ein zentraler Bestandteil unseres Social Media Managements. Wir produzieren Reels, Stories, TikToks und auch längere Videoformate. Von der Konzeption über Dreh bis zum Schnitt übernehmen wir alles. Unsere Schwestermarke MadebyMEE ist auf Videoproduktion spezialisiert und sorgt für professionelle Qualität, die zu deiner Marke passt.",
  },
  {
    question: "Wie wird der Erfolg des Social Media Managements gemessen?",
    answer: "Wir messen den Erfolg anhand konkreter KPIs: Reichweite und Impressionen, Engagement-Rate (Likes, Kommentare, Shares), Follower-Wachstum, Klicks auf Links, Profil-Aufrufe und bei Bedarf auch Leads und Conversions. Monatliche Reports geben dir einen klaren Überblick über die Entwicklung. So sehen wir, was funktioniert – und optimieren kontinuierlich.",
  },
  {
    question: "Können wir den Content vor dem Posten freigeben?",
    answer: "Selbstverständlich. Wir arbeiten mit einem strukturierten Freigabeprozess: Jeder Content-Plan wird dir im Voraus vorgelegt, du gibst Feedback und Freigaben – erst dann wird veröffentlicht. So behältst du die volle Kontrolle über deine Markenkommunikation, ohne selbst Zeit in die Erstellung investieren zu müssen.",
  },
  {
    question: "Lohnt sich Social Media Management für kleine Unternehmen?",
    answer: "Ja – gerade für kleine und mittelständische Unternehmen ist professionelles Social Media Management ein enormer Hebel. Deine Zielgruppe ist auf Social Media, jeden Tag. Mit konsistentem, professionellem Content positionierst du dich als vertrauenswürdige Marke – ohne eine eigene Marketingabteilung aufbauen zu müssen. Das spart langfristig Kosten und bringt mehr als sporadisches, ungeplantes Posten.",
  },
];

const SocialMediaManagement = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Management",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Professionelles Social Media Management: Strategie, Content-Erstellung, Community Management und Reporting für Instagram, Facebook, LinkedIn und TikTok.",
    "serviceType": "Social Media Management",
    "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "price": "0", "priceCurrency": "EUR", "description": "Kostenloses Erstgespräch" },
  };

  return (
    <>
      <Head>
        <title>Social Media Management Agentur | Content & Strategie | TalentSuite</title>
        <meta name="description" content="Professionelles Social Media Management: Strategie, Content-Produktion, Community Management & Reporting. Mehr Reichweite und Engagement für dein Unternehmen. Jetzt Beratung buchen." />
        <meta name="keywords" content="Social Media Management, Social Media Agentur, Instagram Management, Content Erstellung, Social Media Strategie, Community Management, Social Media Marketing DACH" />
        <link rel="canonical" href="https://talentsuite.io/services/socialMediaManagement" />
        <meta property="og:title" content="Social Media Management Agentur | TalentSuite" />
        <meta property="og:description" content="Professioneller Social Media Auftritt ohne eigenen Aufwand – Content, Community & Reporting aus einer Hand." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talentsuite.io/services/socialMediaManagement" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Social Media<br />ohne Plan ist<br />verbranntes Potenzial.</>}
        description="Wir übernehmen dein komplettes Social Media Management: Strategie, Content-Erstellung, Community Management und Reporting. Professionell, konsistent und mit messbaren Ergebnissen."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
        imageSrc="/assets/services-img.png"
        imageAlt="Social Media Management Agentur – Content, Strategie & Community Management"
      />

      <Traditional
        title="Unregelmäßiges Posten schadet mehr als es hilft."
        description="Ein verwaister Instagram-Kanal oder ein Facebook-Profil mit dem letzten Post von 2023 wirkt unprofessionell. Deine Zielgruppe bildet sich ihre Meinung über dein Unternehmen innerhalb von Sekunden – und Social Media ist oft der erste Kontaktpunkt."
        data={smmData}
      />

      <Solution
        title="Unsere Lösung: Professionelles Social Media Management"
        description="Wir verwandeln deine Social Media Kanäle in professionelle Markenbotschafter – mit einer klaren Strategie, hochwertigem Content und aktivem Community Management."
        items={smmSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Das sagen unsere Kunden"
        description="Echte Ergebnisse aus verschiedenen Branchen – von Profisport über Energie bis Food-Tech."
        link="https://calendly.com/talentsuite"
        linkText="Auch professionell auftreten? Jetzt Termin sichern"
        testimonialData={smmTestimonials}
      />

      <ServiceFaqs
        title="Häufige Fragen zum Social Media Management"
        description="Alles über Leistungen, Kosten und Ergebnisse unseres Social Media Managements."
        faqData={faqData}
        accordionId="smmFaq"
      />

      <Appointment
        heading="Bereit für professionelles Social Media? In einem kostenlosen Erstgespräch analysieren wir deine Kanäle und zeigen dir das Potenzial."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
      />
    </>
  );
};

export default SocialMediaManagement;
