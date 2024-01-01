import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alert-slice";
import cartSlice from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
