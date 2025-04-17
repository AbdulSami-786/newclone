import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../reducer/cartSlice' // ✅ fixed path

export const store = configureStore({
  reducer: {
    cart: cartReducer, // ✅ exposes as state.cart
  },
})