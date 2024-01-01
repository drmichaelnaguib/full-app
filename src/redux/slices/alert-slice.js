import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  type: "",
  text: "",
};

// updateAlert({
//   open: true,
//   type: "jfdsjfsd",
//   text: "tydstyud",
// });

const alertSlice = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    updateAlert: (state, action) => {
      state.open = action.payload.open;
      state.type = action.payload.type;
      state.text = action.payload.text;
    },
  },
});

export default alertSlice;
export const alertReduxActions = alertSlice.actions;
