import Link from "next/link";
import { company, entities } from "@/lib/company";
import { Brand } from "./Brand";
export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div><Brand /><p>Digital products.<br />Considered engineering.</p></div>
      <div className="footer-links"><h2>Explore</h2><Link href="/systems">Our work</Link><Link href="/services">Services</Link><Link href="/websites">Websites</Link><Link href="/about">Company</Link></div>
      <div className="footer-links"><h2>Get in touch</h2><a href={`mailto:${company.email}`}>{company.email}</a><Link href="/contact">Discuss a project ↗</Link><a href="https://portal.div3rsa.com">Client portal ↗</a></div>
    </div>
    <div className="footer-entities">{entities.map(entity => <div key={entity.id}><strong>{entity.name}</strong><span>{entity.jurisdiction}{entity.id === "sweden" ? ` · ${entity.registrationNumber}` : ""}</span></div>)}<p>The contracting entity is identified in each proposal and agreement.</p></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {company.shortName}</span><div><Link href="/privacy">Privacy</Link><Link href="/cookies">Cookies</Link><Link href="/terms">Terms</Link></div><span className="footer-signoff">Built with purpose.</span></div>
  </div></footer>;
}
