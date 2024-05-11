// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
