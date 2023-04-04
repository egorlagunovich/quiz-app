import React from "react";
import { Link } from "react-router-dom";
import styles from "./QuizPage.module.css";
import geographyIMG from "./../../images/geography.jpg";
import generalIMG from "./../../images/general-knowledge.jpg";
import scinceIMG from "./../../images/science.png";
import historyIMG from "./../../images/history.jpg";

export default function QuizPage() {
  return (
    <div className={styles.quizMenu}>
      <Link to="geography">
        <div className={styles.quizBlock}>
          <div className={styles.imgBlock}>
            <img src={geographyIMG} alt="geography" />
          </div>
          Geography Quiz
        </div>
      </Link>
      <Link to="general-knowledge">
        <div className={styles.quizBlock}>
          <div className={styles.imgBlock}>
            <img src={generalIMG} alt="general-knowledge" />
          </div>
          General Knowledge Quiz
        </div>
      </Link>
      <Link to="history">
        <div className={styles.quizBlock}>
          <div className={styles.imgBlock}>
            <img src={historyIMG} alt="history" />
          </div>
          History Quiz
        </div>
      </Link>
      <Link to="science">
        <div className={styles.quizBlock}>
          <div className={styles.imgBlock}>
            <img src={scinceIMG} alt="science" />
          </div>
          Science
        </div>
      </Link>
      <Link to="sport">
        <div className={styles.quizBlock}>
          <div className={styles.imgBlock}>
            <img src={scinceIMG} alt="sport" />
          </div>
          Sport
        </div>
      </Link>
      <Link to="music">
        <div className={styles.quizBlock}>
          <div className={styles.imgBlock}>
            <img src={scinceIMG} alt="music" />
          </div>
          Music
        </div>
      </Link>
      <Link to="society">
        <div className={styles.quizBlock}>
          <div className={styles.imgBlock}>
            <img src={scinceIMG} alt="society" />
          </div>
          Society
        </div>
      </Link>
      <Link to="science">
        <div className={styles.quizBlock}>
          <div className={styles.imgBlock}>
            <img src={scinceIMG} alt="science" />
          </div>
          Science
        </div>
      </Link>
      <Link to="science">
        <div className={styles.quizBlock}>
          <div className={styles.imgBlock}>
            <img src={scinceIMG} alt="science" />
          </div>
          Science
        </div>
      </Link>
      <Link to="science">
        <div className={styles.quizBlock}>
          <div className={styles.imgBlock}>
            <img src={scinceIMG} alt="science" />
          </div>
          Science
        </div>
      </Link>
    </div>
  );
}
