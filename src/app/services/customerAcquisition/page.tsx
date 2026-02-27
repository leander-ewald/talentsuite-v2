import type { Metadata } from "next";
import MainSection from "@/components/services/MainSection";
import Steps from "@/components/services/Steps";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import Solution from "@/components/services/Solution";
import Traditional from "@/components/services/Traditional";
import Appointment from "@/components/services/Appointment";

export const metadata: Metadata = {
  title: "Neukundengewinnung Agentur | Digitale Leadgenerierung | TalentSuite",
  description: "Digitale Neukundengewinnung mit System: Meta Ads, Google Ads, LinkedIn & Funnel-Strategien. Planbar neue Kunden gewinnen. Jetzt kostenloses Erstgespräch.",
  alternates: { canonical: "https://talentsuite.io/services/customerAcquisition" },
};

const traditionalData = [
  { img: "/assets/review-img.png", name: "Fehlende Leadstrategie" },
  { img: "/assets/review-img.png", name: "Abhängigkeit von persönlichen Kontakten" },
  { img: "/assets/review-img.png", name: "Teure oder ineffiziente Maßnahmen" },
  { img: "/assets/review-img.png", name: "Vertrieb arbeitet mit unqualifizierten Leads" },
];

const solutions = [
  { number: "01", title: "Zielgruppen- & Marktanalyse", desc: "Wer ist dein perfekter Kunde – und wie denken, sprechen, handeln sie?" },
  { number: "02", title: "Positionierung & Messaging", desc: "Was macht dich einzigartig – und warum sollte man bei dir kaufen?" },
  { number: "03", title: "Digitale Kampagnen", desc: "Meta, Google, TikTok oder LinkedIn – dort, wo deine Kunden sind." },
  { number: "04", title: "Landingpages & Funnelaufbau", desc: "Mit klarer Nutzerführung zur qualifizierten Anfrage – messbar und skalierbar." },
];

const steps = [
  { image: "/assets/step1.svg", desc: "Planbarer Leadflow mit hoher Abschlusswahrscheinlichkeit" },
  { image: "/assets/step2.svg", desc: "Höhere Conversion Rates durch optimierte Funnel" },
  { image: "/assets/step3.svg", desc: "Weniger Kaltakquise, mehr echte Interessenten" },
  { image: "/assets/step4.svg", desc: "Klar messbare KPIs vom Klick bis zum Abschluss" },
];

const testimonials = [
  { name: "Viktor Brehm", role: "CEO – Schlafplatz", from: "München", to: "Deutschland", img: "/assets/Viktior.png", review: "Mit TalentSuite haben wir unser Wachstum systematisiert: neue Kundenanfragen täglich, automatisierte Abläufe und eine Webplattform, die skaliert. Die Zusammenarbeit ist strukturiert, effizient und absolut zuverlässig." },
  { name: "Joel Schüssler", role: "COO – Just Virtual Food Brands", from: "Zürich", to: "Schweiz", img: "/assets/Joel.png", review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Marketingabteilung komplett sparen. Alle Bereiche liefern konstant starke Ergebnisse – von Content bis Neukundengewinnung." },
  { name: "Anton Specht", role: "CEO – Specht Immobilien", from: "Frankfurt", to: "Deutschland", img: "/assets/Anton.png", review: "Dank TalentSuite konnten wir in kürzester Zeit qualifizierte Immobilienberater gewinnen. Die Prozesse laufen sauber und messbar." },
];

export default function CustomerAcquisitionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Digitale Neukundengewinnung", provider: { "@type": "MarketingAgency", name: "TalentSuite", url: "https://talentsuite.io", areaServed: ["DE", "AT", "CH"] }, description: "Performancebasierte Neukundengewinnung mit digitalen Kampagnen, Funnels und Lead-Automatisierung.", serviceType: "Neukundengewinnung" }) }} />
      <MainSection title={<>Kunden gewinnen geht nicht<br />mehr über Kaltakquise.</>} description="Wir entwickeln digitale Kundengewinnungsstrecken, die genau deine Zielgruppe ansprechen – messbar, automatisiert und planbar skalierbar." buttonText="Jetzt Strategiegespräch vereinbaren" imageSrc="/assets/services-img.png" imageAlt="Neukundengewinnung – Digitale Leadgenerierung mit System" />
      <Traditional title="Deine Wunschkunden sind online – aber nicht auf deinem Radar." description="Viele Unternehmen haben starke Produkte, aber keine funktionierende Pipeline für neue Kundenanfragen. Ohne Sichtbarkeit, ohne klare Botschaft und ohne digitalen Funnel bleibt Wachstum Zufall." data={traditionalData} />
      <Solution title="Unsere Lösung: Performancebasierte Neukundengewinnung" description="Wir entwickeln skalierbare Prozesse zur Kundengewinnung, die auf Daten, Psychologie und digitaler Sichtbarkeit basieren." items={solutions} />
      <Steps title="Was du erreichst" stepsData={steps} />
      <ServiceTestimonials title="Kundenstimmen" description="Was unsere Kunden über die Zusammenarbeit sagen – echte Ergebnisse aus verschiedenen Branchen." link="https://calendar.app.google/QFoADWcRwwuYUoky8" linkText="Auch so wachsen? Jetzt Termin sichern" testimonialData={testimonials} />
      <Appointment heading="Wir zeigen dir in einem unverbindlichen Gespräch, wie du neue Kunden mit System gewinnst – ganz ohne Kaltakquise." buttonText="Jetzt Erstgespräch buchen" />
    </>
  );
}
