import { heroProductCards, trustIndicators } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Div3rsa AB · Digitala system, webbappar och portaler</p>
          <h1>Vi bygger digitala lösningar som ser seriösa ut och fungerar i verkligheten.</h1>
          <p className="hero-subheadline">
            Div3rsa utvecklar moderna hemsidor, webbappar, kundportaler, interna system och automatiserade flöden för
            företag som vill växa med en stark teknisk grund.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Starta ett projekt</ButtonLink>
            <ButtonLink href="/systems" variant="secondary">
              Se våra projekt
            </ButtonLink>
            <ButtonLink href="/foretagsbetalningar-bankgiro" variant="ghost">
              Företagsbetalningar & Bankgiro
            </ButtonLink>
          </div>
          <div className="hero-proof" aria-label="Div3rsa proof points">
            <div>
              <strong>Webb</strong>
              <span>Premium hemsidor och landningssidor</span>
            </div>
            <div>
              <strong>System</strong>
              <span>Portaler, dashboards och SaaS</span>
            </div>
            <div>
              <strong>Automation</strong>
              <span>AI-ready flöden och integrationer</span>
            </div>
          </div>
          <div className="trust-strip" aria-label="Div3rsa capabilities">
            {trustIndicators.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Digital product capabilities visualization">
          <div className="orbit-card main-dashboard">
            <div className="dashboard-topline">
              <span />
              <span />
              <span />
            </div>
            <div className="dashboard-metric">
              <strong>Div3rsa Platform</strong>
              <span>{"Hemsida → Portal → SaaS"}</span>
            </div>
            <div className="dashboard-bars">
              <i />
              <i />
              <i />
            </div>
          </div>
          {heroProductCards.map((card, index) => (
            <div className={"floating-card floating-card-" + index} key={card}>
              <span className="status-dot" />
              {card}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
