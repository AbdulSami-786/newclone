import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
  searchQuery: "", // Holds search input
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addcarts: (state, action) => {
      const existing = state.carts.find(item => item.data.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.carts.push({
          data: action.payload,
          id: nanoid(),
          quantity: 1,
        });
      }
    },
    removecart: (state, action) => {
      state.carts = state.carts.filter(item => item.id !== action.payload.id);
    },
    increaseQty: (state, action) => {
      const item = state.carts.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.carts.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.carts = state.carts.filter(i => i.id !== action.payload.id);
      }
    },
    search: (state, action) => {
      state.searchQuery = action.payload; // This updates the searchQuery in state
    },
  },
});

export const { addcarts, removecart, increaseQty, decreaseQty, search } = cartSlice.actions;
export default cartSlice.reducer;
