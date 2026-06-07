"use client";

import { FormEvent } from "react";
import { budgetRanges, company, projectTypes } from "@/lib/content";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "").trim();
    const body = [
      "Namn: " + value("name"),
      "Företag: " + value("company"),
      "E-post: " + value("email"),
      "Telefon: " + value("phone"),
      "Project type: " + value("projectType"),
      "Budget range: " + value("budget"),
      "",
      "Meddelande:",
      value("message"),
    ].join("\n");
    const subjectNamn = value("company") || value("name") || "website visitor";
    const mailto =
      "mailto:" +
      company.email +
      "?subject=" +
      encodeURIComponent("Project request from " + subjectNamn) +
      "&body=" +
      encodeURIComponent(body);
    window.location.href = mailto;
  }

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <div className="form-note">
        Formuläret öppnar ditt e-postprogram med ett färdigt meddelande till Div3rsa.
      </div>
      <div className="form-grid">
        <label>
          Namn
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Företag
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label>
          E-post
          <input name="email" type="email" autoComplete="email" required />
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
      </label>
      <button className="button button-primary" type="submit">
        Öppna e-postutkast
      </button>
    </form>
  );
}
