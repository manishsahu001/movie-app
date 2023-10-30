import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login'
import { ToastContainer} from 'react-toastify';
import Blog from './components/Blog'
import About from './components/About'

const getToken = localStorage.getItem('token')

const App = () => {
  return (
    <>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      {getToken ? <Route path='/home' element={<Home />} /> : null}
      {getToken ? <Route path='/about' element={<About />} /> : null}
      {getToken ? <Route path='/blog' element={<Blog />} /> : null}
    </Routes>
    <ToastContainer />
    {/* {getToken ? <Footer /> : "" } */}
  </BrowserRouter>
    
    </>
  )
}

export default App