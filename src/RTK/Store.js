import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./Slices/cartSlice";
import  recipesReducer  from "./Slices/recipes";

export const store = configureStore({
    reducer:
    {
         Cart:cartslice,
         recipes:recipesReducer
    

    }
   
})
