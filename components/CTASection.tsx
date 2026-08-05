import { ButtonLink } from "./ButtonLink";

export function CTASection() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner reveal">
        <div>
          <p className="eyebrow">Nästa produkt</p>
          <h2>Har ni ett arbetsflöde som borde vara ett system?</h2>
          <p>Vi hjälper er gå från behov och process till en skalbar digital produkt.</p>
        </div>
        <div className="cta-actions">
          <ButtonLink href="/contact">Starta dialogen</ButtonLink>
          <ButtonLink href="/systems" variant="secondary">Se våra produkter</ButtonLink>
        </div>
      </div>
    </section>
  );
}
