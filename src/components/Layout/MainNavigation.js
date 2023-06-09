import { Link, NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import brainIMG from "./../../images/brain.png";


export default function MainNavigation() {
  return (
    <nav className={styles.navbar}>
      <Link to="/quiz-app">
        <div className={styles.logo}>
          <img src={brainIMG} alt="brain" />
          <h1>
            Brain<span className={styles.quizText}>Quiz</span>
          </h1>
        </div>
      </Link>
      <div className={styles.menu}>
        <ul>
          <li className={styles.playBut}>
            <NavLink to="/quiz-app/quiz">Play</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
