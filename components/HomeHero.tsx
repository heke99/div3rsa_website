import { ButtonLink } from "./ButtonLink";
export function HomeHero() {
  return <section className="home-hero"><div className="container">
    <div className="hero-topline"><span>Digital products & engineering</span><span>Sweden / United States</span></div>
    <div className="hero-layout"><div className="hero-copy"><h1>Complex work.<br />Considered<br /><em>software.</em></h1><p>We design and build the software behind everyday business. From customer portals to industry-specific platforms, we turn complex workflows into clear, useful products.</p><div className="hero-actions"><ButtonLink href="/systems">Explore our work <span aria-hidden="true">↗</span></ButtonLink><ButtonLink href="/contact" variant="ghost">Tell us what you need <span aria-hidden="true">→</span></ButtonLink></div></div>
    <div className="hero-study" aria-label="Illustration of an energy operations workflow, not live product data">
      <div className="study-top"><span className="study-dot" /><span>A study in connected operations</span><span aria-hidden="true">↗</span></div>
      <div className="study-title"><span>ENERGY / GRIDEX OPS</span><h2>Everything<br />has a next step.</h2><p>One connected view of the work.</p></div>
      <div className="workflow-study"><div className="workflow-line" aria-hidden="true" />
        <div className="workflow-node"><span className="node-index">01</span><div><strong>Customer & agreement</strong><span>Start with the right information</span></div><i aria-hidden="true">✓</i></div>
        <div className="workflow-node selected"><span className="node-index">02</span><div><strong>Operational workflow</strong><span>Connect records, roles and decisions</span></div><i aria-hidden="true">→</i></div>
        <div className="workflow-node"><span className="node-index">03</span><div><strong>Traceable follow-up</strong><span>Keep the context with the work</span></div><i aria-hidden="true">↗</i></div>
      </div><div className="study-bottom"><span>Workflow illustration</span><span>Not live data</span></div>
    </div></div>
    <div className="hero-footnote"><span>Our areas of work</span><p>Energy<span>/</span>Finance<span>/</span>Public sector<span>/</span>Business operations</p></div>
  </div></section>;
}
