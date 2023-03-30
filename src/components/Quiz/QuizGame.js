import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizActions } from "../../store/quizSlice";
import styles from "./QuizGame.module.css";

export default function QuizGame(props) {
  const dispatch = useDispatch();
  const data = props.data;
  const currentQuestionNumber = useSelector((state) => state.currentQuestion);
  const correctAnswers = useSelector((state) => state.correctAnswers);
  const currentAnswer = useSelector((state) => state.currentAnswer);
  const showScore = useSelector((state) => state.showScore);
  const showMessage = useSelector((state) => state.showMessage);
  const answers = [
    data[currentQuestionNumber].correctAnswer,
    ...data[currentQuestionNumber].incorrectAnswers,
  ];
  const responseMessage = (
    <div>
      <p className={styles.responseMessage}>Choose your answer</p>
    </div>
  );

  const sortedAnswers = answers.sort();
  const onNextQuestion = () => {
    if (currentAnswer.trim().length === 0) {
      dispatch(quizActions.setShowMessage(true));
      return;
    }
    if (showMessage) dispatch(quizActions.setShowMessage(false));
    dispatch(quizActions.nextQustion());
    dispatch(quizActions.setCurrentAnswer(""));
  };
  const onSumbitAnswer = (e) => {
    dispatch(quizActions.setCurrentAnswer(e.target.id));
    if (e.target.id === data[currentQuestionNumber].correctAnswer) {
      dispatch(quizActions.setIsCorrect(true));
    } else dispatch(quizActions.setIsCorrect(false));
  };

  const resetHandler = () => {
    dispatch(quizActions.clearQuiz());
  };
  const resultMessage = (
    <div>
      <p>Your result is {correctAnswers}/10!</p>
      <button onClick={resetHandler}>Play again</button>
    </div>
  );
  useEffect(() => {
    dispatch(quizActions.clearQuiz());
  }, []);
  return (
    <>
      {!showScore ? (
        <div className={styles.gameMenu}>
          <div>{currentQuestionNumber + 1}/10</div>
          <h2 className={styles.question}>
            {data[currentQuestionNumber].question}
          </h2>
          <ul className={styles.options}>
            {sortedAnswers.map((answer) => (
              <>
                <li
                  key={answer}
                  onClick={onSumbitAnswer}
                  id={answer}
                  className={`${styles.option}  ${
                    currentAnswer === answer ? styles.activeOption : null
                  }`}
                >
                  {answer}
                </li>
              </>
            ))}
          </ul>
          <div className={styles.actions}>
            <button onClick={onNextQuestion}>Next</button>
          </div>
          {showMessage && responseMessage}
        </div>
      ) : (
        resultMessage
      )}
    </>
  );
}
