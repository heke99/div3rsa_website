import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Villkor för Företagsbetalningar & Bankgiro",
  description: "Villkor för Div3rsa Företagsbetalningar & Bankgiro.",
};

export default function BusinessPaymentsTermsPage() {
  return (
    <section className="page-hero">
      <div className="container narrow legal-stack reveal">
        <p className="eyebrow">Villkor</p>
        <h1>Villkor för Företagsbetalningar & Bankgiro</h1>
        <p className="page-lead">Dessa villkor gäller ansökningsflödet för Div3rsa Företagsbetalningar & Bankgiro.</p>
        <article className="glass-card">
          <h2>Ansökan och granskning</h2>
          <p>En inskickad ansökan sparas för att Div3rsa ska kunna granska behovet, kontakta företaget och bedöma nästa steg. Ansökan innebär inte automatiskt godkännande.</p>
        </article>
        <article className="glass-card">
          <h2>KYC/AML</h2>
          <p>KYC/AML och eventuell dokumentinsamling hanteras inte i webbansökan. Sådana moment hanteras av relevant betalnings- eller finansaktör när det krävs.</p>
        </article>
        <article className="glass-card">
          <h2>Ingen garanti</h2>
          <p>{company.name} garanterar inte bankgiro, bankkonto, finansiering eller betalningslösning innan ansökan och onboarding är godkänd.</p>
        </article>
        <article className="glass-card">
          <h2>Kontakt</h2>
          <p>Frågor skickas till <a href={"mailto:" + company.email}>{company.email}</a>.</p>
        </article>
      </div>
    </section>
  );
}
