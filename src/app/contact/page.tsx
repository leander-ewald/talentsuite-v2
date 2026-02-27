import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | TalentSuite",
  description: "Kontaktieren Sie TalentSuite",
};

export default function Contact() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h1>
              Contact<sub>(03)</sub>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
