import { heroProductCards, trustIndicators } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";

export function HomeHero() {
  return (
    <section className="hero hero-clean">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Div3rsa AB · Webb, system och portaler</p>
          <h1>Digitala lösningar som känns enkla, moderna och seriösa.</h1>
          <p className="hero-subheadline">
            Vi bygger hemsidor, webbappar och kundportaler för företag som vill se professionella ut online och få en teknisk grund som kan växa.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Boka genomgång</ButtonLink>
            <ButtonLink href="/websites" variant="secondary">
              Se hemsidestilar
            </ButtonLink>
            <ButtonLink href="/foretagsbetalningar-bankgiro" variant="ghost">
              Företagsbetalningar & Bankgiro
            </ButtonLink>
          </div>
          <div className="trust-strip" aria-label="Div3rsa bygger">
            {trustIndicators.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-product-card reveal" aria-label="Div3rsa digital produktkarta">
          <div className="product-card-top">
            <span>Div3rsa</span>
            <strong>Bygg rätt grund</strong>
          </div>
          <div className="product-flow">
            <div>
              <span>01</span>
              <strong>Webb</strong>
              <p>Startsida, tjänster, CTA och kontakt.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Portal</strong>
              <p>Inloggning, status, kunder och admin.</p>
            </div>
            <div>
              <span>03</span>
              <strong>System</strong>
              <p>Automation, data och skalbar drift.</p>
            </div>
          </div>
          <div className="mini-dashboard">
            {heroProductCards.map((card) => (
              <span key={card}>{card}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
