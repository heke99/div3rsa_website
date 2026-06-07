import type { Metadata } from "next";
import { StyleCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { growthSteps, websiteStyles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hemsidestilar - 3D, Business och Simple",
  description:
    "Jämför tre tydliga hemsidestilar från Div3rsa AB: Premium 3D / Wow, Business / Modern och Simple / Information.",
};

export default function WebsitesPage() {
  return (
    <>
      <section className="page-hero websites-hero">
        <div className="aurora aurora-two" />
        <div className="container two-column">
          <div className="reveal">
            <p className="eyebrow">Hemsidestilar</p>
            <h1>Tre stilar. Tre olika första intryck.</h1>
            <p className="page-lead">
              Välj om sidan ska kännas premium och visuell, seriös och B2B, eller enkel och snabb. Vi visar exempel direkt så beslutet blir enklare.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact">Få rekommendation</ButtonLink>
              <ButtonLink href="#styles" variant="secondary">
                Jämför stilar
              </ButtonLink>
            </div>
          </div>

          <div className="website-style-stack reveal" aria-label="Exempel på tre hemsidestilar">
            {websiteStyles.map((style) => (
              <div className={`website-style-strip website-style-strip-${style.slug}`} key={style.slug}>
                <span>{style.shortTitle}</span>
                <strong>{style.exampleTitle}</strong>
                <i />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="styles" eyebrow="Jämförelse" title="Välj känslan som passar ditt företag." intro="Alla cards visar en förenklad preview av hur stilen kan se ut. Innehållet anpassas sedan efter ditt företag.">
        <div className="style-intro-panel reveal">
          <div>
            <strong>3D / Wow</strong>
            <span>Premium, visuell och minnesvärd. För starkt första intryck.</span>
          </div>
          <div>
            <strong>Business</strong>
            <span>Modern, seriös och säljande. För B2B och tjänsteföretag.</span>
          </div>
          <div>
            <strong>Simple</strong>
            <span>Ren, snabb och trygg. För enkel information och kontakt.</span>
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
