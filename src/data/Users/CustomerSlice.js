import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import returnUserData from "./FetchCustomerData";

// Define an initial state
const initialState = {
  customerData: {},
  loading: false,
  error: null,
};

// Create an asynchronous thunk action
export const loadCustomerData = createAsyncThunk(
  "loadCustomer",
  async (customerEmail, thunkAPI) => {
    if (!customerEmail)
      return thunkAPI.rejectWithValue("No Email provided");
    try {
      const ret = await returnUserData(customerEmail);
      //console.log("LoadproductData in product slice returning: ", ret)
      return ret;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    LogOutCustomer: (state) => {
      state.customerData = {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCustomerData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCustomerData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.customerData = action.payload;
      })
      .addCase(loadCustomerData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.customerData = {};
      });
  },
});

export const selectCustomer = (state) => state.user;
export default customerSlice.reducer;