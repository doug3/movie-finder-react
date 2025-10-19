import React from 'react'
import SearchBox from '../components/searchBox.jsx'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <h1 className='text-3xl underline'>Welcome to MovieFinder!</h1>
      <p className='text-lg'>Find your favorite movies and explore new ones.</p>
      <SearchBox />

      <img src="./src/assets/filmreel.png" className='absolute top-100 animate-spin w-1/3 mx-auto' alt="Film Reel" />
    </div>
  )
}

export default Home