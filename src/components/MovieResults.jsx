import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieResults = ({ moviesArray = [], handleSetMovieId }) => {
  const navigate = useNavigate();

  const handleMovieDetails = (movieId) => {
    console.log("Movie ID clicked:", movieId);
    if (typeof handleSetMovieId === 'function') {
      handleSetMovieId(movieId);
    }
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {moviesArray.map((movie) => (
        <div key={movie.imdbID} className="bg-gradient-to-br from-red-200 to-blue-200" onClick={() => handleMovieDetails(movie.imdbID)}>
          <div className="bg-blue-400">
            <div className="rounded-lg p-2 m-2">
              <img src={movie.Poster} alt={movie.Title || 'Poster'} className="outline" />
            </div>
            <div className="flex flex-col items-center p-2">
              <h2 className="text-xl font-bold">{movie.Title}</h2>
              <p className="text-gray-800">{movie.Year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieResults