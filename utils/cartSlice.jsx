
import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
   name: 'cart',
   initialState: {
     items: []
   },
   reducers: {
     // Add item or increase quantit
     addItem: (state, action) => {
       const existingItem = state.items.find(
         (item) => item.card.info.id === action.payload.card.info.id
       );
       if (existingItem) {
         existingItem.quantity += 1;
       } else {
         state.items.push({ ...action.payload, quantity: 1 });
       }
     },
     // Remove item or decrease quantity
     removeItem: (state, action) => {
       const existingItem = state.items.find(
         (item) => item.card.info.id === action.payload.card.info.id
       );
       if (existingItem) {
         if (existingItem.quantity === 1) {
           state.items = state.items.filter(
             (item) => item.card.info.id !== action.payload.card.info.id
           );
         } else {
           existingItem.quantity -= 1;
         }
       }
     },
     // Clear the entire cart
     clearCart: (state) => {
       state.items = [];
     }
   }
 });
 
 export const { addItem, removeItem, clearCart } = cartSlice.actions;
 export default cartSlice.reducer;
 