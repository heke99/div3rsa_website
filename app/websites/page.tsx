import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { WebsiteStyleSelector } from "@/components/WebsiteStyleSelector";

export const metadata: Metadata = {
  title: "Hemsidor för företag",
  description:
    "Jämför tre tydliga hemsidestilar från Diversa Nordic AB: Premium 3D, Business och Simple. Klicka på ett alternativ för att se stilen direkt.",
};

const includedItems = [
  {
    title: "Mobilanpassad design",
    text: "Sidan anpassas för mobil, surfplatta och dator så att innehållet alltid är enkelt att använda.",
  },
  {
    title: "Tydlig struktur",
    text: "Besökaren ska snabbt förstå vad ni erbjuder, varför ni är rätt val och hur nästa steg tas.",
  },
  {
    title: "Kontakt och konvertering",
    text: "Kontaktvägar och uppmaningar placeras där de faktiskt hjälper besökaren att gå vidare.",
  },
  {
    title: "Grund för synlighet",
    text: "Teknisk grund, metadata och sidstruktur sätts upp för att webbplatsen ska kunna hittas och delas korrekt.",
  },
  {
    title: "Enkel vidareutveckling",
    text: "Webbplatsen byggs så att nya sidor, funktioner och integrationer kan läggas till när behovet växer.",
  },
  {
    title: "Lanseringsklar leverans",
    text: "Vi går igenom innehåll, länkar, formulär och responsivitet innan webbplatsen publiceras.",
  },
];

const process = [
  ["01", "Välj riktning", "Välj den stil som bäst motsvarar känslan ni vill skapa."],
  ["02", "Anpassa innehållet", "Vi formar struktur, texter och visuellt uttryck efter ert företag."],
  ["03", "Bygg och granska", "Sidan byggs och ni får granska helheten innan publicering."],
  ["04", "Publicera", "Domän, formulär och de sista detaljerna kontrolleras inför lansering."],
];

export default function WebsitesPage() {
  return (
    <>
      <section className="page-hero websites-hero websites-page-hero">
        <div className="aurora aurora-two" />
        <div className="container two-column">
          <div className="reveal">
            <p className="eyebrow">Hemsidor</p>
            <h1>En hemsida som känns rätt från första sekunden.</h1>
            <p className="page-lead">
              Välj mellan tre tydliga uttryck. Klicka på ett alternativ för att se en större förhandsvisning och vad upplägget passar bäst för.
            </p>
            <div className="hero-actions">
              <ButtonLink href="#styles">Se alternativen</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Prata med oss</ButtonLink>
            </div>
          </div>

          <div className="websites-hero-showcase reveal" aria-label="Tre hemsidestilar">
            <div className="websites-hero-card websites-hero-card-premium">
              <small>Premium</small><strong>3D / Wow</strong><span>Visuell och minnesvärd</span>
            </div>
            <div className="websites-hero-card websites-hero-card-business">
              <small>B2B</small><strong>Business</strong><span>Tydlig och säljande</span>
            </div>
            <div className="websites-hero-card websites-hero-card-simple">
              <small>Snabb start</small><strong>Simple</strong><span>Ren och lätt att förstå</span>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="styles"
        eyebrow="Välj utseende"
        title="Klicka på en stil för att se den tydligt."
        intro="Det valda alternativet markeras direkt och visas i en större förhandsvisning under korten."
        className="website-selector-section"
      >
        <WebsiteStyleSelector />
      </Section>

      <Section
        eyebrow="Det här ingår"
        title="En genomarbetad hemsida, oavsett stil."
        intro="Utseendet skiljer sig mellan alternativen, men grunden ska alltid vara tydlig, snabb och professionell."
      >
        <div className="card-grid three website-included-grid">
          {includedItems.map((item) => (
            <article className="glass-card reveal" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Från val till lansering"
        title="Ett enkelt och tydligt arbetssätt."
      >
        <div className="process-grid website-process-grid">
          {process.map(([number, title, text]) => (
            <article className="process-step reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="section website-growth-section">
        <div className="container">
          <div className="website-growth-panel reveal">
            <div>
              <p className="eyebrow">Redo att växa</p>
              <h2>Hemsidan kan utvecklas vidare när företaget behöver mer.</h2>
              <p>
                Börja med en stark publik webbplats och lägg senare till exempelvis bokning, inloggning, kundyta, offertflöde eller andra digitala funktioner.
              </p>
            </div>
            <ButtonLink href="/contact">Starta ett projekt</ButtonLink>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
