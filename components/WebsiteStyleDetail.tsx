import { ButtonLink } from "./ButtonLink";

type WebsiteStyleDetailProps = {
  style: {
    title: string;
    description: string;
    fits: string[];
    features: string[];
    cta: string;
  };
};

export function WebsiteStyleDetail({ style }: WebsiteStyleDetailProps) {
  return (
    <section className="page-hero style-detail-hero">
      <div className="aurora aurora-one" />
      <div className="container two-column">
        <div className="reveal">
          <p className="eyebrow">Hemsidestil</p>
          <h1>{style.title}</h1>
          <p className="page-lead">{style.description}</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">{style.cta}</ButtonLink>
            <ButtonLink href="/websites" variant="secondary">
              Jämför stilar
            </ButtonLink>
          </div>
        </div>
        <div className="style-detail-card reveal">
          <div className="style-visual large">
            <span />
            <span />
            <span />
          </div>
          <h2>Byggd för att kunna växa</h2>
          <p>
            Div3rsa kan börja med denna riktning och senare bygga vidare till portal, dashboard, app eller SaaS-produkt.
          </p>
        </div>
      </div>
      <div className="container style-detail-grid">
        <article className="glass-card reveal">
          <h2>Passar för</h2>
          <div className="feature-tags">
            {style.fits.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
        <article className="glass-card reveal">
          <h2>Funktioner</h2>
          <div className="feature-tags">
            {style.features.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
