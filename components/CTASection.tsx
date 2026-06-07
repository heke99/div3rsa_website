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
  eyebrow = "Start the conversation",
  title = "Ready to build something serious?",
  text = "Whether you need a clean company website, a premium digital presence or a full system, Div3rsa can help you build the right foundation.",
  primaryLabel = "Start Project",
  primaryHref = "/contact",
  secondaryLabel = "Email us",
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
