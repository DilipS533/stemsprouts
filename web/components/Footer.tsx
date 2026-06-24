import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <img src="/logo.png" alt="" width={28} height={28} className={styles.logo} />
              <span className={styles.brandName}>STEM Sprouts</span>
            </div>
            <p className={styles.tagline}>
              Local Chapters. Global Impact.
            </p>
            <p className={styles.description}>
              Expanding access to STEM education through a growing network of student-led chapters.
            </p>
            <p className={styles.fiscal}>
              STEM Sprouts is fiscally sponsored by{' '}
              <a href="https://hackclub.com/fiscal-sponsorship/" target="_blank" rel="noopener noreferrer">
                Hack Club
              </a>
              , a 501(c)(3) nonprofit (EIN: 81-2908499).
            </p>
          </div>

          {/* Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Organization</h4>
            <ul>
              <li><Link href="/chapters/">Chapters</Link></li>
              <li><Link href="/team/">Team</Link></li>
              <li><Link href="/partners/">Partners</Link></li>
              <li><Link href="/start-a-chapter/">Start a Chapter</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul>
              <li><Link href="/pinboard/">Pinboard</Link></li>
              <li><a href="https://github.com/STEM-Sprouts" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://hcb.hackclub.com/donations/start/stem-sprouts" target="_blank" rel="noopener noreferrer">Donate</a></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Connect</h4>
            <ul>
              <li><a href="mailto:hello@stem-sprouts.org">hello@stem-sprouts.org</a></li>
              <li><a href="https://www.instagram.com/stemsprouts" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://chat.whatsapp.com/FfihfFI66m8FcV843azJNd" target="_blank" rel="noopener noreferrer">WhatsApp Community</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} STEM Sprouts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
