import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizGame from "./QuizGame";

export default function QuizHistory() {
  const data = useLoaderData();
  return <QuizGame data={data} />;
}
