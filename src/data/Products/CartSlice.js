import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ServerDomain, URLExtensions } from "../Constants";

const initialState = {
    initialState:{ 
        CartItems: [],
        TotalItems: 0,
        TotalCost: 0.00,
        loading: false,
        error: null
    }
};

export const LoadCartFromServer = createAsyncThunk(
    "loadCart",
    async (userToken, thunkAPI) => {
      try {
        const requestAttempt = await fetch(ServerDomain +'/cart', {
          method: "GET",
            headers: {
            'Accept' : 'application/json',
            'Authorization': `Bearer ${userToken}`,
            "Content-Type": "application/json"
      },
      })
      //console.log("unjsoned response", requestAttempt)
      const response = await requestAttempt.json();
      console.log("Jsoned response", response)
      if (response.status === "OK"){
        if(response.items != []){
        let ExpandItems = []
        //console.log(response.items)
        for (let i = 0; i < response.items.length; i++){
          const fetchData = await fetch(ServerDomain + URLExtensions.productID + response.items[i].id);
          const rawData = await fetchData.json();
          rawData['count'] = response.items[i].count
          ExpandItems.push(rawData)
        }
        return ExpandItems
        }
      }
      } catch (error) {
        console.error(error)
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const UploadCartToServer = createAsyncThunk(
  "uploadCart",
async (sendingData, thunkAPI) => {
  //console.log(sendingData.items)
  try {
    const requestAttempt = await fetch(ServerDomain + '/cart', {
      method: 'PUT',
        headers: {
          'Accept' : 'application/json',
          'Authorization': `Bearer ${sendingData.token}`,
          "Content-Type": "application/json"
    },
    body: JSON.stringify({items:sendingData.items}),
  })
  const response = await requestAttempt.json();
  console.log("Parsed response update cart", response)
  if (response.status === "OK"){
    console.log("Update cart Successful")
  }else{
    console.log(response.message)
    return thunkAPI.rejectWithValue(response.message)
  }
  } catch (error) {
    console.error(error)
    return thunkAPI.rejectWithValue(error.message);
  }
}
)

export const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {
  AddItemToCart: (state, action) => {
    if(!state.CartItems){state.CartItems = []}
    if (action.payload.hasOwnProperty('count')) {
      console.log("AddItemToCart receiving: ", action.payload)
      const NewItemObj = action.payload
      console.log("NewItemObj: ", NewItemObj)
      state.CartItems.push(NewItemObj)
      state.TotalItems += 1
      state.TotalCost += NewItemObj.price
      state.TotalCost = Math.round(state.TotalCost * 100) / 100
      console.log("Add to cartItems: ", state.CartItems)

    }else{
      const ind = state.CartItems.findIndex(x => x.id === action.payload.id)
      state.CartItems[ind].count += 1
      state.TotalItems += 1
      state.TotalCost += state.CartItems[ind].price
      state.TotalCost = Math.round(state.TotalCost * 100) / 100
      console.log("Add to cartItems: ", state.CartItems)
    }

  },
  decreaseItemFromCart: (state, action) => {
    if (state.CartItems[action.payload].count <= 1){
        const removedItem = state.CartItems.splice(action.payload, 1)
        state.TotalCost -= removedItem[0].price
        state.TotalCost = Math.round(state.TotalCost * 100) / 100
        state.TotalItems -= 1
    }else if(state.CartItems[action.payload].count >= 1){
        state.CartItems[action.payload].count -= 1
        state.TotalCost -= state.CartItems[action.payload].price
        state.TotalCost = Math.round(state.TotalCost * 100) / 100
        state.TotalItems -= 1
    } else{
        console.error("DecreaseItemFromCart: index out of range")
    }

    },
  increaseItemFromCart: (state, action) => {
    if(action.payload > -1){
        state.CartItems[action.payload].count += 1
        state.TotalCost += state.CartItems[action.payload].price
        state.TotalCost = Math.round(state.TotalCost * 100) / 100
        state.TotalItems += 1
    }else{
        console.error("increaseItemFromCart: index wasn't found for id")
    }
  },
  clearCart: (state) => {
    state.CartItems = []
    state.TotalCost = 0.00
    state.TotalItems = 0
  }
},
extraReducers: (builder) => {
  builder
    .addCase(LoadCartFromServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(LoadCartFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      //console.log("loadcart payload: ", action.payload)
      if(!state.CartItems){state.CartItems = []}
      if(state.TotalItems === undefined){ state.TotalItems = 0}
      if(state.TotalCost === undefined){ state.TotalCost = 0.00}
      if(action.payload != []){
      for (let i = 0; i < action.payload.length; i++){
          let iteration = action.payload[i]
          //console.log("Displaying cart items being added: item ", i,' ', iteration)
          state.TotalItems += iteration.count
          state.TotalCost += (iteration.count*iteration.price)
          state.CartItems.push(iteration)
          state.TotalCost = Math.round(state.TotalCost * 100) / 100
          //console.log("CartItems: ", state.CartItems)
          //console.log("TotalItems: ", state.TotalItems)
          //console.log("TotalCost: ", state.TotalCost)
      }
    } else{
      console.log("User has no cart items")
    }
    })
    .addCase(LoadCartFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(UploadCartToServer.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(UploadCartToServer.fulfilled, (state) => {
      state.loading = false;
      state.error = null; 
    })
    .addCase(UploadCartToServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const {AddItemToCart, decreaseItemFromCart, increaseItemFromCart, clearCart } = cartSlice.actions;

export const selectCart = (state) => state.cart;
export default cartSlice.reducer;