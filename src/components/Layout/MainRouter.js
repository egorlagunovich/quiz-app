import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function MainRouter() {
  return (
    <div>
      <MainNavigation />
      <main>
        {" "}
        <Outlet />
      </main>
    </div>
  );
}
