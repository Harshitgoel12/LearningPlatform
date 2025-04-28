import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './HomePage/Header'
import Footer from './HomePage/Footer'

function App() {

  return (
    <div className='min-h-screen bg-gray-100 relative'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
