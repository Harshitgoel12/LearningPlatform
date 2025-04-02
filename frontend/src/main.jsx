import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx';
import Home from './HomePage/Home.jsx';

const AppRouter= createBrowserRouter([
  {

  path:"/",
  element:<App/>,
  children:[
    {
      index:true,
      element:<Home/>
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
