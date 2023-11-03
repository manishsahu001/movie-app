import React, { useEffect, useState } from 'react'
import Card from './Card';
import CardOverview from './CardOverview';
// import staticImage from '../img/default.jpg'
import '../styles/overview.css';
import loadingGif from '..//../img/loading.gif'
const Overview = () => {

  const [selectedMovie, setSelectedMovie] = useState();
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  
  const getMovies = async()=>{
    setLoading(true)
    const response = await fetch("http://www.omdbapi.com/?apikey=6095e741&s=rider");
    const data = await response.json();
    console.log(data);
    setMovies(data.Search)
    setLoading(false)
  }
  useEffect(() => {
    getMovies();
  }, [])
  

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
  }

  return (
    <>

      <div className="overview">

        <div className='show-card'>
          {loading ? <img src={loadingGif} alt="Loading..." /> : movies.map((movie) => {
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