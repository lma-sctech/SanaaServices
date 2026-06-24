"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { asset } from "../lib/base-path";

const navigation = [
  { href: "/#services", label: "Services" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header className={`main-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="main-header__inner">
          <Link href="/" className="main-header__brand" aria-label="Sanaa Services, home">
            <img
              src={asset("/images/logo.png")}
              alt="Sanaa Services"
              height={56}
              style={{ display: "block", height: 56, width: "auto" }}
            />
          </Link>
          <nav aria-label="Main navigation" className="main-header__nav">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "is-active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/#quick-request" className="main-header__cta">
            Contact us
          </Link>
          <button
            type="button"
            className="main-header__menu"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button className="mobile-nav__backdrop" onClick={() => setMenuOpen(false)} aria-label="Close menu" />
        <div className="mobile-nav__panel">
          <div className="mobile-nav__head">
            <img src={asset("/images/logo.png")} alt="Sanaa Services" height={42} style={{ height: 42, width: "auto" }} />
            <button type="button" className="mobile-nav__close" onClick={() => setMenuOpen(false)} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <nav className="mobile-nav__links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
          <Link href="/#quick-request" className="button button--gold mobile-nav__cta">Contact us</Link>
        </div>
      </div>
    </>
  );
}
