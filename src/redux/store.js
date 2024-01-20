import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alert-slice";
import cartSlice from "./slices/cart-slice";
import productSlice from "./slices/product-slice";

const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;
