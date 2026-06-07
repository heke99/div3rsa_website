import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villkor för Företagsbetalningar & Bankgiro | Div3rsa",
  description: "Villkor och viktig information för Div3rsas ansökningsflöde för företagsbetalningar och bankgiro.",
};

export default function BusinessPaymentsTermsPage() {
  return (
    <section className="page-hero">
      <div className="container narrow rich-copy reveal">
        <p className="eyebrow">Villkor</p>
        <h1>Villkor för Företagsbetalningar & Bankgiro</h1>
        <p>
          Div3rsa är inte en bank och garanterar inte bankgiro, företagskonto eller betalningslösning innan ansökan och onboarding är godkänd.
        </p>
        <p>
          Webbansökan samlar grundläggande företagsuppgifter och betalningsbehov. KYC/AML och eventuell dokumentinsamling hanteras senare av relevant betalnings- eller finansaktör när det krävs.
        </p>
        <p>
          Genom att skicka in ansökan godkänner du att Div3rsa får kontakta dig och, när det är nödvändigt för onboarding, vidarebefordra relevanta uppgifter till berörd betalnings- eller finansaktör.
        </p>
      </div>
    </section>
  );
}
