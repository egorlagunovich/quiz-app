import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Footer from "./Layout/Footer";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.messageBlock}>
        <h1>Quiz Application with Many Topics</h1>
        <p>Study, enjoy and compete</p>
        <Link to="/quiz-app/quiz">
          <button className={styles.startBut}>Start</button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
