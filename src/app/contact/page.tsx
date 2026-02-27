import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | TalentSuite",
  description: "Kontaktieren Sie TalentSuite",
};

export default function Contact() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="glow -top-32 left-1/2 -translate-x-1/2" />
        <div className="container relative z-10 text-center max-w-2xl mx-auto">
          <span className="section-label mx-auto">Kontakt</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Contact
          </h1>
          <p className="text-lg text-[rgba(255,255,255,0.6)] mb-8">
            info@talentsuite.io
          </p>
          <a
            href="https://calendar.app.google/QFoADWcRwwuYUoky8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            Erstgespräch vereinbaren
            <i className="bi bi-arrow-up-right" />
          </a>
        </div>
      </section>
    </>
  );
}
