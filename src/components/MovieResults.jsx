import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MovieResults = ({ moviesArray = [], handleSetMovieId }) => {
  const navigate = useNavigate();

  const handleMovieDetails = (movieId) => {
    console.log("Movie ID clicked:", movieId);
    if (typeof handleSetMovieId === "function") {
      handleSetMovieId(movieId);
    }
    navigate(`/movie/${movieId}`);
  };


  return (
    <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {moviesArray.map((movie) => (
        <div
          key={movie.imdbID}
          className="bg-gradient-to-br from-red-200 to-blue-200"
          onClick={() => handleMovieDetails(movie.imdbID)}
        >
          <div className="cursor-pointer flex flex-col items-center">
            <div className="p-2">
              <img src={movie.Poster} className="h-84 object-scale-down rounded-lg" 
              onError={(e) => {
                e.target.src = "../src/assets/unavailable.png";
              }}/>
            </div>
            <div className="grid grid-cols-1 items-center justify-bottom p-2">
              <div className="text-xl font-bold h-14">{movie.Title}</div>
              <div className="text-gray-800 text-center">{movie.Year}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieResults;
