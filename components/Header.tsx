"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={closeMenu} aria-label="Diversa Nordic startsida">
          <span className="brand-mark">DN</span>
          <span className="brand-copy"><strong>Diversa Nordic</strong><small>Digital</small></span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Öppna navigation"
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
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                className={isActive ? "nav-link active" : "nav-link"}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
          <ButtonLink href="/contact" className="header-cta" ariaLabel="Starta ett projekt med Diversa Nordic">
            Starta projekt
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
