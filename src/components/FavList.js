import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { favActions } from '../redux/slice/favorite'
import './styles/favList.css'
import FavMovies from './FavMovies'
const FavList = () => {

    const favMovies = useSelector(state=> state.favorite.movies)
    // const count = useSelector(state=> state.favorite.quantity)
    
    const dispatch = useDispatch()
  return (
    <div>

{/* imdbID, poster, title, type, quantity */}
<div className='fav-list'>
        {favMovies.map((movie)=>{
            return  <FavMovies  id={movie.id} title={movie.title} type={movie.type} poster={movie.poster} quantity={movie.quantity} /> 

        })}
        </div>
    </div>
  )
}

export default FavList