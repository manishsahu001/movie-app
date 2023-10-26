import React from 'react'
import './styles/cardOvervies.css'
const CardOverview = ({movie}) => {
  return (
    <>
        <div className="movie-overview">
            <div className="movie-poster">
        <img src={movie.Images[0]} alt="Movie Poster" className='movie-poster-img' />
            </div>

            <div className="movie-description">
        <h1>{movie.Title}</h1>
        <h1>{movie.Actors}</h1>

            </div>
        </div>   
    </>
  )
}

export default CardOverview