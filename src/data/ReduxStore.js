// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products/ProductSlice";
import cartReducer from "./Products/CartSlice"
import customerReducer from "./Users/CustomerSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart : cartReducer,
    customer : customerReducer
  },
});

export default store;
