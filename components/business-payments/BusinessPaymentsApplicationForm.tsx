"use client";

import Link from "next/link";
import { useActionState, useMemo, useState } from "react";
import { submitBusinessPaymentApplication } from "@/app/foretagsbetalningar-bankgiro/ansok/actions";

type FormState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

const initialState: FormState = { ok: false, message: "" };
const steps = ["Företag", "Behov", "Bekräfta"];

const requiredByStep: Record<number, string[]> = {
  0: ["company_name", "org_number", "contact_name", "email", "phone", "industry", "business_description"],
  1: ["customer_type", "monthly_volume_estimate", "invoice_count_estimate", "average_invoice_amount", "urgency"],
  2: ["consent_contact", "consent_partner_forwarding"],
};

function getLabel(name: string) {
  const labels: Record<string, string> = {
    company_name: "Företagsnamn",
    org_number: "Organisationsnummer",
    contact_name: "Kontaktperson",
    email: "E-post",
    phone: "Telefon",
    industry: "Bransch",
    business_description: "Kort verksamhetsbeskrivning",
    customer_type: "Kundtyp",
    monthly_volume_estimate: "Uppskattad månadsvolym",
    invoice_count_estimate: "Antal fakturor per månad",
    average_invoice_amount: "Genomsnittligt fakturabelopp",
    urgency: "Hur snabbt behöver ni komma igång?",
    consent_contact: "Samtycke kontakt",
    consent_partner_forwarding: "Samtycke onboarding",
  };
  return labels[name] || name;
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  errors,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  errors: Record<string, string>;
}) {
  return (
    <label>
      {label}
      <input name={name} type={type} placeholder={placeholder} autoComplete="off" />
      {errors[name] ? <span className="field-error">{errors[name]}</span> : null}
    </label>
  );
}

function SelectField({
  name,
  label,
  children,
  errors,
}: {
  name: string;
  label: string;
  children: React.ReactNode;
  errors: Record<string, string>;
}) {
  return (
    <label>
      {label}
      <select name={name} defaultValue="">
        {children}
      </select>
      {errors[name] ? <span className="field-error">{errors[name]}</span> : null}
    </label>
  );
}

function YesNoField({ name, label }: { name: string; label: string }) {
  return (
    <label>
      {label}
      <select name={name} defaultValue="">
        <option value="">Välj</option>
        <option value="yes">Ja</option>
        <option value="no">Nej</option>
      </select>
    </label>
  );
}

function CheckboxField({ name, label, errors }: { name: string; label: string; errors: Record<string, string> }) {
  return (
    <label className="checkbox-card">
      <input name={name} type="checkbox" />
      <span>{label}</span>
      {errors[name] ? <strong className="field-error">{errors[name]}</strong> : null}
    </label>
  );
}

