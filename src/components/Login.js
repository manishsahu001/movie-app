import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import "./styles/login.css"
import {toast} from 'react-toastify'
import Cookies from 'js-cookie';

// const token = "sdjflserjlejrlewrijn446222gdjdj$33rfhsdccvgfgfdgregrrerfdfdfdfdsfde"


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isAuth, setIsAuth] = useState({email: "admin@admin.com", password: "admin123"})
    const [isLogin, setIsLogin] = useState(false);
    const notify = (msg)=>{
        toast.success(msg, {
            theme: "dark",
            position: "bottom-right"
        })
    }
    const errorNotify = (msg)=>{
        toast.error(msg, {
            theme: "dark",
            position: "bottom-right"
        })
    }

    const location = useLocation()
    const navigate = useNavigate();
    const login = async (e)=>{
        e.preventDefault()
        if(email === isAuth.email && password === isAuth.password){
                // localStorage.setItem("token", token)
                const token =  Cookies.set('login', email, { expires: 1})
                setIsLogin(true)
                if(token){
                    navigate('/home')
                }
                notify("LoggedIn success")
                console.log(location.pathname)
            
        }else{
            setIsLogin(false)
            errorNotify("Invalid Email or Password")
        }
    }
  return (
    <>
        <div className="form-container">

        <form  className='form'>
            <div>
                <input type="email" name="email" id="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}  className='form-input' />
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} className='form-input'/>
            </div> 
                <button type='submit' className='btn-login' onClick={login}>Login</button>
        </form>
        </div>
    </>
  )
}

export default Login