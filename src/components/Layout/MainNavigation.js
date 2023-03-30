import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import brainIMG from "./../../images/brain.png";

export default function MainNavigation() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>
          <img src={brainIMG} alt="brain" />
          <h1>
            Brain<span className={styles.quizText}>Quiz</span>
          </h1>
        </div>
      </Link>
      <div className={styles.menu}>
        <ul>
          {/* <li>
            <NavLink to="/about">About</NavLink>
          </li> */}
          <li>
            <NavLink to="/signin" className={styles.login}>
              Sign in
            </NavLink>
          </li>
          <li className={styles.playBut}>
            <NavLink to="/quiz">Play</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
