import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Villkor för Företagsbetalningar & Bankgiro | Attmos",
  description: "Villkor och viktig information för Attmos AB:s ansökningsflöde för företagsbetalningar och bankgiro.",
};

export default function BusinessPaymentsTermsPage() {
  return (
    <section className="page-hero">
      <div className="container narrow rich-copy reveal">
        <p className="eyebrow">Villkor</p>
        <h1>Villkor för Företagsbetalningar & Bankgiro</h1>
        <p>
          {company.name} är inte en bank och garanterar inte bankgiro, företagskonto eller betalningslösning innan ansökan och relevant onboarding har godkänts av den aktör som ansvarar för den aktuella tjänsten.
        </p>
        <p>
          Webbansökan samlar grundläggande företagsuppgifter och information om betalningsbehov. KYC/AML och eventuell dokumentinsamling hanteras senare av relevant betalnings- eller finansaktör när det krävs.
        </p>
        <p>
          Genom att skicka in ansökan ber du {company.name} att behandla uppgifterna för att bedöma och hantera din förfrågan samt kontakta dig om nästa steg. Om ärendet behöver lämnas vidare till en betalnings- eller finansaktör sker det endast när det finns en rättslig grund för behandlingen och du har fått den information som krävs för den fortsatta onboardingen.
        </p>
        <p>
          En inskickad ansökan innebär inte att ett avtal om betalningstjänst har ingåtts. Eventuella avgifter, villkor, kontroller och beslut från en extern betalnings- eller finansaktör framgår i så fall i dess separata onboarding eller avtal.
        </p>
        <p>
          Läs även vår <Link href="/integritetspolicy">integritetspolicy</Link> och våra <Link href="/anvandarvillkor">allmänna användarvillkor</Link>.
        </p>
        <p>{company.name} · Org.nr {company.orgNumber} · <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
      </div>
    </section>
  );
}
