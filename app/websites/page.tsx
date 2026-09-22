import type { Metadata } from "next";
import { WebsiteStyleSelector } from "@/components/WebsiteStyleSelector";
import { CTASection } from "@/components/CTASection";
import { FAQItem } from "@/components/Cards";
import { faqs } from "@/lib/content";
export const metadata: Metadata = { title: "Websites", description: "Thoughtful company and product websites. Clear content, distinctive design and a connected enquiry journey.", alternates: { canonical: "/websites" } };
export default function WebsitesPage() {
 return <><section className="page-hero"><div className="container"><p className="eyebrow">Websites & product design</p><h1>A website that belongs<br />to your business.</h1><p className="page-lead">Not every business needs the same website. We design the structure, content and experience around what you offer and what visitors need to do next.</p></div></section><section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">Three starting points</p><h2>The right shape for your offer.</h2><p>These are approaches, not templates. Every engagement starts with your business, audience and content.</p></div><WebsiteStyleSelector /></div></section><section className="section capabilities-section"><div className="container"><div className="section-heading"><p className="eyebrow">Before we begin</p><h2>A few useful answers.</h2></div><div className="faq-list">{faqs.map(faq=><FAQItem key={faq.question} {...faq}/>)}</div></div></section><CTASection /></>;
}
