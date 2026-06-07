import Link from "next/link";
import { company, websiteStyleLinks } from "@/lib/content";

const serviceLinks = [
  { label: "Systemutveckling", href: "/services" },
  { label: "Hemsidor", href: "/websites" },
  { label: "Webbappar", href: "/services" },
  { label: "Automation & AI", href: "/services" },
  { label: "Företagsbetalningar & Bankgiro", href: "/foretagsbetalningar-bankgiro" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-glow" />
      <div className="container footer-grid">
        <div className="footer-company">
          <Link className="brand" href="/" aria-label="Div3rsa home">
            <span className="brand-mark">D3</span>
            <span>Div3rsa</span>
          </Link>
          <p>{company.name}</p>
          <p>Org.nr: {company.orgNumber}</p>
          <a href={"mailto:" + company.email}>{company.email}</a>
        </div>

        <div>
          <h3>Bolag</h3>
          <Link href="/about">Om oss</Link>
          <Link href="/contact">Kontakt</Link>
          <Link href="/systems">Projekt</Link>
          <a href={process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.div3rsa.com"}>Portal</a>
        </div>

        <div>
          <h3>Tjänster</h3>
          {serviceLinks.map((service) => (
            <Link key={service.label} href={service.href}>
              {service.label}
            </Link>
          ))}
        </div>

        <div>
          <h3>Hemsidestilar</h3>
          {websiteStyleLinks.map((style) => (
            <Link key={style.href} href={style.href}>
              {style.label}
            </Link>
          ))}
        </div>

        <div>
          <h3>Juridik</h3>
          <Link href="/integritetspolicy">Integritetspolicy</Link>
          <Link href="/anvandarvillkor">Användarvillkor</Link>
          <Link href="/cookiepolicy">Cookiepolicy</Link>
          <Link href="/foretagsbetalningar-bankgiro/villkor">Villkor Bankgiro</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {year} {company.name}. Alla rättigheter förbehållna.</span>
      </div>
    </footer>
  );
}
