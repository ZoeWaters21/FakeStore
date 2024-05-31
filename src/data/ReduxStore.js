// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products/ProductSlice";
import cartReducer from "./Products/CartSlice"
import customerReducer from "./Users/CustomerSlice"
import orderReducer from './Users/CustomerOrdersSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart : cartReducer,
    customer : customerReducer,
    order : orderReducer
  },
});

export default store;
