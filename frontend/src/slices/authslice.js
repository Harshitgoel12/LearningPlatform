import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null,
    data:{},
    loading:false,
 }

 const slice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setToken:(state,action)=>{
            state.token=action.payload
        },
    SignupData:(state,action)=>{
        state.data=action.payload
    },
    setLoading:(state,action)=>{
        state.loading=action.payload
    }

    }
 })

 export const {setToken,SignupData,setLoading}=slice.actions
 export default slice.reducer; 