import Link from "next/link";

interface AppointmentProps {
  heading: string;
  buttonText: string;
  buttonLink?: string;
}

export default function Appointment({ heading, buttonText, buttonLink = "https://calendar.app.google/QFoADWcRwwuYUoky8" }: AppointmentProps) {
  return (
    <section className="section relative overflow-hidden" aria-label="Termin vereinbaren">
      <div className="glow top-0 left-1/2 -translate-x-1/2" />
      <div className="container relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">{heading}</h2>
        <Link href={buttonLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
          {buttonText}
          <i className="bi bi-arrow-up-right" />
        </Link>
        <p className="text-sm text-[rgba(255,255,255,0.4)] mt-6">
          ✓ 100% kostenlos &nbsp; ✓ Unverbindlich &nbsp; ✓ Nächster Termin in 48h
        </p>
      </div>
    </section>
  );
}
