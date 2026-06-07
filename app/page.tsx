import { CaseCard, FAQItem, PackageCard, StyleCard, TextCard } from "@/components/Cards";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { HomeHero } from "@/components/HomeHero";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { businessPaymentIncluded } from "@/lib/business-payments";
import {
  aboutValues,
  caseStudies,
  company,
  faqs,
  growthSteps,
  industries,
  processSteps,
  services,
  solutionPackages,
  techItems,
  websiteStyles,
  whyChoose,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <HomeHero />

      <Section
        id="growth"
        eyebrow="Skalbar grund"
        title="Börja med hemsida. Väx till system."
        intro="Många företag börjar med en hemsida. Med Div3rsa kan samma grund senare växa till kundportal, app, dashboard eller SaaS-plattform."
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

      <Section id="services" eyebrow="Tjänster" title="Från idé till färdig digital lösning.">
        <div className="card-grid three">
          {services.map((service, index) => (
            <TextCard key={service.title} kicker={(index + 1).toString().padStart(2, "0")} {...service} />
          ))}
        </div>
      </Section>

      <Section id="why" eyebrow="Varför Div3rsa" title="Varför välja Div3rsa?">
        <div className="card-grid three">
          {whyChoose.map((item) => (
            <TextCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section
        id="industries"
        eyebrow="Branscher"
        title="Branscher vi hjälper"
        intro="Vi bygger branschflexibla lösningar som kan anpassas efter affärsmodell, arbetsflöde och daglig drift."
      >
        <div className="industry-grid reveal">
          {industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </Section>

      <Section id="packages" eyebrow="Lösningar" title="Vanliga lösningar vi bygger">
        <div className="package-grid">
          {solutionPackages.map((item) => (
            <PackageCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section
        id="systems"
        eyebrow="Våra projekt"
        title="Digitala produkter byggda av Div3rsa."
        intro="Exempel på plattformar, system och produktkoncept som Div3rsa bygger eller driver."
      >
        <div className="case-grid">
          {caseStudies.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
      </Section>


      <Section
        id="business-payments"
        eyebrow="Företagsbetalningar & Bankgiro"
        title="För företag som behöver bankgirobaserade betalningsflöden."
        intro="Vi samlar ansökan, uppföljning och nästa steg i ett tydligt flöde – utan att kunden behöver lösa allt själv."
      >
        <div className="two-column">
          <div className="rich-copy reveal">
            <p>
              Många företag fastnar när bankgiro, fakturering eller kundinbetalningar inte fungerar smidigt.
              Div3rsa ger dem ett tydligt ställe att ansöka, följa status och gå vidare i processen.
            </p>
            <p>
              Vi är tydliga med att Div3rsa inte är en bank och att godkännande kräver granskning. Det gör tjänsten
              tryggare, seriösare och lättare att förstå.
            </p>
            <ButtonLink href="/foretagsbetalningar-bankgiro">Läs om Företagsbetalningar & Bankgiro</ButtonLink>
          </div>
          <div className="company-card reveal">
            <h3>Vad flödet innehåller</h3>
            <div className="feature-tags">
              {businessPaymentIncluded.slice(0, 6).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="website-styles"
        eyebrow="Hemsidestilar"
        title="Vilken typ av hemsida vill du ha?"
        intro="Välj en riktning som passar företaget, varumärket och nästa steg."
      >
        <div className="card-grid three">
          {websiteStyles.map((style) => (
            <StyleCard key={style.title} item={style} />
          ))}
        </div>
      </Section>

      <Section id="process" eyebrow="Process" title="Så arbetar vi.">
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-step reveal" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="center-actions">
          <ButtonLink href="/contact">Boka projektgenomgång</ButtonLink>
        </div>
      </Section>

      <Section
        id="technology"
        eyebrow="Teknik"
        title="Modern teknik bakom varje lösning"
        intro="Vi bygger med modern teknik, men håller samtalet affärsnära och begripligt."
      >
        <div className="tech-cloud reveal">
          {techItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Section>

      <Section id="faq" eyebrow="Vanliga frågor" title="Frågor vi ofta får">
        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Section>

      <Section id="about" eyebrow="Om Div3rsa" title="Vi bygger digitala lösningar med affären i fokus.">
        <div className="two-column">
          <div className="rich-copy reveal">
            <p>
              Div3rsa AB är ett svenskt utvecklingsbolag som bygger hemsidor, webbappar, interna system och
              SaaS-plattformar för företag som vill ha en seriös digital grund.
            </p>
            <p>
              Vi bygger från enkla hemsidor till avancerade kundportaler, adminpaneler, automation, betalflöden,
              databaser och integrationer.
            </p>
            <ButtonLink href="/about" variant="secondary">
              Läs mer om Div3rsa
            </ButtonLink>
          </div>
          <div className="company-card reveal">
            <h3>{company.name}</h3>
            <p>Org.nr: {company.orgNumber}</p>
            <a href={"mailto:" + company.email}>{company.email}</a>
            <div className="feature-tags">
              {aboutValues.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Kontakt"
        title="Kontakta oss"
        intro="Vill du bygga hemsida, app, portal eller ett komplett system? Skicka en kort beskrivning så återkommer vi."
      >
        <div className="two-column contact-layout">
          <div className="contact-info reveal">
            <h3>Projektgenomgång</h3>
            <p>Email: <a href={"mailto:" + company.email}>{company.email}</a></p>
            <p>Bolag: {company.name}</p>
            <p>Org.nr: {company.orgNumber}</p>
            <ButtonLink href={"mailto:" + company.email}>Maila Div3rsa</ButtonLink>
          </div>
          <ContactForm />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
