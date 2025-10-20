import React from 'react'
import SearchBox from '../components/searchBox.jsx'
import MovieResults from '../components/MovieResults.jsx'


const SearchResults = () => {
  return (
    <div>
      <div className='flex items-center justify-center flex-col space-y-4 mt-8'>
        <SearchBox />
        <MovieResults />
      </div>
    </div>
  )
}

export default SearchResults