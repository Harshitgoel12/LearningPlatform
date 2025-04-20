import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authslice"
import profilecontent from "./slices/Profileslice"
import  CourseCreation from "./slices/CourseSlice"

const store =configureStore({
    reducer:{
     auth: authReducer,
     Profile:profilecontent,
     Course:CourseCreation,
    }
})

export default store;