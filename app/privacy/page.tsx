import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { company, privacySections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Div3rsa AB.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero compact">
        <div className="container narrow reveal">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="page-lead">A simple overview of how {company.name} handles contact information.</p>
        </div>
      </section>
      <Section>
        <div className="legal-stack">
          {privacySections.map((section) => (
            <article className="glass-card reveal" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
