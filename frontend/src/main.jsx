import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx';
import Home from './HomePage/Home.jsx';
import Signup from './Authentication/signup.jsx'
import Aboutus from './HomePage/Aboutus.jsx'
import Login from './Authentication/Login.jsx'
import VerifyOtp from './Authentication/VerifyOtp.jsx'
import ContectUs from './HomePage/ContectUs.jsx'
import store from "./store.js";
import {Provider} from "react-redux"
import Myprofile from './Profile/Myprofile.jsx'
import Dashboard from './Profile/Dashboard.jsx'
import Settings from './Profile/Settings.jsx'
import AddCourseFirstPage from './Add-course/AddCourseFirstPage.jsx'
import AddVideoLecture from './Add-course/AddVideoLecture.jsx'
import AddCourseFirstPageForm from './Add-course/AddCourseFirstPageForm.jsx'
import ConfirmationPage from './Add-course/ConfirmationPage.jsx'
import Mycourses from './Courses/myCourses.jsx'
import ShowCourse from './Show_Courses_And_Apply/ShowCourse.jsx'

const AppRouter= createBrowserRouter([
  {

  path:"/",
  element:<App/>,
  children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:"signup",
      element:<Signup/>
    },
    {
      path:"AboutUs",
      element:<Aboutus/>
    },
{
  path:"login",
  element:<Login/>
},
{
  path:"verify-otp",
  element:<VerifyOtp/>
},
{
  path:"contactUs",
  element : <ContectUs/>
},
{
path:"dashboard",
element: <Dashboard/>,
children:[
  {
    path:"my-profile",
    element:<Myprofile/>
  },
  {
    path:"settings",
    element:<Settings/>
  },
  {
    path:"course",
    element:<AddCourseFirstPage/>,
    children:[
     {
      path:"add-course",
      element:<AddCourseFirstPageForm/>
     },
     {
      path:"Confirmation",
      element:<ConfirmationPage/>
     },
    
  {
    path:"create-section",
    element:<AddVideoLecture/>
  }
    
  ]
  },
  {
    path:"my-courses",
    element:<Mycourses/>
  }
]
},

{
  path:"courses/:coursename",
  element:<ShowCourse/>
}


  ]



}
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={AppRouter}>
   
  <StrictMode>
    <App />
  </StrictMode>

  </RouterProvider>
  </Provider>
)
