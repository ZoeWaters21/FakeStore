// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import returnProductList from "./ProductFetch";

// Define an initial state
const initialState = {
  productData: {},
  slicedData: {},
  loading: false,
  error: null,
};

// Create an asynchronous thunk action
export const loadProductData = createAsyncThunk(
  "loadProduct",
  async (productCategory, thunkAPI) => {
    if (!productCategory)
      return thunkAPI.rejectWithValue("No Products found.");
    try {
      const ret = await returnProductList(productCategory);
      //console.log("LoadproductData in product slice returning: ", ret)
      return ret;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    findProductByID: (state, action) => {
      //console.log("running findProductByID, it received", action.payload)
      const productInfoLocation = state.productData.map(element => element.id).indexOf(action.payload)
      state.slicedData = state.productData[productInfoLocation]
      //console.log("slicedData at end of findProductByID function", state.slicedData)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.productData = action.payload;
      })
      .addCase(loadProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.productData = {};
      });
  },
});
export const {findProductByID} = productSlice.actions
export const selectProduct = (state) => state.product;
export default productSlice.reducer;
