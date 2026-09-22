import { pageMetadata } from "@/lib/metadata";
import { siteMeta } from "@/lib/company";
import { SiteStructuredData } from "@/components/SiteStructuredData";
import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { ProductExplorer } from "@/components/ProductExplorer";
import { CTASection } from "@/components/CTASection";
import { EntityCards } from "@/components/EntityCards";
import { services, processSteps } from "@/lib/content";
export const metadata = pageMetadata({ title: siteMeta.homeTitle, description: siteMeta.homeDescription, path: "/" });

export default function Home() {
  return <><SiteStructuredData /><HomeHero />
    <section className="section work-section" id="selected-work"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow">Selected work</p><h2>Different industries.<br />The same attention to detail.</h2></div><div><p>A closer look at the products and operational workflows we are developing.</p><Link className="text-link" href="/systems">Explore the portfolio <span aria-hidden="true">↗</span></Link></div></div><ProductExplorer featuredOnly showFilters={false} /></div></section>
    <section className="section capabilities-section"><div className="container capabilities-layout"><div className="section-heading"><p className="eyebrow">What we do</p><h2>The whole product.<br />Not just the screens.</h2><p>Good software starts with understanding the work. We connect product thinking, interface design and engineering in one development process.</p><Link className="text-link" href="/services">How we can help <span aria-hidden="true">↗</span></Link></div><div className="service-list">{services.map(service => <article key={service.title}><h3>{service.title}</h3><p>{service.text}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">How we work</p><h2>Clear thinking.<br />Then careful execution.</h2></div><div className="process-grid">{processSteps.map((step,index) => <article className="process-step" key={step.title}><span className="process-number">0{index+1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
    <section className="section entity-section"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow">The company behind the work</p><h2>Swedish roots.<br />An international outlook.</h2></div><div><p>Two legal entities, clearly identified. We confirm the scope, responsibilities and contracting entity before a project starts.</p><Link className="text-link" href="/about">Meet the company <span aria-hidden="true">↗</span></Link></div></div><EntityCards /></div></section>
    <CTASection /></>;
}
