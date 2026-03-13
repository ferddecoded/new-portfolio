import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "./projects.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Ferdinand Ismael",
  description: "Projects and case studies by Ferdinand Ismael, Front End Engineer.",
};

export default function Projects() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.label}>Projects</p>
          <h1 className={styles.heading}>Work in progress.</h1>
          <p className={styles.subheading}>
            Case studies and project breakdowns are on the way. Check back soon.
          </p>
          <a href="/" className={styles.back}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to portfolio
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
