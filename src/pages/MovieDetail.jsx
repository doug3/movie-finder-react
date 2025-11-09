import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [movieFullDetails, setMovieFullDetails] = useState({});

  async function fetchMovieDetails(id) {
    const { data } = await axios.get(`${import.meta.env.VITE_DB_API_ID}${id}`);
    setMovieFullDetails(data);
    console.log("Fetched movie details:", data);
    setLoading(false);
  }

  useEffect(() => {
    if (!id) return;
    fetchMovieDetails(id);
  }, [id]);

  return (
    <div
      className="max-w-4xl bg-gradient-to-br from-red-200 to-blue-200 rounded-lg p-4 m-4"
    >
      {!loading ?
      <div className="items-center h-full p-8 rounded-lg">
        <div className="flex flex-col items-center">
          <div className="p-2">
            <img
              src={movieFullDetails.Poster}
              className="h-120 object-scale-down rounded-lg"
              onError={(e) => {
                e.target.src = "../src/assets/unavailable.png";
              }}
            />
          </div>
          <div className="flex flex-col items-center p-2">
            <div className="text-xl text-center font-bold">
              {movieFullDetails.Title}
            </div>
            <div className="text-gray-800 text-center">
              {movieFullDetails.Year}
            </div>
            <div className="text-gray-900 text-center mt-4">
              {movieFullDetails.Plot}
            </div>
            <div className="text-gray-800 text-center mt-2">
              Director: {movieFullDetails.Director}
            </div>
            <div className="text-gray-800 text-center mt-2">
              Actors: {movieFullDetails.Actors}
            </div>
            <div className="text-gray-800 text-center mt-2">
              Genre: {movieFullDetails.Genre}
            </div>
            <div className="text-gray-800 text-center mt-2">
              Runtime: {movieFullDetails.Runtime}
            </div>
            <div className="text-gray-800 text-center mt-2">
              IMDB Rating: {movieFullDetails.imdbRating}
            </div>
          </div>
        </div>
      </div>
       : (<h1>Loading...</h1>
      )}
    </div>  
  );
};

export default MovieDetail;
