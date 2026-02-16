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

const contentData = [
  { img: "/assets/review-img.png", name: "Stock-Fotos und generischer Content wirken austauschbar" },
  { img: "/assets/review-img.png", name: "Kein professionelles Bild- und Videomaterial vorhanden" },
  { img: "/assets/review-img.png", name: "Inhalte ohne Strategie verpuffen ohne Wirkung" },
  { img: "/assets/review-img.png", name: "Employer Branding bleibt ohne authentischen Content wirkungslos" },
];

const contentSolutions = [
  {
    number: "01",
    title: "Content-Strategie & Konzeption",
    desc: "Bevor eine Kamera läuft, entwickeln wir ein Konzept: Welche Botschaften willst du transportieren? Welche Formate passen zu deiner Zielgruppe? Welche Plattformen bespielst du? Daraus entsteht ein Content-Plan mit klarem Ziel.",
  },
  {
    number: "02",
    title: "Videoproduktion & Fotoshooting",
    desc: "Von Employer Branding Videos über Social Media Reels bis zu Imagefilmen: Unser Produktionsteam liefert professionelles Bild- und Videomaterial, das deine Marke authentisch und überzeugend präsentiert. Auf Wunsch direkt bei dir vor Ort.",
  },
  {
    number: "03",
    title: "Social Media Content & Grafik-Design",
    desc: "Wir erstellen Grafiken, Karussell-Posts, Infografiken und Animationen, die auf deiner Markenidentität basieren. Konsistentes Design, das Wiedererkennung schafft und in Social Feeds heraussticht.",
  },
  {
    number: "04",
    title: "Content-Distribution & Performance-Analyse",
    desc: "Guter Content braucht die richtige Distribution. Wir optimieren Inhalte für jede Plattform, posten zur richtigen Zeit und analysieren, welche Formate die beste Performance liefern.",
  },
];

const pageTitle = "Was du mit TalentSuite bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Professionelles Bild- und Videomaterial für alle Kanäle" },
  { image: "/assets/step2.svg", desc: "Authentischer Content, der deine Marke stärkt" },
  { image: "/assets/step3.svg", desc: "Mehr Reichweite und Engagement auf Social Media" },
  { image: "/assets/step4.svg", desc: "Content, der konvertiert – nicht nur unterhält" },
];

const contentTestimonials = [
  {
    name: "Jessica Pacha-Mollé",
    role: "Head of HR – Heizkurier GmbH",
    from: "Köln/Bonn",
    to: "Deutschland",
    img: "/assets/Jessicas.png",
    review: "Die Content-Produktion von TalentSuite hat unsere Employer Brand auf ein neues Level gehoben. Professionelle Videos und Fotos, die unser Team authentisch zeigen – genau das wollten wir.",
  },
  {
    name: "Jan Röhrig",
    role: "Leiter Medien & Kommunikation – Iserlohn Roosters",
    from: "Iserlohn",
    to: "Deutschland",
    img: "/assets/Jan.png",
    review: "Von Spieltag-Content bis zu Sponsoren-Videos – TalentSuite liefert konstant hochwertigen Content, der unsere Fans und Partner begeistert. Kreativ, professionell und immer termingerecht.",
  },
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "Produktfotos, Rezept-Videos und Social Content – TalentSuite versteht, wie Food-Content funktioniert. Die Qualität hat unsere Erwartungen übertroffen und unsere Marke sichtbar gemacht.",
  },
  {
    name: "Viktor Brehm",
    role: "CEO – Schlafplatz",
    from: "München",
    to: "Deutschland",
    img: "/assets/Viktior.png",
    review: "TalentSuite hat professionellen Video-Content produziert, der unsere Produkte perfekt in Szene setzt. Der Content performt hervorragend in unseren Ads und auf Social Media.",
  },
];

