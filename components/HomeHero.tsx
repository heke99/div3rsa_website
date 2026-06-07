import { heroProductCards, trustIndicators } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Div3rsa AB · Hemsidor, system och företagsportaler</p>
          <h1>Hemsidor och system som får ditt företag att kännas större.</h1>
          <p className="hero-subheadline">
            Vi bygger moderna hemsidor, kundportaler, appar och system. Från en stark 3D-hemsida till bankgiroflöden och interna dashboards.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Boka genomgång</ButtonLink>
            <ButtonLink href="/foretagsbetalningar-bankgiro" className="button-bankgiro">
              Bankgiro & betalningar
            </ButtonLink>
            <ButtonLink href="/websites" variant="secondary">
              Se hemsidestilar
            </ButtonLink>
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
              <strong>Div3rsa Studio</strong>
              <span>{"3D hemsida → Portal → System"}</span>
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
