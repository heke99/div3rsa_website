import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQItem, TextCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import {
  businessPaymentFaqs,
  businessPaymentFit,
  businessPaymentIncluded,
  businessPaymentSteps,
} from "@/lib/business-payments";

export const metadata: Metadata = {
  title: "Företagsbetalningar & Bankgiro",
  description:
    "Div3rsa hjälper företag med fakturering, kundinbetalningar och bankgirobaserade betalningsflöden via en digital portal.",
};

export default function BusinessPaymentsPage() {
  return (
    <>
      <section className="page-hero business-hero">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">Företagsbetalningar & Bankgiro</p>
            <h1>Saknar ditt företag bankgiro eller fungerande företagsbetalningar?</h1>
            <p className="page-lead">
              Div3rsa hjälper företag att komma igång med fakturering, kundinbetalningar och bankgirobaserade
              betalningsflöden via en enkel digital portal.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/foretagsbetalningar-bankgiro/ansok">Ansök nu</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Boka genomgång
              </ButtonLink>
            </div>
          </div>
          <div className="business-portal-card reveal">
            <span className="case-label">Div3rsa Portal</span>
            <h3>Ansökan → granskning → portal</h3>
            <div className="portal-status-list">
              <span>Ansökan mottagen</span>
              <span>Under granskning</span>
              <span>Partner-onboarding vid behov</span>
              <span>Portalaccess efter godkännande</span>
            </div>
            <p>
              Kunden ska inte behöva leta efter lösningen själv. Div3rsa samlar ansökan, status, support och nästa steg
              i ett tydligt flöde.
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Problemet"
        title="När bankgiro och företagsbetalningar stoppar verksamheten."
        intro="Många företag fastnar när de saknar svenskt bankgiro, väntar på företagskonto eller inte har ett professionellt sätt att fakturera och ta emot kundbetalningar."
      >
        <div className="card-grid three">
          <TextCard title="Svårt att ta betalt" text="Utan fungerande betalflöde blir det svårt att fakturera kunder, följa betalningar och driva verksamheten professionellt." />
          <TextCard title="Långa processer" text="Banker och betalaktörer kan ha långa onboardingflöden. Div3rsa strukturerar ansökan och nästa steg." />
          <TextCard title="Otydlig status" text="Kunden behöver veta vad som händer. Därför byggs flödet mot en separat portal med status och support." />
        </div>
      </Section>

      <Section
        eyebrow="Lösningen"
        title="En samlad väg in via Div3rsa."
        intro="Div3rsa äger kundupplevelsen: ansökan, kontakt, portal, support och status. KYC/AML hanteras av relevant betalnings- eller finansaktör när det krävs."
      >
        <div className="card-grid three">
          {businessPaymentIncluded.map((item) => (
            <TextCard key={item} title={item} text="Ingår i flödet för att göra processen tydligare, tryggare och mer professionell för företaget." />
          ))}
        </div>
      </Section>

      <Section eyebrow="Så fungerar det" title="Från ansökan till portalaccess.">
        <div className="process-grid">
          {businessPaymentSteps.map((step, index) => (
            <article className="process-step reveal" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="För vem?" title="Tjänsten passar företag som behöver ett tydligare betalflöde.">
        <div className="industry-grid reveal">
          {businessPaymentFit.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="center-actions">
          <ButtonLink href="/foretagsbetalningar-bankgiro/ansok">Starta ansökan</ButtonLink>
        </div>
      </Section>

      <Section eyebrow="Viktigt" title="Vi är tydliga med vad tjänsten är — och inte är.">
        <div className="two-column">
          <div className="glass-card reveal">
            <h3>Div3rsa är kundens portal och process</h3>
            <p>
              Vi hjälper företag att samla ansökan, behov, status, kontakt och portalaccess i ett professionellt flöde.
              Det gör att kunden slipper försöka pussla ihop en lösning själv.
            </p>
          </div>
          <div className="glass-card reveal">
            <h3>Ingen garanti innan godkännande</h3>
            <p>
              Bankgiro, företagsbetalningar och eventuella finansmoment kräver godkänd ansökan och onboarding. Div3rsa
              ska inte framstå som bank eller lova garanterat godkännande.
            </p>
          </div>
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Vanliga frågor">
        <div className="faq-list">
          {businessPaymentFaqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Vill du komma igång med Företagsbetalningar & Bankgiro?"
        text="Skicka in ansökan så granskar Div3rsa uppgifterna och återkommer med nästa steg."
        primaryLabel="Ansök nu"
        primaryHref="/foretagsbetalningar-bankgiro/ansok"
        secondaryLabel="Kontakta oss"
        secondaryHref="/contact"
      />
    </>
  );
}
