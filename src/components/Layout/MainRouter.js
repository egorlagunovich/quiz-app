import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import styles from './MainRouter.module.css'

export default function MainRouter() {
  return (
    <div className={styles.container}>
      <MainNavigation />
      <main>
        {" "}
        <Outlet />
      </main>
    </div>
  );
}
