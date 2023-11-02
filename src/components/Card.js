import React from 'react'
import './styles/card.css'
const Card = ({movie, onClick}) => {
  return (
    <>
      <div className="card" onClick={()=>{onClick(movie)}}>

        <div className="poster">
          <img src={movie.Poster} alt="" />
        </div>
          {/* <div className="card-content">
          </div> */}
      </div>
    </>
  )
}

export default Card