"use client";

const serviceData = [
  {
    title: "Social Media Wachstum",
    desc: "Steigere deine Online-Präsenz mit gezielten Strategien, die Follower und Engagement erhöhen.",
    icon: "bi-graph-up",
  },
  {
    title: "Werbefilme",
    desc: "Erstelle fesselnde Kurzvideos, die Aufmerksamkeit erregen und auf allen Plattformen Ergebnisse liefern.",
    icon: "bi-camera-reels",
  },
  {
    title: "Performance Marketing",
    desc: "Optimiere dein Werbebudget mit datengetriebenen Kampagnen auf Meta und Google für maximalen ROI.",
    icon: "bi-bullseye",
  },
  {
    title: "Werbetexte und Social Strategien",
    desc: "Erstelle überzeugende Inhalte und strategische Botschaften, die bei deiner Zielgruppe Anklang finden.",
    icon: "bi-pencil-square",
  },
  {
    title: "Neukundengewinnung",
    desc: "Werde online sichtbar und baue nachhaltige Geschäftsbeziehungen mit potenziellen Neukunden auf.",
    icon: "bi-people",
  },
];

const socials = [
  { icon: "bi-tiktok" },
  { icon: "bi-youtube" },
  { icon: "bi-instagram" },
  { icon: "bi-facebook" },
  { icon: "bi-linkedin" },
];

export default function Campaigns() {
  return (
    <section className="section relative" aria-label="Kampagnen">
      <div className="glow -bottom-32 left-1/2 -translate-x-1/2" />
      <div className="container relative z-10">
        {/* Social Icons Circle */}
        <div className="flex justify-center gap-4 mb-10">
          {socials.map((s, i) => (
            <div
              key={i}
              className="w-14 h-14 rounded-full bg-[rgba(27,152,224,0.06)] border border-[rgba(27,152,224,0.15)] flex items-center justify-center text-[var(--color-accent)] text-xl"
            >
              <i className={`bi ${s.icon}`} />
            </div>
          ))}
        </div>

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Wir entwickeln Kampagnen die performen</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.slice(0, 3).map((service, i) => (
            <div key={i} className="glass-card p-6">
              <div className="w-10 h-10 rounded-xl bg-[rgba(27,152,224,0.08)] flex items-center justify-center text-[var(--color-accent)] mb-4">
                <i className={`bi ${service.icon}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-[rgba(255,255,255,0.55)] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 sm:max-w-[calc(66.666%-8px)] mx-auto lg:max-w-none lg:grid-cols-2 lg:px-[16.666%]">
          {serviceData.slice(3).map((service, i) => (
            <div key={i + 3} className="glass-card p-6">
              <div className="w-10 h-10 rounded-xl bg-[rgba(27,152,224,0.08)] flex items-center justify-center text-[var(--color-accent)] mb-4">
                <i className={`bi ${service.icon}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-[rgba(255,255,255,0.55)] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
