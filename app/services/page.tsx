import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { PackageCard } from "@/components/Cards";
import { services, solutionPackages, processSteps, techItems } from "@/lib/content";
export const metadata: Metadata = { title: "Services", description: "Business software, SaaS development, customer portals, integrations and product design. From a clear brief to a maintainable product.", alternates: { canonical: "/services" } };
export default function ServicesPage() {
  return <><section className="page-hero"><div className="container"><p className="eyebrow">Services</p><h1>Build the right thing.<br />Build it properly.</h1><p className="page-lead">We help turn operational needs into useful digital products. The interface, data, permissions and integrations are designed to work together.</p><ButtonLink href="/contact">Discuss your project <span aria-hidden="true">↗</span></ButtonLink></div></section>
    <section className="section"><div className="container service-details">{services.map(service => <article key={service.title}><h2>{service.title}</h2><div><p>{service.text}</p><strong>{service.deliverable}</strong></div></article>)}</div></section>
    <section className="section capabilities-section"><div className="container"><div className="section-heading"><p className="eyebrow">Ways to work together</p><h2>A sensible starting point<br />for the stage you are at.</h2></div><div className="package-grid">{solutionPackages.map(item => <PackageCard key={item.title} item={item} />)}</div><p className="section-note">Scope, delivery phases and pricing are agreed in a project proposal. No one-size-fits-all packages.</p></div></section>
    <section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">From brief to build</p><h2>A process you can follow.</h2></div><div className="process-grid">{processSteps.map((step,index) => <article className="process-step" key={step.title}><span className="process-number">0{index+1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><div className="tech-cloud">{techItems.map(item => <span key={item}>{item}</span>)}</div></div></section><CTASection /></>;
}
