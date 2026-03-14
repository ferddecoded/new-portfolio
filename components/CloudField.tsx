"use client";
import { useEffect, useState } from "react";
import styles from "./CloudField.module.css";

const clouds = [
  { id: 1, top: "15%", scale: 1.4, duration: "35s", delay: "0s",  opacity: 0.85, reverse: false },
  { id: 2, top: "35%", scale: 0.9, duration: "50s", delay: "8s",  opacity: 0.7,  reverse: true  },
  { id: 3, top: "55%", scale: 1.1, duration: "42s", delay: "3s",  opacity: 0.75, reverse: false },
  { id: 4, top: "20%", scale: 0.7, duration: "60s", delay: "15s", opacity: 0.6,  reverse: true  },
  { id: 5, top: "70%", scale: 1.3, duration: "38s", delay: "6s",  opacity: 0.8,  reverse: false },
  { id: 6, top: "45%", scale: 0.8, duration: "55s", delay: "20s", opacity: 0.65, reverse: true  },
];

export default function CloudField() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const check = () => setIsLight(document.documentElement.getAttribute("data-theme") === "light");
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  if (!isLight) return null;

  return (
    <div className={styles.container} aria-hidden="true">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={`${styles.cloud} ${cloud.reverse ? styles.cloudReverse : ""}`}
          style={{
            top: cloud.top,
            opacity: cloud.opacity,
            transform: `scale(${cloud.scale})`,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
          }}
        >
          <div className={styles.cloudMain} />
          <div className={styles.cloudBubbleLeft} />
          <div className={styles.cloudBubbleRight} />
          <div className={styles.cloudBubbleTop} />
        </div>
      ))}
    </div>
  );
}
