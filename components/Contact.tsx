import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <p className={styles.label}>Contact</p>
      <h2 className={styles.heading}>
        Let&apos;s work<br />
        <em>together.</em>
      </h2>
      <div className={styles.grid}>
        {/* Left — card links */}
        <div className={styles.links}>
          {[
            {
              name: "Email",
              value: "ferdinand.ismael@gmail.com",
              href: "mailto:ferdinand.ismael@gmail.com",
            },
            {
              name: "LinkedIn",
              value: "linkedin.com/in/fismael",
              href: "https://www.linkedin.com/in/fismael",
            },
            {
              name: "GitHub",
              value: "github.com/ferddecoded",
              href: "https://github.com/ferddecoded",
            },
          ].map(({ name, value, href }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              className={styles.cardLink}
            >
              <div className={styles.cardLinkInner}>
                <span className={styles.cardLinkName}>{name}</span>
                <span className={styles.cardLinkValue}>{value}</span>
              </div>
              <span className={styles.cardLinkArrow} aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        {/* Right — available callout */}
        <div className={styles.available}>
          <div className={styles.availableHeader}>
            <span className={styles.availableDot} aria-hidden="true" />
            <span className={styles.availableStatus}>Available now</span>
          </div>
          <p className={styles.availableText}>
            Open to full-time front end engineering roles and select freelance engagements.
            Based in Toronto — open to remote.
          </p>
          <div className={styles.availableTags}>
            <span>Full-time</span>
            <span>Remote</span>
            <span>React / TypeScript</span>
            <span>Senior / Staff</span>
          </div>
          <a href="mailto:ferdinand.ismael@gmail.com" className={styles.availableCta}>
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
