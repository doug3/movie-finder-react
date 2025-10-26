import React from 'react'
import SearchBox from '../components/searchBox.jsx'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <img src="./src/assets/default.png" alt="" />
      <SearchBox />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <img
          src="./src/assets/filmreel.png"
          className="animate-spin w-1/2 mx-auto"
          alt="Film Reel"
        />
      </motion.div>
    </div>
  )
}

export default Home