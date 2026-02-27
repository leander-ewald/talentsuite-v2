import type { Metadata } from "next";
import MainSection from "@/components/services/MainSection";
import Steps from "@/components/services/Steps";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import Solution from "@/components/services/Solution";
import Traditional from "@/components/services/Traditional";
import Appointment from "@/components/services/Appointment";

export const metadata: Metadata = {
  title: "Webentwicklung Agentur | UX Design & SEO | TalentSuite",
  description: "Professionelle Webentwicklung: UX/UI Design, React & Next.js, SEO-Optimierung und Wartung. Websites, die überzeugen und konvertieren. Jetzt Beratung buchen.",
  alternates: { canonical: "https://talentsuite.io/services/webDevelopment" },
};

const traditionalData = [
  { img: "/assets/review-img.png", name: "Veraltetes Design, das nicht mehr überzeugt" },
  { img: "/assets/review-img.png", name: "Keine mobile Optimierung" },
  { img: "/assets/review-img.png", name: "Langsame Ladezeiten und schlechte Performance" },
  { img: "/assets/review-img.png", name: "Keine Conversion-Optimierung" },
];

const solutions = [
  { number: "01", title: "UX/UI Design & Konzeption", desc: "Nutzerzentriertes Design, das überzeugt und konvertiert – auf jedem Gerät." },
  { number: "02", title: "Webentwicklung & Programmierung", desc: "Moderne Technologien (React, Next.js, Shopify) für maximale Performance und Skalierbarkeit." },
  { number: "03", title: "SEO & Performance-Optimierung", desc: "Technisches SEO, Core Web Vitals und schnelle Ladezeiten für bessere Rankings." },
  { number: "04", title: "Wartung & Weiterentwicklung", desc: "Kontinuierliche Optimierung, Updates und Support – damit deine Website immer aktuell bleibt." },
];

const steps = [
  { image: "/assets/step1.svg", desc: "Professionelle Website, die Vertrauen schafft" },
  { image: "/assets/step2.svg", desc: "Bessere Rankings durch technisches SEO" },
  { image: "/assets/step3.svg", desc: "Höhere Conversion durch optimierte User Experience" },
  { image: "/assets/step4.svg", desc: "Zukunftssichere Technologie, die mitwächst" },
];

const testimonials = [
  { name: "Jan Röhrig", role: "Leitung Merchandise & E-Commerce – Iserlohn Roosters", from: "Iserlohn", to: "Deutschland", img: "/assets/jan.png", review: "TalentSuite hat unseren Onlineauftritt auf ein neues Level gehoben – von der Shopstruktur bis zur technischen Umsetzung. Das Team versteht es, Marken digital stark und verkaufsfähig zu machen." },
  { name: "Viktor Brehm", role: "CEO – Schlafplatz", from: "München", to: "Deutschland", img: "/assets/Viktior.png", review: "Mit TalentSuite haben wir unser Wachstum systematisiert: automatisierte Abläufe und eine Webplattform, die skaliert. Die Zusammenarbeit ist strukturiert, effizient und absolut zuverlässig." },
  { name: "Joel Schüssler", role: "COO – Just Virtual Food Brands", from: "Zürich", to: "Schweiz", img: "/assets/Joel.png", review: "Mit TalentSuite konnten wir uns als Startup den Aufbau einer eigenen Abteilung komplett sparen. Alle Bereiche liefern konstant starke Ergebnisse." },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Web Development", provider: { "@type": "MarketingAgency", name: "TalentSuite", url: "https://talentsuite.io", areaServed: ["DE", "AT", "CH"] }, description: "Professionelle Webentwicklung: UX/UI Design, React & Next.js Entwicklung, SEO-Optimierung und Wartung.", serviceType: "Webentwicklung" }) }} />
      <MainSection title={<>Deine Website ist dein<br />bester Vertriebler –<br />24/7.</>} description="Wir entwickeln performante, SEO-optimierte Websites, die Vertrauen schaffen und Besucher in Kunden verwandeln." buttonText="Jetzt Web-Beratung buchen" imageSrc="/assets/services-img.png" imageAlt="Webentwicklung – Moderne Websites mit React und Next.js" />
      <Traditional title="Deine Website verliert Kunden – jeden Tag." description="Eine veraltete, langsame oder schlecht strukturierte Website kostet dich täglich potenzielle Kunden. Besucher entscheiden in Sekunden, ob sie bleiben oder gehen. Ohne moderne Technik und klare Nutzerführung verlierst du Umsatz." data={traditionalData} />
      <Solution title="Unsere Lösung: Webentwicklung, die konvertiert" description="Wir entwickeln Websites, die nicht nur gut aussehen, sondern messbar performen – von der Konzeption über die Entwicklung bis zur SEO-Optimierung." items={solutions} />
      <Steps title="Was du von uns bekommst" stepsData={steps} />
      <ServiceTestimonials title="Kundenstimmen" description="Was unsere Kunden über die Web-Zusammenarbeit sagen – echte Ergebnisse aus verschiedenen Branchen." link="https://calendar.app.google/QFoADWcRwwuYUoky8" linkText="Auch eine bessere Website? Jetzt Termin sichern" testimonialData={testimonials} />
      <Appointment heading="Lass uns gemeinsam eine Website bauen, die Vertrauen schafft und Kunden gewinnt." buttonText="Jetzt Termin anfragen" />
    </>
  );
}
