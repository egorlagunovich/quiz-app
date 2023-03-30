import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>
          <Link to="/">QUIZ</Link>
        </h1>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={styles.playBut}>
            <NavLink to="/quiz">Play</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
