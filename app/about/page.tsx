import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { aboutValues, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Om Div3rsa",
  description:
    "Div3rsa AB är ett svenskt utvecklingsbolag som bygger hemsidor, webbappar, kundportaler, system och SaaS-plattformar.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="aurora aurora-one" />
        <div className="container narrow reveal">
          <p className="eyebrow">Om Div3rsa</p>
          <h1>Vi bygger digitala lösningar med affären i fokus.</h1>
          <p className="page-lead">
            Div3rsa AB hjälper företag att gå från idé till fungerande digital produkt: hemsida, portal, system eller SaaS.
          </p>
        </div>
      </section>

      <Section>
        <div className="two-column">
          <div className="rich-copy reveal">
            <p>
              Vi kombinerar teknisk utveckling med affärsförståelse. Målet är inte bara att bygga något snyggt, utan
              något som hjälper företaget sälja mer, arbeta smartare och växa på en stabil grund.
            </p>
            <p>
              Vi arbetar med allt från tydliga företagshemsidor till avancerade system med kundportaler, adminpaneler,
              automation, betalflöden, databaser och integrationer.
            </p>
            <ButtonLink href="/contact">Starta en projektgenomgång</ButtonLink>
          </div>
          <div className="company-card reveal">
            <h2>{company.name}</h2>
            <p>Org.nr: {company.orgNumber}</p>
            <a href={"mailto:" + company.email}>{company.email}</a>
          </div>
        </div>
      </Section>

      <Section eyebrow="Vårt sätt att tänka" title="Digitala produkter ska vara tydliga, trygga och skalbara">
        <div className="card-grid three">
          {aboutValues.map((value) => (
            <article className="glass-card reveal" key={value}>
              <h3>{value}</h3>
              <p>
                Varje lösning ska ha ett tydligt syfte, en stabil teknisk grund och en användarupplevelse som stödjer
                verkligt arbete.
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
