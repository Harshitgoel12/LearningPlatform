import {createSlice} from "@reduxjs/toolkit";
const initialState={
    cartDetail: JSON.parse(localStorage.getItem("Cart"))!=null?JSON.parse(localStorage.getItem("Cart")):null
}

const cartslice= createSlice({
    name:"Cart",
    initialState,
    reducers :{
        Cart : (state,action)=>{
            state.cartDetail=action.payload
        }
    }
})

export const {Cart} = cartslice.actions; 
export default cartslice.reducer;
