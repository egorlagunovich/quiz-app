import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  correctAnswers: 0,
  currentQuestion: 0,
  isCorrect: false,
  showScore: false,
  currentAnswer: "",
  showMessage: false,
  isLoading: false,
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
