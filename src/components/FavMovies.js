import React from 'react'
import { useDispatch } from 'react-redux'
import { favActions } from '../redux/slice/favorite';
import './styles/favmovies.css'
const FavMovies = ({id, title, poster, type, quantity}) => {


    const dispatch = useDispatch();
    
    const addToFav = () => {
        dispatch(favActions.addToFav({
          imdbID: id,
          Poster: poster,
          Title: title,
          Type: type,
        }))
      }

    const removeFromFav = ()=>{
        dispatch(favActions.removeFromFav(id))
    }
    

  return (
    <>
        <div className="fav-movie-container">
        <div className="fav-movie-card">
            <div className="fav-movie-poster">
                    <img src={poster} alt="Movie Poster" />
            </div>

            <div className="fav-movie-description">
                <h1>{title}</h1>
                <p>{id}</p>
                <p>{type}</p>
                <p>{quantity}</p>
            </div>

            <button onClick={addToFav}>+</button>
            <button onClick={removeFromFav}>-</button>
        </div>
        </div>
    </>
  )
}

export default FavMovies