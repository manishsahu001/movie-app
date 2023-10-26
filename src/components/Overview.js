import React, { useState } from 'react'
import Data from '../Data.json'
import Card from './Card';
import CardOverview from './CardOverview';
import staticImage from '../img/static.jpg'
import './styles/overview.css';
const Overview = () => {

  const [selectedMovie, setSelectedMovie] = useState({
    Images: [staticImage]
  });
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
  }


  return (
    <>

      <div className="overview">

        <div className='show-card'>
          {Data.map((movie) => {
            return <Card key={movie.Poster} movie={movie} onClick={handleMovieClick} />
          })}
        </div>

        <div className="preview-card">
          {selectedMovie && <CardOverview movie={selectedMovie} />}
        </div>

      </div>
    </>
  )
}

export default Overview