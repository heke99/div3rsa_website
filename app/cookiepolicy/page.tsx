import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Cookiepolicy",
  description: "Cookiepolicy för Attmos AB:s webbplats div3rsa.com.",
};

export default function CookiePolicyPage() {
  return (
    <section className="page-hero legal-page">
      <div className="container narrow legal-stack reveal">
        <p className="eyebrow">Juridik</p>
        <h1>Cookiepolicy</h1>
        <p className="page-lead">Den här policyn beskriver hur {company.name} använder cookies och liknande lagring på {company.domain}, varför lagringen används och hur du kan ändra ditt val.</p>
        <article className="glass-card">
          <h2>Ansvarig</h2>
          <p>{company.name}, org.nr {company.orgNumber}, ansvarar för webbplatsen. Frågor kan skickas till <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </article>
        <article className="glass-card">
          <h2>Nödvändig teknisk lagring</h2>
          <p>Webbplatsen kan använda cookies eller motsvarande teknisk lagring när det är nödvändigt för säkerhet, formulär, sessioner och andra funktioner som du uttryckligen begär. Sådan lagring används inte för annonsering.</p>
        </article>
        <article className="glass-card">
          <h2>Ditt cookieval</h2>
          <p><code>div3rsa-site-cookie-consent-v1</code> lagras lokalt i din webbläsare för att komma ihåg om du har tillåtit eller avvisat valfria cookies och liknande lagring. Uppgiften ligger kvar tills du rensar webbplatsdata eller vi ersätter samtyckesversionen.</p>
        </article>
        <article className="glass-card">
          <h2>Valfri statistik och marknadsföring</h2>
          <p>Webbplatsen använder för närvarande inte valfria analys- eller annonscookies som måste aktiveras för att sidan ska fungera. Om sådan teknik införs får den inte aktiveras innan du gjort ett aktivt val. Policyn ska då uppdateras med leverantör, namn på lagringen, ändamål och lagringstid innan tekniken tas i bruk.</p>
        </article>
        <article className="glass-card">
          <h2>Hantera eller återkalla ditt val</h2>
          <p>Vid första besöket kan du välja mellan <strong>Avvisa valfria</strong> och <strong>Tillåt valfria</strong>. Efter ditt val finns knappen <strong>Cookieinställningar</strong> på webbplatsen så att du kan öppna panelen igen och ändra ditt val.</p>
        </article>
        <article className="glass-card">
          <h2>Webbläsarens inställningar</h2>
          <p>Du kan också radera cookies och lokal lagring i webbläsaren. Om du blockerar lagring som är tekniskt nödvändig kan vissa funktioner, exempelvis inloggning eller formulärflöden, sluta fungera korrekt.</p>
        </article>
        <article className="glass-card">
          <h2>Kontakt</h2>
          <p>{company.name} · Org.nr {company.orgNumber} · <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </article>
        <p className="contact-privacy-note">Senast uppdaterad: 25 augusti 2026.</p>
      </div>
    </section>
  );
}
