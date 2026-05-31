import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { company, cookieSections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Cookie information for the Div3rsa AB website.",
};

export default function CookiesPage() {
  return (
    <>
      <section className="page-hero compact">
        <div className="container narrow reveal">
          <p className="eyebrow">Legal</p>
          <h1>Cookies</h1>
          <p className="page-lead">A simple overview of cookies and future analytics on {company.domain}.</p>
        </div>
      </section>
      <Section>
        <div className="legal-stack">
          {cookieSections.map((section) => (
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
