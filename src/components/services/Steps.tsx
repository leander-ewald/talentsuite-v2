"use client";

interface StepItem {
  image: string;
  desc: string;
}

interface StepsProps {
  title: string;
  stepsData: StepItem[];
}

export default function Steps({ title, stepsData }: StepsProps) {
  return (
    <section className="section" aria-label={title}>
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepsData.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[rgba(27,152,224,0.08)] border border-[rgba(27,152,224,0.2)] flex items-center justify-center">
                <img src={step.image} alt={step.desc} loading="lazy" className="w-8 h-8" />
              </div>
              <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
