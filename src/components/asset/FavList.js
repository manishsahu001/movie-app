import React from 'react'
import {useSelector } from 'react-redux'
import '../styles/favList.css'
import FavMovies from '../asset/FavMovies'
import { Link } from 'react-router-dom'
const FavList = () => {

    const favMovies = useSelector(state=> state.favorite.movies)
    const count = useSelector(state=> state.favorite.totalMovies)
    const theme = useSelector(state => state.ui.dark)
  return (
    <div>

<div className='fav-list'>
        {
        count === 0 ? 
        <h2>
          No Favorite Movie Added Yet <Link to='/home'>Click Here</Link> To Add.
        </h2> :  
        favMovies.map((movie)=>{
            return  <FavMovies  id={movie.id} title={movie.title} type={movie.type} poster={movie.poster} quantity={movie.quantity} /> 
        })
        }
        </div>
    </div>
  )
}

export default FavList