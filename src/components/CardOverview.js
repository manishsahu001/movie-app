import React from 'react'
import './styles/cardOvervies.css'
import { useDispatch, useSelector } from 'react-redux'
import { favActions } from '../redux/slice/favorite'
import {toast} from 'react-toastify'
const CardOverview = ({ movie }) => {

  const notify  = (msg)=>{
    toast.success(msg)
  }

  const dispatch = useDispatch();
  const addToFav = () => {
    dispatch(favActions.addToFav({
      imdbID: movie.imdbID,
      Poster: movie.Poster,
      Title: movie.Title,
      Type: movie.Type,
    }))

    notify("Added to fav")
  }

  const theme = useSelector(state => state.ui.dark);
  return (
    <>
      <div className="movie-overview" id={theme ? "" : "movie-overview-light"} >
        <div className="movie-poster">
          <img src={movie.Poster} alt="Movie Poster" className='movie-poster-img' />
        </div>

        <div className="movie-description" id={theme ? "" : "movie-description-light"}>
          <h1>{movie.Title}</h1>
          <ul>
            <li>ID - {movie.imdbID} / </li>
            <li>Type - {movie.Type} </li>
          </ul>


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