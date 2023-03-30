import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import MainRouter from "./components/Layout/MainRouter";
import QuizGeneral from "./components/Quiz/QuizGeneral";
import QuizGeography from "./components/Quiz/QuizGeography";
import QuizHistory from "./components/Quiz/QuizHistory";
import QuizPage from "./components/Quiz/QuizPage";
import QuizScience from "./components/Quiz/QuizScience";
import { quizActions } from "./store/quizSlice";

function App() {
  const loadingMessage = <p>Loading...</p>;
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.isLoading);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRouter />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        {
          path: "quiz",
          element: <QuizPage />,
        },
        {
          path: "quiz/geography",

          loader: async () => {
            const data = await fetch(
              "https://the-trivia-api.com/api/questions?categories=geography&limit=10&difficulty=hard"
            );
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
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* {isLoading && loadingMessage} */}
    </>
  );
}

export default App;
