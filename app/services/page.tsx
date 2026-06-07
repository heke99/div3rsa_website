import type { Metadata } from "next";
import { TextCard, PackageCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { processSteps, services, solutionPackages, techItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Div3rsa AB bygger hemsidor, webbappar, kundportaler, adminsystem, SaaS-plattformar, automation och AI-redo flöden.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="aurora aurora-two" />
        <div className="container narrow reveal">
          <p className="eyebrow">Tjänster</p>
          <h1>Från idé till färdig digital lösning.</h1>
          <p className="page-lead">
            Vi hjälper företag bygga hemsidor, webbappar, portaler, adminsystem och automation som känns professionella
            och går att växa med.
          </p>
          <ButtonLink href="/contact">Starta projekt</ButtonLink>
        </div>
      </section>

      <Section>
        <div className="card-grid three">
          {services.map((service) => (
            <TextCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Paket" title="Vanliga lösningar vi bygger">
        <div className="package-grid">
          {solutionPackages.map((item) => (
            <PackageCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="Så arbetar vi">
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-step reveal" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Teknik"
        title="Modern grund bakom varje lösning"
        intro="Vi bygger med en teknisk struktur som kan växa när företaget får fler kunder, fler användare eller fler processer."
      >
        <div className="tech-cloud reveal">
          {techItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
