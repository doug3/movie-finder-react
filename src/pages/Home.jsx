import React from 'react'
import SearchBox from '../components/searchBox.jsx'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl underline'>Welcome to MovieFinder!</h1>
      <p className='text-lg'>Find your favorite movies and explore new ones.</p>
      <SearchBox />
    </div>
  )
}

export default Home