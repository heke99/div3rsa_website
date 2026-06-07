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
    "Ansök om ett tydligt flöde för fakturering, kundinbetalningar och bankgirobaserade företagsbetalningar via Div3rsa.",
};

export default function BusinessPaymentsPage() {
  return (
    <>
      <section className="page-hero business-hero compact-hero">
        <div className="aurora aurora-one" />
        <div className="container hero-grid">
          <div className="reveal">
            <p className="eyebrow">Företagsbetalningar & Bankgiro</p>
            <h1>Saknar företaget bankgiro eller ett fungerande betalflöde?</h1>
            <p className="page-lead">
              För företag som behöver fakturera svenska kunder, ta emot betalningar via svenskt bankgirobaserat flöde och få utbetalning även när banken inte är löst ännu.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/foretagsbetalningar-bankgiro/ansok">Ansök nu</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Boka genomgång
              </ButtonLink>
            </div>
          </div>
          <div className="business-portal-card reveal">
            <span className="case-label">Så fungerar det</span>
            <h3>Ansökan → granskning → portal</h3>
            <div className="portal-status-list">
              <span>Ansökan skickas in</span>
              <span>Div3rsa granskar</span>
              <span>Onboarding vid behov</span>
              <span>Portal efter godkännande</span>
            </div>
            <p>Kunden kan betala till ett svenskt bankgirobaserat flöde när upplägget är godkänt. Div3rsa är inte en bank.</p>
          </div>
        </div>
      </section>


      <Section
        eyebrow="Vanligaste frågan"
        title="Kan kunden betala till ett svenskt bankgiro?"
        intro="Ja, det kan gå med rätt upplägg. Det är just därför flödet finns."
      >
        <div className="bankgiro-answer-panel reveal">
          <div>
            <span className="case-label">Kort svar</span>
            <h3>Ja – kunden kan betala till ett svenskt bankgirobaserat betalningsflöde.</h3>
            <p>
              Ni kan få utbetalning även om företaget använder ett utländskt bankkonto, förutsatt att ansökan och onboarding godkänns. Vi går igenom behovet och visar nästa steg.
            </p>
          </div>
          <div className="bankgiro-mini-flow" aria-label="Bankgiroflöde">
            <span>Svensk kund</span>
            <strong>→</strong>
            <span>Bankgiroflöde</span>
            <strong>→</strong>
            <span>Utbetalning</span>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Problemet"
        title="När bankgiro stoppar affären."
        intro="Många företag kan sälja – men fastnar när fakturering, kundinbetalningar eller bankgiro inte fungerar smidigt."
      >
        <div className="card-grid three compact-cards">
          <TextCard title="Svårt att ta betalt" text="Utan rätt betalflöde blir fakturering och uppföljning onödigt tungt." />
          <TextCard title="Otydliga steg" text="Kunden behöver veta vad som händer, vad som saknas och vem som tar nästa steg." />
          <TextCard title="Ingen egen lösning" text="Företagaren ska inte behöva pussla ihop bank, faktura och portal själv." />
        </div>
      </Section>

      <Section
        eyebrow="Lösningen"
        title="Ett samlat flöde via Div3rsa."
        intro="Vi håller webbansökan enkel. KYC/AML och dokument hanteras först senare av relevant aktör när det krävs."
      >
        <div className="split-panel reveal">
          <div>
            <h3>Det kunden får</h3>
            <p>En enkel ansökan, tydlig uppföljning och portalaccess efter godkännande.</p>
            <ButtonLink href="/foretagsbetalningar-bankgiro/ansok">Starta ansökan</ButtonLink>
          </div>
          <div className="feature-tags clean-tags">
            {businessPaymentIncluded.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Process" title="Fyra enkla steg">
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

      <Section eyebrow="Passar för" title="Företag som behöver komma vidare.">
        <div className="industry-grid reveal">
          {businessPaymentFit.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Section>

      <Section id="faq" eyebrow="Frågor" title="Viktigt att känna till">
        <div className="faq-list">
          {businessPaymentFaqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Vill du ansöka?"
        text="Skicka in uppgifterna så går Div3rsa igenom ärendet och återkommer med nästa steg."
        primaryLabel="Ansök nu"
        primaryHref="/foretagsbetalningar-bankgiro/ansok"
        secondaryLabel="Kontakta oss"
        secondaryHref="/contact"
      />
    </>
  );
}
