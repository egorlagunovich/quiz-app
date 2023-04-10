import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <a href="https://github.com/egorlagunovich" target="_blank">
        @egorlagunovich
      </a>
    </div>
  );
}
