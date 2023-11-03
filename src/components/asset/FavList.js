import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/favList.css'
import FavMovies from '../asset/FavMovies'
const FavList = () => {

    const favMovies = useSelector(state=> state.favorite.movies)
    const count = useSelector(state=> state.favorite.totalMovies)
  return (
    <div>

{/* imdbID, poster, title, type, quantity */}
<div className='fav-list'>
        {count === 0 ? <h1>No Movie added yet</h1> :  favMovies.map((movie)=>{
            return  <FavMovies  id={movie.id} title={movie.title} type={movie.type} poster={movie.poster} quantity={movie.quantity} /> 
        })}
        </div>
    </div>
  )
}

export default FavList