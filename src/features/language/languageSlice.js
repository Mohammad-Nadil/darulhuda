import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  english: false, 
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setEnglish: (state) => {
      state.english = !state.english; 
    },
  },
});

export const { setEnglish } = languageSlice.actions;
export default languageSlice.reducer;