const faqData = [
  {
    question: "Was umfasst Content Produktion bei TalentSuite?",
    answer: "Unsere Content Produktion umfasst alles, was du für eine professionelle Online-Präsenz brauchst: Videoproduktion (Imagefilme, Employer Branding Videos, Social Media Reels, Produktvideos), Fotoshootings (Team, Produkte, Räumlichkeiten), Grafik-Design (Social Media Posts, Infografiken, Werbemittel), Texterstellung und Content-Strategie. Alles aus einer Hand – von der Konzeption bis zum fertigen Endprodukt.",
  },
  {
    question: "Produziert TalentSuite den Content vor Ort bei uns?",
    answer: "Ja, für Video- und Fotoproduktionen kommen wir zu dir. Unser Produktionsteam bringt das komplette Equipment mit und kümmert sich um alles – von der Vorbereitung über den Dreh bis zur Nachbearbeitung. Für Grafikdesign und Social Media Content arbeiten wir remote. Wir sind primär in NRW und Südwestfalen ansässig, betreuen aber Kunden im gesamten DACH-Raum.",
  },
  {
    question: "Was kostet eine Videoproduktion?",
    answer: "Die Kosten hängen vom Umfang ab: Ein Social Media Content Day mit mehreren Reels und Fotos ist deutlich günstiger als ein aufwändiger Imagefilm mit Drehbuch und Postproduktion. Wir bieten verschiedene Pakete an – vom halbtägigen Social Media Shoot bis zur mehrtägigen Produktion. In einem kostenlosen Erstgespräch besprechen wir deine Ziele und erstellen ein transparentes Angebot.",
  },
  {
    question: "Können wir den Content auch für Werbeanzeigen nutzen?",
    answer: "Absolut – und genau dafür produzieren wir ihn häufig. Content, der für Social Media Ads optimiert ist, hat andere Anforderungen als organischer Content: kurze Aufmerksamkeitsspanne, starker Hook in den ersten Sekunden, klarer Call-to-Action. Wir produzieren Creatives, die sowohl organisch als auch als Werbeanzeigen funktionieren – für Meta Ads, TikTok Ads, Google Ads und LinkedIn.",
  },
  {
    question: "Was ist Employer Branding Content und warum brauchen wir das?",
    answer: "Employer Branding Content zeigt dein Unternehmen als attraktiven Arbeitgeber: echte Einblicke ins Team, authentische Mitarbeiter-Interviews, Videos vom Arbeitsalltag und der Unternehmenskultur. Das ist entscheidend für Performance Recruiting – Bewerber:innen wollen heute sehen, wie es ist, bei dir zu arbeiten, bevor sie sich bewerben. Professioneller Employer Branding Content steigert die Bewerbungsquote messbar.",
  },
  {
    question: "Wie läuft eine Content-Produktion mit TalentSuite ab?",
    answer: "In vier Schritten: Erstens das Briefing-Gespräch, in dem wir Ziele, Zielgruppe und Formate besprechen. Zweitens die Konzeption mit Drehbuch, Shotlist und Moodboard. Drittens der Produktionstag vor Ort mit Dreh und/oder Fotoshooting. Viertens die Postproduktion mit Schnitt, Farbkorrektur, Grafiken und Musikunterlegung. Du erhältst Content in allen Formaten – optimiert für Instagram, TikTok, LinkedIn, Website und Werbeanzeigen.",
  },
  {
    question: "Erstellt TalentSuite auch Content mit KI-Tools?",
    answer: "Ja, wir nutzen KI-gestützte Tools ergänzend zur manuellen Produktion – zum Beispiel für Textkonzepte, Bildbearbeitung oder die Erstellung von Animationen und Videovarianten. Die Kernproduktion (Dreh, Fotografie, Grafik-Design) bleibt aber immer menschengemacht. KI hilft uns, effizienter zu arbeiten und mehr Output in gleicher Zeit zu liefern – bei gleichbleibend hoher Qualität.",
  },
];

const ContentProduktion = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Content Produktion",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Professionelle Content Produktion: Videos, Fotos, Social Media Content und Employer Branding für Unternehmen im DACH-Raum.",
    "serviceType": "Content Produktion",
    "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "price": "0", "priceCurrency": "EUR", "description": "Kostenloses Erstgespräch" },
  };

  return (
    <>
      <Head>
        <title>Content Produktion Agentur | Video, Foto & Social Media | TalentSuite</title>
        <meta name="description" content="Professionelle Content Produktion: Videoproduktion, Fotoshooting, Social Media Content & Employer Branding. Authentisch, strategisch, wirkungsvoll. Jetzt Beratung buchen." />
        <meta name="keywords" content="Content Produktion, Videoproduktion Agentur, Employer Branding Video, Social Media Content, Fotoshooting Unternehmen, Imagefilm, Reels Produktion, Content Marketing DACH" />
        <link rel="canonical" href="https://talentsuite.io/services/contentProduktion" />
        <meta property="og:title" content="Content Produktion Agentur | TalentSuite" />
        <meta property="og:description" content="Videos, Fotos und Social Media Content – professionell produziert, strategisch eingesetzt." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talentsuite.io/services/contentProduktion" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Content, der wirkt –<br />nicht nur gefällt.</>}
        description="Wir produzieren professionelle Videos, Fotos und Social Media Content, der deine Marke authentisch präsentiert und messbare Ergebnisse liefert. Von der Strategie bis zum fertigen Endprodukt."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
        imageSrc="/assets/services-img.png"
        imageAlt="Content Produktion Agentur – Videoproduktion, Fotografie und Social Media Content"
      />

      <Traditional
        title="Stock-Content macht deine Marke unsichtbar."
        description="Generische Stock-Fotos und 08/15-Grafiken signalisieren deiner Zielgruppe: Hier ist nichts Besonderes. Authentischer, professioneller Content ist heute kein Nice-to-have mehr – er ist die Grundlage für Vertrauen, Sichtbarkeit und Conversion."
        data={contentData}
      />

      <Solution
        title="Unsere Lösung: Strategische Content Produktion"
        description="Wir produzieren nicht einfach Content – wir entwickeln Inhalte mit Strategie und Ziel. Jedes Video, jedes Foto und jeder Post ist darauf ausgerichtet, deine Marke zu stärken und Ergebnisse zu liefern."
        items={contentSolutions}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Das sagen unsere Kunden"
        description="Echte Ergebnisse aus verschiedenen Branchen – von Employer Branding bis Produkt-Content."
        link="https://calendly.com/talentsuite"
        linkText="Auch professionellen Content? Jetzt Termin sichern"
        testimonialData={contentTestimonials}
      />

      <ServiceFaqs
        title="Häufige Fragen zur Content Produktion"
        description="Alles über Videoproduktion, Fotoshootings, Kosten und den Ablauf unserer Content-Produktion."
        faqData={faqData}
        accordionId="cpFaq"
      />

      <Appointment
        heading="Bereit für Content, der wirkt? In einem kostenlosen Erstgespräch besprechen wir deine Ziele und zeigen dir, was möglich ist."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
      />
    </>
  );
};

export default ContentProduktion;
