import { ButtonLink } from "./ButtonLink";
import { CTASection } from "./CTASection";
import { websiteStyles } from "@/lib/content";
export function WebsiteStyleDetail({ slug }: { slug: string }) {
 const style=websiteStyles.find(item=>item.slug===slug); if(!style) return null;
 return <><section className="page-hero"><div className="container"><p className="eyebrow">Websites / {style.shortTitle}</p><h1>{style.title}.</h1><p className="page-lead">{style.description}</p><ButtonLink href={`/contact?product=${encodeURIComponent(style.title)}`}>{style.cta} <span aria-hidden="true">↗</span></ButtonLink></div></section><section className="section"><div className="container two-column"><div><p className="eyebrow">The approach</p><h2>{style.exampleTitle}</h2></div><div className="rich-copy"><p>{style.exampleText}</p><p>{style.summary}</p><h3>A good starting point for</h3><p>{style.bestFor}.</p><h3>What we consider</h3><ul className="scope-list">{style.features.map(feature=><li key={feature}>{feature}</li>)}</ul><p className="section-note">The design, page structure and delivery scope are agreed for your project.</p></div></div></section><CTASection /></>;
}
