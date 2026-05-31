import { ButtonLink } from "./ButtonLink";
import { company } from "@/lib/content";

export function CTASection() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner reveal">
        <div>
          <p className="eyebrow">Start the conversation</p>
          <h2>Ready to build something serious?</h2>
          <p>
            Whether you need a clean company website, a premium digital presence or a full system, Div3rsa can help you
            build the right foundation.
          </p>
        </div>
        <div className="cta-actions">
          <ButtonLink href="/contact">Start Project</ButtonLink>
          <ButtonLink href={"mailto:" + company.email} variant="secondary">
            Email us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
