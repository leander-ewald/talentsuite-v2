"use client";

export default function TrustedBrands() {
  const allLogos = [
    { src: "/logos/4D-Elements.svg", alt: "4D Elements" },
    { src: "/logos/cre8ify.svg", alt: "Cre8ify" },
    { src: "/logos/deutsche.svg", alt: "Deutsche" },
    { src: "/logos/hk_logo.svg", alt: "HK Logo" },
    { src: "/logos/Jonuschies.svg", alt: "Jonuschies" },
    { src: "/logos/lds.svg", alt: "LDS" },
    { src: "/logos/lebenswert.svg", alt: "Lebenswert" },
    { src: "/logos/Rohrer-Group.svg", alt: "Rohrer Group" },
    { src: "/logos/Schlaf-Platz.svg", alt: "Schlaf-Platz" },
    { src: "/logos/SP.svg", alt: "SP" },
    { src: "/logos/Specht-Immobilien.svg", alt: "Specht Immobilien" },
    { src: "/logos/Culture_Station_Logo.svg", alt: "Culture Station" },
    { src: "/logos/frangipani-logo-300x158.svg", alt: "Frangipani" },
    { src: "/logos/Handyklinik-Iserlohn.svg", alt: "Handyklinik Iserlohn" },
    { src: "/logos/happy-buns.svg", alt: "Happy Buns" },
    { src: "/logos/IEC_Roosters-Logo.svg", alt: "Iserlohn Roosters" },
    { src: "/logos/Just-Virtual-Food-Brands.svg", alt: "Just Virtual Food Brands" },
    { src: "/logos/Kundenlogos.svg", alt: "Kundenlogos" },
    { src: "/logos/logo_Hagebaumarkt.svg", alt: "Hagebaumarkt" },
    { src: "/logos/Logo_UME_RLK.svg", alt: "UME RLK" },
    { src: "/logos/MAD_Logo.svg", alt: "MAD" },
    { src: "/logos/MD_Physio_Logo.svg", alt: "MD Physio" },
    { src: "/logos/menges.svg", alt: "Menges" },
    { src: "/logos/Pizza_logo.svg", alt: "Pizza Logo" },
    { src: "/logos/softwash-logo.svg", alt: "Softwash" },
    { src: "/logos/Volksbank_Logo.svg.svg", alt: "Volksbank" },
    { src: "/logos/Volvo_Logo.svg", alt: "Volvo" },
    { src: "/logos/walendzik.svg", alt: "Walendzik" },
  ];

  return (
    <section className="trusted_brands">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-10">
            <div className="titles text-center">
              <h2 className="text-center text-white mb-4">Diese Brands setzen auf uns.</h2>
              <img src="/assets/btm-bdr.svg" className="btm_bdr" alt="" aria-hidden="true" />
            </div>
          </div>
          <div className="col-12">
            <div className="brands-grid">
              {allLogos.map((logo, index) => (
                <div key={index} className="brand-item">
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
