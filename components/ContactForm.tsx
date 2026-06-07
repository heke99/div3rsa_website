"use client";

import { useActionState } from "react";
import { budgetRanges, projectTypes } from "@/lib/content";
import { submitContactRequest, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { ok: false, message: "" };

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <span className="field-error">{message}</span>;
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactRequest, initialState);

  if (state.ok) {
    return (
      <div className="contact-form contact-success reveal">
        <span className="success-mark">✓</span>
        <h2>Vi har tagit emot din förfrågan.</h2>
        <p>Vi går igenom meddelandet och återkommer med nästa steg.</p>
      </div>
    );
  }

  return (
    <form className="contact-form reveal" action={formAction} noValidate>
      <div className="form-note compact-note">
        Skriv kort vad du vill bygga. Meddelandet skickas direkt till Div3rsa.
      </div>
      {state.message && <div className="form-error">{state.message}</div>}
      <div className="form-grid">
        <label>
          Namn
          <input name="name" type="text" autoComplete="name" required />
          <FieldError message={state.fieldErrors?.name} />
        </label>
        <label>
          Bolag
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label>
          E-post
          <input name="email" type="email" autoComplete="email" required />
          <FieldError message={state.fieldErrors?.email} />
        </label>
        <label>
          Telefon
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Vad vill du bygga?
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>
              Välj projekttyp
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FieldError message={state.fieldErrors?.projectType} />
        </label>
        <label>
          Budget ungefär
          <select name="budget" defaultValue="Vet inte ännu">
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Meddelande
        <textarea name="message" rows={5} placeholder="Berätta kort vad ni behöver hjälp med." required />
        <FieldError message={state.fieldErrors?.message} />
      </label>
      <button className="button button-primary" type="submit" disabled={isPending}>
        {isPending ? "Skickar..." : "Skicka förfrågan"}
      </button>
    </form>
  );
}
