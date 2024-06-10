import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './cartSlice';
import resInfoSliceReducer from "./resInfoSlice";

const appStore = configureStore({
    reducer: {
        cart: cartSliceReducer,
        resInfo: resInfoSliceReducer
    }
});


export default appStore;