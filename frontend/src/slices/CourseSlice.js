import { createSlice } from "@reduxjs/toolkit";
import reducer from "./authslice";

const initialState={
    Loading:false,
     course:null,
     sectons:null,
}

const CourseSlice= createSlice({
    name:"course",
    initialState,
    reducers:{
          addCourseDetails : (state,action)=>{
           state.course=action.payload
        },
        allSection: (state,action)=>{
            state.allSection=action.payload
        },
      setLoading : (state,action)=>{
        state.Loading=action.payload
      }
    }

})

export const {addCourseDetails,allSection,setLoading}=CourseSlice.actions
export default CourseSlice.reducer;