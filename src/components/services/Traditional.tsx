"use client";

interface TraditionalItem {
  img: string;
  name: string;
}

interface TraditionalProps {
  title: string;
  description: string;
  data: TraditionalItem[];
}

export default function Traditional({ title, description, data }: TraditionalProps) {
  return (
    <section className="section" aria-label="Herausforderungen">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            {data.map((item, i) => (
              <div key={i} className="glass-card p-5 text-center">
                <img src={item.img} alt={item.name} loading="lazy" className="w-12 h-12 rounded-full mx-auto mb-3 object-cover" />
                <h3 className="text-sm font-medium text-[rgba(255,255,255,0.8)]">{item.name}</h3>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{title}</h2>
            <p className="text-lg text-[rgba(255,255,255,0.6)] leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
