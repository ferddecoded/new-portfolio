import styles from "./Skills.module.css";

const groups = [
  {
    title: "Core",
    tags: ["React", "TypeScript", "JavaScript ES6+", "Redux / RTK", "CSS Modules", "GraphQL", "Apollo Client", "Node.js", "HTML5", "CSS3 / SCSS"],
    isCore: true,
  },
  {
    title: "Testing",
    tags: ["Jest", "Cypress", "React Testing Library", "Enzyme", "Testcafe"],
    isCore: false,
  },
  {
    title: "Tooling",
    tags: ["Git & GitHub", "Webpack", "Vite", "Storybook", "Jenkins", "GitHub Actions", "MySQL", "VS Code", "Jira"],
    isCore: false,
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <p className={styles.label}>Skills</p>
      <h2 className={styles.heading}>
        Tech I work<br />
        <em>with.</em>
      </h2>
      <div className={styles.grid}>
        {groups.map((group) => (
          <div key={group.title} className={styles.group}>
            <p className={styles.groupTitle}>{group.title}</p>
            <div className={styles.tags}>
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${styles.tag} ${group.isCore ? styles.tagCore : ""}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
