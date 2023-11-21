import React from "react";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import Blog from "./pages/Blog";
import About from "./pages/About";
import FavList from "./components/FavList";
import ProtectedRoute from "./pages/ProtectedRoute";
import ErrorPage from "./components/ErrorPage";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />  
          
          <Route path="*" element={<ErrorPage />} />

          <Route
            path="/home"
            element={<ProtectedRoute Component={Home}/>}
          />
          <Route
            path="/about"
            element={<ProtectedRoute Component={About}/>}
          />
          <Route
            path="/blog"
            element={<ProtectedRoute Component={Blog}/>}
          />
          <Route
            path="/favlist"
            element={<ProtectedRoute Component={FavList}/>}
          />
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
  );
};

export default App;
