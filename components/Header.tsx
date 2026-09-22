"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navItems } from "@/lib/content";
import { Brand } from "./Brand";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="site-header" onKeyDown={(event) => {
    if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    <div className="container header-inner">
      <Brand onNavigate={() => setOpen(false)} />
      <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
      <nav id="site-navigation" className={open ? "site-nav open" : "site-nav"} aria-label="Main navigation">
        {navItems.map(item => <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link className="header-contact" href="/contact" onClick={() => setOpen(false)}>Start a conversation <span aria-hidden="true">↗</span></Link>
      </nav>
    </div>
  </header>;
}
