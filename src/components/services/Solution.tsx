"use client";

interface SolutionItem {
  number: string;
  title: string;
  desc: string;
}

interface SolutionProps {
  title: string;
  description: string;
  items: SolutionItem[];
}

export default function Solution({ title, description, items }: SolutionProps) {
  return (
    <section className="section relative" aria-label="Unsere Lösung">
      <div className="glow -bottom-32 -left-32" />
      <div className="container relative z-10">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-[rgba(255,255,255,0.6)] leading-relaxed">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="glass-card p-6">
              <span className="block text-3xl font-bold text-[var(--color-accent)] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {item.number}
              </span>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[rgba(255,255,255,0.55)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
