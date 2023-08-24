// npm install @reduxjs/toolkit react-redux

import { configureStore } from "@reduxjs/toolkit";
// first step of creating store
import favoriteReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});

// reducers means functions 