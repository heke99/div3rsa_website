import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQItem } from "@/components/Cards";
import { Section } from "@/components/Section";
import { businessPaymentsFaqs } from "@/lib/business-payments";
export const metadata: Metadata = { title: "Business payments & Bankgiro", description: "Discuss invoicing, customer payments and Bankgiro workflow requirements.", alternates: { canonical: "/business-payments" } };
export default function BusinessPaymentsPage() {
 return <><section className="page-hero"><div className="container"><p className="eyebrow">Business payments & Bankgiro</p><h1>A clearer route through<br/>payment administration.</h1><p className="page-lead">A digital application and portal workflow for companies exploring invoicing, customer payments and Swedish Bankgiro-based arrangements.</p><div className="hero-actions"><ButtonLink href="/business-payments/apply">Discuss your requirements</ButtonLink><ButtonLink href="/business-payments/terms" variant="secondary">Important information</ButtonLink></div><p className="contact-privacy-note">We are not a bank. Payment services are subject to the relevant external provider’s assessment, approval and terms.</p></div></section>
 <Section eyebrow="The process" title="An enquiry, not a promise of approval."><div className="process-grid">{[["Tell us about the business","Share the company details, existing setup and payment needs."],["Initial review","We assess which arrangement may be relevant to your requirements."],["Provider assessment","Where appropriate, a separate provider carries out its own checks and onboarding."],["An agreed arrangement","Portal access and available functions depend on the approved solution."]].map(([title,text],index)=><article className="process-step" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></Section>
 <Section eyebrow="Questions" title="Before you apply."><div className="faq-list">{businessPaymentsFaqs.map(faq=><FAQItem key={faq.question} {...faq}/>)}</div></Section></>;
}
