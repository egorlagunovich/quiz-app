import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Header from "./Header";

export default function MainRouter() {
  return (
    <div>
      <MainNavigation />
      <main>
        {" "}
        <Outlet />
      </main>
      <Header />
    </div>
  );
}
