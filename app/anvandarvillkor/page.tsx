import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Användarvillkor",
  description: "Användarvillkor för Attmos AB:s webbplats, kontaktflöden och ansökningsflöden.",
};

export default function TermsPage() {
  return (
    <section className="page-hero legal-page">
      <div className="container narrow legal-stack reveal">
        <p className="eyebrow">Juridik</p>
        <h1>Användarvillkor</h1>
        <p className="page-lead">Dessa villkor gäller användning av {company.domain} och de kontakt- och ansökningsflöden som {company.name} tillhandahåller på webbplatsen.</p>
        <article className="glass-card">
          <h2>Webbplatsens syfte</h2>
          <p>Webbplatsen presenterar {company.name}:s produkter och tjänster och gör det möjligt att skicka kontaktförfrågningar eller ansökningar. Information på webbplatsen utgör inte i sig ett bindande erbjudande om inte det uttryckligen anges.</p>
        </article>
        <article className="glass-card">
          <h2>Ingen banktjänst</h2>
          <p>{company.name} är inte en bank. Information på webbplatsen är inte en garanti om bankkonto, bankgiro, finansiering eller godkänd betalningslösning. Sådana tjänster kan, när det är relevant, tillhandahållas eller beslutas av en separat betalnings- eller finansaktör.</p>
        </article>
        <article className="glass-card">
          <h2>Ansökningar</h2>
          <p>En inskickad ansökan innebär inte automatiskt godkännande, avtal, bankgiro, betalningslösning eller portalaccess. {company.shortName} granskar ansökan och återkommer om nästa steg. Eventuell extern aktör kan genomföra en egen prövning och onboarding.</p>
        </article>
        <article className="glass-card">
          <h2>Riktiga uppgifter och behörighet</h2>
          <p>Den som skickar in ett formulär ansvarar för att uppgifterna är korrekta och för att personen har rätt att lämna uppgifterna och, när det är tillämpligt, företräda företaget.</p>
        </article>
        <article className="glass-card">
          <h2>Tredjepartstjänster</h2>
          <p>Webbplatsen kan hänvisa till eller samverka med fristående leverantörer. Deras tjänster, beslut och villkor styrs av respektive leverantörs avtal och ansvar, om inget annat uttryckligen avtalats med {company.name}.</p>
        </article>
        <article className="glass-card">
          <h2>Personuppgifter och cookies</h2>
          <p>Hur vi behandlar personuppgifter beskrivs i vår <Link href="/integritetspolicy">integritetspolicy</Link>. Information om cookies och liknande lagring finns i vår <Link href="/cookiepolicy">cookiepolicy</Link>.</p>
        </article>
        <article className="glass-card">
          <h2>Kontakt och bolagsuppgifter</h2>
          <p>{company.name} · Org.nr {company.orgNumber} · <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </article>
        <p className="contact-privacy-note">Senast uppdaterad: 25 augusti 2026.</p>
      </div>
    </section>
  );
}
