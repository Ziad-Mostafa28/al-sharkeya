import { createSlice } from "@reduxjs/toolkit";

const initialLang = localStorage.getItem("lang") || "en";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: initialLang,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;
