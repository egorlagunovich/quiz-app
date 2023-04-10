import React from "react";
import { Link } from "react-router-dom";
import styles from "./QuizPage.module.css";
import { useSelector } from "react-redux";

export default function QuizPage() {
  const quizItems = useSelector((state) => state.quiz.quizItems);
  return (
    <div className={styles.quizMenu}>
      {quizItems.map((quiz) => (
        <Link to={quiz.link}>
          <div className={styles.quizBlock}>
            <div className={styles.imgBlock}>
              <img src={quiz.img} alt={quiz.link} />
            </div>
            {quiz.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
