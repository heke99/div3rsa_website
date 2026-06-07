import { ButtonLink } from "./ButtonLink";

type WebsiteStyleDetailProps = {
  style: {
    slug: string;
    title: string;
    shortTitle?: string;
    badge?: string;
    description: string;
    summary?: string;
    bestFor?: string;
    exampleTitle?: string;
    exampleText?: string;
    previewSections?: string[];
    fits: string[];
    features: string[];
    cta: string;
  };
};

export function WebsiteStyleDetail({ style }: WebsiteStyleDetailProps) {
  return (
    <>
      <section className={`page-hero style-detail-hero style-detail-${style.slug}`}>
        <div className="aurora aurora-one" />
        <div className="container two-column">
          <div className="reveal">
            <p className="eyebrow">Hemsidestil · {style.shortTitle || style.title}</p>
            <h1>{style.title}</h1>
            <p className="page-lead">{style.description}</p>
            <div className="hero-actions">
              <ButtonLink href="/contact">{style.cta}</ButtonLink>
              <ButtonLink href="/websites" variant="secondary">
                Jämför stilar
              </ButtonLink>
            </div>
          </div>

          <div className="style-example-preview reveal">
            <div className={`style-visual large style-visual-${style.slug}`} aria-label={`Exempel på ${style.shortTitle || style.title}`}>
              <span />
              <span />
              <span />
              <i />
              <div className="style-preview-copy large-copy">
                <small>{style.exampleTitle}</small>
                <b>{style.shortTitle || style.title}</b>
              </div>
            </div>
            <div className="style-example-caption">
              <span className="style-badge">{style.badge}</span>
              <h2>{style.exampleTitle}</h2>
              <p>{style.exampleText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section style-blueprint-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Exempelstruktur</p>
            <h2>Så kan sidan byggas upp.</h2>
            <p className="section-intro">
              Det här är inte en låst mall. Det är en tydlig riktning som vi anpassar efter ditt företag, din budget och målet med sidan.
            </p>
          </div>

          <div className="style-blueprint reveal">
            {(style.previewSections || style.features.slice(0, 5)).map((section, index) => (
              <div className="style-blueprint-step" key={section}>
                <span>{index + 1}</span>
                <strong>{section}</strong>
              </div>
            ))}
          </div>

          <div className="style-detail-grid">
            <article className="glass-card reveal">
              <h2>Passar för</h2>
              <div className="feature-tags">
                {style.fits.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
            <article className="glass-card reveal">
              <h2>Det ingår ofta</h2>
              <div className="feature-tags">
                {style.features.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
