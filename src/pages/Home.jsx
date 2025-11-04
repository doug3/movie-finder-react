import React, { useState } from 'react'
import SearchBox from '../components/searchBox.jsx'
import { motion } from 'framer-motion'

const Home = ({ handleSetSearchTerm }) => {

  return (
    <div className='flex flex-col items-center justify-center overflow-hidden space-y-4'>
      <img src="./src/assets/default.png" alt="" />
      <SearchBox handleSetSearchTerm={handleSetSearchTerm} />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 15 }}
        style={{
                    position: "fixed",
                    top: 110,
                    left: 0,
                    width: "70%",
                    background: "white",
                    zIndex: -10,
        }}
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