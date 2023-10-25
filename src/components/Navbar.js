import React, { useEffect, useState } from 'react'
// import '../App.css'
import './styles/navbar.css';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
const Navbar = () => {
    const [btnclass, setBtnclass] = useState(false)
    const addNewClass = () => {
        setBtnclass(btnclass => !btnclass);
    }
    const toggleClass = btnclass ? "active" : "";

    const [isAuth, setIsAuth] = useState(false);

    const logout_notify = (msg) => {
        toast.success(msg, {
            position: "bottom-right",
            theme: "dark"
        })
    }
    const navigate = useNavigate()
    useEffect(() => {
        const login = () => {
            const token = localStorage.getItem('token');
            if (token) {
                setIsAuth(true);
            }
        }
        login()
    }, [navigate])


    const logout = () => {
        localStorage.removeItem('token')
        setIsAuth(false);
        navigate('/')
        logout_notify("Logged Out!")
        Cookies.remove('login')
    }


    return (
        <>
            <div className="header">
                <div className="logo">
                    <h1>ZedFlix</h1>
                    <button id='btn-nav' onClick={addNewClass}>
                        <span className={`material-symbols-outlined`}>
                            menu
                        </span>
                    </button>
                </div>

                <nav className={` ${toggleClass}`}>
                    <ul className='navbar'>
                        {isAuth ? <li><Link to="/home" className={` nav-link link `}>HOME</Link></li> : ""}

                        {isAuth ? <li><Link to="/about" className={` nav-link link `}>ABOUT</Link></li> : ""}
                        {isAuth ? <li><Link to="/blog" className={`nav-link link `}>BLOG</Link></li> : ""}
                        {isAuth ? <li><input type="search" name="search" id="search" placeholder={'Search...'} className={` ${toggleClass} nav-link link `} /></li> : ""}

                        {isAuth ? <li><span className="material-symbols-outlined">
                            search
                        </span></li> : ""}


                        {!isAuth ? <li><Link to="/login" className={` ${toggleClass} nav-link link `}>LOGIN</Link></li> : ""}
                        {isAuth ? <button onClick={logout} className='btn-logout'>Logout</button> : ""}

                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar