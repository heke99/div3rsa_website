import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { aboutValues, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Om Div3rsa",
  description:
    "Div3rsa AB är ett svenskt produkt- och utvecklingsbolag som bygger SaaS-plattformar, verksamhetssystem och digitala produkter.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="aurora aurora-one" />
        <div className="container narrow reveal">
          <p className="eyebrow">Om Div3rsa</p>
          <h1>Vi bygger digitala produkter som håller ihop hela verksamheten.</h1>
          <p className="page-lead">
            Div3rsa AB utvecklar egna system och hjälper företag gå från ett konkret operativt behov till en fungerande, skalbar produkt.
          </p>
        </div>
      </section>

      <Section>
        <div className="two-column">
          <div className="rich-copy reveal">
            <p>
              Vi kombinerar systemutveckling, produktdesign och affärsförståelse. Målet är inte att lägga till så många funktioner som möjligt, utan att skapa ett tydligt system där användare, data och arbetsflöden hänger ihop.
            </p>
            <p>
              Våra produkter och projekt omfattar bland annat ekonomi, elhandel, e-signering, CRM, transport, planering och fastighet. Samma grundprincip gäller överallt: stabil datamodell, tydliga roller, bra användarupplevelse och möjlighet att integrera med omvärlden.
            </p>
            <ButtonLink href="/contact">Starta en projektgenomgång</ButtonLink>
          </div>
          <div className="company-card reveal">
            <span className="case-label">Svenskt utvecklingsbolag</span>
            <h2>{company.name}</h2>
            <p>Org.nr: {company.orgNumber}</p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </Section>

      <Section eyebrow="Vårt sätt att tänka" title="Tydlig produkt. Stark teknisk grund.">
        <div className="card-grid three">
          {aboutValues.map((value) => (
            <article className="glass-card reveal" key={value}>
              <h3>{value}</h3>
              <p>Varje lösning ska lösa ett verkligt behov, vara enkel att arbeta i och kunna utvecklas när verksamheten växer.</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
