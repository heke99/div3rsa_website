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
    slug: string;
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
    title: string;
    href: string;
    description: string;
    fits: string[];
    features: string[];
    cta: string;
  };
};

export function StyleCard({ item }: StyleCardProps) {
  return (
    <article className={"style-card reveal style-card-" + item.slug}>
      <div className={"style-visual style-visual-" + item.slug}>
        <span />
        <span />
        <span />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="mini-list">
        <strong>Fits</strong>
        <span>{item.fits.slice(0, 3).join(" / ")}</span>
      </div>
      <Link className="text-link" href={item.href}>
        Learn about this style
      </Link>
      <ButtonLink href="/contact" variant="secondary">
        {item.cta}
      </ButtonLink>
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
