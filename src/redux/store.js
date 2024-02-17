import {configureStore} from "@reduxjs/toolkit";
import {cartSlice}from "./createSlice";
 export const store=configureStore({
    reducer:{
      cart:cartSlice.reducer,
    },
    devTools:true
 })