import type { Metadata } from "next";
import { TextCard, PackageCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { processSteps, services, solutionPackages, techItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "System development, websites, web apps, customer portals, SaaS platforms, automation and AI workflows by Div3rsa AB.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="aurora aurora-two" />
        <div className="container narrow reveal">
          <p className="eyebrow">Services</p>
          <h1>From idea to finished digital product.</h1>
          <p className="page-lead">
            Div3rsa builds websites, systems, apps, portals, SaaS products and automation workflows for companies that
            want a serious digital foundation.
          </p>
          <ButtonLink href="/contact">Start Project</ButtonLink>
        </div>
      </section>

      <Section>
        <div className="card-grid three">
          {services.map((service) => (
            <TextCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Solution packages" title="Typical solutions we build">
        <div className="package-grid">
          {solutionPackages.map((item) => (
            <PackageCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="How we work.">
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
        eyebrow="Technology"
        title="Modern technology behind every solution"
        intro="Our solutions are built with modern web technology and a structure that can grow with your business."
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
