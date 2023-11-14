import React from 'react'
import '../styles/card.css'
import { useDispatch } from 'react-redux'
import { favActions } from '../../redux/slice/favorite'
const Card = ({Poster, movie, onClick}) => {


  const dispatch = useDispatch()
  const addToFav = ()=>{
    dispatch(favActions.addToFav({
      imdbID: movie.imdbID,
      Poster: movie.Poster,
      Title: movie.Title,
      Type: movie.Type
    }))
  } 

  return (
    <>
      <div className="card" onClick={()=>{onClick(movie)}}>
        <div className="poster">
          <img src={movie.Poster} alt="Movie-Poster" />

          <div className="card-content">
            <h1>{movie.Title}</h1>
            <ul>
              <li>IMDBID - {movie.imdbID}</li>
              <li>Type - {movie.imdbID}</li>
            </ul>
            
            <div className="buttons">
              <span className="material-symbols-outlined card-btn" onClick={addToFav} >favorite</span>
              <span className="material-symbols-outlined card-btn">play_circle</span>
              <span className="material-symbols-outlined card-btn">bookmark</span>
              <span className="material-symbols-outlined card-btn">share</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card