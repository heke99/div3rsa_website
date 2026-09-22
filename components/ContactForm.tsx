"use client";
import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { submitContactRequest, type ContactFormState } from "@/app/contact/actions";
import { budgetRanges, projectTypes } from "@/lib/content";
import { company, entities } from "@/lib/company";
const initialState: ContactFormState = { ok: false, message: "" };
export function ContactForm({ productName }: { productName?: string }) {
  const [state, formAction, isPending] = useActionState(submitContactRequest, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const errors = state.fieldErrors || {};
  useEffect(() => { formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(); }, [state]);
  const attrs = (name: string) => ({ "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `contact-error-${name}` : undefined });
  const error = (name: string) => errors[name] ? <span id={`contact-error-${name}`} className="field-error">{errors[name]}</span> : null;
  if (state.ok) return <div className="success-card" role="status"><p className="eyebrow">Enquiry received</p><h2>Thank you for the introduction.</h2><p>{state.message}</p><p>Your enquiry has been recorded for our team. For anything else, email <a className="text-link" href={`mailto:${company.email}`}>{company.email}</a>.</p></div>;
  // Failed Actions also resolve: preserve the visitor’s fields until the success view replaces the form.
  return <form ref={formRef} className="contact-form" action={formAction} onReset={(event) => event.preventDefault()} aria-busy={isPending}>
    {state.message && <div className="form-alert" role="alert">{state.message}</div>}
    <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="website_check" type="text" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-grid">
      <label>Full name<input name="name" type="text" autoComplete="name" required maxLength={160} {...attrs("name")} />{error("name")}</label>
      <label>Company (optional)<input name="company" type="text" autoComplete="organization" maxLength={200} {...attrs("company")} />{error("company")}</label>
      <label>Email address<input name="email" type="email" autoComplete="email" spellCheck={false} required maxLength={254} {...attrs("email")} />{error("email")}</label>
      <label>Phone (optional)<input name="phone" type="tel" autoComplete="tel" maxLength={60} {...attrs("phone")} />{error("phone")}</label>
      <label>What would you like to build?<select name="projectType" defaultValue="" required {...attrs("projectType")}><option value="" disabled>Select a project type</option>{projectTypes.map(type => <option key={type} value={type}>{type}</option>)}</select>{error("projectType")}</label>
      <label>Budget (optional, SEK)<select name="budget" defaultValue="Not sure yet" {...attrs("budget")}>{budgetRanges.map(range => <option key={range} value={range}>{range}</option>)}</select>{error("budget")}</label>
    </div>
    <label>Preferred entity<select name="preferredEntity" defaultValue="" {...attrs("preferredEntity")}><option value="">No preference — let’s discuss</option>{entities.map(entity => <option key={entity.id} value={entity.id}>{entity.name} — {entity.jurisdiction}</option>)}</select>{error("preferredEntity")}</label>
    <label>Tell us about the project<textarea name="message" rows={6} required maxLength={8000} defaultValue={productName ? `I would like to discuss ${productName}.\n\n` : ""} {...attrs("message")} />{error("message")}</label>
    <p className="contact-privacy-note">{company.name} processes this enquiry to respond to your request. Your preferred entity is not a contract selection; we confirm that separately. Read our <Link href="/privacy">privacy notice</Link>.</p>
    <button className="button button-primary" type="submit" disabled={isPending}>{isPending ? "Sending enquiry…" : "Send enquiry"}<span aria-hidden="true">↗</span></button>
  </form>;
}
