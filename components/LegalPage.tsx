import Link from "next/link";
import { company } from "@/lib/company";
export function LegalPage({title,intro,sections}:{title:string;intro:string;sections:Array<[string,string]>}) {
 return <section className="page-hero legal-page"><div className="container narrow legal-stack"><p className="eyebrow">Information</p><h1>{title}</h1><p className="page-lead">{intro}</p>{sections.map(([heading,text])=><article key={heading}><h2>{heading}</h2><p>{text}</p></article>)}<article><h2>Related information</h2><p><Link href="/privacy">Privacy notice</Link> · <Link href="/cookies">Cookie policy</Link> · <Link href="/terms">Website terms</Link></p></article><p>{company.name} · Registration no. {company.orgNumber} · <a href={`mailto:${company.email}`}>{company.email}</a></p><p className="contact-privacy-note">Last updated: 22 September 2026.</p></div></section>;
}
