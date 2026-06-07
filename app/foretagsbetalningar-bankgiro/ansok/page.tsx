import type { Metadata } from "next";
import { BusinessPaymentsApplicationForm } from "@/components/business-payments/BusinessPaymentsApplicationForm";

export const metadata: Metadata = {
  title: "Ansök om Företagsbetalningar & Bankgiro",
  description:
    "Ansök till Div3rsa Företagsbetalningar & Bankgiro. Div3rsa granskar företagsuppgifter och betalningsbehov innan nästa steg.",
};

export default function ApplyBusinessPaymentsPage() {
  return (
    <>
      <section className="page-hero compact">
        <div className="aurora aurora-two" />
        <div className="container narrow reveal">
          <p className="eyebrow">Ansökan</p>
          <h1>Ansök om Företagsbetalningar & Bankgiro</h1>
          <p className="page-lead">
            Fyll i grunduppgifter och betalningsbehov. Alla som ansöker får inte automatiskt portalaccess — Div3rsa
            granskar ansökan först och återkommer med nästa steg.
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
