import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
    loading:false,

}

const ProfileSlice= createSlice({
    name:"profile",
    initialState,
    reducers:{
        userData:(state,action)=>{
            state.user=action.payload
        },
        setLoading:(state,action)=>{
            state.loading=action.payload
        }
    }
})

export const {userData,setLoading}=ProfileSlice.actions;
export default ProfileSlice.reducer;