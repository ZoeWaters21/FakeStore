import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ServerDomain, URLExtensions } from "../Constants";

// Define an initial state
const initialState = {
    unpaidOrders: [],
    undeliveredOrders: [],
    deliveredOrders:[],
    loading: false,
    error: null,
};

// Create an asynchronous thunk action
export const LoadCustomersOrders = createAsyncThunk(
  "loadOrder",
  async (UserToken, thunkAPI) => {
    //console.log("Excucting loadcustomerorder Function")
    try {
      const requestAttempt = await fetch(ServerDomain+'/orders/all', {
        method: "GET",
        headers: {
            'Accept' : 'application/json',
            'Authorization': `Bearer ${UserToken}`,
            "Content-Type": "application/json"
      },
    })
    //console.log("unjsoned response", requestAttempt)
    const response = await requestAttempt.json();
    //console.log("Jsoned response", response)
    if (response.status === "OK"){
      console.log(response)
        let revisedOrder = [] 
        for (let i = 0; i < response.orders.length; i++){
          const iteration = response.orders[i]
          let expandedItems = []
          const orderItems = JSON.parse(iteration.order_items)
          for (let j = 0; j < orderItems.length; j++){
            const fetchData = await fetch(ServerDomain + URLExtensions.productID + orderItems[j].prodID);
            const rawData = await fetchData.json();
            rawData['count'] = orderItems[j].quantity
            expandedItems.push(rawData)
          }
          
          //console.log("expandedItems returning: ", expandedItems)
          revisedOrder.push({
            id:iteration.id,
            uid:iteration.uid,
            totalOrderItems:iteration.item_numbers,
            isPaid:iteration.is_paid,
            isDelivered:iteration.is_delivered, 
            totalPrice:iteration.total_price/100,
            orderItems:expandedItems})
        }
        //console.log("revisedOrder ", revisedOrder)
        return revisedOrder
        }
    else{
      console.log(response.message)
      return thunkAPI.rejectWithValue(response.message)
    }
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const NewOrder = createAsyncThunk(
  "NewOrder",
  async (sendingData, thunkAPI) => {
    //console.log("Excucting loadcustomerorder Function")
      try {
        const requestAttempt = await fetch(ServerDomain + '/orders/neworder', {
          method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Authorization': `Bearer ${sendingData.token}`,
            "Content-Type": "application/json"
          },
           body: JSON.stringify({items:sendingData.items}),
          })
      const response = await requestAttempt.json();
      //console.log("Parsed response view cart", response)
      if (response.status === "OK"){
        console.log("Success")
    }
    else{
      console.log(response.message)
      return thunkAPI.rejectWithValue(response.message)
    }
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrders:(state) => {
    state.unpaidOrders = []
    state.undeliveredOrders = []
    state. deliveredOrders = []
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoadCustomersOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoadCustomersOrders.fulfilled, (state, action) => {
        //console.log("LoadCustomerOrders returning payload: ", action.payload)
        if (action.payload != [] && action.payload){
          for (let i = 0; i < action.payload.length; i++){
            const iteration = action.payload[i]
            console.log("iteraction: ", iteration)
              if (!iteration.isPaid && !iteration.isDelivered){
                state.unpaidOrders.push(iteration)
              }else if(isPaid === 1 && !isDelivered){
                state.undeliveredOrders.push(iteration)
              }else if(isDelivered == 1){
                state.deliveredOrders.push(iteration)
              }else{
                console.log("No conditions met with an order")
              }
          }
        }else{
          console.log("Didnt receive any orders")
        }
        state.loading = false;
        state.error = null;
        //console.log("unpaidOrders: ",state.unpaidOrders)
        //console.log("undeliveredOrders: ",state.undeliveredOrders)
        //console.log("deliveredOrders: ",state.deliveredOrders)
      })
      .addCase(LoadCustomersOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(NewOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(NewOrder.fulfilled, (state) => {
        state.loading = false;
        state.error = null; 
      })
      .addCase(NewOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {clearOrders} = orderSlice.actions
export const selectOrders = (state) => state.order;
export default orderSlice.reducer;