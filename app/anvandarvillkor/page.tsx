import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Användarvillkor",
  description: "Användarvillkor för Diversa Nordic AB:s webbplats, kontaktflöden och ansökningsflöden.",
};

export default function TermsPage() {
  return (
    <section className="page-hero legal-page">
      <div className="container narrow legal-stack reveal">
        <p className="eyebrow">Juridik</p>
        <h1>Användarvillkor</h1>
        <p className="page-lead">Dessa villkor gäller användning av Diversa Nordic Web och de formulär som finns på webbplatsen.</p>
        <article className="glass-card">
          <h2>Webbplatsens syfte</h2>
          <p>Webbplatsen presenterar Diversa Nordic AB:s tjänster och gör det möjligt att skicka kontaktförfrågningar eller ansökningar.</p>
        </article>
        <article className="glass-card">
          <h2>Ingen banktjänst</h2>
          <p>{company.name} är inte en bank. Information på webbplatsen är inte en garanti om bankkonto, bankgiro, finansiering eller godkänd betalningslösning.</p>
        </article>
        <article className="glass-card">
          <h2>Ansökningar</h2>
          <p>En inskickad ansökan innebär inte automatiskt godkännande eller portalaccess. Diversa Nordic granskar ansökan och återkommer med nästa steg.</p>
        </article>
        <article className="glass-card">
          <h2>Riktiga uppgifter</h2>
          <p>Den som skickar in formulär ansvarar för att uppgifterna är korrekta och att personen har rätt att företräda företaget.</p>
        </article>
        <article className="glass-card">
          <h2>Kontakt</h2>
          <p>Frågor skickas till <a href={"mailto:" + company.email}>{company.email}</a>.</p>
        </article>
      </div>
    </section>
  );
}
