import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authslice"
import profilecontent from "./slices/Profileslice"
import  CourseCreation from "./slices/CourseSlice"
import Cart from "./slices/Cartslice"
const store =configureStore({
    reducer:{
     auth: authReducer,
     Profile:profilecontent,
     Course:CourseCreation,
     Cart:Cart
    }
})

export default store;