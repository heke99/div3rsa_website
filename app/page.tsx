import { CaseCard, FAQItem, PackageCard, StyleCard, TextCard } from "@/components/Cards";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { HomeHero } from "@/components/HomeHero";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { businessPaymentIncluded } from "@/lib/business-payments";
import {
  caseStudies,
  company,
  faqs,
  processSteps,
  services,
  solutionPackages,
  websiteStyles,
  whyChoose,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <HomeHero />

      <Section
        id="services"
        eyebrow="Vad vi bygger"
        title="En ren digital grund för företag som vill framåt."
        intro="Vi håller designen tydlig, texterna korta och tekniken redo för nästa steg."
      >
        <div className="card-grid three compact-cards">
          {services.slice(0, 6).map((service) => (
            <TextCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section
        id="business-payments"
        eyebrow="Ny tjänst"
        title="Företagsbetalningar & Bankgiro"
        intro="För företag som behöver en tydligare väg till fakturering, kundinbetalningar och bankgirobaserade betalningsflöden."
        className="section-highlight"
      >
        <div className="split-panel reveal">
          <div>
            <span className="case-label">Div3rsa PayFlow</span>
            <h3>Saknar företaget bankgiro eller fungerande betalningsflöde?</h3>
            <p>
              Kunden ansöker via Div3rsa. Vi samlar uppgifter, följer upp och ger ett tydligt nästa steg – utan att kunden behöver lösa allt själv.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/foretagsbetalningar-bankgiro">Läs mer</ButtonLink>
              <ButtonLink href="/foretagsbetalningar-bankgiro/ansok" variant="secondary">
                Ansök nu
              </ButtonLink>
            </div>
          </div>
          <div className="feature-tags clean-tags">
            {businessPaymentIncluded.slice(0, 6).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="websites"
        eyebrow="Hemsidor"
        title="Tre tydliga stilar. Välj känslan kunden ska få."
        intro="Vi visar skillnaden visuellt – från premium 3D till seriös Business och snabb Simple. Då blir det lättare att välja rätt nivå från start."
      >
        <div className="style-intro-panel reveal">
          <div>
            <strong>3D / Wow</strong>
            <span>Stor hero, 3D-känsla, glow och premiumeffekt. För bolag som vill imponera direkt.</span>
          </div>
          <div>
            <strong>Business</strong>
            <span>Ren B2B-layout med tjänster, case och tydliga CTA. För företag som vill sälja tryggt.</span>
          </div>
          <div>
            <strong>Simple</strong>
            <span>Minimal, snabb och lätt att förstå. För företag som vill komma igång utan onödigt brus.</span>
          </div>
        </div>
        <div className="card-grid three style-comparison-grid">
          {websiteStyles.map((style) => (
            <StyleCard key={style.title} item={style} />
          ))}
        </div>
      </Section>

      <Section id="packages" eyebrow="Paket" title="Vanliga starter">
        <div className="package-grid">
          {solutionPackages.map((item) => (
            <PackageCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section
        id="why"
        eyebrow="Varför Div3rsa"
        title="Snygg yta. Stark grund."
        intro="En bra digital lösning ska både sälja, kännas trygg och vara enkel att arbeta vidare med."
      >
        <div className="card-grid three compact-cards">
          {whyChoose.map((item) => (
            <TextCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section
        id="systems"
        eyebrow="Projekt"
        title="Produkter och plattformar"
        intro="Exempel på digitala produkter och koncept som Div3rsa bygger eller driver."
      >
        <div className="case-grid compact-case-grid">
          {caseStudies.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section id="process" eyebrow="Process" title="Så arbetar vi">
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-step reveal" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="faq" eyebrow="Vanliga frågor" title="Kort svar på vanliga frågor">
        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Kontakt"
        title="Berätta vad du vill bygga."
        intro="Skriv kort vad du behöver hjälp med. Vi återkommer med nästa steg."
      >
        <div className="two-column contact-layout">
          <div className="contact-info reveal">
            <h3>Div3rsa AB</h3>
            <p>Email: <a href={"mailto:" + company.email}>{company.email}</a></p>
            <p>Org.nr: {company.orgNumber}</p>
            <ButtonLink href={"mailto:" + company.email} variant="secondary">Maila direkt</ButtonLink>
          </div>
          <ContactForm />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
