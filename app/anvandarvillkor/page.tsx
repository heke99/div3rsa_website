import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Användarvillkor",
  description: "Användarvillkor för Div3rsa AB:s webbplats och digitala flöden.",
};

export default function TermsPage() {
  return (
    <section className="page-hero">
      <div className="container narrow legal-stack reveal">
        <p className="eyebrow">Juridik</p>
        <h1>Användarvillkor</h1>
        <p className="page-lead">Genom att använda Div3rsa Web godkänner du att informationen används för kontakt, ansökan och relevant uppföljning.</p>
        <article className="glass-card">
          <h2>Ingen banktjänst</h2>
          <p>{company.name} är inte en bank. Information på webbplatsen ska inte tolkas som garanti om bankkonto, bankgiro eller godkänd betalningslösning.</p>
        </article>
        <article className="glass-card">
          <h2>Ansökningar</h2>
          <p>En inskickad ansökan innebär inte automatiskt godkännande eller tillgång till portal. Div3rsa granskar ansökan och återkommer med nästa steg.</p>
        </article>
        <article className="glass-card">
          <h2>Kontakt</h2>
          <p>Frågor skickas till <a href={"mailto:" + company.email}>{company.email}</a>.</p>
        </article>
      </div>
    </section>
  );
}
