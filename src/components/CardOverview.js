import React from 'react'
import './styles/cardOvervies.css'
import { useDispatch, useSelector } from 'react-redux'
import { favActions } from '../redux/slice/favorite'

const CardOverview = ({ movie }) => {

  const movieCount = useSelector(state=> state.favorite.quantity);
  const dispatch = useDispatch();
  const addToFav = () => {
    dispatch(favActions.addToFav({
      imdbID: movie.imdbID,
      Poster: movie.Poster,
      Title: movie.Title,
      Type: movie.Type,
    }))
  }

  
  return (
    <>
      <div className="movie-overview" >
        <div className="movie-poster">
          <img src={movie.Poster} alt="Movie Poster" className='movie-poster-img' />
        </div>

        <div className="movie-description">
          <h1>{movie.Title}</h1>
          <ul>
            <li>ID - {movie.imdbID} / </li>
            <li>Type - {movie.Type} </li>
          </ul>

          {/* <div className="movie-summary">
            <h5>Summary</h5>
            <p>{movie.Plot}</p>
          </div> */}

          <div className="author">
            <em>{movie.Actors}</em>
          </div>

          <div className="action-btn">
            <button className='btn'><span className="material-symbols-outlined play-fill">play_circle</span>Watch Trailer</button>

            <span className="material-symbols-outlined icon-style" title='Favorite' onClick={addToFav} >favorite</span>

            <span className="material-symbols-outlined icon-style" title='Bookmark'>bookmark</span>
            <span className="material-symbols-outlined icon-style" title='Share'>share</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardOverview