import React, { useEffect, useState } from 'react'
import Card from './Card';
import { useLocation } from 'react-router-dom';
import CardOverview from './CardOverview';
import '../styles/overview.css';
import loadingGif from '../../img/loading.gif'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/slice/api-slice';

const Overview = () => {


  const [selectedMovie, setSelectedMovie] = useState( {
    "Title": "Journey 2: The Mysterious Island",
    "Year": "2012",
    "imdbID": "tt1397514",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5MTE1MjQyNV5BMl5BanBnXkFtZTcwODI4NDMwNw@@._V1_SX300.jpg"
  });
  
  const {movies, status, error} = useSelector((state)=>  state.apiSlice)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])
  
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
  }

  return (
    <>

     {status === 'loading' ? <img src={loadingGif} alt='Loading....' /> :  <div className="overview">
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