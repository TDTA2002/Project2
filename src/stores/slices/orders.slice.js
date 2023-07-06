import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const submitOrder = createAsyncThunk(
    "orders/submitOrder",
    async (orderData) => {
        try {
            const response = await axios.post("/api/orders", orderData);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

const initialState = {
    loggedIn: false,
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        },
        logout: (state) => {
            state.loggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(submitOrder.pending, (state) => {
        });
        builder.addCase(submitOrder.fulfilled, (state) => {
            state.isOrderSubmitted = true;
        });
        builder.addCase(submitOrder.rejected, (state, action) => {
            console.log("Order submission failed:", action.error.message);
        });
    },

},
);

export default ordersSlice.reducer;
