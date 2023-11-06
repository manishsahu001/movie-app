import React from 'react'
import Navbar from './components/pages/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Footer from './components/Footer'
import LandingPage from './components/asset/LandingPage'
import Home from './components/pages/Home'
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/asset/Login'
import { ToastContainer} from 'react-toastify';
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import FavList from './components/asset/FavList';


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
      {getToken ? <Route path='/favlist' element={<FavList />} /> : null}
    </Routes>
    
    <ToastContainer 
      position="bottom-right"
      autoClose={1000}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="dark"
    />

  </BrowserRouter>
    </>
  )
}

export default App