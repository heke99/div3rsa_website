import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { aboutValues, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Div3rsa AB, a Swedish development company building websites, systems, apps and SaaS platforms.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="aurora aurora-one" />
        <div className="container narrow reveal">
          <p className="eyebrow">About Div3rsa</p>
          <h1>We build digital solutions with the business in focus.</h1>
          <p className="page-lead">
            Div3rsa AB is a Swedish development company that builds modern websites, web apps, internal systems and SaaS
            platforms.
          </p>
        </div>
      </section>

      <Section>
        <div className="two-column">
          <div className="rich-copy reveal">
            <p>
              We combine technical development with business understanding to create solutions that do not only look
              good, but help companies sell more, work smarter and grow faster.
            </p>
            <p>
              We work with everything from simple company websites to advanced systems with customer portals, admin
              dashboards, automation, payments, databases and integrations.
            </p>
            <ButtonLink href="/contact">Start a project discussion</ButtonLink>
          </div>
          <div className="company-card reveal">
            <h2>{company.name}</h2>
            <p>Org.nr: {company.orgNumber}</p>
            <a href={"mailto:" + company.email}>{company.email}</a>
          </div>
        </div>
      </Section>

      <Section eyebrow="Values" title="How we think about digital products">
        <div className="card-grid three">
          {aboutValues.map((value) => (
            <article className="glass-card reveal" key={value}>
              <h3>{value}</h3>
              <p>
                Every solution should have a clear purpose, a reliable technical foundation and a user experience that
                supports real work.
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
