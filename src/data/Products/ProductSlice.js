// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { myDetails, ServerDomain, URLExtensions, ReductionKeys} from "../Constants";
import { CapitalizeFirstLetterEveryWord, URLEncoder } from '../../Functions/StringManipulation'
import { ReduceFetchedItems } from "../../Functions/ProductFunctions";

// Define an initial state
const initialState = {
  cachedProductList: [],
  cachedProductDetails:[],
  categories: [],
  currentProductList: [],
  currentProductDetails: [],
  loading: false,
  error: null,
};

// Create an asynchronous thunk action
export const loadCategories= createAsyncThunk(
  "loadCategories",
  async (thunkAPI) => {
    try {
      const refinedData = []
      const fetchData = await fetch(ServerDomain + URLExtensions.categories);
      const rawData = await fetchData.json();
      rawData.push(myDetails.category)
      rawData.forEach(item => refinedData.push(CapitalizeFirstLetterEveryWord(item)));
      return refinedData
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loadProductList = createAsyncThunk(
  "loadProductList",
  async (category, thunkAPI) => {
    try {
      //console.log("executing the load productlist function")
      if (category === myDetails.category){ 
         
         //console.log("loadProductList returning: ", {category:category, data:reducedData})
         return {category:category, data:myDetails};
         
      }else if (category){
        const fetchData = await fetch(ServerDomain + URLExtensions.products + URLEncoder(category));
        const rawData = await fetchData.json();
        const reducedData = ReduceFetchedItems(rawData, ReductionKeys.productList)
        //console.log("loadProductList returning: ", {category:category, data:reducedData})
        return {category:category, data:reducedData};
      }else{
        return thunkAPI.rejectWithValue(error.message);
      }      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadProductDetails = createAsyncThunk(
  "loadProductDetails",
  async (productID, thunkAPI) => {
    console.log('executing loadproductdetails')
    try{
    if (productID === myDetails.id){ 
      //console.log("loadProductList returning: ", {ProductID:productID, data:rawData})
      return {ProductID:productID, data:rawData}
    }else{
      const fetchData = await fetch(ServerDomain + URLExtensions.productID + productID);
      const rawData = await fetchData.json();
      //console.log(rawData)
      //console.log("loadProductList returning: ", {ProductID:productID, data:rawData})
      return {ProductID:productID, data:rawData}
    }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchCachedProductlist:(state, action) => {
      state.currentProductList = [];
      state.currentProductList = action.payload
    },
    fetchCachedProductDetails:(state, action) =>{
      state.currentProductDetails = [];
      state.currentProductDetails = action.payload
    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProductList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.currentProductList = action.payload.data
        state.cachedProductList.push(action.payload)
        //console.log("successfulProductList Returning: ", state.currentProductList)
        //console.log("successfulProductList Returning: ", state.cachedProductList)
        
      })
      .addCase(loadProductList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(loadCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.currentProductDetails = action.payload.data
        state.cachedProductDetails.push(action.payload)
        //console.log("successfulProductDetails Returning: ", state.currentProductDetails)
        //console.log("successfulProductDetails Returning: ", state.cachedProductDetails)
      })
      .addCase(loadProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      
  },
});
export const {fetchCachedProductlist, fetchCachedProductDetails} = productSlice.actions
export const selectProduct = (state) => state.product;
export default productSlice.reducer;
