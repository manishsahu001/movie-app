import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/favList.css'
import FavMovies from '../asset/FavMovies'
const FavList = () => {

    const favMovies = useSelector(state=> state.favorite.movies)
    const count = useSelector(state=> state.favorite.totalMovies)
    const theme = useSelector(state => state.ui.dark)
  return (
    <div>

{/* imdbID, poster, title, type, quantity */}
<div className='fav-list' id={theme ? "" : "fav-list-light"}>
        {count === 0 ? 
        <h2>
          No Favorite Movie Added Yet <Link to='/home'>Click Here</Link> To Add.
        </h2> :  
        favMovies.map((movie)=>{
            return  <FavMovies  id={movie.id} title={movie.title} type={movie.type} poster={movie.poster} quantity={movie.quantity} /> 
        })}
        </div>
    </div>
  )
}

export default FavList