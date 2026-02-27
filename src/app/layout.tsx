import type { Metadata } from "next";
import { Poppins, Rajdhani, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import MetaPixel from "@/components/MetaPixel";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TalentSuite | Performance Recruiting, Neukundengewinnung & E-Commerce Agentur",
  description:
    "TalentSuite ist deine Fullservice-Agentur für Performance Recruiting, Neukundengewinnung, E-Commerce & Social Media. 50+ Unternehmen vertrauen uns. Jetzt kostenlose Potenzialanalyse sichern.",
  metadataBase: new URL("https://talentsuite.io"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "TalentSuite | Performance Recruiting & Neukundengewinnung",
    description:
      "Fullservice-Agentur für Performance Recruiting, Neukundengewinnung, E-Commerce & Social Media im DACH-Raum.",
    url: "https://talentsuite.io",
    siteName: "TalentSuite",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TalentSuite",
    url: "https://talentsuite.io",
    description:
      "Performance Recruiting Agentur für den DACH-Raum. Wir finden Fachkräfte über Social Media — planbar, messbar, ohne Jobbörsen.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Iserlohn",
      addressRegion: "NRW",
      addressCountry: "DE",
    },
    areaServed: [
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Switzerland" },
    ],
    serviceType: [
      "Performance Recruiting",
      "Neukundengewinnung",
      "E-Commerce",
      "Social Media Management",
      "Content Produktion",
      "Web Development",
    ],
    sameAs: [
      "https://www.instagram.com/talentsuite.io/",
      "https://www.facebook.com/profile.php?id=100095016041438",
      "https://www.linkedin.com/company/talentsuiteio/",
    ],
  };

  return (
    <html lang="de" className={`${poppins.variable} ${rajdhani.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <MetaPixel />
        <CookieConsent />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7J9WLXF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script id="gtm-consent-script" strategy="afterInteractive">
          {`
            function loadGTM(){if(window.__gtmLoaded)return;window.__gtmLoaded=true;
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N7J9WLXF');}
            if(document.cookie.indexOf('cookie_consent=accepted')!==-1){loadGTM();}
            window.addEventListener('cookieConsentAccepted',loadGTM);
          `}
        </Script>
      </body>
    </html>
  );
}
