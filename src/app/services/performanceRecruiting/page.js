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

const performanceData = [
  { img: "/assets/review-img.png", name: "Hohe Streuverluste bei Stellenanzeigen auf Jobbörsen" },
  { img: "/assets/review-img.png", name: "Keine oder nur unqualifizierte Bewerbungen" },
  { img: "/assets/review-img.png", name: "Lange Time-to-Hire und offene Stellen seit Monaten" },
  { img: "/assets/review-img.png", name: "Fehlbesetzungen, die dein Unternehmen Zeit und Geld kosten" },
];

const performanceSolutions = [
  {
    number: "01",
    title: "Zielgruppenanalyse & Arbeitgeberpositionierung",
    desc: "Wir analysieren, wer deine Wunschbewerber:innen sind, wo sie sich digital aufhalten und was sie an einem Arbeitgeber überzeugt. Daraus entsteht eine klare Recruiting-Strategie mit messbaren Zielen.",
  },
  {
    number: "02",
    title: "Social Media Performance Kampagnen",
    desc: "Über Meta (Facebook & Instagram), TikTok und LinkedIn schalten wir datengetriebene Werbeanzeigen, die gezielt passive Kandidat:innen ansprechen – Menschen, die nicht aktiv auf Jobsuche sind, aber offen für neue Möglichkeiten.",
  },
  {
    number: "03",
    title: "Conversion-optimierte Bewerberfunnels",
    desc: "Mobile-First Landingpages mit integriertem Pre-Qualifikations-Quiz ermöglichen Bewerbungen in unter 60 Sekunden. Nur passende Kandidat:innen kommen durch – automatisch gefiltert nach deinen Anforderungen.",
  },
  {
    number: "04",
    title: "Automatisierte Bewerberweiterleitung & Reporting",
    desc: "Jede qualifizierte Bewerbung landet sofort in deinem Postfach oder Bewerber-Tool. Du siehst in Echtzeit, wie viele Bewerbungen eingehen, was eine Bewerbung kostet und welche Kanäle am besten performen.",
  },
];

const pageTitle = "Was du mit TalentSuite bekommst";
const steps = [
  { image: "/assets/step1.svg", desc: "Mehr qualifizierte Bewerbungen – ab der ersten Woche" },
  { image: "/assets/step2.svg", desc: "Kürzere Time-to-Hire durch vorqualifizierte Kandidat:innen" },
  { image: "/assets/step3.svg", desc: "Planbare Recruiting-Kosten pro Bewerbung (Cost-per-Application)" },
  { image: "/assets/step4.svg", desc: "Messbare Ergebnisse statt Bauchgefühl" },
];

const industries = [
  { icon: "🔧", name: "Handwerk & Bau", detail: "SHK, Elektro, Dachdecker" },
  { icon: "🏥", name: "Gesundheitswesen", detail: "Pflege, Kliniken, Praxen" },
  { icon: "🍽️", name: "Gastronomie & Hotel", detail: "Köche, Service, Empfang" },
  { icon: "🏭", name: "Industrie & Produktion", detail: "Facharbeiter, Schichtleiter" },
  { icon: "🚚", name: "Logistik & Transport", detail: "Fahrer, Lageristen, Disponenten" },
  { icon: "🏠", name: "Immobilien", detail: "Makler, Verwalter, Berater" },
  { icon: "💼", name: "Dienstleistungen", detail: "Vertrieb, Büro, IT" },
  { icon: "🛒", name: "Einzelhandel", detail: "Filialleiter, Verkäufer" },
];

const performanceTestimonials = [
  {
    name: "Anton Specht",
    role: "CEO – Specht Immobilien",
    from: "Frankfurt",
    to: "Deutschland",
    img: "/assets/Anton.png",
    review: "Dank TalentSuite konnten wir in kürzester Zeit qualifizierte Immobilienberater über Social Recruiting gewinnen. Die Prozesse laufen sauber, messbar und bringen genau die Kandidaten, die wirklich zu uns passen.",
  },
  {
    name: "Jessica Pacha-Mollé",
    role: "Head of HR – Heizkurier GmbH",
    from: "Köln/Bonn",
    to: "Deutschland",
    img: "/assets/Jessicas.png",
    review: "Mit TalentSuite haben wir unsere Employer Brand spürbar gestärkt. Durch hochwertigen Content und gezielte Performance-Recruiting-Kampagnen setzen sie unsere Vorstellungen punktgenau um.",
  },
  {
    name: "Joel Schüssler",
    role: "COO – Just Virtual Food Brands",
    from: "Zürich",
    to: "Schweiz",
    img: "/assets/Joel.png",
    review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Marketingabteilung komplett sparen. Ob Contentproduktion, Performance Recruiting oder Neukundengewinnung – alle Bereiche liefern konstant starke Ergebnisse.",
  },
  {
    name: "Viktor Brehm",
    role: "CEO – Schlafplatz",
    from: "München",
    to: "Deutschland",
    img: "/assets/Viktior.png",
    review: "TalentSuite hat unsere Personalgewinnung komplett digitalisiert. Innerhalb weniger Wochen hatten wir qualifizierte Bewerbungen – planbar und kosteneffizient.",
  },
];

