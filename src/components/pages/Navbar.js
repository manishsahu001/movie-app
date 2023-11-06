import React, { useEffect, useState } from 'react'
// import '../App.css'
import '../styles/navbar.css';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import loadingGif from '../../img/loading.gif';
import SearchedResult from '../asset/SearchedResult';
import FavBtn from '../asset/FavBtn';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../redux/slice/ui-slice'
// import Card from '../asset/Card';
const Navbar = () => {

    const dispatch = useDispatch()

    // Add styles for the navbar responsive.
    const btnClass = useSelector(state => state.ui.btnClass)
    const addNewClass = () => {
        dispatch(uiActions.setBtnClass())
    }
    const toggleClass = btnClass ? "active" : "";


    const [isAuth, setIsAuth] = useState(false);
    const [dark, setDark] = useState(true)

    // Toggle Search Input field
    const inputClass = useSelector(state => state.ui.InputClass)
    const addInputClass = () => {
        dispatch(uiActions.setInputClass());
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
        const response = await fetch(`https://www.omdbapi.com/?apikey=6095e741&s=${movie}`);
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



    // Theme Changing
    const theme = useSelector(state => state.ui.dark)
    const toggleTheme = () => {
        dispatch(uiActions.toggleTheme())
    }
    return (
        <>
            <div className={"header"} id={theme ? "" : "navbar-light"}>
                <div className="logo">
                    <h1 onClick={() => { navigate('/') }}>
                        <span>Z</span>edFlix
                    </h1>
                    <button id={`btn-nav`} onClick={addNewClass}>
                        <span className={`material-symbols-outlined`} id={theme ? "" : "nav-toggler"}>
                            {toggleClass ? "close" : "menu"}
                        </span>
                    </button>
                </div>

                <nav className={` ${toggleClass}`}>
                    <ul className='navbar'>
                        {isAuth ?
                            <li title='Home' onClick={addNewClass}>
                                <Link to="/home" className={` nav-link link `}>
                                    <span className="material-symbols-outlined btn" id={theme ? "" : "btn-light"}>home</span>
                                </Link>
                            </li> : ""}

                        {isAuth ?
                            <li title='About' onClick={addNewClass}>
                                <Link to="/about" className={` nav-link link `}>
                                    <span className="material-symbols-outlined btn" id={theme ? "" : "btn-light"}>info</span>
                                </Link>
                            </li> : ""}

                        {isAuth ?
                            <li title='Blog' onClick={addNewClass}  ><Link to="/blog" className={`nav-link link `}>
                                <span className="material-symbols-outlined btn" id={theme ? "" : "btn-light"}>sticky_note_2</span>
                            </Link>
                            </li> : ""}


                        {!isAuth ? <li title='Login' onClick={addNewClass}>
                            <Link to='/login'>
                                <span className="material-symbols-outlined btn">login</span>
                            </Link>
                        </li> :
                            ""}
                        {isAuth ? <div className='search-container'>
                            <li>
                                <span className="material-symbols-outlined btn" id={theme ? "" : "btn-light"} onClick={addInputClass}>
                                    search
                                </span>
                            </li>
                            <input type="search" className={`${toggleInputClass}`} name="search" id="search" placeholder='Search...' onChange={handleSearch} />
                        </div> : ""}

                        {isAuth ?
                            <li>
                                <span className="material-symbols-outlined btn" id={theme ? "" : "btn-light"} onClick={toggleTheme} >
                                    {theme ? "light_mode" : "dark_mode"}
                                </span>
                            </li>
                            : ""}
                        {isAuth ?
                            <li>
                                <Link to="/favlist">
                                    <div className='btn'>
                                        <FavBtn />
                                    </div>
                                </Link>
                            </li>
                            : ""}

                        {isAuth ?
                            <li>
                                <span className="material-symbols-outlined btn" id={theme ? "" : "btn-light"} onClick={logout}>
                                    logout
                                </span>
                            </li>
                            : ""}

                    </ul>
                </nav>
            </div>

            {/* {loading ? <img src={loadingGif} alt="Loading...." /> : getMovie.map((movie) => {
                return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.2rem" }}> <SearchedResult key={movie.imdbID} movie={movie} /> </div>
            })} */}

            {loading ? <img src={loadingGif} alt="Loading...." /> : getMovie.map((movie) => {
                return <SearchedResult key={movie.imdbID} movie={movie}  />
            })}
        </>
    )
}

export default Navbar