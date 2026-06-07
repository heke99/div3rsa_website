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
          <h1>Vilken typ av hemsida vill du ha?</h1>
          <p className="page-lead">Välj en riktning som passar företagets varumärke, budget och nästa steg.</p>
        </div>
      </section>

      <Section>
        <div className="card-grid three">
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
