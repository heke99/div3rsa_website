import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { HomeHero } from "@/components/HomeHero";
import { ProductExplorer } from "@/components/ProductExplorer";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { processSteps, services, whyChoose } from "@/lib/content";
import { company } from "@/lib/company";
import { TextCard } from "@/components/Cards";

export default function Home() {
  return (
    <>
      <HomeHero />

      <Section
        id="products"
        eyebrow="Utvalda produkter"
        title="System för ekonomi, energi, offentlig sektor och försäljning."
        intro="Vi bygger inte generiska demos. Varje produkt utgår från ett verkligt arbetsflöde, tydliga roller och data som måste hänga ihop hela vägen."
        className="home-products-section"
      >
        <ProductExplorer featuredOnly showFilters={false} />
        <div className="center-actions">
          <ButtonLink href="/systems" variant="secondary">Se hela produktportföljen</ButtonLink>
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Vad vi utvecklar"
        title="Från verksamhetsproblem till ett komplett system."
        intro="Vi tar ansvar för helheten: produktlogik, användarupplevelse, databas, integrationer, behörigheter och driftsättning."
      >
        <div className="card-grid three compact-cards systems-capability-grid">
          {services.map((service) => (
            <TextCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section
        id="process"
        eyebrow="Arbetssätt"
        title="Vi bygger med verksamheten som utgångspunkt."
      >
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-step reveal" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="why"
        eyebrow="Varför Attmos"
        title="Produktkänsla utan att tappa den tekniska grunden."
      >
        <div className="card-grid three compact-cards">
          {whyChoose.map((item) => (
            <TextCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section className="website-bridge-section">
        <div className="website-bridge reveal">
          <div>
            <p className="eyebrow">Webb & varumärke</p>
            <h2>Behöver systemet också en stark publik sida?</h2>
            <p>Vi bygger även moderna företags- och produktsidor som kopplas ihop med portaler, onboarding och era digitala flöden.</p>
          </div>
          <ButtonLink href="/websites" variant="secondary">Se hemsidelösningar</ButtonLink>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Kontakt"
        title="Berätta vilket arbetsflöde du vill förbättra."
        intro="Beskriv verksamheten, problemet och vilka som ska använda lösningen. Vi hjälper dig strukturera nästa steg."
      >
        <div className="two-column contact-layout">
          <div className="contact-info reveal">
            <span className="case-label">Systemstudio i Sverige</span>
            <h3>{company.name}</h3>
            <p>Vi utvecklar egna produkter och skräddarsydda digitala system för företag och organisationer.</p>
            <p>E-post: <a href={`mailto:${company.email}`}>{company.email}</a></p>
            <p>Org.nr: {company.orgNumber}</p>
          </div>
          <ContactForm />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
