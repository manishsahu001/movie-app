import React, { useEffect, useState } from 'react'
import Card from './Card';
import { useLocation } from 'react-router-dom';
import CardOverview from './CardOverview';
import '../styles/overview.css';
import loadingGif from '../../img/loading.gif'

const Overview = () => {


  const [selectedMovie, setSelectedMovie] = useState( {
    "Title": "Journey 2: The Mysterious Island",
    "Year": "2012",
    "imdbID": "tt1397514",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5MTE1MjQyNV5BMl5BanBnXkFtZTcwODI4NDMwNw@@._V1_SX300.jpg"
  });
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  
  // const location = useLocation()

  // const auth = useSelector(state => state.ui.isAuth);
  
  useEffect(() => {
    const getMovies = async()=>{
      setLoading(true)
      try {
      const response = await fetch("https://www.omdbapi.com/?apikey=6095e741&s=forest");
      const data = await response.json();
      console.log(data);
      setMovies(data.Search)
      } catch (error) {
        console.log(error.message)
        return <h1>Failed To Featch Data, Please check your internet connectivity.</h1>
      }
      setLoading(false)
    }
      getMovies();
  }, [])
  

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
  }

  return (
    <>

     {loading ? <img src={loadingGif} alt='Loading....' /> :  <div className="overview">
        <div className='show-card'>
          {movies.map((movie) => {
            return <Card key={movie.Poster} Poster={movie.Poster} movie={movie} onClick={handleMovieClick} />
          })} 
        </div>

       <div className="preview-card">
          {selectedMovie && <CardOverview movie={selectedMovie} />}
        </div>
      </div>
}
    </>
  )
}

export default Overview