import React from "react";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.messageBlock}>
          <h1>Quiz Application with Many Topics</h1>
          <p>Study, enjoy and compete</p>
          <button className={styles.startBut}>Start</button>
        </div>
      </main>
      <div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </>
  );
}
