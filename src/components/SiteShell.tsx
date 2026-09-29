"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Menu,
  MapPin,
  Mail,
} from "lucide-react";
import { Modal } from "@/components/ui";
import { festival } from "@/lib/festival";
import { MotionToggle } from "@/components/MotionToggle";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Our story", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Elyssia 3.0 home">
      <Image src="/images/elyssia-logo.webp" alt="" width={50} height={50} />
      <span>
        ELYSSIA<span className="brand-edition">3.0</span>
        <small>AIIMS KALYANI</small>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header
        className={`site-header ${scrolled || pathname !== "/" ? "header-solid" : ""}`}
      >
        <div className="header-content container">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : ""}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <a
              className="button button-primary header-cta"
              href={festival.registrationUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get your pass <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              className="icon-button menu-toggle"
              aria-label="Open navigation"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>
      {menuOpen && (
        <Modal
          title="Navigation"
          onClose={() => setMenuOpen(false)}
          className="mobile-menu"
        >
          <span className="eyebrow">YOUR NEXT CHAPTER</span>
          <nav id="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span>0{i + 1}</span>
                {item.label}
                <ArrowUpRight />
              </Link>
            ))}
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <span>06</span>Plan my visit
              <ArrowUpRight />
            </Link>
          </nav>
          <p>Four days. A thousand stories. One Elyssia.</p>
        </Modal>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="eyebrow">THE NEXT CHAPTER IS YOURS</p>
            <h2>
              SEE YOU ON
              <br />
              <span>THE OTHER SIDE.</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="footer-circle"
            aria-label="Explore all Elyssia events"
          >
            <ArrowUpRight size={38} />
          </Link>
        </div>
        <div className="footer-grid">
          <div>
            <Brand />
            <p>
              A celebration of culture, creativity, and the
              <br className="desktop-only" /> beautifully unexpected. This is
              Elyssia.
            </p>
          </div>
          <div>
            <h3>EXPLORE</h3>
            <Link href="/about">Our story</Link>
            <Link href="/events">The experiences</Link>
            <Link href="/gallery">The memories</Link>
          </div>
          <div>
            <h3>YOUR ODYSSEY</h3>
            <Link href="/login">Plan your visit</Link>
            <Link href="/dashboard">My shortlist</Link>
            <a href="/elyssia-brochure.pdf" target="_blank" rel="noreferrer">
              Event brochure <ArrowUpRight size={13} />
            </a>
          </div>
          <div>
            <h3>FIND US</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=AIIMS+Kalyani"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={15} />
              AIIMS Kalyani, West Bengal
            </a>
            <Link href="/contact">
              <Mail size={15} />
              Talk to the team <ArrowRight size={14} />
            </Link>
            <a
              href="https://aiimskalyani.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              Institute website <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Elyssia · AIIMS Kalyani</span>
          <MotionToggle />
          <a href="#main-content" className="back-top">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
