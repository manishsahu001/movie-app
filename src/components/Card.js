import React from 'react'
import './styles/card.css'
const Card = ({movie, onClick}) => {
  return (
    <>
      <div className="card" onClick={()=>{onClick(movie)}}>
        <div className="poster">
          <img src={movie.Images[0]} alt="" />
        </div>
        <div className="content">
          {/* <h1>{movie.Title}</h1> */}
        </div>
      </div>
    </>
  )
}

export default Card