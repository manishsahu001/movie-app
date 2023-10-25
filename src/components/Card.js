import React from 'react'
import feature1 from '../img/feature-4.jpg'
const Card = () => {
  return (
    <>
            <div className="card">
                <div className="card-img">
                    <img src={feature1} alt="" style={{width: "250px"}} />
                </div>

                <div className="card-description">
                    <h1>Description</h1>
                </div>
            </div>
    </>
  )
}

export default Card