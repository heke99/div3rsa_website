import Link from "next/link";
import { websiteStyles } from "@/lib/content";
export function WebsiteStyleSelector() {
 return <div className="website-styles">{websiteStyles.map((style,index)=><article className={`website-style style-${style.slug}`} key={style.slug}><Link href={style.href} className="website-style-art" aria-label={`Explore ${style.title}`}><span>0{index+1} / {style.shortTitle}</span><div className="style-composition" aria-hidden="true"><i/><strong>{style.shortTitle}<br/>by design.</strong><b/></div></Link><div className="style-copy"><p className="eyebrow">{style.badge}</p><h3>{style.title}</h3><p>{style.description}</p><Link className="text-link" href={style.href}>Explore this approach ↗</Link></div></article>)}</div>;
}
