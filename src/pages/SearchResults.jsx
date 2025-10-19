import React from 'react'
import SearchBox from '../components/searchBox.jsx'



const SearchResults = () => {
  return (
    <div>
      <div className='flex items-center justify-center flex-col space-y-4 mt-8'>
        <SearchBox />
      </div>
    </div>
  )
}

export default SearchResults