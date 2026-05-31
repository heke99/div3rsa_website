import type { Metadata } from "next";
import { StyleCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { growthSteps, websiteStyles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Website Styles",
  description: "Choose between Premium 3D, Simple Information Website and Hybrid Modern Business website styles by Div3rsa AB.",
};

export default function WebsitesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="aurora aurora-two" />
        <div className="container narrow reveal">
          <p className="eyebrow">Website Styles</p>
          <h1>What type of website do you want?</h1>
          <p className="page-lead">Choose a direction that matches your company, brand and growth plans.</p>
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
        eyebrow="Growth foundation"
        title="Start with a website. Grow into a system."
        intro="Div3rsa can build the website as the first step in a wider digital product foundation."
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
          <ButtonLink href="/contact">Start your digital project</ButtonLink>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
