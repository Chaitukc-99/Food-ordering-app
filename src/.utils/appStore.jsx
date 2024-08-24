import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './cartSlice';
import resInfoSliceReducer from "./resInfoSlice";
import filterResSliceReducer from "./filterResSlice";

const appStore = configureStore({
    reducer: {
        cart: cartSliceReducer,
        resInfo: resInfoSliceReducer,
        filterRes: filterResSliceReducer
    }
});


export default appStore;