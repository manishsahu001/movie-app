import React from 'react'
import './styles/cardOvervies.css'
const CardOverview = ({ movie }) => {


  return (
    <>
      <div className="movie-overview" >
        <div className="movie-poster">
          <img src={movie.Images[0]} alt="Movie Poster" className='movie-poster-img' />
        </div>

        <div className="movie-description">
          <h1>{movie.Title}</h1>
          <ul>
            <li>{movie.Rated} / </li>
            <li>{movie.Runtime} / </li>
            <li>{movie.Genre}</li>
          </ul>

          <div className="movie-summary">
            <h5>Summary</h5>
            <p>{movie.Plot}</p>
          </div>

          <div className="author">
            <em>{movie.Actors}</em>
          </div>

          <div className="action-btn">
            <button className='btn'><span class="material-symbols-outlined play-fill">play_circle</span>Watch Trailer</button>
            <span className="material-symbols-outlined icon-style" title='Favorite'>favorite</span>
            <span className="material-symbols-outlined icon-style" title='Bookmark'>bookmark</span>
            <span className="material-symbols-outlined icon-style" title='Share'>share</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardOverview