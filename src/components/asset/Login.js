import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/login.css"
import {toast} from 'react-toastify'

const token = "sdjflserjlejrlewrijn446222gdjdj$33rfhsdfdfdsfde"


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

    const navigate = useNavigate();
    const login = (e)=>{
        e.preventDefault()
        if(email === isAuth.email && password === isAuth.password){
            const AuthKey = localStorage.setItem("token", token)
                notify("LoggedIn success")
                setIsLogin(true)
                navigate('/home')
            
        }else{
            errorNotify("Invalid Email or Password")
            setIsLogin(false)
            navigate('/login')
        }
    }
  return (
    <>
        <div className="form-container">

        <form onSubmit={login} className='form'>
            <div>
                <input type="email" name="email" id="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}  className='form-input' />
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} className='form-input'/>
            </div> 
                <button type='submit' className='btn-login'>Login</button>
        </form>
        </div>
    </>
  )
}

export default Login