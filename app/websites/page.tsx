import type { Metadata } from "next";
import { StyleCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { growthSteps, websiteStyles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hemsidor",
  description:
    "Välj mellan premium 3D, enkel informationssida eller modern företagshemsida byggd av Div3rsa AB.",
};

export default function WebsitesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="aurora aurora-two" />
        <div className="container narrow reveal">
          <p className="eyebrow">Hemsidor</p>
          <h1>Tre hemsidestilar. En tydlig väg framåt.</h1>
          <p className="page-lead">Jämför 3D / Wow, Business och Simple så blir det enklare att välja rätt nivå för varumärke, budget och mål.</p>
        </div>
      </section>

      <Section>
        <div className="style-intro-panel reveal">
          <div>
            <strong>3D / Wow</strong>
            <span>Visuell, premium och minnesvärd.</span>
          </div>
          <div>
            <strong>Business</strong>
            <span>Modern, seriös och säljande.</span>
          </div>
          <div>
            <strong>Simple</strong>
            <span>Ren, snabb och lätt att förstå.</span>
          </div>
        </div>
        <div className="card-grid three style-comparison-grid">
          {websiteStyles.map((style) => (
            <StyleCard key={style.title} item={style} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Skalbar grund"
        title="Börja med hemsida. Bygg vidare till system."
        intro="Div3rsa kan bygga hemsidan som första steget i en större digital grund med portal, dashboard eller SaaS senare."
      >
        <div className="growth-panel reveal">
          {growthSteps.map((step, index) => (
            <div className="growth-step" key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
        <div className="center-actions">
          <ButtonLink href="/contact">Starta digitalt projekt</ButtonLink>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
