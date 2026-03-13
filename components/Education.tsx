import styles from "./Education.module.css";

const items = [
  { year: "2015", school: "University of Toronto", degree: "Bachelor of Arts — Economics & Human Resources" },
  { year: "2017", school: "Juno College", degree: "Intro & Advanced Web Development" },
  { year: "2018", school: "Juno College", degree: "Full-time Web Development Immersive Certificate" },
];

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <p className={styles.label}>Education</p>
      <h2 className={styles.heading}>Where I learned.</h2>
      <div className={styles.list}>
        {items.map((item) => (
          <div key={`${item.year}-${item.school}`} className={styles.item}>
            <p className={styles.year}>{item.year}</p>
            <p className={styles.school}>{item.school}</p>
            <p className={styles.degree}>{item.degree}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
