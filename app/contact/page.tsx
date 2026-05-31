import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Div3rsa AB to discuss a website, web app, customer portal, SaaS platform, automation workflow or digital system.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="aurora aurora-one" />
        <div className="container narrow reveal">
          <p className="eyebrow">Contact</p>
          <h1>Contact us</h1>
          <p className="page-lead">
            Do you want to build a website, app, portal or a complete system? Send us an email and we will review your
            needs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column contact-layout">
          <div className="contact-info reveal">
            <h2>Talk to Div3rsa</h2>
            <p>Email: <a href={"mailto:" + company.email}>{company.email}</a></p>
            <p>Company: {company.name}</p>
            <p>Organization number: {company.orgNumber}</p>
            <ButtonLink href={"mailto:" + company.email}>Email Div3rsa</ButtonLink>
          </div>
          <ContactForm />
        </div>
      </section>

      <CTASection />
    </>
  );
}
