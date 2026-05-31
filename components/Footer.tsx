import Link from "next/link";
import { company, websiteStyleLinks } from "@/lib/content";

const serviceLinks = [
  "System Development",
  "Websites",
  "Web Apps",
  "Automation & AI",
  "Customer Portals",
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
          <h3>Company</h3>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/systems">Our Systems</Link>
        </div>

        <div>
          <h3>Services</h3>
          {serviceLinks.map((service) => (
            <Link key={service} href="/services">
              {service}
            </Link>
          ))}
        </div>

        <div>
          <h3>Website Styles</h3>
          {websiteStyleLinks.map((style) => (
            <Link key={style.href} href={style.href}>
              {style.label}
            </Link>
          ))}
        </div>

        <div>
          <h3>Legal</h3>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {year} {company.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
