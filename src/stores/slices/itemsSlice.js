// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchItems } from './api';

// const initialState = {
//     items: [],
//     loading: false,
//     error: null,
// };

// export const fetchItemsAsync = createAsyncThunk(
//     'items/fetchItems',
//     async () => {
//         return await fetchItems();
//     }
// );

// const itemsSlice = createSlice({
//     name: 'items',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchItemsAsync.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchItemsAsync.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.items = action.payload;
//             })
//             .addCase(fetchItemsAsync.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             });
//     },
// });

// export const selectItems = (state) => state.items.items;
// export const selectLoading = (state) => state.items.loading;
// export const selectError = (state) => state.items.error;

// export default itemsSlice.reducer;
