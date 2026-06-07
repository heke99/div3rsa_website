import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQItem } from "@/components/Cards";
import { Section } from "@/components/Section";
import { businessPaymentsFaqs } from "@/lib/business-payments";

export const metadata: Metadata = {
  title: "Företagsbetalningar & Bankgiro | Div3rsa",
  description:
    "Ansök om företagsbetalningar, fakturering och bankgirobaserade betalningsflöden via Div3rsa.",
};

export default function BusinessPaymentsPage() {
  return (
    <>
      <section className="page-hero business-hero">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Företagsbetalningar & Bankgiro</p>
            <h1>Saknar ditt företag bankgiro eller fungerande företagsbetalningar?</h1>
            <p className="hero-subheadline">
              Div3rsa hjälper företag att komma igång med fakturering, kundinbetalningar och bankgirobaserade betalningsflöden via en enkel digital portal.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/foretagsbetalningar-bankgiro/ansok">Ansök nu</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Boka genomgång</ButtonLink>
            </div>
          </div>
          <div className="bankgiro-preview reveal" aria-label="Bankgiroflöde illustration">
            <div className="bankgiro-card top">
              <span>Kund betalar</span>
              <strong>Svenskt bankgiroflöde</strong>
            </div>
            <div className="bankgiro-line" />
            <div className="bankgiro-card middle">
              <span>Div3rsa Portal</span>
              <strong>Status, fakturor och onboarding</strong>
            </div>
            <div className="bankgiro-line" />
            <div className="bankgiro-card bottom">
              <span>Utbetalning</span>
              <strong>Även till utländskt bankkonto</strong>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Problemet"
        title="Många företag fastnar innan de ens kan ta betalt."
        intro="Utan svenskt bankgiro, fungerande fakturaflöde eller enkel betalningslösning blir försäljning, administration och kundinbetalningar onödigt svårt."
      >
        <div className="card-grid three">
          <article className="glass-card"><h3>Saknar bankgiro</h3><p>Kunder vill ofta betala till ett svenskt bankgiro, men alla företag har inte tillgång till det från start.</p></article>
          <article className="glass-card"><h3>Utländsk bank</h3><p>Företag kan ha bankkonto utanför Sverige men ändå behöva ett svenskt betalningsflöde mot sina kunder.</p></article>
          <article className="glass-card"><h3>Otydligt flöde</h3><p>Det blir svårt att fakturera, följa betalstatus och veta vad nästa steg är utan en samlad portal.</p></article>
        </div>
      </Section>

      <Section
        eyebrow="Lösningen"
        title="Ett samlat flöde via Div3rsa."
        intro="Ni ansöker via Div3rsa. Vi granskar behovet, återkommer med nästa steg och bygger vidare mot portal, onboarding och betalningsflöde."
      >
        <div className="process-grid">
          {[
            ["Ansök", "Fyll i företagets uppgifter och betalningsbehov."],
            ["Granskning", "Vi går igenom ärendet och ser vilket upplägg som kan passa."],
            ["Onboarding", "När ansökan är kvalificerad går ärendet vidare i rätt flöde."],
            ["Portal", "Kunden får åtkomst till Div3rsa Portal när kontot är skapat."],
          ].map(([title, text], index) => (
            <article className="process-step reveal" key={title}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Vanliga frågor" title="Det här brukar företag fråga först.">
        <div className="faq-list">
          {businessPaymentsFaqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <p className="eyebrow">Ansök online</p>
          <h2>Vill du se om lösningen passar ditt företag?</h2>
          <p>Skicka in en kort ansökan. Vi samlar inte in KYC-dokument i webbformuläret.</p>
          <div className="cta-actions">
            <ButtonLink href="/foretagsbetalningar-bankgiro/ansok">Ansök nu</ButtonLink>
            <ButtonLink href="/foretagsbetalningar-bankgiro/villkor" variant="secondary">Läs villkor</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
