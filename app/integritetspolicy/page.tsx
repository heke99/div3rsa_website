import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Integritetspolicy för Attmos AB, kontaktförfrågningar och ansökningar till Företagsbetalningar & Bankgiro.",
};

export default function PrivacyPolicySwedishPage() {
  return (
    <section className="page-hero legal-page">
      <div className="container narrow legal-stack reveal">
        <p className="eyebrow">Juridik</p>
        <h1>Integritetspolicy</h1>
        <p className="page-lead">
          Här beskriver vi hur {company.name} behandlar personuppgifter när du besöker {company.domain}, kontaktar oss, skickar en projektförfrågan eller ansöker om Företagsbetalningar & Bankgiro.
        </p>
        <article className="glass-card">
          <h2>Personuppgiftsansvarig</h2>
          <p>{company.name}, org.nr {company.orgNumber}, är personuppgiftsansvarig för den behandling som beskrivs här. Du når oss på <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </article>
        <article className="glass-card">
          <h2>Uppgifter vi kan behandla</h2>
          <p>Vi kan behandla namn, e-post, telefon, bolagsnamn, organisationsnummer, bransch, hemsida, projektbehov, betalningsbehov, ansökningsstatus, meddelanden samt tekniska säkerhets- och logguppgifter som behövs för att driva webbplatsen och skydda våra tjänster.</p>
        </article>
        <article className="glass-card">
          <h2>Ändamål och rättslig grund</h2>
          <p>Vi behandlar uppgifter för att svara på förfrågningar, hantera ansökningar, administrera onboarding, kommunicera med dig, skydda tjänsten och uppfylla rättsliga skyldigheter. Beroende på situationen grundas behandlingen på åtgärder inför eller fullgörande av avtal, vårt berättigade intresse av att hantera affärsrelationer och säkerhet, rättslig förpliktelse eller samtycke när samtycke är den lämpliga rättsliga grunden.</p>
        </article>
        <article className="glass-card">
          <h2>Mottagare och leverantörer</h2>
          <p>Vi kan använda leverantörer för hosting, databas, e-post, säkerhet och andra tekniska funktioner. Vid ansökan om Företagsbetalningar & Bankgiro kan nödvändiga uppgifter lämnas till relevant betalnings- eller finansaktör för fortsatt onboarding när det finns en rättslig grund och du har fått den information som krävs.</p>
        </article>
        <article className="glass-card">
          <h2>Överföringar utanför EU/EES</h2>
          <p>Om en leverantör behandlar personuppgifter utanför EU/EES använder vi, när GDPR kräver det, en giltig överföringsmekanism såsom adekvansbeslut eller EU-kommissionens standardavtalsklausuler och kompletterande skyddsåtgärder där det behövs.</p>
        </article>
        <article className="glass-card">
          <h2>Lagring</h2>
          <p>Vi sparar personuppgifter så länge de behövs för kontakt, ansökan, administration, kundrelation, säkerhet, rättsliga anspråk eller lagkrav. Därefter raderas eller anonymiseras uppgifterna enligt tillämpliga rutiner och eventuella backupcykler.</p>
        </article>
        <article className="glass-card">
          <h2>Dina rättigheter</h2>
          <p>Du kan, beroende på omständigheterna, ha rätt till tillgång, rättelse, radering, begränsning, dataportabilitet och invändning. Om behandlingen grundas på samtycke kan du återkalla samtycket. Kontakta <a href={`mailto:${company.email}`}>{company.email}</a> för att utöva dina rättigheter.</p>
        </article>
        <article className="glass-card">
          <h2>Klagomål</h2>
          <p>Du har rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) om du anser att personuppgifter behandlas i strid med dataskyddsreglerna.</p>
        </article>
        <article className="glass-card">
          <h2>Cookies och liknande lagring</h2>
          <p>Information om webbplatsens cookies, lokal lagring och hur du ändrar ditt val finns i vår <Link href="/cookiepolicy">cookiepolicy</Link>.</p>
        </article>
        <article className="glass-card">
          <h2>Ingen försäljning av personuppgifter</h2>
          <p>{company.name} säljer inte personuppgifter till annonsörer.</p>
        </article>
        <article className="glass-card">
          <h2>Kontakt och bolagsuppgifter</h2>
          <p>{company.name} · Org.nr {company.orgNumber} · <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </article>
        <p className="contact-privacy-note">Senast uppdaterad: 25 augusti 2026.</p>
      </div>
    </section>
  );
}
