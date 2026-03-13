import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <p className={styles.label}>Contact</p>
      <h2 className={styles.heading}>Let&apos;s work together.</h2>
      <a href="mailto:ferdinand.ismael@gmail.com" className={styles.email}>
        ferdinand.ismael@gmail.com
      </a>
      <div className={styles.links}>
        <a href="https://www.linkedin.com/in/fismael" target="_blank" rel="noopener" className={styles.link}>
          LinkedIn
        </a>
        <a href="https://github.com/ferddecoded" target="_blank" rel="noopener" className={styles.link}>
          GitHub
        </a>
        <a href="mailto:ferdinand.ismael@gmail.com" className={styles.link}>
          Email
        </a>
      </div>
    </section>
  );
}
