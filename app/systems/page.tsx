import type { Metadata } from "next";
import { CaseCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Systems",
  description: "Selected products and platforms developed by Div3rsa, including Gridex, Coordiqo, Bovaro and DealFlowIQ.",
};

export default function SystemsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="aurora aurora-one" />
        <div className="container narrow reveal">
          <p className="eyebrow">Our Systems</p>
          <h1>Selected digital products built by Div3rsa.</h1>
          <p className="page-lead">
            Examples of platforms, products and systems developed or operated by Div3rsa. Selected products and
            platforms developed by Div3rsa are shown below.
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
