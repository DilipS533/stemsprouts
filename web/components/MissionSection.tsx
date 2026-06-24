import styles from './MissionSection.module.css';

export default function MissionSection() {
  return (
    <section className={`section ${styles.mission}`} aria-labelledby="mission-heading">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className="section-eyebrow">Our Mission</p>
            <h2 id="mission-heading" className="section-title">
              Every student deserves access to hands-on STEM learning
            </h2>
            <p className={styles.body}>
              Too many students — especially in underserved communities — never get to build
              a circuit, write a line of code, or launch a model rocket. STEM Sprouts closes
              that gap by empowering high school students to lead free workshops for younger
              learners in their own communities.
            </p>
            <p className={styles.body}>
              Our model is simple: students who love STEM teach students who are just
              discovering it. No fees, no prerequisites — just curiosity and community.
            </p>
          </div>
          <div className={styles.values}>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Student-Led</h3>
              <p className={styles.valueDesc}>
                Every chapter is founded and run by students. They design workshops, recruit
                volunteers, and build curriculum for their community.
              </p>
            </div>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Community-Rooted</h3>
              <p className={styles.valueDesc}>
                Chapters serve their immediate communities — local schools, libraries,
                and community centers.
              </p>
            </div>
            <div className={styles.value}>
              <h3 className={styles.valueTitle}>Globally Connected</h3>
              <p className={styles.valueDesc}>
                From Georgia to Kenya, chapters share resources, curriculum, and
                support across borders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
