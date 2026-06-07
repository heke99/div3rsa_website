"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, websiteStyleLinks } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={closeMenu} aria-label="Div3rsa startsida">
          <span className="brand-mark">D3</span>
          <span>Div3rsa</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Öppna eller stäng meny"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-navigation" className={open ? "site-nav open" : "site-nav"} aria-label="Huvudnavigation">
          {navItems.map((item) => {
            if (item.href === "/websites") {
              return (
                <div className="nav-dropdown" key={item.href}>
                  <Link
                    className={pathname.startsWith("/websites") ? "nav-link active" : "nav-link"}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                  <div className="dropdown-panel" aria-label="Länkar till hemsidestilar">
                    <p>Vilken typ av hemsida vill du ha?</p>
                    {websiteStyleLinks.map((style) => (
                      <Link key={style.href} href={style.href} onClick={closeMenu}>
                        {style.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                className={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/")) ? "nav-link active" : "nav-link"}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
          <ButtonLink href={process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.div3rsa.com"} className="header-cta" ariaLabel="Öppna Div3rsa Portal">
            Portal
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
