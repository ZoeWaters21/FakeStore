import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ServerDomain } from "../Constants";
import { LoadCustomersOrders } from "./CustomerOrdersSlice";
import { LoadCartFromServer } from "../Products/CartSlice";

// Define an initial state
const initialState = {
  customerData: {},
  loadedIntialUserData: false,
  loading: false,
  error: null,
};

// Create an asynchronous thunk action
export const LoginCustomer = createAsyncThunk(
  "loadCustomer",
  async (credentials, thunkAPI) => {
    //console.log("Excucting loginCustomer Function")
    if (credentials.email === ''){
      return thunkAPI.rejectWithValue("No email provided");
    }else if(credentials.password === ''){
      return thunkAPI.rejectWithValue("No password provided");
    }
    try {
      const requestAttempt = await fetch(ServerDomain+'/users/signin', {
        method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
    const response = await requestAttempt.json();
    if (response.status === "OK"){
      //LoadCustomersOrders(response.token)
      //LoadCartFromServer(response.token)
      return response
    }else{
      return thunkAPI.rejectWithValue(response.message)
    }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const UpdateCustomerDetails = createAsyncThunk(
  "updateCustomer",
  async (UpdatedDetails, thunkAPI) => {
    console.log("UpdateCustomerDetails Function Executed")
    try {
      const requestAttempt = await fetch(ServerDomain + '/users/update', {
        method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Authorization': `Bearer ${UpdatedDetails.token}`,
            "Content-Type": "application/json"
      },
      body: JSON.stringify({
      name:UpdatedDetails.name,
      password:UpdatedDetails.password
      }),
    })
    const response = await requestAttempt.json();
    console.log("Parsed response for account update", response)
    if (response.status === "OK"){
      return response
    }else{
      return thunkAPI.rejectWithValue(response.message)
    }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewCustomer = createAsyncThunk(
  "addCustomer",
  async (newDetails, thunkAPI) => {
    console.log("UpdateCustomerDetails Function Executed")
    try {
      const requestAttempt = await fetch(ServerDomain + '/users/signup', {
        method: 'POST',
          headers: {
            'Accept' : 'application/json',
            "Content-Type": "application/json"
      },
      body: JSON.stringify(newDetails),
    })
    const response = await requestAttempt.json();
    console.log("Parsed response for account creation:", response)
    if (response.status === "OK"){
      return response
    }else{
      return thunkAPI.rejectWithValue(response.message)
    }
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
      state.loadedIntialUserData = false
    },
    clearError:(state) => {
      state.error = null
    },    
    SetInitialDataLoad:(state) =>{
      state.loadedIntialUserData = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.customerData = action.payload;
      })
      .addCase(LoginCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        //state.customerData = {};
      })
      .addCase(UpdateCustomerDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UpdateCustomerDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.customerData['name'] = action.payload.name
        console.log("Details Updated: ", state.customerData)
      })
      .addCase(UpdateCustomerDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.customerData = action.payload;
      })
      .addCase(createNewCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { LogOutCustomer, SetInitialDataLoad } = customerSlice.actions
export const selectCustomer = (state) => state.customer;
export default customerSlice.reducer;