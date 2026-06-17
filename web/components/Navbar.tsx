'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/chapters', label: 'Chapters' },
  { href: '/impact', label: 'Impact' },
  { href: '/kenya', label: 'Kenya' },
  { href: '/pinboard', label: 'Pinboard' },
  { href: '/team', label: 'Team' },
  { href: '/partners', label: 'Partners' },
  { href: '/resources', label: 'Resources' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
      <div className="navbar__inner">
        <Link href="/" className="navbar__brand" aria-label="STEM Sprouts home">
          <img src="/logo.png" alt="" className="navbar__logo" width={36} height={36} />
          <span className="navbar__name">STEM Sprouts</span>
        </Link>

        <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="navbar__link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navbar__cta-item">
            <a
              href="https://hcb.hackclub.com/donations/start/stem-sprouts"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--green btn--sm"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <a
            href="https://hcb.hackclub.com/donations/start/stem-sprouts"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--green btn--sm navbar__donate-desktop"
          >
            Donate
          </a>
          <button
            className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all var(--transition-base);
          border-bottom: 1px solid transparent;
        }

        .navbar--scrolled {
          border-bottom-color: var(--color-border);
          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04);
        }

        .navbar__inner {
          max-width: var(--max-width-wide);
          margin: 0 auto;
          padding: 0 var(--space-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--nav-height);
        }

        .navbar__brand {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          text-decoration: none;
          flex-shrink: 0;
        }

        .navbar__logo {
          border-radius: 50%;
        }

        .navbar__name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--color-primary);
        }

        .navbar__links {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar__link {
          display: block;
          padding: 0.5rem 0.75rem;
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: color var(--transition-fast), background var(--transition-fast);
        }

        .navbar__link:hover {
          color: var(--color-primary);
          background: var(--color-bg-alt);
        }

        .navbar__cta-item {
          display: none;
        }

        .navbar__actions {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .navbar__hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
        }

        .navbar__hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--color-text);
          border-radius: 2px;
          transition: all var(--transition-base);
          transform-origin: center;
        }

        .navbar__hamburger--open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .navbar__hamburger--open span:nth-child(2) {
          opacity: 0;
        }
        .navbar__hamburger--open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 1024px) {
          .navbar__links {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--color-white);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: var(--space-sm);
            transform: translateX(100%);
            transition: transform var(--transition-slow);
            z-index: 999;
            padding: var(--space-3xl);
          }

          .navbar__links--open {
            transform: translateX(0);
          }

          .navbar__link {
            font-size: 1.25rem;
            padding: 0.75rem 1.5rem;
          }

          .navbar__cta-item {
            display: block;
            margin-top: var(--space-md);
          }

          .navbar__donate-desktop {
            display: none;
          }

          .navbar__hamburger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
