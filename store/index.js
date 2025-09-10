// store.js
import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/langSlice";
import homeReducer from "./slices/homeSlice";


const store = configureStore({
  reducer: {
    lang: langReducer,
    home: homeReducer,

  },
});

export default store;
