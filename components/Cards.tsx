import Link from "next/link";
import { ButtonLink } from "./ButtonLink";

type TextCardProps = {
  title: string;
  text: string;
  kicker?: string;
};

export function TextCard({ title, text, kicker }: TextCardProps) {
  return (
    <article className="glass-card reveal">
      {kicker && <span className="card-kicker">{kicker}</span>}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

type PackageCardProps = {
  item: {
    title: string;
    subtitle: string;
    includes: string[];
    cta: string;
    featured?: boolean;
  };
};

export function PackageCard({ item }: PackageCardProps) {
  return (
    <article className={item.featured ? "package-card featured reveal" : "package-card reveal"}>
      {item.featured && <span className="featured-pill">Popular foundation</span>}
      <h3>{item.title}</h3>
      <p>{item.subtitle}</p>
      <ul>
        {item.includes.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <ButtonLink href="/contact" variant={item.featured ? "primary" : "secondary"}>
        {item.cta}
      </ButtonLink>
    </article>
  );
}

type CaseCardProps = {
  item: {
    title: string;
    displayUrl: string;
    href: string;
    description: string;
    problem: string;
    solution: string;
    features: string[];
    cta: string;
  };
};

export function CaseCard({ item }: CaseCardProps) {
  return (
    <article className="case-card reveal">
      <div className="case-card-header">
        <div>
          <span className="case-label">Selected platform</span>
          <h3>{item.title}</h3>
        </div>
        <a href={item.href} className="case-url">
          {item.displayUrl}
        </a>
      </div>
      <p className="case-description">{item.description}</p>
      <div className="case-columns">
        <div>
          <h4>Problem</h4>
          <p>{item.problem}</p>
        </div>
        <div>
          <h4>Solution</h4>
          <p>{item.solution}</p>
        </div>
      </div>
      <div className="feature-tags">
        {item.features.map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>
      <a className="case-cta" href={item.href}>
        {item.cta}
      </a>
    </article>
  );
}

type StyleCardProps = {
  item: {
    slug: string;
    title: string;
    href: string;
    eyebrow: string;
    heroLine: string;
    description: string;
    fits: string[];
    features: string[];
    cta: string;
  };
};

function StyleCardVisual({ slug }: { slug: string }) {
  if (slug === "simple-info") {
    return (
      <div className="style-card-demo simple-card-demo" aria-hidden="true">
        <div className="simple-demo-page">
          <div className="simple-demo-nav">
            <strong>Service AB</strong>
            <span />
            <span />
            <span />
          </div>
          <div className="simple-demo-hero">
            <p>Professional services</p>
            <h4>Clear website. Easy contact.</h4>
            <i>Request quote</i>
          </div>
          <div className="simple-demo-list">
            <span>Services</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "hybrid-business") {
    return (
      <div className="style-card-demo hybrid-card-demo" aria-hidden="true">
        <div className="hybrid-demo-site">
          <p>B2B Website</p>
          <h4>Website + portal path</h4>
          <div>
            <span>Contact</span>
            <span>Login</span>
          </div>
        </div>
        <div className="hybrid-demo-dashboard">
          <strong>Future dashboard</strong>
          <i />
          <i />
          <i />
        </div>
        <div className="hybrid-demo-flow">
          <span>Website</span>
          <span>Portal</span>
          <span>System</span>
        </div>
      </div>
    );
  }

  return (
    <div className="style-card-demo premium-card-demo" aria-hidden="true">
      <div className="premium-demo-cube" />
      <div className="premium-demo-browser">
        <div className="premium-demo-dots">
          <span />
          <span />
          <span />
        </div>
        <p>Premium product site</p>
        <h4>3D hero, motion and SaaS energy</h4>
      </div>
      <span className="premium-demo-chip chip-one">3D</span>
      <span className="premium-demo-chip chip-two">Portal</span>
      <span className="premium-demo-chip chip-three">SaaS</span>
    </div>
  );
}

export function StyleCard({ item }: StyleCardProps) {
  return (
    <article className={"style-card reveal style-card-" + item.slug}>
      <StyleCardVisual slug={item.slug} />
      <div className="style-card-copy">
        <span className="card-kicker">{item.eyebrow}</span>
        <h3>{item.title}</h3>
        <p className="style-card-line">{item.heroLine}</p>
        <p>{item.description}</p>
        <div className="mini-list">
          <strong>Best for</strong>
          <span>{item.fits.slice(0, 3).join(" / ")}</span>
        </div>
        <div className="style-card-actions">
          <Link className="text-link" href={item.href}>
            See example page
          </Link>
          <ButtonLink href="/contact" variant="secondary">
            {item.cta}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="faq-item reveal">
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
}
