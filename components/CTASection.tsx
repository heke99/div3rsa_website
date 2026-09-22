import { ButtonLink } from "./ButtonLink";
export function CTASection() {
  return <section className="final-cta"><div className="container final-cta-inner"><div><p className="eyebrow">Start a conversation</p><h2>What needs<br />to work better?</h2></div><div className="cta-aside"><p>Tell us about the business, the people doing the work and what you want to improve. We will help you define a useful next step.</p><ButtonLink href="/contact">Discuss your project <span aria-hidden="true">↗</span></ButtonLink></div></div></section>;
}
