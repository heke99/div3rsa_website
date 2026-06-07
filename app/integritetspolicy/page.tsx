import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Integritetspolicy för Div3rsa AB och Div3rsa Företagsbetalningar & Bankgiro.",
};

export default function PrivacyPolicySwedishPage() {
  return (
    <section className="page-hero">
      <div className="container narrow legal-stack reveal">
        <p className="eyebrow">Juridik</p>
        <h1>Integritetspolicy</h1>
        <p className="page-lead">
          Denna sida beskriver hur {company.name} behandlar uppgifter i samband med kontakt, projektförfrågningar och
          ansökningar till Företagsbetalningar & Bankgiro.
        </p>
        <article className="glass-card">
          <h2>Personuppgiftsansvarig</h2>
          <p>{company.name}, org.nr {company.orgNumber}, är personuppgiftsansvarig för uppgifter som samlas in via Div3rsa Web.</p>
        </article>
        <article className="glass-card">
          <h2>Vilka uppgifter vi behandlar</h2>
          <p>Vi kan behandla kontaktuppgifter, företagsuppgifter, organisationsnummer, bransch, betalningsbehov, ansökningsstatus och kommunikation med företaget.</p>
        </article>
        <article className="glass-card">
          <h2>Syfte</h2>
          <p>Uppgifter används för att besvara kontaktförfrågningar, hantera ansökningar, administrera onboarding, skicka relevanta notiser och följa upp kunddialog.</p>
        </article>
        <article className="glass-card">
          <h2>Delning med tredje part</h2>
          <p>Vid ansökan om Företagsbetalningar & Bankgiro kan nödvändiga uppgifter delas med relevant betalnings- eller finansaktör för fortsatt onboarding när det krävs och när samtycke lämnats.</p>
        </article>
        <article className="glass-card">
          <h2>Kontakt</h2>
          <p>Frågor om personuppgifter skickas till <a href={"mailto:" + company.email}>{company.email}</a>.</p>
        </article>
      </div>
    </section>
  );
}
