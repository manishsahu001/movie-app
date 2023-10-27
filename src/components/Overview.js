import React, { useState } from 'react'
import Data from '../Data.json'
import Card from './Card';
import CardOverview from './CardOverview';
import staticImage from '../img/default.jpg'
import './styles/overview.css';
const Overview = () => {

  const [selectedMovie, setSelectedMovie] = useState(
    {
      "Title": "Titanic",
      "Images": [staticImage],
      "director": "James Cameron",
      "release_date": "December 19, 1997",
      "Genre": "Drama, Romance",
      "Runtime": "195 minutes",
      "Rated": 7.8,
      "Plot": "A fictionalized account of the sinking of the RMS Titanic, focusing on a love story between two passengers from different social classes.",
      "cast": [
        "Leonardo DiCaprio as Jack Dawson",
        "Kate Winslet as Rose DeWitt Bukater",
        "Billy Zane as Caledon 'Cal' Hockley",
        "Kathy Bates as Molly Brown",
        "Bill Paxton as Brock Lovett",
        "Frances Fisher as Ruth DeWitt Bukater"
      ],
      "awards": [
        "11 Academy Awards, including Best Picture and Best Director",
        "4 Golden Globe Awards, including Best Motion Picture - Drama and Best Director"
      ]
    
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