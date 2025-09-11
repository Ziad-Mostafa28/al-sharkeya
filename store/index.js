// store.js
import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/langSlice";
import homeReducer from "./slices/homeSlice";

import recipeReducer from "./slices/recipeSlice";
import recipeDetailsReducer from "./slices/recipeDetails";
import newsDetailsReducer from "./slices/newDetails";


import newsReducer from "./slices/newsSlice";

const store = configureStore({
  reducer: {
    lang: langReducer,
    home: homeReducer,
    recipe: recipeReducer,
    recipeDetails: recipeDetailsReducer,
    news: newsReducer,
    newsDetails: newsDetailsReducer,
  },
});

export default store;
