"use client";

import { useActionState } from "react";
import { submitContactRequest, type ContactFormState } from "@/app/contact/actions";
import { budgetRanges, projectTypes } from "@/lib/content";

const initialState: ContactFormState = {
  ok: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactRequest, initialState);
  const fieldErrors = state.fieldErrors || {};

  return (
    <form className="contact-form reveal" action={formAction}>
      <div className="form-note">
        Skicka din förfrågan direkt här. Div3rsa får en intern mailnotis via SMTP och återkommer med nästa steg.
      </div>

      {state.message ? (
        <div className={state.ok ? "form-alert form-alert-success" : "form-alert"} role={state.ok ? "status" : "alert"}>
          {state.message}
        </div>
      ) : null}

      <div className="form-grid">
        <label>
          Namn
          <input name="name" type="text" autoComplete="name" required />
          {fieldErrors.name ? <span className="field-error">{fieldErrors.name}</span> : null}
        </label>
        <label>
          Företag
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label>
          E-post
          <input name="email" type="email" autoComplete="email" required />
          {fieldErrors.email ? <span className="field-error">{fieldErrors.email}</span> : null}
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
          {fieldErrors.projectType ? <span className="field-error">{fieldErrors.projectType}</span> : null}
        </label>
        <label>
          Budget, om du vet
          <select name="budget" defaultValue="Not sure yet">
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
        <textarea name="message" rows={6} required />
        {fieldErrors.message ? <span className="field-error">{fieldErrors.message}</span> : null}
      </label>
      <button className="button button-primary" type="submit" disabled={isPending}>
        {isPending ? "Skickar..." : "Skicka förfrågan"}
      </button>
    </form>
  );
}
