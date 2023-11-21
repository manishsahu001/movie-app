import React from 'react'
import { useDispatch } from 'react-redux'
import { favActions } from '../redux/slice/favorite';
import './styles/favmovies.css'
import { toast } from 'react-toastify';
const FavMovies = ({ id, title, poster, type, quantity }) => {


  const notify = (msg) => {
    toast.success(msg)
  }
  const dispatch = useDispatch();

  const removeFromFav = () => {
    dispatch(favActions.removeFromFav(id))
    notify("Removed From Fav")
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
          <p>Added Fav - {quantity}</p>
          </div>

          
        <div className="fav-action-btn">
          <span className="material-symbols-outlined">stars</span>
          {/* <button className='btn-remove' >-</button> */}
          <span className="material-symbols-outlined" onClick={removeFromFav}>delete</span>
        </div>
        </div>

      </div>

    </>
  )
}

export default FavMovies