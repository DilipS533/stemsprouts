import styles from './PinboardSection.module.css';

export default function PinboardSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="pinboard-heading">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className="section-eyebrow">Our Platform</p>
            <h2 id="pinboard-heading" className="section-title">
              Pinboard: Build, simulate, and learn — right in your browser
            </h2>
            <p className={styles.desc}>
              Pinboard is our open-source, browser-based platform where students build
              virtual circuits, write code, and explore STEM concepts. No downloads, no
              accounts — just open and start building.
            </p>
            <ul className={styles.features}>
              <li>
                <strong>Browser-first</strong> — works on any device with a web browser
              </li>
              <li>
                <strong>Open-source</strong> — built by students, for students, on GitHub
              </li>
              <li>
                <strong>Classroom-ready</strong> — designed for workshops and self-paced learning
              </li>
            </ul>
            <div className={styles.actions}>
              <a
                href="https://pinboard.stem-sprouts.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Launch Pinboard ↗
              </a>
              <a
                href="https://github.com/STEM-Sprouts/pinboard"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                View on GitHub
              </a>
            </div>
          </div>
          <div className={styles.preview}>
            <div className={styles.browser}>
              <div className={styles.browserBar}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.browserUrl}>pinboard.stem-sprouts.org</span>
              </div>
              <div className={styles.browserBody}>
                <img
                  src="/pinboard_logo.png"
                  alt="Pinboard platform interface showing a circuit-building workspace"
                  className={styles.screenshot}
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
