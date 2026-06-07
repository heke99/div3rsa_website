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
      {item.featured && <span className="featured-pill">Populär grund</span>}
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
          <span className="case-label">Plattform</span>
          <h3>{item.title}</h3>
        </div>
        <a href={item.href} className="case-url" target="_blank" rel="noreferrer">
          {item.displayUrl}
        </a>
      </div>
      <p className="case-description">{item.description}</p>
      <div className="feature-tags">
        {item.features.slice(0, 4).map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>
      <a className="case-cta" href={item.href} target="_blank" rel="noreferrer">
        {item.cta}
      </a>
    </article>
  );
}

type StyleCardProps = {
  item: {
    slug: string;
    title: string;
    shortTitle?: string;
    href: string;
    badge?: string;
    description: string;
    summary?: string;
    bestFor?: string;
    fits: string[];
    features: string[];
    cta: string;
  };
};

export function StyleCard({ item }: StyleCardProps) {
  return (
    <article className={`style-card style-card-${item.slug} reveal`}>
      <div className="style-card-head">
        <span className="style-badge">{item.badge}</span>
        <strong>{item.shortTitle || item.title}</strong>
      </div>
      <div className={`style-visual style-visual-${item.slug}`} aria-hidden="true">
        <span />
        <span />
        <span />
        <i />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="style-summary-box">
        <strong>Känsla</strong>
        <span>{item.summary}</span>
      </div>
      <div className="mini-list">
        <strong>Passar bäst för</strong>
        <span>{item.bestFor || item.fits.slice(0, 3).join(" / ")}</span>
      </div>
      <div className="feature-tags style-feature-preview">
        {item.features.slice(0, 4).map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>
      <div className="style-actions">
        <Link className="text-link" href={item.href}>
          Se exempel
        </Link>
        <ButtonLink href="/contact" variant="secondary">
          {item.cta}
        </ButtonLink>
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
