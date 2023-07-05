import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import productReducer from "./slices/products.slice";
import userLoginReducer from './slices/userLogin.slice';
import cartReducer from './slices/carts.slice';

const store = configureStore({
    reducer: {
        productStore: productReducer,
        userLoginStore: userLoginReducer,
        cart: cartReducer,
    },
    middleware: [thunk],
});

export default store;
