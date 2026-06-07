import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookiepolicy",
  description: "Cookiepolicy för Div3rsa AB.",
};

export default function CookiePolicyPage() {
  return (
    <section className="page-hero">
      <div className="container narrow legal-stack reveal">
        <p className="eyebrow">Juridik</p>
        <h1>Cookiepolicy</h1>
        <p className="page-lead">Div3rsa kan använda nödvändiga cookies för webbplatsens funktion och framtida analyscookies om spårning aktiveras.</p>
        <article className="glass-card">
          <h2>Nödvändiga cookies</h2>
          <p>Nödvändiga cookies används för säkerhet, sessioner och grundläggande webbplatsfunktioner.</p>
        </article>
        <article className="glass-card">
          <h2>Kontakt</h2>
          <p>Frågor skickas till <a href={"mailto:" + company.email}>{company.email}</a>.</p>
        </article>
      </div>
    </section>
  );
}
