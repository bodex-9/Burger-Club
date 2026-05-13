import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cartItems");
const initialState = savedCart ? JSON.parse(savedCart) : [];
export const cartslice = createSlice({
    initialState,
    name:'cart',
    reducers:{
        addCart:(state, action) =>
        {
          const finditem = state.find((item) => String(item.id) === String(action.payload.id));
          
          if(finditem)
          {
            finditem.quantity +=1;
          }
          else{
            const productclone ={...action.payload,quantity:1};
            state.push(productclone);

          }
          localStorage.setItem('cartItems',JSON.stringify(state));
        },
        deleteCart:(state, action) =>
        {
            const newState = state.filter((product) => product.id !== (action.payload.id));
            localStorage.setItem('cartItems',JSON.stringify(newState));
            return newState;
        },
        Clear:(state,action) =>
        {
          localStorage.removeItem('cartItems');
            return [];
        },
        increment:(state,action) =>
        {
           const finditem = state.find((item) => item.id == (action.payload.id));
           if(finditem)
           {
            finditem.quantity += 1
           }
           localStorage.setItem('cartItems',JSON.stringify(state));
        },
        decrement:(state,action)=>
        {
            const finditem = state.find((item) => item.id == (action.payload.id));
           if(finditem && finditem.quantity > 1) 
           {
            finditem.quantity -= 1;
           }
           
           
           else{
          const newState =   state.filter((item) => item.id !== (action.payload.id));
          localStorage.setItem('cartItems',JSON.stringify(newState));
          return newState;
           }
           

        }
        
    }

});
export const {addCart,deleteCart,Clear,increment,decrement} =cartslice.actions;
export default cartslice.reducer;