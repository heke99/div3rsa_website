import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Integritetspolicy för Div3rsa AB, kontaktförfrågningar och ansökningar till Företagsbetalningar & Bankgiro.",
};

export default function PrivacyPolicySwedishPage() {
  return (
    <section className="page-hero legal-page">
      <div className="container narrow legal-stack reveal">
        <p className="eyebrow">Juridik</p>
        <h1>Integritetspolicy</h1>
        <p className="page-lead">
          Här beskriver vi hur {company.name} behandlar uppgifter när du kontaktar oss, skickar projektförfrågan eller
          ansöker om Företagsbetalningar & Bankgiro.
        </p>
        <article className="glass-card">
          <h2>Personuppgiftsansvarig</h2>
          <p>{company.name}, org.nr {company.orgNumber}, är personuppgiftsansvarig för uppgifter som samlas in via Div3rsa Web.</p>
        </article>
        <article className="glass-card">
          <h2>Uppgifter vi kan behandla</h2>
          <p>Vi kan behandla namn, e-post, telefon, bolagsnamn, organisationsnummer, bransch, hemsida, projektbehov, betalningsbehov, ansökningsstatus och meddelanden.</p>
        </article>
        <article className="glass-card">
          <h2>Varför vi använder uppgifterna</h2>
          <p>Uppgifterna används för att svara på förfrågningar, granska ansökningar, administrera onboarding, skicka relevanta meddelanden och följa upp kunddialog.</p>
        </article>
        <article className="glass-card">
          <h2>Delning med betalnings- eller finansaktör</h2>
          <p>Vid ansökan om Företagsbetalningar & Bankgiro kan nödvändiga uppgifter delas med relevant betalnings- eller finansaktör för fortsatt onboarding när det krävs och när samtycke lämnats.</p>
        </article>
        <article className="glass-card">
          <h2>Lagring och radering</h2>
          <p>Vi sparar uppgifter så länge de behövs för kontakt, ansökan, administration, kundrelation eller rättslig skyldighet. Du kan kontakta oss för frågor om rättelse eller radering.</p>
        </article>
        <article className="glass-card">
          <h2>Ingen försäljning av personuppgifter</h2>
          <p>Div3rsa AB säljer inte personuppgifter. Vi använder uppgifter för att kunna hantera kontakt, ansökan och våra tjänster.</p>
        </article>
        <article className="glass-card">
          <h2>Kontakt</h2>
          <p>Frågor om personuppgifter skickas till <a href={"mailto:" + company.email}>{company.email}</a>.</p>
        </article>
      </div>
    </section>
  );
}
