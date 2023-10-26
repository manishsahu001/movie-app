import React, { useEffect, useState } from 'react'
// import '../App.css'
import './styles/navbar.css';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';

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
    }
    const clickLogo = ()=>{
        navigate('/')
    }

    return (
        <>
            <div className="header">
                <div className="logo">
                    <h1 onClick={clickLogo}>
                       <span>Z</span>edFlix
                    </h1>
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
                        {/* {isAuth ? <li><input type="search" name="search" id="search" placeholder={'Search...'} className={` ${toggleClass} nav-link link `} /></li> : ""} */}

                        {isAuth ? <span className="material-symbols-outlined">
                            search
                        </span> : ""}


                        {!isAuth ? <li><Link to="/login" className={` ${toggleClass} nav-link link `}>
                            <span className="material-symbols-outlined">
                                login
                            </span></Link></li> : ""}
                            {isAuth ?
                            <span className="material-symbols-outlined btn-logout" onClick={logout}>
                                dark_mode
                            </span>
                         : ""}  
                        {isAuth ?
                            <span className="material-symbols-outlined btn-logout" onClick={logout}>
                                logout
                            </span>
                         : ""}

                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar