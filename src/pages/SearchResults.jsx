import React, { useState, useEffect } from 'react'
import SearchBox from '../components/searchBox.jsx'
import MovieResults from '../components/MovieResults.jsx'
import axios from 'axios'


const SearchResults = ({ searchTerm, handleSetSearchTerm, handleSetMovieId }) => {
  
  const [moviesArray, setMoviesArray] = useState([])

  useEffect(() => {
    console.log("Search term in SearchResults:", searchTerm);
    async function fetchMovies() {
      if (!searchTerm) {
        setMoviesArray([]);
        return;
      }
      try {
        console.log("Fetching movies for search term:", searchTerm);
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=8097d20a&s=${searchTerm}`
        );
        console.log("API response data:", data);
        if (data.Response === "True") {
          setMoviesArray(data.Search);
          console.log("Fetched movies:", moviesArray);
        } else {
          setMoviesArray([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMoviesArray([]);
      }
    }
    fetchMovies();
  }, [searchTerm]);

  useEffect(() => {
    moviesArray.map((movie) => console.log(movie))
  }, [moviesArray])



  return (
    <div>
      <div className='flex items-center justify-center flex-col space-y-4 mt-8'>
        <SearchBox searchTerm={searchTerm} handleSetSearchTerm={handleSetSearchTerm} />
        <MovieResults moviesArray={moviesArray} handleSetMovieId={handleSetMovieId} />
      </div>
    </div>
  )
}

export default SearchResults