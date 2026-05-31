import { ButtonLink } from "./ButtonLink";

type WebsiteStyle = {
  slug: string;
  title: string;
  eyebrow: string;
  heroLine: string;
  description: string;
  demoTitle: string;
  demoText: string;
  exampleStructure: string[];
  growthPath: string[];
  fits: string[];
  features: string[];
  cta: string;
};

type WebsiteStyleDetailProps = {
  style: WebsiteStyle;
};

function PremiumPreview() {
  return (
    <div className="style-preview premium-preview" aria-label="Premium 3D website example">
      <div className="preview-orb" />
      <div className="preview-browser dark-browser">
        <div className="preview-topbar">
          <span />
          <span />
          <span />
          <strong>premium.div3rsa.com</strong>
        </div>
        <div className="premium-hero-card">
          <p>Premium SaaS Website</p>
          <h3>Product-led hero with depth</h3>
          <div className="premium-cta-row">
            <span>Book demo</span>
            <span>Login</span>
          </div>
        </div>
        <div className="premium-floating premium-floating-one">3D hero</div>
        <div className="premium-floating premium-floating-two">Portal CTA</div>
        <div className="premium-floating premium-floating-three">AI-ready</div>
      </div>
    </div>
  );
}

function SimplePreview() {
  return (
    <div className="style-preview simple-preview" aria-label="Simple information website example">
      <div className="simple-page-shell">
        <div className="simple-nav">
          <strong>Company</strong>
          <span>Services</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="simple-hero-block">
          <p>Professional local company</p>
          <h3>Clear services. Easy contact.</h3>
          <span>Request a quote</span>
        </div>
        <div className="simple-service-grid">
          <span>Service 01</span>
          <span>Service 02</span>
          <span>Service 03</span>
        </div>
        <div className="simple-contact-block">Email / Phone / Form</div>
      </div>
    </div>
  );
}

function HybridPreview() {
  return (
    <div className="style-preview hybrid-preview" aria-label="Hybrid business website example">
      <div className="hybrid-site-card">
        <div className="hybrid-hero-mini">
          <p>B2B growth website</p>
          <h3>Website now. Portal next.</h3>
          <div>
            <span>Start project</span>
            <span>Login</span>
          </div>
        </div>
        <div className="hybrid-flow">
          <span>Website</span>
          <span>Lead</span>
          <span>Account</span>
        </div>
      </div>
      <div className="hybrid-dashboard-card">
        <strong>Future portal</strong>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function StylePreview({ slug }: { slug: string }) {
  if (slug === "simple-info") {
    return <SimplePreview />;
  }

  if (slug === "hybrid-business") {
    return <HybridPreview />;
  }

  return <PremiumPreview />;
}

export function WebsiteStyleDetail({ style }: WebsiteStyleDetailProps) {
  return (
    <section className={"page-hero style-detail-hero style-page-" + style.slug}>
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="container two-column style-hero-grid">
        <div className="reveal">
          <p className="eyebrow">{style.eyebrow}</p>
          <h1>{style.title}</h1>
          <p className="page-lead strong-lead">{style.heroLine}</p>
          <p className="style-description">{style.description}</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">{style.cta}</ButtonLink>
            <ButtonLink href="/websites" variant="secondary">
              Compare website styles
            </ButtonLink>
          </div>
        </div>
        <div className="style-detail-card style-example-card reveal">
          <StylePreview slug={style.slug} />
          <h2>{style.demoTitle}</h2>
          <p>{style.demoText}</p>
        </div>
      </div>

      <div className="container style-detail-grid expanded-style-grid">
        <article className="glass-card reveal">
          <span className="card-kicker">Example structure</span>
          <h2>How this website could be built</h2>
          <ul className="check-list">
            {style.exampleStructure.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="glass-card reveal">
          <span className="card-kicker">Growth path</span>
          <h2>Where it can go next</h2>
          <div className="growth-path-mini">
            {style.growthPath.map((item, index) => (
              <span key={item}>
                <strong>{index + 1}</strong>
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="glass-card reveal">
          <span className="card-kicker">Best fit</span>
          <h2>Fits</h2>
          <div className="feature-tags">
            {style.fits.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
        <article className="glass-card reveal">
          <span className="card-kicker">Included direction</span>
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
