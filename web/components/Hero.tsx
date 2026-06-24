import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Nonprofit · Student-Led · International</p>
          <h1 id="hero-heading" className={styles.title}>
            Local Chapters.<br />
            <span className={styles.accent}>Global Impact.</span>
          </h1>
          <p className={styles.subtitle}>
            STEM Sprouts expands access to STEM education through student-led chapters.
            From Alpharetta to Siaya, our chapters run free, hands-on workshops that
            make learning feel like discovery.
          </p>
          <div className={styles.actions}>
            <Link href="/start-a-chapter/" className="btn btn--primary btn--lg">
              Start a Chapter
            </Link>
            <a
              href="https://hcb.hackclub.com/donations/start/stem-sprouts"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--lg"
            >
              Donate
            </a>
          </div>
          <div className={styles.trust}>
            <span className={styles.trustItem}>
              <strong>3</strong> Active Chapters
            </span>
            <span className={styles.trustDot} aria-hidden="true" />
            <span className={styles.trustItem}>
              <strong>2</strong> Countries
            </span>
            <span className={styles.trustDot} aria-hidden="true" />
            <span className={styles.trustItem}>
              Fiscally Sponsored by <strong>Hack Club</strong>
            </span>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <img
            src="/aboutus.jpg"
            alt="Students participating in a STEM Sprouts workshop, building circuits and exploring robotics"
            className={styles.image}
            width={640}
            height={480}
            loading="eager"
          />
          <div className={styles.imageCaption}>
            Workshop at Alpharetta High School, Georgia
          </div>
        </div>
      </div>
    </section>
  );
}
