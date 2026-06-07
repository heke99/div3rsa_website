"use client";

import { useActionState, useMemo, useState } from "react";
import { submitBusinessPaymentsApplication, type BusinessApplicationState } from "@/app/foretagsbetalningar-bankgiro/ansok/actions";
import { businessPaymentCustomerTypes, businessPaymentUrgencies } from "@/lib/business-payments";

const initialState: BusinessApplicationState = { ok: false, message: "" };

const yesNoOptions = [
  { label: "Välj", value: "" },
  { label: "Ja", value: "yes" },
  { label: "Nej", value: "no" },
  { label: "Osäker", value: "unknown" },
];

function FormSelect({ name, label }: { name: string; label: string }) {
  return (
    <label>
      {label}
      <select name={name} defaultValue="">
        {yesNoOptions.map((option) => (
          <option key={option.value || "empty"} value={option.value} disabled={option.value === ""}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function BusinessPaymentsApplicationForm() {
  const [step, setStep] = useState(1);
  const [state, formAction, isPending] = useActionState(submitBusinessPaymentsApplication, initialState);

  const steps = useMemo(
    () => [
      { number: 1, title: "Företag" },
      { number: 2, title: "Behov" },
      { number: 3, title: "Bekräfta" },
    ],
    [],
  );

  if (state.ok) {
    return (
      <div className="application-success reveal">
        <span className="success-mark">✓</span>
        <h2>Ansökan mottagen</h2>
        <p>{state.message}</p>
        <p className="muted-copy">
          Du får även en bekräftelse via e-post. Div3rsa kontaktar dig när ansökan har granskats.
        </p>
      </div>
    );
  }

  return (
    <form className="application-form reveal" action={formAction}>
      <div className="stepper" aria-label="Ansökningssteg">
        {steps.map((item) => (
          <button
            className={item.number === step ? "step-pill active" : item.number < step ? "step-pill done" : "step-pill"}
            key={item.number}
            onClick={() => setStep(item.number)}
            type="button"
          >
            <span>{item.number}</span>
            {item.title}
          </button>
        ))}
      </div>

      {state.message && <div className="form-error">{state.message}</div>}

      <section className={step === 1 ? "form-step active" : "form-step"} aria-hidden={step !== 1}>
        <div className="form-step-heading">
          <p className="eyebrow">Steg 1</p>
          <h2>Företagsuppgifter</h2>
          <p>Vi börjar med grunduppgifter om företaget och situationen kring företagskonto och bankgiro.</p>
        </div>
        <div className="form-grid">
          <label>
            Företagsnamn
            <input name="company_name" type="text" autoComplete="organization" />
          </label>
          <label>
            Organisationsnummer
            <input name="org_number" type="text" inputMode="numeric" />
          </label>
          <label>
            Kontaktperson
            <input name="contact_name" type="text" autoComplete="name" />
          </label>
          <label>
            E-post
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            Telefon
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            Bransch
            <input name="industry" type="text" />
          </label>
          <label className="full-span">
            Hemsida
            <input name="website" type="url" placeholder="https://" />
          </label>
        </div>
        <label>
          Kort verksamhetsbeskrivning
          <textarea name="business_description" rows={4} />
        </label>
        <div className="form-grid">
          <FormSelect name="has_swedish_business_account" label="Har företaget svenskt företagskonto idag?" />
          <FormSelect name="has_bankgiro" label="Har företaget bankgiro idag?" />
          <FormSelect name="was_denied_bank_services" label="Har företaget blivit nekat företagskonto eller bankgiro?" />
        </div>
      </section>

      <section className={step === 2 ? "form-step active" : "form-step"} aria-hidden={step !== 2}>
        <div className="form-step-heading">
          <p className="eyebrow">Steg 2</p>
          <h2>Betalningsbehov</h2>
          <p>Beskriv vad företaget behöver så att Div3rsa kan bedöma rätt nästa steg.</p>
        </div>
        <div className="form-grid">
          <label>
            Kundtyp
            <select name="customer_type" defaultValue="">
              <option value="" disabled>
                Välj kundtyp
              </option>
              {businessPaymentCustomerTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label>
            Uppskattad månadsvolym
            <input name="monthly_volume_estimate" type="text" placeholder="Ex. 250 000 kr/mån" />
          </label>
          <label>
            Antal fakturor per månad
            <input name="invoice_count_estimate" type="text" placeholder="Ex. 50" />
          </label>
          <label>
            Genomsnittligt fakturabelopp
            <input name="average_invoice_amount" type="text" placeholder="Ex. 5 000 kr" />
          </label>
          <label>
            Befintligt fakturasystem
            <input name="current_invoice_system" type="text" placeholder="Ex. Fortnox, Visma, inget" />
          </label>
          <label>
            Hur snabbt behöver ni komma igång?
            <select name="urgency" defaultValue="">
              <option value="">Välj</option>
              {businessPaymentUrgencies.map((urgency) => (
                <option key={urgency} value={urgency}>
                  {urgency}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="checkbox-grid">
          <label className="checkbox-card">
            <input name="needs_invoicing" type="checkbox" />
            <span>Behöver fakturering</span>
          </label>
          <label className="checkbox-card">
            <input name="needs_customer_payments" type="checkbox" />
            <span>Behöver ta emot kundinbetalningar</span>
          </label>
          <label className="checkbox-card">
            <input name="needs_bankgiro_flow" type="checkbox" />
            <span>Behöver bankgirobaserat betalflöde</span>
          </label>
          <label className="checkbox-card">
            <input name="needs_invoice_financing" type="checkbox" />
            <span>Behöver fakturaköp/förskottsutbetalning</span>
          </label>
          <label className="checkbox-card">
            <input name="needs_api" type="checkbox" />
            <span>Behöver API eller integration</span>
          </label>
        </div>
        <label>
          Övrig kommentar
          <textarea name="other_comment" rows={4} />
        </label>
      </section>

      <section className={step === 3 ? "form-step active" : "form-step"} aria-hidden={step !== 3}>
        <div className="form-step-heading">
          <p className="eyebrow">Steg 3</p>
          <h2>Bekräfta och skicka</h2>
          <p>Div3rsa samlar endast in grunduppgifter och betalningsbehov i detta steg. KYC/AML görs inte i webbansökan.</p>
        </div>
        <div className="consent-panel">
          <label className="checkbox-card wide">
            <input name="consent_contact" type="checkbox" />
            <span>Div3rsa får granska ansökan och kontakta mig om nästa steg.</span>
          </label>
          <label className="checkbox-card wide">
            <input name="consent_partner_forwarding" type="checkbox" />
            <span>
              Div3rsa får vidarebefordra nödvändiga uppgifter till relevant betalnings- eller finansaktör för fortsatt
              onboarding när det krävs.
            </span>
          </label>
          <div className="form-note">
            KYC/AML och eventuell dokumentinsamling hanteras av relevant betalnings-/finansaktör när det krävs.
            Tjänsten kräver godkänd ansökan och onboarding. Bankgiro eller företagsbetalningar garanteras inte innan
            godkännande.
          </div>
        </div>
      </section>

      <div className="form-actions">
        {step > 1 && (
          <button className="button button-secondary" type="button" onClick={() => setStep((current) => current - 1)}>
            Tillbaka
          </button>
        )}
        {step < 3 ? (
          <button className="button button-primary" type="button" onClick={() => setStep((current) => current + 1)}>
            Nästa steg
          </button>
        ) : (
          <button className="button button-primary" type="submit" disabled={isPending}>
            {isPending ? "Skickar ansökan..." : "Skicka ansökan"}
          </button>
        )}
      </div>
    </form>
  );
}
