import type { Metadata } from "next";
import { BusinessPaymentsApplicationForm } from "@/components/business-payments/BusinessPaymentsApplicationForm";

export const metadata: Metadata = {
  title: "Ansök om Företagsbetalningar & Bankgiro | Div3rsa",
  description: "Skicka in en ansökan för företagsbetalningar och bankgirobaserade betalningsflöden via Div3rsa.",
};

export default function ApplyBusinessPaymentsPage() {
  return (
    <>
      <section className="page-hero compact">
        <div className="container narrow reveal">
          <p className="eyebrow">Ansökan</p>
          <h1>Ansök om Företagsbetalningar & Bankgiro</h1>
          <p className="page-lead">
            Fyll i uppgifterna nedan. Ansökan skickas till Div3rsa för granskning. Kunden får inget automatiskt bekräftelsemail.
          </p>
        </div>
      </section>
      <section className="section application-section">
        <div className="container narrow">
          <BusinessPaymentsApplicationForm />
        </div>
      </section>
    </>
  );
}
