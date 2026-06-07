import type { Metadata } from "next";
import { CaseCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projekt",
  description:
    "Utvalda digitala produkter och plattformar utvecklade av Div3rsa, bland annat Gridex, Coordiqo, Bovaro och DealFlowIQ.",
};

export default function SystemsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="aurora aurora-one" />
        <div className="container narrow reveal">
          <p className="eyebrow">Projekt</p>
          <h1>Digitala produkter byggda av Div3rsa.</h1>
          <p className="page-lead">
            Här visas exempel på plattformar, system och produktkoncept som Div3rsa bygger eller driver.
          </p>
        </div>
      </section>

      <Section>
        <div className="case-grid">
          {caseStudies.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
