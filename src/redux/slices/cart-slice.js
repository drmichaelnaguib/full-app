import { createSlice } from "@reduxjs/toolkit";

// const item = {
//   id: 1,
//   name: "product 1",
//   pic: "some pic",
//   info: "some info",
//   qty: 2,
// };

// const getCartTotalQuantity = (items) => {
//     let totalQty = 0;
//     for (let item of items) {
//         totalQty += item.quantity;
//     }

//     return totalQty;
// }

const initialState = {
  items: [],
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      // e7na hena haneb3at el product mn bara w hanesta2belo fel action.payload
      const product = action.payload.product;
      // me7tagyn n check eza kan el product dh already mwgood fel items array wala la2, lw mwgood, hanzawed el qty bta3to b 1, otherwise han7ot item object gedyd gwa el items array
      const existingProduct = state.items.find((item) => {
        return item.id === product.id;
      });

      if (!existingProduct) {
        // el product msh mwgood fel items array
        state.items.push({ ...product, qty: 1 });
      } else {
        // el product already mwgood
        state.items = state.items.map((item) => {
          if (item.id === existingProduct.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return { ...item };
          }
        });
      }
      state.totalQty++;
    },
    removeItem: (state, action) => {},
    clearCart: (state) => {
      state = initialState;
    },
  },
});

export default cartSlice;
export const cartReduxActions = cartSlice.actions;
