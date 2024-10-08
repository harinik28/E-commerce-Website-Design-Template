import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/productSlice";

export default configureStore({
    reducer:{
        product:productReducer
    }
})