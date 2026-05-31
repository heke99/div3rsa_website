import { heroProductCards, trustIndicators } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Swedish tech studio for serious digital products</p>
          <h1>We build systems, apps and websites that companies actually use.</h1>
          <p className="hero-subheadline">
            Div3rsa develops modern digital solutions - from SaaS platforms and customer portals to apps,
            automation flows and premium websites.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Contact us</ButtonLink>
            <ButtonLink href="/systems" variant="secondary">
              View our projects
            </ButtonLink>
          </div>
          <div className="trust-strip" aria-label="Div3rsa capabilities">
            {trustIndicators.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Digital product capabilities visualization">
          <div className="orbit-card main-dashboard">
            <div className="dashboard-topline">
              <span />
              <span />
              <span />
            </div>
            <div className="dashboard-metric">
              <strong>Digital Product</strong>
              <span>{"Website -> Portal -> SaaS"}</span>
            </div>
            <div className="dashboard-bars">
              <i />
              <i />
              <i />
            </div>
          </div>
          {heroProductCards.map((card, index) => (
            <div className={"floating-card floating-card-" + index} key={card}>
              <span className="status-dot" />
              {card}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
