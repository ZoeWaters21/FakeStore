import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        ItemsList: [],
        TotalItems: 0,
        TotalCost: 0,
    },
    reducers: {
        AddItemToCart: (state, action) => {
            if (action.payload.hasOwnProperty('count')) {
                const NewItemObj = action.payload
                state.ItemsList.push(NewItemObj)
                state.TotalItems += 1
                state.TotalCost += NewItemObj.price
            }else{
                const ind = state.ItemsList.findIndex(x => x.id === action.payload.id)
                state.ItemsList[ind].count += 1
                state.TotalItems += 1
                state.TotalCost += state.ItemsList[ind].price
            }

        },
        decreaseItemFromCart: (state, action) => {
            if (state.ItemsList[action.payload].count <= 1){
                const removedItem = state.ItemsList.splice(action.payload, 1)
                state.TotalCost -= removedItem[0].price
                state.TotalItems -= 1
            }else if(state.ItemsList[action.payload].count >= 1){
                state.ItemsList[action.payload].count -= 1
                state.TotalCost -= state.ItemsList[action.payload].price
                state.TotalItems -= 1
            } else{
                console.error("DecreaseItemFromCart: index out of range")
            }

        },
        increaseItemFromCart: (state, action) => {
            if(action.payload > -1){
                state.ItemsList[action.payload].count += 1
                state.TotalCost += state.ItemsList[action.payload].price
                state.TotalItems += 1
            }else{
                console.error("increaseItemFromCart: index wasn't found for id")
            }

        },
    },

    });
export const {AddItemToCart, decreaseItemFromCart, increaseItemFromCart } = cartSlice.actions;

export const selectListItems = (state) => state.cart.ItemsList;
export const selectTotalItems = (state) => state.cart.TotalItems;
export const selectTotalCost = (state) => state.cart.TotalCost;
export default cartSlice.reducer;