export function BusinessPaymentsApplicationForm() {
  const [state, formAction, pending] = useActionState(submitBusinessPaymentApplication, initialState);
  const [step, setStep] = useState(0);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const mergedErrors = useMemo(() => ({ ...(state.errors || {}), ...clientErrors }), [state.errors, clientErrors]);

  function validateStep(currentStep: number) {
    const form = document.querySelector<HTMLFormElement>("#business-payment-application-form");
    if (!form) return true;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};

    for (const field of requiredByStep[currentStep]) {
      const raw = data.get(field);
      const isCheckbox = field.startsWith("consent_");
      const isEmpty = isCheckbox ? raw !== "on" : !String(raw || "").trim();
      if (isEmpty) nextErrors[field] = `${getLabel(field)} behöver fyllas i.`;
    }

    const email = String(data.get("email") || "").trim();
    if (currentStep === 0 && email && !email.includes("@")) {
      nextErrors.email = "Skriv en giltig e-postadress.";
    }

    setClientErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setTimeout(() => document.querySelector(".field-error")?.scrollIntoView({ behavior: "smooth", block: "center" }), 30);
      return false;
    }
    return true;
  }

  function nextStep() {
    if (!validateStep(step)) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function previousStep() {
    setClientErrors({});
    setStep((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (!validateStep(2)) event.preventDefault();
  }

  if (state.ok) {
    return (
      <div className="success-card reveal" role="status">
        <div className="success-icon">✓</div>
        <h2>Vi har tagit emot din ansökan.</h2>
        <p>Vi går igenom uppgifterna och återkommer med nästa steg.</p>
        <Link className="button button-primary" href="/">
          Tillbaka till Div3rsa
        </Link>
      </div>
    );
  }

  return (
    <form id="business-payment-application-form" className="application-form reveal" action={formAction} onSubmit={onSubmit}>
      <div className="step-indicator" aria-label="Ansökningssteg">
        {steps.map((label, index) => (
          <button
            key={label}
            type="button"
            className={index === step ? "step-pill active" : index < step ? "step-pill done" : "step-pill"}
            onClick={() => {
              if (index <= step || validateStep(step)) setStep(index);
            }}
          >
            <span>{index + 1}</span>
            {label}
          </button>
        ))}
      </div>

      {state.message && !state.ok ? <p className="form-alert">{state.message}</p> : null}

      <div className={step === 0 ? "form-step active" : "form-step"} aria-hidden={step !== 0}>
        <div className="form-step-heading">
          <p className="eyebrow">Steg 1</p>
          <h2>Företaget</h2>
          <p>Fyll i grunduppgifter. Inga KYC-dokument behövs i webbansökan.</p>
        </div>
        <div className="form-grid">
          <Field name="company_name" label="Företagsnamn" placeholder="Ex. ABC Consulting AB" errors={mergedErrors} />
          <Field name="org_number" label="Organisationsnummer" placeholder="559416-7149" errors={mergedErrors} />
          <Field name="contact_name" label="Kontaktperson" placeholder="För- och efternamn" errors={mergedErrors} />
          <Field name="email" label="E-post" type="email" placeholder="namn@foretag.se" errors={mergedErrors} />
          <Field name="phone" label="Telefon" type="tel" placeholder="+46 70 000 00 00" errors={mergedErrors} />
          <Field name="industry" label="Bransch" placeholder="Ex. e-handel, konsult, bygg" errors={mergedErrors} />
          <Field name="website" label="Hemsida" placeholder="https://..." errors={mergedErrors} />
          <YesNoField name="has_swedish_business_account" label="Har företaget svenskt företagskonto idag?" />
          <YesNoField name="has_bankgiro" label="Har företaget bankgiro idag?" />
          <YesNoField name="was_denied_bank_services" label="Har företaget blivit nekat bankkonto/bankgiro?" />
        </div>
        <label>
          Kort verksamhetsbeskrivning
          <textarea name="business_description" rows={4} placeholder="Beskriv kort vad företaget gör och varför ni behöver företagsbetalningar eller bankgiro." />
          {mergedErrors.business_description ? <span className="field-error">{mergedErrors.business_description}</span> : null}
        </label>
      </div>

      <div className={step === 1 ? "form-step active" : "form-step"} aria-hidden={step !== 1}>
        <div className="form-step-heading">
          <p className="eyebrow">Steg 2</p>
          <h2>Behovet</h2>
          <p>Välj det som stämmer bäst. Det behöver inte vara perfekt.</p>
        </div>
        <div className="form-grid">
          <SelectField name="customer_type" label="Vilka kunder fakturerar ni?" errors={mergedErrors}>
            <option value="" disabled>Välj kundtyp</option>
            <option value="B2B">Företag</option>
            <option value="B2C">Privatpersoner</option>
            <option value="both">Både företag och privatpersoner</option>
          </SelectField>
          <Field name="monthly_volume_estimate" label="Uppskattad månadsvolym" placeholder="Ex. 250000" errors={mergedErrors} />
          <Field name="invoice_count_estimate" label="Antal fakturor per månad" type="number" placeholder="Ex. 80" errors={mergedErrors} />
          <Field name="average_invoice_amount" label="Genomsnittligt fakturabelopp" placeholder="Ex. 3000" errors={mergedErrors} />
          <Field name="current_invoice_system" label="Befintligt fakturasystem" placeholder="Ex. Fortnox, Dooer, Excel eller inget" errors={mergedErrors} />
          <SelectField name="urgency" label="Hur snabbt behöver ni komma igång?" errors={mergedErrors}>
            <option value="" disabled>Välj</option>
            <option value="asap">Så snart som möjligt</option>
            <option value="1-2 weeks">Inom 1–2 veckor</option>
            <option value="this month">Denna månad</option>
            <option value="planning">Vi planerar framåt</option>
          </SelectField>
        </div>
        <div className="checkbox-grid">
          <label className="checkbox-card"><input name="needs_invoicing" type="checkbox" defaultChecked /> <span>Fakturering</span></label>
          <label className="checkbox-card"><input name="needs_customer_payments" type="checkbox" defaultChecked /> <span>Ta emot kundinbetalningar</span></label>
          <label className="checkbox-card"><input name="needs_bankgiro_flow" type="checkbox" defaultChecked /> <span>Bankgirobaserat betalflöde</span></label>
          <label className="checkbox-card"><input name="needs_invoice_financing" type="checkbox" /> <span>Fakturaköp/förskottsutbetalning</span></label>
          <label className="checkbox-card"><input name="needs_api" type="checkbox" /> <span>API eller integration senare</span></label>
        </div>
        <label>
          Övrig kommentar
          <textarea name="other_comment" rows={4} placeholder="Skriv något mer som kan hjälpa oss förstå behovet." />
        </label>
      </div>

      <div className={step === 2 ? "form-step active" : "form-step"} aria-hidden={step !== 2}>
        <div className="form-step-heading">
          <p className="eyebrow">Steg 3</p>
          <h2>Bekräfta</h2>
          <p>Granska uppgifterna och godkänn villkoren för att skicka ansökan.</p>
        </div>
        <div className="consent-box">
          <CheckboxField name="consent_contact" errors={mergedErrors} label="Jag godkänner att Div3rsa får granska ansökan och kontakta mig om nästa steg." />
          <CheckboxField name="consent_partner_forwarding" errors={mergedErrors} label="Jag godkänner att nödvändiga uppgifter kan skickas vidare till relevant betalnings- eller finansaktör för fortsatt onboarding när det krävs." />
          <p>
            Div3rsa är inte en bank och bankgiro/företagsbetalningar garanteras inte innan ansökan och onboarding är godkänd. KYC/AML hanteras senare av relevant aktör när det krävs.
          </p>
        </div>
      </div>

      <div className="form-actions-sticky">
        {step > 0 ? <button className="button button-secondary" type="button" onClick={previousStep}>Tillbaka</button> : <span />}
        {step < steps.length - 1 ? (
          <button className="button button-primary" type="button" onClick={nextStep}>Nästa steg</button>
        ) : (
          <button className="button button-primary" type="submit" disabled={pending}>{pending ? "Skickar..." : "Skicka ansökan"}</button>
        )}
      </div>
    </form>
  );
}
