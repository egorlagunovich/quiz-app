import { createSlice } from "@reduxjs/toolkit";
import geographyIMG from "./../images/geography.jpg";
import generalIMG from "./../images/general-knowledge.jpg";
import scinceIMG from "./../images/science.png";
import historyIMG from "./../images/history.jpg";
import musicIMG from "./../images/music.jpg";
import foodIMG from "./../images/food.jpg";
import filmIMG from "./../images/film.jpg";
import artIMG from "./../images/art.jpg";
import sportIMG from "./../images/sport.jpg";
import societyIMG from "./../images/society.jpg";
import mixIMG from "./../images/mix.jpg";

const initialState = {
  correctAnswers: 0,
  currentQuestion: 0,
  isCorrect: false,
  showScore: false,
  currentAnswer: "",
  showMessage: false,
  isLoading: false,
  quizItems: [
    { link: "geography", img: geographyIMG, name: "Geography Quiz" },
    {
      link: "general-knowledge",
      img: generalIMG,
      name: "General Knowledge Quiz",
    },
    { link: "history", img: historyIMG, name: "History Quiz" },
    { link: "science", img: scinceIMG, name: "Science Quiz" },
    { link: "society", img: societyIMG, name: "Society Quiz" },
    { link: "music", img: musicIMG, name: "Music Quiz" },
    { link: "food", img: foodIMG, name: "Food Quiz" },
    { link: "film", img: filmIMG, name: "Film Quiz" },
    { link: "art", img: artIMG, name: "Art Quiz" },
    { link: "sport", img: sportIMG, name: "Sport Quiz" },
    { link: "mixed/hard", img: mixIMG, name: "Mixed Hard Quiz" },
    { link: "mixed/medium", img: mixIMG, name: "Mixed Medium Quiz" },
  ],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQustion(state) {
      if (state.isCorrect) state.correctAnswers++;
      if (state.currentQuestion < 9) state.currentQuestion++;
      else state.showScore = true;
    },
    setIsCorrect(state, action) {
      state.isCorrect = action.payload;
    },
    clearQuiz(state) {
      state.correctAnswers = 0;
      state.currentQuestion = 0;
      state.isCorrect = false;
      state.showScore = false;
      state.currentAnswer = "";
      state.showMessage = false;
    },
    setShowScore(state) {
      state.showScore = true;
    },
    setCurrentAnswer(state, action) {
      state.currentAnswer = action.payload;
    },
    setShowMessage(state, action) {
      state.showMessage = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const quizReducer = quizSlice.reducer;
export const quizActions = quizSlice.actions;