const faqData = [
  {
    question: "Was ist Performance Recruiting und wie funktioniert es?",
    answer: "Performance Recruiting ist eine moderne Methode der Personalgewinnung, bei der gezielte Werbeanzeigen auf Social Media Plattformen wie Facebook, Instagram, TikTok und LinkedIn geschaltet werden. Anders als bei klassischen Stellenanzeigen auf Jobbörsen erreichen wir damit auch passive Kandidat:innen – also Menschen, die nicht aktiv auf Jobsuche sind, aber offen für ein besseres Angebot. Über einen mobiloptimierten Bewerberfunnel können sich Interessent:innen in unter 60 Sekunden bewerben. Das Ergebnis: Mehr qualifizierte Bewerbungen in kürzerer Zeit, zu planbaren Kosten.",
  },
  {
    question: "Was kostet Performance Recruiting bei TalentSuite?",
    answer: "Die Kosten setzen sich aus zwei Bausteinen zusammen: dem Agenturhonorar für Strategie, Kampagnenerstellung und laufende Optimierung sowie dem Werbebudget für die Social Media Plattformen (z.B. Meta oder TikTok). In einem kostenlosen Erstgespräch analysieren wir deine Situation und erstellen ein individuelles Angebot. Die meisten unserer Kunden sehen bereits in den ersten 2–4 Wochen messbare Ergebnisse – die Investition rechnet sich in der Regel durch die eingesparten Kosten im Vergleich zu Headhuntern oder dauerhaft unbesetzten Stellen.",
  },
  {
    question: "Wie schnell erhalten wir erste Bewerbungen?",
    answer: "Erfahrungsgemäß gehen bei den meisten Kampagnen bereits in der ersten Woche die ersten qualifizierten Bewerbungen ein. Nach 2–4 Wochen sind die Kampagnen durchoptimiert und liefern konstant Ergebnisse. Die volle Performance mit den niedrigsten Kosten pro Bewerbung erreichen wir in der Regel nach 6–8 Wochen, wenn genug Daten für die algorithmische Optimierung vorhanden sind.",
  },
  {
    question: "Funktioniert Performance Recruiting auch im Handwerk und in ländlichen Regionen?",
    answer: "Ja – gerade im Handwerk und in ländlichen Regionen ist Performance Recruiting besonders wirksam, weil die Konkurrenz auf Social Media geringer ist als in Großstädten. Handwerker, Pflegekräfte oder Produktionsmitarbeiter sind kaum auf LinkedIn oder Jobbörsen aktiv, verbringen aber täglich Zeit auf Facebook, Instagram und TikTok. Genau dort sprechen wir sie an. Wir betreuen erfolgreich SHK-Betriebe, Elektrofirmen, Bäckereien, Pflegeeinrichtungen und viele weitere Unternehmen im ländlichen Raum.",
  },
  {
    question: "Was unterscheidet TalentSuite von anderen Performance Recruiting Agenturen?",
    answer: "Drei Dinge: Erstens sind wir eine Fullservice-Agentur – wir übernehmen nicht nur die Anzeigen, sondern auch Content-Produktion, Employer Branding Videos und Landingpage-Entwicklung. Zweitens arbeiten wir zu 100% datenbasiert mit transparentem Reporting – du siehst jederzeit, was eine Bewerbung kostet und welche Kanäle performen. Drittens betreuen wir Unternehmen im gesamten DACH-Raum und kennen die Besonderheiten verschiedener Branchen von Handwerk über Pflege bis E-Commerce.",
  },
  {
    question: "Wie viele Bewerbungen kann ich realistisch erwarten?",
    answer: "Das hängt von mehreren Faktoren ab: Branche, Region, Attraktivität des Angebots und Werbebudget. Als Richtwert: Unsere Kunden erhalten im Durchschnitt 30–80 qualifizierte Bewerbungen pro Monat bei einem mittleren Werbebudget. Für manche Positionen in gefragten Regionen sind auch über 100 Bewerbungen pro Monat möglich. Wichtiger als die reine Anzahl ist die Qualität – durch unsere Pre-Qualifikation im Bewerberfunnel filtern wir unpassende Kandidat:innen automatisch heraus.",
  },
  {
    question: "Brauchen wir eine eigene HR-Abteilung, um mit TalentSuite zu arbeiten?",
    answer: "Nein. Viele unserer Kunden sind mittelständische Unternehmen ohne eigene HR-Abteilung. Wir übernehmen den gesamten Prozess von der Kampagnenerstellung bis zur Bewerberweiterleitung. Du erhältst vorqualifizierte Bewerbungen direkt per E-Mail oder in dein Bewerber-Tool und musst nur noch die Vorstellungsgespräche führen. Optional unterstützen wir auch bei der Vorauswahl und beim Employer Branding.",
  },
  {
    question: "Auf welchen Plattformen schaltet TalentSuite Recruiting-Kampagnen?",
    answer: "Wir nutzen die Plattformen, auf denen sich deine Zielgruppe aufhält. Die wichtigsten Kanäle für Performance Recruiting sind Meta (Facebook & Instagram), TikTok und LinkedIn. Für gewerbliche Berufe wie Handwerk, Pflege oder Produktion performen Meta und TikTok am besten. Für Fach- und Führungskräfte setzen wir verstärkt auf LinkedIn. Google Ads ergänzen wir bei Bedarf, um aktiv Suchende abzuholen.",
  },
];

