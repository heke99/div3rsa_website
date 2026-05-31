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
          <p className="eyebrow">Website style</p>
          <h1>{style.title}</h1>
          <p className="page-lead">{style.description}</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">{style.cta}</ButtonLink>
            <ButtonLink href="/websites" variant="secondary">
              Compare website styles
            </ButtonLink>
          </div>
        </div>
        <div className="style-detail-card reveal">
          <div className="style-visual large">
            <span />
            <span />
            <span />
          </div>
          <h2>Designed to support growth</h2>
          <p>
            Div3rsa can start with this direction and later expand the same foundation into a portal, dashboard, app or
            SaaS product.
          </p>
        </div>
      </div>
      <div className="container style-detail-grid">
        <article className="glass-card reveal">
          <h2>Fits</h2>
          <div className="feature-tags">
            {style.fits.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
        <article className="glass-card reveal">
          <h2>Features</h2>
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
