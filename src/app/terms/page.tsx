import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | TalentSuite",
  description: "Allgemeine Geschäftsbedingungen (AGB) für Talentsuite",
};

export default function TermsAndConditions() {
  return (
    <>
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-10">
        <div className="container">
          <div className="text-center py-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Allgemeine Geschäftsbedingungen (AGB)</h1>
          </div>
        </div>
      </section>

      <section className="pt-3" style={{ paddingBottom: "4rem" }}>
        <div className="container">
          <div className="prose prose-invert max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">AGB für Talentsuite</h2>

            <p className="mb-4">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen, die von <strong>Talentsuite</strong> angeboten werden, einschließlich Performance Recruiting, Neukundengewinnung, Fullservice E-Commerce, Social Media Management, Content Produktion und Web Development.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">1. Vertragsschluss</h3>
              <p className="text-sm">
                Der Vertrag zwischen Talentsuite und dem Kunden kommt durch eine schriftliche Bestätigung, per E-Mail oder durch tatsächlichen Beginn der Leistung zustande.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">2. Leistungsbeschreibung</h3>
              <p className="text-sm">
                Talentsuite erbringt individuelle Dienstleistungen im Bereich digitales Marketing, Webentwicklung und E-Commerce. Der genaue Leistungsumfang wird im jeweiligen Angebot definiert.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">3. Pflichten des Kunden</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Bereitstellung notwendiger Informationen und Materialien</li>
                <li>Fristgerechte Freigaben und Rückmeldungen</li>
                <li>Zahlung der vereinbarten Vergütung</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">4. Vergütung</h3>
              <p className="text-sm">
                Die Vergütung richtet sich nach dem vereinbarten Angebot. Alle Preise verstehen sich netto zzgl. der gesetzlichen Mehrwertsteuer.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">5. Haftung</h3>
              <p className="text-sm">
                Talentsuite haftet nur für vorsätzliche oder grob fahrlässige Pflichtverletzungen. Eine Haftung für entgangenen Gewinn oder Folgeschäden ist ausgeschlossen.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">6. Datenschutz</h3>
              <p className="text-sm">
                Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{" "}
                <Link href="/datenschutz" style={{ color: "var(--color-accent)", textDecoration: "underline" }}>
                  Datenschutzerklärung
                </Link>.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">7. Schlussbestimmungen</h3>
              <p className="text-sm">
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist – soweit gesetzlich zulässig – Iserlohn.
              </p>
            </div>

            <p className="text-sm mt-6">
              Für Rückfragen zu unseren AGB erreichen Sie uns unter{" "}
              <a href="mailto:info@talentsuite.io" style={{ color: "var(--color-accent)", textDecoration: "underline" }}>
                info@talentsuite.io
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
