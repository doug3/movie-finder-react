import React, { useState } from "react";
import SearchBox from "../components/searchBox.jsx";
import { motion } from "framer-motion";

const Home = ({ handleSetSearchTerm }) => {
  return (
    <div className="flex flex-col items-center overflow-hidden space-y-4">
      <img src="./src/assets/default.png" alt="" className="z-10"/>
      <SearchBox handleSetSearchTerm={handleSetSearchTerm} />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 15 }}
        className="fixed top-[110px] left-0 w-[70%] z-5"
      >
        <img
          src="./src/assets/filmreel.png"
          className="animate-spin w-1/2 mx-auto"
          alt="Film Reel"
        />
      </motion.div>
    </div>
  );
};

export default Home;
