import React from 'react'
import '../styles/cardOvervies.css'
// import Card from './Card'
const SearchedResult = ({ id, title, type, year, poster }) => {
  return (
    <>
      <div className="movie-overview" >
        <div className="movie-poster">
          <img src={poster} alt="Movie Poster" className='movie-poster-img' />
        </div>

        <div className="movie-description">
          <h1>{title}</h1>
          <ul>
            <li>ID - {id} / </li>
            <li>Type - {type} </li>
            <li>Year - {year} </li>
          </ul>

          <div className="action-btn">
            <button className='btn'><span className="material-symbols-outlined play-fill">play_circle</span>Watch Trailer</button>
            <span className="material-symbols-outlined icon-style" title='Favorite'>favorite</span>
            <span className="material-symbols-outlined icon-style" title='Bookmark'>bookmark</span>
            <span className="material-symbols-outlined icon-style" title='Share'>share</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchedResult