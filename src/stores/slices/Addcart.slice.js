// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const findAllProducts = createAsyncThunk("findAllProducts", async () => {
//     let res = await axios.get(process.env.REACT_APP_SERVER_JSON + "cartItems");
//     return res.data;
// });

// const productSlice = createSlice({
//     name: "product",
//     initialState: {
//         listProducts: [],
//         cart: [],
//     },
//     reducers: {
//         addToCart: (state, action) => {
//             const product = action.payload;
//             state.cart.push(product);
//         },
//         removeFromCart: (state, action) => {
//             const productId = action.payload;
//             state.cart = state.cart.filter((product) => product.id !== productId);
//         },
//         clearCart: (state) => {
//             state.cart = [];
//         },
//     },
//     extraReducers: (builder) => {
//         builder.addCase(findAllProducts.fulfilled, (state, action) => {
//             state.listProducts = [...action.payload];
//         });
//     },
// });

// export const productActions = {
//     ...productSlice.actions,
//     findAllProducts,
// };

// export default productSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    // Các reducers khác của cart
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
  },
  // Các extra reducers khác (nếu có)
});

export const { deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
