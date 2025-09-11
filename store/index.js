// store.js
import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/langSlice";
import homeReducer from "./slices/homeSlice";
import newsReducer from "./slices/newsSlice";

const store = configureStore({
  reducer: {
    lang: langReducer,
    home: homeReducer,
    news: newsReducer,
  },
});

export default store;
