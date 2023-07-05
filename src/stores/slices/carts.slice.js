import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const fetchCartItems = createAsyncThunk("fetchCartItems", async () => {
  let res = await axios.get(process.env.REACT_APP_SERVER_JSON + "cartItems");
  return res.data;
});
  

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
  },
  extraReducers: {
    [fetchCartItems.pending]: (state) => {
      state.loading = true;
    },
    [fetchCartItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchCartItems.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
