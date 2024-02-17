import {createSlice} from "@reduxjs/toolkit";
 const initialState=[];
  export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
      addtoCart(state,action){
          state.push(action.payload);
      },
      deleteCart(state,action){
         return state.filter(item=>item.id!==action.payload.id);
      }
    }
    
  });
   export const {addtoCart,deleteCart}=cartSlice.actions;
   