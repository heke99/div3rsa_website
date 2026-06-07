import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookiepolicy",
  description: "Cookiepolicy för Div3rsa AB:s webbplats.",
};

export default function CookiePolicyPage() {
  return (
    <section className="page-hero legal-page">
      <div className="container narrow legal-stack reveal">
        <p className="eyebrow">Juridik</p>
        <h1>Cookiepolicy</h1>
        <p className="page-lead">Cookies kan användas för att webbplatsen ska fungera, förbättra upplevelsen och mäta trafik om analys aktiveras.</p>
        <article className="glass-card">
          <h2>Nödvändiga cookies</h2>
          <p>Nödvändiga cookies används för säkerhet, formulär, sessioner och grundläggande webbplatsfunktioner.</p>
        </article>
        <article className="glass-card">
          <h2>Analyscookies</h2>
          <p>Om analysverktyg aktiveras senare ska informationen uppdateras med vilka verktyg som används och hur besökaren kan hantera samtycke.</p>
        </article>
        <article className="glass-card">
          <h2>Hantera cookies</h2>
          <p>Du kan vanligtvis radera eller blockera cookies i webbläsarens inställningar. Vissa funktioner kan då fungera sämre.</p>
        </article>
        <article className="glass-card">
          <h2>Kontakt</h2>
          <p>Frågor skickas till <a href={"mailto:" + company.email}>{company.email}</a>.</p>
        </article>
      </div>
    </section>
  );
}
