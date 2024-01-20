import { createSlice } from "@reduxjs/toolkit";

// const dummyState = {
//   list: [
//     {
//       id: 1,
//       name: "product 1",
//       info: "product 1 info",
//       pics: "product 1 pics",
//     },
//     {
//       id: 2,
//       name: "product 2",
//       info: "product 2 info",
//       pics: "product 2 pics",
//     },
//   ],
// };

const initialState = {
  list: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    list: (state, action) => {
      state.list = [...action.payload];
    },
  },
});

export default productSlice;
export const productReduxActions = productSlice.actions;
