import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.divider} />
      <p className={styles.label}>About</p>
      <h2 className={styles.heading}>
        Building interfaces<br />
        <em>that matter.</em>
      </h2>
      <div className={styles.grid}>
        {/* Left — bio + contact row */}
        <div className={styles.left}>
          <div className={styles.bio}>
            <p>
              I&apos;m a <strong>Front End Engineer</strong> based in Toronto with a passion for crafting
              performant, accessible user experiences. I bring deep expertise in{" "}
              <strong>React, TypeScript, and design systems</strong> paired with a focus on clean,
              maintainable code and thoughtful UX.
            </p>
            <p>
              I thrive in Agile environments, collaborating cross-functionally with design, backend, and
              product teams. I&apos;ve shipped features for <strong>100k+ monthly active users</strong> at
              Achievers, replatformed <strong>Walmart.ca</strong> to a modern React architecture, and
              built real-time platforms handling <strong>2M+ daily visitors</strong>.
            </p>
            <p>
              I care about reducing time-to-market without cutting corners on quality — and I&apos;ve
              resolved ~90% of WCAG accessibility issues on every product I&apos;ve touched.
            </p>
          </div>
          <div className={styles.contactRow}>
            {[
              { label: "Location", value: "Toronto, Ontario" },
              { label: "Email", value: "ferdinand.ismael@gmail.com", href: "mailto:ferdinand.ismael@gmail.com" },
              { label: "LinkedIn", value: "/in/fismael", href: "https://www.linkedin.com/in/fismael" },
            ].map(({ label, value, href }) => (
              <div key={label} className={styles.contactItem}>
                <span className={styles.contactLabel}>{label}</span>
                <span className={styles.contactValue}>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{value}</a>
                  ) : value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo + 2×2 stat cells */}
        <div className={styles.right}>
          <div className={styles.photoWrapper}>
            <Image
              src="/ferdinand.jpeg"
              alt="Ferdinand Ismael"
              width={600}
              height={600}
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
