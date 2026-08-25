import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta Attmos AB för hemsida, webbapp, kundportal, SaaS-plattform, automation eller digitalt system.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="aurora aurora-one" />
        <div className="container narrow reveal">
          <p className="eyebrow">Kontakt</p>
          <h1>Berätta vad du vill bygga.</h1>
          <p className="page-lead">
            Skicka en kort beskrivning så återkommer vi med nästa steg. Du behöver inte ha allt klart från början.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column contact-layout">
          <div className="contact-info reveal">
            <h2>Kontakta Attmos</h2>
            <p>Email: <a href={"mailto:" + company.email}>{company.email}</a></p>
            <p>Bolag: {company.name}</p>
            <p>Org.nr: {company.orgNumber}</p>
            <ButtonLink href={"mailto:" + company.email}>Maila Attmos</ButtonLink>
          </div>
          <ContactForm />
        </div>
      </section>

      <CTASection />
    </>
  );
}
