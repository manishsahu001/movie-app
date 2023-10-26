import React, { useState } from 'react'
import Data from '../Data.json'
import Card from './Card';
import CardOverview from './CardOverview';
import staticImage from '../img/static.jpg'
const Overview = () => {

    const [selectedMovie, setSelectedMovie] = useState({
      Images: [staticImage]
    });
    const handleMovieClick = (movie)=>{
        setSelectedMovie(movie)
    }


  return (
    <>
        {selectedMovie && <CardOverview movie={selectedMovie} />}
        <div style={{display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
        {Data.map((movie)=>{
          return <Card key={movie.Poster} movie={movie} onClick={handleMovieClick} />
        })}
        </div>
    </>
  )
}

export default Overview