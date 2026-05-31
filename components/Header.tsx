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
        <Link className="brand" href="/" onClick={closeMenu} aria-label="Div3rsa home">
          <span className="brand-mark">D3</span>
          <span>Div3rsa</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-navigation" className={open ? "site-nav open" : "site-nav"} aria-label="Primary navigation">
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
                  <div className="dropdown-panel" aria-label="Website style links">
                    <p>What type of website do you want?</p>
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
                className={pathname === item.href ? "nav-link active" : "nav-link"}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
          <ButtonLink href="/contact" className="header-cta" ariaLabel="Start a project with Div3rsa">
            Start Project
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
