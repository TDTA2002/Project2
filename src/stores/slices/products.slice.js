import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const findAllProducts = createAsyncThunk("findAllProducts", async () => {
  let res = await axios.get(process.env.REACT_APP_SERVER_JSON + "products");
  return res.data;
});

const fetchCartItems = createAsyncThunk("fetchCartItems", async () => {
  let res = await axios.get(process.env.REACT_APP_SERVER_JSON + "cartItems");
  return res.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    listProducts: [],
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.cart.push(product);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((product) => product.id !== productId);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findAllProducts.fulfilled, (state, action) => {
      state.listProducts = [...action.payload];
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.cart = [...action.payload];
    });
  },
});

export const productActions = {
  ...productSlice.actions,
  findAllProducts,
  fetchCartItems,
};

export default productSlice.reducer;
