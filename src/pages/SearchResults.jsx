import React, { useState, useEffect } from 'react'
import SearchBox from '../components/searchBox.jsx'
import MovieResults from '../components/MovieResults.jsx'


const SearchResults = ({ searchTerm, handleSetSearchTerm, handleSetMovieId }) => {
  
  const [moviesArray, setMoviesArray] = useState([])
  // useEffect(() => {
  //   moviesArray.map((movie) => console.log(movie))
  // }, [])

  return (
    <div>
      <div className='flex items-center justify-center flex-col space-y-4 mt-8'>
        <SearchBox searchTerm={searchTerm} handleSetSearchTerm={handleSetSearchTerm} />
        <MovieResults />
      </div>
    </div>
  )
}

export default SearchResults