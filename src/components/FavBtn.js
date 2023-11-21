import React from 'react'
import { useSelector } from 'react-redux'
import './styles/FavBtn.css'
const FavBtn = () => {

  const totalMovies = useSelector(state => state.favorite.totalMovies)
  const theme = useSelector(state => state.ui.dark)
  return (
    <>
      <button  className='fav-btn'>
        <span className="material-symbols-outlined" id={theme ? "" : "fav-btn-light"}>
          favorite
        </span>

       {totalMovies === 0 ? "" : <div className="fav-movie-count">
          <span >{totalMovies === 0 ? "" : totalMovies}</span>
        </div>} 


      </button>
    </>
  )
}

export default FavBtn