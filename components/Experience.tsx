import styles from "./Experience.module.css";

const jobs = [
  {
    period: "Nov 2021 — Present",
    company: "Achievers",
    role: "Senior Software Engineer",
    bullets: [
      "Orchestrated cross-domain feature rollouts impacting 100k+ monthly active users across Recognition, Community, and Communications domains",
      "Architected customer-facing recognition forms with configurable fields, colleague-lookup, and reCAPTCHA security for anonymous users",
      "Redesigned community newsfeed with A/B testing via feature flags — 60% lift in 'seen events' per session; comments per event rose from 0.78 to 0.91",
      "Launched real-time analytics dashboard surfacing manager engagement metrics against team goals",
      "Collaborated with UX, backend, and QA to reduce time-to-market by 25%",
      "Resolved ~90% of WCAG accessibility issues across all major user flows",
    ],
    stack: ["React", "TypeScript", "GraphQL", "Apollo", "Redux", "Jest", "Cypress"],
  },
  {
    period: "Mar 2021 — Nov 2021",
    company: "Gubagoo",
    role: "Software Developer",
    bullets: [
      "Supported a real-time messaging platform handling 2M+ daily visitors via WebSockets for live dealer and operator chat",
      "Migrated legacy JavaScript codebase to TypeScript, improving type safety and long-term maintainability",
      "Led transition from Baobab to Redux Toolkit for scalable, predictable state management",
      "Built accessible, reusable UI components and a shared component library with Product and Design",
      "Integrated Cypress for end-to-end testing across all critical user flows",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "WebSocket", "Cypress"],
  },
  {
    period: "Jun 2020 — Mar 2021",
    company: "Walmart Labs",
    role: "Software Developer II",
    bullets: [
      "Supported replatforming of Walmart.ca Search and Browse pages from a legacy stack to a next-gen React + TypeScript architecture",
      "Designed high-impact UI components to boost customer engagement and click-through rates on a high-traffic eCommerce platform",
      "Contributed to micro-app architecture transition supporting scalability and modular development",
      "Partnered with Product Owners to deliver customer-centric experiences across Walmart.ca",
    ],
    stack: ["React", "TypeScript", "Redux", "Redux Sagas", "Node.js", "Hapi", "Jest"],
  },
  {
    period: "Aug 2019 — Apr 2020",
    company: "Climax Media",
    role: "Front End Developer",
    bullets: [
      "Built reusable, modular UI components within a Design System for integration into a Sitecore CMS platform",
      "Implemented theme tokenization for flexible, brand-consistent styling across clients",
      "Collaborated in an Agile team for sprint planning, code reviews, and QA partnership",
    ],
    stack: ["React", "TypeScript", "Sitecore", "Testing Library"],
  },
  {
    period: "Apr 2018 — Jun 2019",
    company: "Conscia",
    role: "Software Developer",
    bullets: [
      "Designed and developed UI components for Conscia's proprietary platform",
      "Built custom component libraries aligned with company-wide design standards",
    ],
    stack: ["React", "Redux", "JavaScript", "HTML/CSS", "Jest", "Enzyme"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <p className={styles.label}>Experience</p>
      <h2 className={styles.heading}>Where I&apos;ve worked.</h2>
      <div className={styles.list}>
        {jobs.map((job) => (
          <div key={job.company} className={styles.item}>
            <div className={styles.meta}>
              <p className={styles.period}>{job.period}</p>
              <p className={styles.company}>{job.company}</p>
            </div>
            <div className={styles.content}>
              <p className={styles.role}>{job.role}</p>
              <ul className={styles.bullets}>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className={styles.stack}>
                {job.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
