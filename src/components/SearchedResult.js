import React from 'react'
import './styles/searchResults.css'
import Card from './Card'
// import '../styles/searchResults.css';
const SearchedResult = ({ movie }) => {
  return (
    <>
      <div className="searched-result">
        <Card movie={movie} onClick={() => { console.log(`Clicked on ${movie.imbdID}`) }} />
      </div>
    </>
  )
}

export default SearchedResult