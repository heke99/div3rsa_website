import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { company, entities } from "@/lib/company";
export const metadata: Metadata = { title: "Contact", description: "Discuss a software product, website or operational workflow with Trafexa Nordic. Tell us what needs to work better.", alternates: { canonical: "/contact" } };
export default async function ContactPage({ searchParams }: { searchParams: Promise<{product?:string}> }) {
 const {product} = await searchParams;
 const productName = typeof product === "string" ? product.slice(0,160) : undefined;
 return <><section className="page-hero compact"><div className="container"><p className="eyebrow">Start a conversation</p><h1>What are you<br/>working on?</h1><p className="page-lead">A new idea, a complicated workflow or an existing product that could work better. Tell us where you are and where you want to go.</p></div></section><section className="section contact-section"><div className="container contact-layout"><aside className="contact-info"><h2>A useful first conversation.</h2><p>You do not need a finished specification. A little context about the business and the problem is a good place to start.</p><a className="contact-email" href={`mailto:${company.email}`}>{company.email}</a><div className="contact-entities">{entities.map(entity=><div key={entity.id}><strong>{entity.name}</strong><span>{entity.jurisdiction}</span>{entity.id==="sweden" && <span>Registration no. {entity.registrationNumber}</span>}</div>)}</div><p className="contact-privacy-note">Enquiries are handled by Trafexa Nordic AB. The appropriate contracting entity is agreed before work begins.</p></aside><ContactForm productName={productName}/></div></section></>;
}
