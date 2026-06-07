import { heroProductCards, trustIndicators } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";

export function HomeHero() {
  return (
    <section className="hero hero-premium">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Div3rsa AB · Webb, system och portaler</p>
          <h1>Hemsidor och system som får ditt företag att kännas större.</h1>
          <p className="hero-subheadline">
            Vi bygger snygga hemsidor, kundportaler och digitala flöden för företag som vill se seriösa ut, få fler förfrågningar och ha en teknisk grund att växa med.
          </p>

          <div className="hero-actions">
            <ButtonLink href="/contact">Boka genomgång</ButtonLink>
            <ButtonLink href="/websites" variant="secondary">
              Se hemsidestilar
            </ButtonLink>
            <ButtonLink href="/foretagsbetalningar-bankgiro" variant="ghost">
              Bankgiro & betalningar
            </ButtonLink>
          </div>

          <div className="trust-strip" aria-label="Div3rsa bygger">
            {trustIndicators.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-showcase reveal" aria-label="Visuell förhandsvisning av Div3rsa-lösningar">
          <div className="showcase-shell">
            <div className="showcase-topbar">
              <span />
              <span />
              <span />
              <strong>div3rsa.com</strong>
            </div>

            <div className="showcase-hero-card">
              <div>
                <span className="showcase-pill">Premium website</span>
                <h2>Design som säljer känslan först.</h2>
                <p>Hero, tjänster, CTA, portal och kontakt i ett tydligt flöde.</p>
              </div>
              <div className="showcase-3d-cube" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="showcase-dashboard-grid">
              <div className="showcase-metric strong">
                <span>Webb</span>
                <strong>3 stilar</strong>
              </div>
              <div className="showcase-metric">
                <span>Portal</span>
                <strong>Redo</strong>
              </div>
              <div className="showcase-metric">
                <span>CTA</span>
                <strong>Kontakt</strong>
              </div>
            </div>

            <div className="showcase-flow">
              {heroProductCards.map((card, index) => (
                <span key={card} className={index === 1 ? "active" : ""}>
                  {card}
                </span>
              ))}
            </div>
          </div>

          <div className="floating-card hero-float-one">
            <i className="status-dot" />
            3D / Wow
          </div>
          <div className="floating-card hero-float-two">
            <i className="status-dot" />
            Business
          </div>
          <div className="floating-card hero-float-three">
            <i className="status-dot" />
            Simple
          </div>
        </div>
      </div>
    </section>
  );
}
