import { ButtonLink } from "./ButtonLink";
export function PackageCard({item}:{item:{title:string;subtitle:string;includes:string[];cta:string;featured?:boolean}}) {
 return <article className={item.featured ? "package-card featured":"package-card"}>{item.featured && <span className="featured-pill">Product development</span>}<h3>{item.title}</h3><p>{item.subtitle}</p><ul>{item.includes.map(feature=><li key={feature}>{feature}</li>)}</ul><ButtonLink href="/contact" variant={item.featured ? "primary":"secondary"}>{item.cta}</ButtonLink></article>;
}
export function FAQItem({question,answer}:{question:string;answer:string}) {return <details className="faq-item"><summary>{question}</summary><p>{answer}</p></details>;}
