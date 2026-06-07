"use client";

import { useActionState, useMemo, useState } from "react";
import {
  submitBusinessPaymentsApplication,
  type BusinessApplicationState,
} from "@/app/foretagsbetalningar-bankgiro/ansok/actions";
import { businessPaymentCustomerTypes, businessPaymentUrgencies } from "@/lib/business-payments";

const initialState: BusinessApplicationState = { ok: false, message: "" };

const yesNoOptions = [
  { label: "Välj", value: "" },
  { label: "Ja", value: "yes" },
  { label: "Nej", value: "no" },
  { label: "Osäker", value: "unknown" },
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <span className="field-error">{message}</span>;
}

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

const getFieldValue = (form: HTMLFormElement, name: string) => {
  const data = new FormData(form);
  return String(data.get(name) || "").trim();
};

export function BusinessPaymentsApplicationForm() {
  const [step, setStep] = useState(1);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [state, formAction, isPending] = useActionState(submitBusinessPaymentsApplication, initialState);
  const errors = { ...(state.fieldErrors || {}), ...clientErrors };

  const steps = useMemo(
    () => [
      { number: 1, title: "Företag" },
      { number: 2, title: "Behov" },
      { number: 3, title: "Bekräfta" },
    ],
    [],
  );

  function validateStep(nextStep: number) {
    const form = document.querySelector<HTMLFormElement>(".application-form");
    if (!form) return true;

    const nextErrors: Record<string, string> = {};

    if (step === 1) {
      const required: Array<[string, string]> = [
        ["company_name", "Skriv företagsnamn."],
        ["org_number", "Skriv organisationsnummer."],
        ["contact_name", "Skriv kontaktperson."],
        ["email", "Skriv e-post."],
        ["industry", "Skriv bransch."],
        ["business_description", "Beskriv kort verksamheten."],
      ];
      required.forEach(([name, message]) => {
        if (!getFieldValue(form, name)) nextErrors[name] = message;
      });
      const email = getFieldValue(form, "email");
      if (email && !email.includes("@")) nextErrors.email = "Skriv en giltig e-postadress.";
    }

    if (step === 2 && !getFieldValue(form, "customer_type")) {
      nextErrors.customer_type = "Välj kundtyp.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setClientErrors(nextErrors);
      return false;
    }

    setClientErrors({});
    setStep(nextStep);
    return true;
  }

  if (state.ok) {
    return (
      <div className="application-success reveal">
        <span className="success-mark">✓</span>
        <h2>Vi har tagit emot din ansökan.</h2>
        <p>Vi går igenom uppgifterna och återkommer med nästa steg.</p>
      </div>
    );
  }

  return (
    <form className="application-form reveal" action={formAction} noValidate>
      <div className="stepper" aria-label="Ansökningssteg">
        {steps.map((item) => (
          <button
            className={item.number === step ? "step-pill active" : item.number < step ? "step-pill done" : "step-pill"}
            key={item.number}
            onClick={() => {
              if (item.number <= step) setStep(item.number);
              else validateStep(item.number);
            }}
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
            <input name="company_name" type="text" autoComplete="organization" required />
            <FieldError message={errors.company_name} />
          </label>
          <label>
            Organisationsnummer
            <input name="org_number" type="text" inputMode="numeric" placeholder="559416-7149" required />
            <FieldError message={errors.org_number} />
          </label>
          <label>
            Kontaktperson
            <input name="contact_name" type="text" autoComplete="name" required />
            <FieldError message={errors.contact_name} />
          </label>
          <label>
            E-post
            <input name="email" type="email" autoComplete="email" required />
            <FieldError message={errors.email} />
          </label>
          <label>
            Telefon
            <input name="phone" type="tel" autoComplete="tel" placeholder="070-000 00 00" />
          </label>
          <label>
            Bransch
            <input name="industry" type="text" placeholder="Ex. konsult, bygg, e-handel" required />
            <FieldError message={errors.industry} />
          </label>
          <label className="full-span">
            Hemsida
            <input name="website" type="url" placeholder="https://" />
          </label>
        </div>
        <label>
          Kort verksamhetsbeskrivning
          <textarea name="business_description" rows={4} placeholder="Beskriv kort vad företaget gör och varför ni behöver betalningsflöde." required />
          <FieldError message={errors.business_description} />
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
            <select name="customer_type" defaultValue="" required>
              <option value="" disabled>
                Välj kundtyp
              </option>
              {businessPaymentCustomerTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <FieldError message={errors.customer_type} />
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
          <textarea name="other_comment" rows={4} placeholder="Skriv sådant som hjälper oss förstå behovet." />
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
            <input name="consent_contact" type="checkbox" required />
            <span>Div3rsa får granska ansökan och kontakta mig om nästa steg.</span>
          </label>
          <FieldError message={errors.consent_contact} />
          <label className="checkbox-card wide">
            <input name="consent_partner_forwarding" type="checkbox" required />
            <span>
              Div3rsa får vidarebefordra nödvändiga uppgifter till relevant betalnings- eller finansaktör för fortsatt
              onboarding när det krävs.
            </span>
          </label>
          <FieldError message={errors.consent_partner_forwarding} />
          <div className="form-note">
            KYC/AML och eventuell dokumentinsamling hanteras av relevant betalnings-/finansaktör när det krävs.
            Tjänsten kräver godkänd ansökan och onboarding. Bankgiro eller företagsbetalningar garanteras inte innan
            godkännande.
          </div>
        </div>
      </section>

      <p className="form-security-note">Vi samlar inte in KYC-dokument i webbansökan. Nästa steg hanteras först efter granskning.</p>

      <div className="form-actions">
        {step > 1 && (
          <button className="button button-secondary" type="button" onClick={() => setStep((current) => current - 1)}>
            Tillbaka
          </button>
        )}
        {step < 3 ? (
          <button className="button button-primary" type="button" onClick={() => validateStep(step + 1)}>
            Nästa steg
          </button>
        ) : (
          <button className="button button-primary" type="submit" disabled={isPending}>
            {isPending ? "Skickar..." : "Skicka ansökan"}
          </button>
        )}
      </div>
    </form>
  );
}
