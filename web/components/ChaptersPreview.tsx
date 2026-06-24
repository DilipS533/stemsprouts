import Link from 'next/link';
import styles from './ChaptersPreview.module.css';

const chapters = [
  {
    name: 'Alpharetta High School',
    location: 'Georgia, USA',
    status: 'Active',
    description: 'Our founding chapter, running weekly workshops for elementary students in the Alpharetta community.',
    flag: '🇺🇸',
  },
  {
    name: 'Osborne High School',
    location: 'Georgia, USA',
    status: 'Active',
    description: 'Bringing hands-on STEM activities to students in the Osborne community through after-school programs.',
    flag: '🇺🇸',
  },
  {
    name: 'Siaya STEAM Hub',
    location: 'Siaya, Kenya',
    status: 'Active',
    description: 'Our first international chapter, expanding STEM access for students in Siaya County, Kenya.',
    flag: '🇰🇪',
  },
];

export default function ChaptersPreview() {
  return (
    <section className={`section--sm ${styles.section}`} aria-labelledby="chapters-preview-heading">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="section-eyebrow">Our Chapters</p>
            <h2 id="chapters-preview-heading" className="section-title">
              A growing network across two continents
            </h2>
            <p className="section-description">
              Each chapter is independently led by students who know their community best.
            </p>
          </div>
          <Link href="/chapters/" className="btn btn--outline">
            View All Chapters →
          </Link>
        </div>

        <div className={styles.grid}>
          {chapters.map((ch) => (
            <article key={ch.name} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.flag} aria-hidden="true">{ch.flag}</span>
                <span className={styles.status}>{ch.status}</span>
              </div>
              <h3 className={styles.cardTitle}>{ch.name}</h3>
              <p className={styles.cardLocation}>{ch.location}</p>
              <p className={styles.cardDesc}>{ch.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