const PerformanceRecruiting = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Performance Recruiting",
    "provider": {
      "@type": "MarketingAgency",
      "name": "TalentSuite",
      "url": "https://talentsuite.io",
      "areaServed": ["DE", "AT", "CH"],
    },
    "description": "Performance Recruiting Agentur für den DACH-Raum: Qualifizierte Bewerbungen über Meta, TikTok & LinkedIn Ads. Social Media Recruiting mit System für Handwerk, Pflege, Gastronomie und mehr.",
    "serviceType": "Performance Recruiting",
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
        <title>Performance Recruiting Agentur | Social Media Recruiting | TalentSuite</title>
        <meta name="description" content="Performance Recruiting mit System: Qualifizierte Bewerbungen über Meta, TikTok & LinkedIn Ads. 50+ Unternehmen im DACH-Raum vertrauen TalentSuite. Jetzt kostenloses Erstgespräch buchen." />
        <meta name="keywords" content="Performance Recruiting, Social Media Recruiting, Personalgewinnung, Bewerberfunnel, Recruiting Agentur, Fachkräftemangel, Mitarbeiter finden Handwerk, Pflegekräfte gewinnen, Social Recruiting DACH" />
        <link rel="canonical" href="https://talentsuite.io/services/performanceRecruiting" />
        <meta property="og:title" content="Performance Recruiting Agentur | TalentSuite" />
        <meta property="og:description" content="Qualifizierte Bewerbungen über Social Media – datenbasiert, messbar, planbar. 50+ Unternehmen vertrauen uns." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talentsuite.io/services/performanceRecruiting" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <MainSection
        title={<>Dein Recruiting braucht<br />kein Glück – sondern System.</>}
        description="Wir generieren qualifizierte Bewerbungen über Social Media – mit datenbasierten Kampagnen, mobiloptimierten Bewerberfunnels und transparentem Reporting. Für Unternehmen im gesamten DACH-Raum."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
        imageSrc="/assets/services-img.png"
        imageAlt="Performance Recruiting Agentur – Qualifizierte Bewerbungen über Social Media Ads"
      />

      <Traditional
        title="Klassisches Recruiting funktioniert nicht mehr."
        description="Stellenanzeigen auf Jobbörsen erreichen nur 15–20% der Kandidat:innen – diejenigen, die aktiv suchen. Die restlichen 80% sind passive Kandidat:innen, die über Social Media erreichbar sind. Ohne Performance Recruiting verschenkst du das größte Potenzial auf dem Arbeitsmarkt."
        data={performanceData}
      />

      <Solution
        title="Unsere Lösung: Performance Recruiting mit System"
        description="Wir bringen deine offenen Stellen dorthin, wo sich deine Zielgruppe täglich aufhält – in Social Feeds auf dem Smartphone. Mit einem erprobten 4-Stufen-System, das bereits bei über 50 Unternehmen funktioniert."
        items={performanceSolutions}
      />

      <Industries
        title="Branchen, die wir erfolgreich betreuen"
        description="Unser Performance Recruiting System funktioniert branchenübergreifend. Wir passen Strategie, Ansprache und Kanäle individuell an deine Zielgruppe an."
        industries={industries}
      />

      <Steps title={pageTitle} stepsData={steps} />

      <Testimonials
        title="Das sagen unsere Kunden"
        description="Echte Ergebnisse aus verschiedenen Branchen – von Immobilien über Energie bis Food-Tech."
        link="https://calendly.com/talentsuite"
        linkText="Auch so recruitern? Jetzt Termin sichern"
        testimonialData={performanceTestimonials}
      />

      <ServiceFaqs
        title="Häufige Fragen zu Performance Recruiting"
        description="Alles, was du über Performance Recruiting wissen musst – von Kosten über Ergebnisse bis zur Umsetzung."
        faqData={faqData}
        accordionId="prFaq"
      />

      <Appointment
        heading="Bereit für planbare Bewerbungen? In einem kostenlosen Erstgespräch zeigen wir dir, wie Performance Recruiting für dein Unternehmen funktioniert."
        buttonText="Jetzt kostenloses Erstgespräch buchen"
        buttonLink="https://calendly.com/talentsuite"
      />
    </>
  );
};

export default PerformanceRecruiting;
