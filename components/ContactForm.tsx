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
      "Name: " + value("name"),
      "Company: " + value("company"),
      "Email: " + value("email"),
      "Phone: " + value("phone"),
      "Project type: " + value("projectType"),
      "Budget range: " + value("budget"),
      "",
      "Message:",
      value("message"),
    ].join("\n");
    const subjectName = value("company") || value("name") || "website visitor";
    const mailto =
      "mailto:" +
      company.email +
      "?subject=" +
      encodeURIComponent("Project request from " + subjectName) +
      "&body=" +
      encodeURIComponent(body);
    window.location.href = mailto;
  }

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <div className="form-note">
        This form opens your email client with a prepared message. Backend email delivery can be connected later with
        Resend or another email service.
      </div>
      <div className="form-grid">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Company
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          What do you want to build?
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          Optional budget range
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
        Message
        <textarea name="message" rows={6} required />
      </label>
      <button className="button button-primary" type="submit">
        Open email draft
      </button>
    </form>
  );
}
