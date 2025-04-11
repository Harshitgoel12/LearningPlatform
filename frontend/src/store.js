import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authslice"
import profilecontent from "./slices/Profileslice"

const store =configureStore({
    reducer:{
     auth: authReducer,
     Profile:profilecontent,
    }
})

export default store;