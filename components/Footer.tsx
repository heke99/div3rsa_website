import Link from "next/link";
import { company } from "@/lib/company";

const productLinks = [
  { label: "Nordklart", href: "https://nordklart.se" },
  { label: "Gridex OPS", href: "https://app.gridex.se" },
  { label: "Kommunsign", href: "https://kommunsign.se" },
  { label: "Kundexa", href: "https://kundexa.se" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />
      <div className="container footer-grid">
        <div className="footer-company">
          <Link className="brand" href="/" aria-label="Attmos startsida">
            <span className="brand-mark">AT</span>
            <span className="brand-copy"><strong>Attmos</strong><small>Digital</small></span>
          </Link>
          <p>Digitala produkter, SaaS-plattformar och verksamhetssystem byggda för verklig drift.</p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>{company.name} · Org.nr {company.orgNumber}</span>
        </div>

        <div>
          <h3>Produkter</h3>
          {productLinks.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>)}
          <Link href="/systems">Alla produkter</Link>
        </div>

        <div>
          <h3>Vi bygger</h3>
          <Link href="/services">Systemutveckling</Link>
          <Link href="/services">SaaS-plattformar</Link>
          <Link href="/services">API & integrationer</Link>
          <Link href="/websites">Hemsidor</Link>
        </div>

        <div>
          <h3>Företaget</h3>
          <Link href="/about">Om oss</Link>
          <Link href="/contact">Kontakt</Link>
          <Link href="/systems">Produktportfölj</Link>
        </div>

        <div>
          <h3>Juridiskt</h3>
          <Link href="/integritetspolicy">Integritetspolicy</Link>
          <Link href="/cookiepolicy">Cookiepolicy</Link>
          <Link href="/anvandarvillkor">Användarvillkor</Link>
          <a href={`mailto:${company.email}`}>Kontakt</a>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} {company.name}. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
