import React from 'react'

const Card = ({movie, onClick}) => {
  return (
    <>
      <div className="card" onClick={()=>{onClick(movie)}}>
        <div className="poster">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="content">
          <h1>{movie.Title}</h1>
          <p>{movie.Actors}</p>
          <p>{movie.Year}</p>
          <p>{movie.Rated}</p>
          <p>{movie.Language}</p>
        </div>
      </div>
    </>
  )
}

export default Card