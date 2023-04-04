import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
