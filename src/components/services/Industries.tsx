"use client";

interface Industry {
  icon: string;
  name: string;
  detail?: string;
}

interface IndustriesProps {
  title: string;
  description?: string;
  industries: Industry[];
}

export default function Industries({ title, description, industries }: IndustriesProps) {
  return (
    <section className="section" aria-label="Branchen">
      <div className="container">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          {description && <p className="text-[rgba(255,255,255,0.6)] leading-relaxed">{description}</p>}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {industries.map((ind, i) => (
            <div key={i} className="glass-card p-4 text-center">
              <div className="text-3xl mb-2">{ind.icon}</div>
              <h3 className="text-sm font-semibold">{ind.name}</h3>
              {ind.detail && <p className="text-xs text-[rgba(255,255,255,0.5)] mt-1">{ind.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
