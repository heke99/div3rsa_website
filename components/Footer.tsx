import Link from "next/link";
import { company } from "@/lib/content";

const productLinks = [
  { label: "Nordklart", href: "/systems#nordklart" },
  { label: "Gridex OPS", href: "/systems#gridex-ops" },
  { label: "Kommunsign", href: "/systems#kommunsign" },
  { label: "Kundexa", href: "/systems#kundexa" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />
      <div className="container footer-grid">
        <div className="footer-company">
          <Link className="brand" href="/" aria-label="Div3rsa startsida">
            <span className="brand-mark">D3</span>
            <span className="brand-copy"><strong>Div3rsa</strong><small>Systems</small></span>
          </Link>
          <p>Digitala produkter, SaaS-plattformar och verksamhetssystem byggda för verklig drift.</p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>Org.nr {company.orgNumber}</span>
        </div>

        <div>
          <h3>Produkter</h3>
          {productLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
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
          <Link href="/about">Om Div3rsa</Link>
          <Link href="/contact">Kontakt</Link>
          <Link href="/systems">Produktportfölj</Link>
        </div>

        <div>
          <h3>Juridiskt</h3>
          <Link href="/integritetspolicy">Integritetspolicy</Link>
          <Link href="/cookiepolicy">Cookiepolicy</Link>
          <Link href="/anvandarvillkor">Användarvillkor</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} {company.name}. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
