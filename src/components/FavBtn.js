import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../redux/slice/ui-slice';
import './styles/FavBtn.css'
const FavBtn = () => {

  const dispatch = useDispatch();
  const totalMovies = useSelector(state => state.favorite.totalMovies)
  const toggleFavList = () => {
    dispatch(uiActions.toggle())
  }



  return (
    <>
      <button  onClick={toggleFavList} className='fav-btn'>
        <span className="material-symbols-outlined">
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