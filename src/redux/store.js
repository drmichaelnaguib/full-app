import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alert-slice";

const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
  },
});

export default store;
