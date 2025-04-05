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
}
  ]
}
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouter}>
  <StrictMode>
    <App />
  </StrictMode>
  </RouterProvider>
)
