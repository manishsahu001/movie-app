import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../redux/slice/api-slice';

const Search = () => {

  const dispatch = useDispatch();
  const {movies, status, error} = useSelector((state)=> state.apiSlice)

  useEffect(() => {

    dispatch(fetchMovies())
    console.log(movies)
    
  }, [dispatch])

  console.log(movies)

  return (
    <div>
         <h2>Hello seach tba</h2>

          {status === 'succeeded' && movies.map((e)=>{
            return <h1 key={e.omdbID}>{e.name}</h1>
          })}

    </div>
  )
}

export default Search