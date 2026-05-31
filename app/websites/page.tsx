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

      <Section className="website-styles-showcase">
        <div className="style-choice-note reveal">
          <span>Choose by ambition, not by template</span>
          <p>Each direction below has a different layout logic, visual language and growth path. Div3rsa can also combine parts from multiple styles when that fits the business better.</p>
        </div>
        <div className="website-style-grid">
          {websiteStyles.map((style) => (
            <StyleCard key={style.title} item={style} />
          ))}
        </div>
      </Section>

      <section className="style-comparison-section">
        <div className="container style-comparison-grid reveal">
          <article>
            <span>01</span>
            <h2>Premium 3D / Wow</h2>
            <p>For companies where the first impression needs to feel like a premium product launch.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Simple Information</h2>
            <p>For companies that need clarity, trust and contact flow without unnecessary complexity.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Hybrid Business</h2>
            <p>For growing companies that want a polished website now and portal/system options later.</p>
          </article>
        </div>
      </section>

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
