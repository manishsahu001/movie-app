import React, { useEffect, useState } from 'react'
// import '../App.css'
import './styles/navbar.css';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import loadingGif from '../img/loading.gif';
import SearchedResult from './SearchedResult';
const Navbar = () => {
    const [btnclass, setBtnclass] = useState(false)
    const [inputClass, setInputClass] = useState(false)
    const [isAuth, setIsAuth] = useState(false);
    const [dark, setDark] = useState(true)

    const addNewClass = () => {
        setBtnclass(btnclass => !btnclass);
    }
    const toggleClass = btnclass ? "active" : "";

    const addInputClass = () => {
        setInputClass(inputClass => !inputClass);
        console.log(inputClass)
    }

    const toggleInputClass = inputClass ? "expand" : "search-input";

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

    // Logout Action
    const logout = () => {
        localStorage.removeItem('token')
        setIsAuth(false);
        navigate('/')
        logout_notify("Logged Out!")
    }

    // Search Movie 
    // const [searchMovie, setSearchMovie] = useState('');
    // const [getMovie, setGetMovie] = useState([]);
    // const [loading, setLoading] = useState(false);


    // const handleSearch = (e)=>{
    //     const movie = e.target.value;
    //     setSearchMovie(movie);
    //     if(loading){
    //         return <h1>Loading....</h1>
    //     }
    //     if(movie.trim() === ''){
    //         setGetMovie([])
    //     }else{

    //         const movieResults = Data.filter((item)=>{
    //             return item.Title.toLowerCase().includes(movie.toLowerCase());
    //         })
    //         setGetMovie(movieResults)
    //     }
    // }


    // Theme Changing
    const toggleTheme = dark ? "light_mode" : "dark_mode";
    const changeTheme = ()=>{
        if(dark === true){
            setDark(false)
        }else{
            setDark(true)
        }
    }
    const [searchMovie, setSearchMovie] = useState('');
    const [getMovie, setGetMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        const movie = e.target.value;

        // If the search is empty then don't show anything.
        if (movie.trim() === '') {
            setGetMovie([]);
            return;
        }

        // Loading while fetching the data.
        setLoading(true);
        
        // Fetching data from the api
        const response = await fetch(`http://www.omdbapi.com/?apikey=6095e741&s=${movie}`);
        const data = await response.json();

        // After getting the data from api set in the state.
        setSearchMovie(data);

        // Filtering the movie by the movie title.
        if (data.Search) {
            const movieResults = data.Search.filter((item) =>
                item.Title.toLowerCase().includes(movie.toLowerCase())
            );
            setGetMovie(movieResults);
        } else {
            setGetMovie([]);
        }

        // Set loading back to false after fetching and filtering
        setLoading(false);
    };


    return (
        <>
            <div className="header">
                <div className="logo">
                    <h1 onClick={()=>{navigate('/')}}>
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


                        {!isAuth ? <li>
                            <Link to="/login" className={` ${toggleClass} nav-link link `}>
                                <span className="material-symbols-outlined">
                                    login
                                </span>
                            </Link>
                        </li> : ""}

                        {isAuth ? <div className='search-container'>
                            <span className="material-symbols-outlined btn" onClick={addInputClass}>
                                search
                            </span>
                            <input type="search" className={`${toggleInputClass}`} name="search" id="search" placeholder='Search...' onChange={handleSearch} />
                        </div> : ""}

                        {isAuth ?
                            <span className="material-symbols-outlined btn" onClick={changeTheme} >
                                {toggleTheme}
                            </span>
                            : ""}
                        {/* {isAuth ?
                            <div>
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                            </div>
                            : ""} */}

                        {isAuth ?
                            <span className="material-symbols-outlined btn" onClick={logout}>
                                logout
                            </span>
                            : ""}

                    </ul>
                </nav>
            </div>

            {loading ? <img src={loadingGif} alt="Loading...." /> : getMovie.map((item) => {
                return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.2rem" }}> <SearchedResult key={item.imdbID} title={item.Title} year={item.Year} type={item.Type} imbdId={item.imbdId} poster={item.Poster} /> </div>
            })}
        </>
    )
}

export default Navbar