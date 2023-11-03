import React from 'react'
import { useDispatch } from 'react-redux'
import { favActions } from '../../redux/slice/favorite';
import '../styles/favmovies.css'
import { toast } from 'react-toastify';
const FavMovies = ({ id, title, poster, type, quantity }) => {


  const notify  = (msg)=>{
    toast.success(msg)
  }
  const notify2  = (msg)=>{
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

        <div className="fav-movie-description">
          <h1>{title}</h1>
          <p>{id}</p>
          <p>{type}</p>
          <p>{quantity}</p>
        </div>

        <button onClick={addToFav}><span class="material-symbols-outlined">
          add
        </span></button>
        <button onClick={removeFromFav}>
        <span class="material-symbols-outlined">
remove
</span>
        </button>
      </div>

    </>
  )
}

export default FavMovies