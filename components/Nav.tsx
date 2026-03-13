"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import ThemeToggle from "./ThemeToggle";

const anchorLinks = ["About", "Skills", "Experience", "Education", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change / link click
  const handleLinkClick = () => setOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.svg" alt="Ferdinand Ismael" width={36} height={36} />
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {isHome && anchorLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
          <li>
            <Link href="/projects" className={pathname === "/projects" ? styles.active : ""}>
              Projects
            </Link>
          </li>
        </ul>

        <div className={styles.actions}>
          <ThemeToggle />

          {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`} aria-hidden={!open}>
        <ul className={styles.drawerLinks}>
          {isHome && anchorLinks.map((link, i) => (
            <li key={link} style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}>
              <a href={`#${link.toLowerCase()}`} onClick={handleLinkClick}>{link}</a>
            </li>
          ))}
          <li style={{ transitionDelay: open ? `${anchorLinks.length * 60}ms` : "0ms" }}>
            <Link href="/projects" onClick={handleLinkClick}>Projects</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
