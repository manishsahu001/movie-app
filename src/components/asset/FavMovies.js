import React from 'react'
import { useDispatch } from 'react-redux'
import { favActions } from '../../redux/slice/favorite';
import '../styles/favmovies.css'
import { toast } from 'react-toastify';
const FavMovies = ({ id, title, poster, type, quantity }) => {


  const notify = (msg) => {
    toast.success(msg)
  }
  const notify2 = (msg) => {
    toast.success(msg)
  }
  const dispatch = useDispatch();

  const addToFav = () => {
    dispatch(favActions.addToFav({
      imdbID: id,
      Poster: poster,
      Title: title,
      Type: type,
    }))
    notify("Added again")
  }

  const removeFromFav = () => {
    dispatch(favActions.removeFromFav(id))
    notify2("Removed From Fav")
  }


  return (
    <>

      <div className="fav-movie-card">
        <div className="fav-movie-poster">
          <img src={poster} alt="Movie Poster" />
        </div>
          <h1>Title - {title}</h1>

        <div className="fav-movie-description">
          <div className="fav-movie-details">
          <p>imdbID - {id}</p>
          <p>Type - {type}</p>
          <p>Quantity - {quantity}</p>
          </div>

          
        <div className="fav-action-btn">
          <button className='btn-remove' onClick={removeFromFav}>-</button>
          <button className='btn-add' onClick={addToFav}>+</button>
        </div>
        </div>

      </div>

    </>
  )
}

export default FavMovies