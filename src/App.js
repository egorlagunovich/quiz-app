// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import MainRouter from "./components/Layout/MainRouter";
import QuizArt from "./components/Quiz/QuizArt";
import QuizFilm from "./components/Quiz/QuizFilm";
import QuizFood from "./components/Quiz/QuizFood";
import QuizGeneral from "./components/Quiz/QuizGeneral";
import QuizGeography from "./components/Quiz/QuizGeography";
import QuizHistory from "./components/Quiz/QuizHistory";
import QuizMixedHard from "./components/Quiz/QuizMixedHard";
import QuizMixedMedium from "./components/Quiz/QuizMixedMedium";
import QuizMusic from "./components/Quiz/QuizMusic";
import QuizPage from "./components/Quiz/QuizPage";
import QuizScience from "./components/Quiz/QuizScience";
import QuizSociety from "./components/Quiz/QuizSociety";
import QuizSport from "./components/Quiz/QuizSport";
import { quizActions } from "./store/quizSlice";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const loadingMessage = <p>Loading...</p>;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRouter />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "quiz",
          element: <QuizPage />,
        },
        {
          path: "quiz/geography",

          loader: async () => {
            // setIsLoading(true);
            const data = await fetch(
              "https://the-trivia-api.com/api/questions?categories=geography&limit=10&difficulty=hard"
            );
            // setIsLoading(false);
            return data;
          },
          element: <QuizGeography />,
        },
        {
          path: "quiz/general-knowledge",
          loader: async () => {
            return fetch(
              "https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=10&difficulty=medium"
            );
          },
          element: <QuizGeneral />,
        },
        {
          path: "quiz/history",
          loader: async () => {
            return fetch(
              "https://the-trivia-api.com/api/questions?categories=history&limit=10&difficulty=medium"
            );
          },
          element: <QuizHistory />,
        },
        {
          path: "quiz/science",
          loader: async () => {
            return fetch(
              "https://the-trivia-api.com/api/questions?categories=science&limit=10&difficulty=medium"
            );
          },
          element: <QuizScience />,
        },
        {
          path: "quiz/sport",
          loader: async () => {
            return fetch(
              "https://the-trivia-api.com/api/questions?categories=sport_and_leisure&limit=10&difficulty=medium"
            );
          },
          element: <QuizSport />,
        },
        {
          path: "quiz/music",
          loader: async () => {
            return fetch(
              "https://the-trivia-api.com/api/questions?categories=music&limit=10&difficulty=medium"
            );
          },
          element: <QuizMusic />,
        },
        {
          path: "quiz/society",
          loader: async () => {
            return fetch(
              "https://the-trivia-api.com/api/questions?categories=society_and_culture&limit=10&difficulty=medium"
            );
          },
          element: <QuizSociety />,
        },
        {
          path: "quiz/food",
          loader: async () => {
            return fetch(
              "https://the-trivia-api.com/api/questions?categories=food_and_drink&limit=10&difficulty=medium"
            );
          },
          element: <QuizFood />,
        },
        {
          path: "quiz/film",
          loader: async () => {
            return fetch(
              "https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=10&difficulty=medium"
            );
          },
          element: <QuizFilm />,
        },
        {
          path: "quiz/art",
          loader: async () => {
            return fetch(
              "https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=10&difficulty=medium"
            );
          },
          element: <QuizArt />,
        },
        {
          path: "quiz/mixed/hard",
          loader: async () => {
            return fetch(
              "https://the-trivia-api.com/api/questions?categories=arts_and_literature,film_and_tv,food_and_drink,general_knowledge,geography,history,science,society_and_culture,sport_and_leisure,music&limit=10&difficulty=hard"
            );
          },
          element: <QuizMixedHard />,
        },
        {
          path: "quiz/mixed/medium",
          loader: async () => {
            return fetch(
              "https://the-trivia-api.com/api/questions?categories=arts_and_literature,film_and_tv,food_and_drink,general_knowledge,geography,history,science,society_and_culture,sport_and_leisure,music&limit=10&difficulty=medium"
            );
          },
          element: <QuizMixedMedium />,
        },
      ],
    },
  ]);

  return (
    <>
      {/* {isLoading && loadingMessage}. */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
