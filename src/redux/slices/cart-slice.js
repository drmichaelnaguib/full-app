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
      // me7tagyn n check eza kan el product dh already mwgood fel items array wala la2,
      // lw mwgood, hanzawed el qty bta3to b 1, otherwise han7ot item object gedyd gwa el items array
      const existingProduct = state.items.find((item) => {
        return item.id === product.id;
      });

      if (!existingProduct) {
        // el product msh mwgood fel items array
        state.items.push({ ...product, qty: 1 });
      } else {
        // 1-hanselect men elitems array el existing product(3amalna keda already line 34)
        // 2-ha n update el existing product(set el qty b qty+1)
        // 3-hanerga3 n7oto fel items array f nafs elindex
        existingProduct.qty += 1;
        const existingProductIndex = state.items.findIndex((item) => {
          return item.id === existingProduct.id;
        });
        state.items[existingProductIndex] = { ...existingProduct };

        // el product already mwgood
        // state.items = state.items.map((item) => {
        //   if (item.id === existingProduct.id) {
        //     return { ...item, qty: item.qty + 1 };
        //   } else {
        //     return { ...item };
        //   }
        // });
      }
      state.totalQty++;
    },
    removeItem: (state, action) => {
      if (state.totalQty === 0) {
        return;
      }
      const product = action.payload.product;
      const existingProduct = state.items.find((item) => {
        return item.id === product.id;
      });
      // b ammen nafsy eny bazawed condition law existing pdt rege3 b undefined 3ashan elcode mayedrabsh
      if (!existingProduct) {
        return;
      }
      if (existingProduct.qty === 1) {
        state.items.filter((item) => {
          return item.id !== existingProduct.id;
        });
      } else {
        existingProduct.qty -= 1;
        const existingProductIndex = state.items.findIndex((item) => {
          return item.id === existingProduct.id;
        });
        state.items[existingProductIndex] = { ...existingProduct };
      }
      state.totalQty--;
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

export default cartSlice;
export const cartReduxActions = cartSlice.actions;
