import { ButtonLink } from "./ButtonLink";
import { company } from "@/lib/content";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  eyebrow = "Börja här",
  title = "Redo att bygga något seriöst?",
  text = "Oavsett om ni behöver en tydlig hemsida, en premiumwebb eller ett helt system kan Div3rsa hjälpa er bygga rätt grund.",
  primaryLabel = "Starta projekt",
  primaryHref = "/contact",
  secondaryLabel = "Maila oss",
  secondaryHref = "mailto:" + company.email,
}: CTASectionProps) {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner reveal">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          <ButtonLink href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
