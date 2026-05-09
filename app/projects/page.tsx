import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import styles from "./projects.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Ferdinand Ismael",
  description: "Projects and case studies by Ferdinand Ismael, Front End Engineer.",
};

const projects = [
  {
    name: "Ripple",
    description:
      "A daily hydration tracker that helps you build and maintain healthy water intake habits. Tracks daily progress, maintains streaks, and persists your data locally across sessions.",
    tags: ["Next.js", "React", "Redux Toolkit", "Framer Motion", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ripple-iota-olive.vercel.app",
    githubUrl: "https://github.com/ferddecoded/ripple",
    year: "2026",
    preview: "/ripple-preview.png",
  },
];

export default function Projects() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.label}>Projects</p>
          <h1 className={styles.heading}>Selected work.</h1>
          <p className={styles.subheading}>
            Personal projects built to explore ideas, sharpen skills, and ship real products.
          </p>

          <div className={styles.list}>
            {projects.map((project) => (
              <article key={project.name} className={styles.card}>
                <a href={project.liveUrl} target="_blank" rel="noopener" className={styles.preview}>
                  <Image
                    src={project.preview}
                    alt={`${project.name} screenshot`}
                    width={1280}
                    height={800}
                    className={styles.previewImg}
                  />
                </a>

                <div className={styles.content}>
                  <div className={styles.cardTop}>
                    <span className={styles.year}>{project.year}</span>
                    <div className={styles.cardLinks}>
                      <a href={project.githubUrl} target="_blank" rel="noopener" aria-label="GitHub" className={styles.iconLink}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noopener" aria-label="Live site" className={styles.iconLink}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <h2 className={styles.cardName}>{project.name}</h2>
                  <p className={styles.cardDesc}>{project.description}</p>

                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  <a href={project.liveUrl} target="_blank" rel="noopener" className={styles.cardCta}>
                    View project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
