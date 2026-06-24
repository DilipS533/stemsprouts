'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/chapters/', label: 'Chapters' },
  { href: '/pinboard/', label: 'Pinboard' },
  { href: '/team/', label: 'Team' },
  { href: '/partners/', label: 'Partners' },
  { href: '/start-a-chapter/', label: 'Start a Chapter' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="STEM Sprouts — Home">
          <img
            src="/logo.png"
            alt=""
            className={styles.logo}
            width={32}
            height={32}
          />
          <span className={styles.brandName}>STEM Sprouts</span>
        </Link>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.link}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className={styles.mobileCta}>
            <a
              href="https://hcb.hackclub.com/donations/start/stem-sprouts"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--donate btn--sm"
              onClick={() => setOpen(false)}
            >
              Donate
            </a>
          </li>
        </ul>

        <div className={styles.actions}>
          <a
            href="https://hcb.hackclub.com/donations/start/stem-sprouts"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn--donate btn--sm ${styles.donateDesktop}`}
          >
            Donate
          </a>
          <button
            className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
