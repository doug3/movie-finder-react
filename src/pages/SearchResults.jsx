import React, { useState, useEffect } from 'react'
import SearchBox from '../components/searchBox.jsx'
import MovieResults from '../components/MovieResults.jsx'
import axios from 'axios'


const SearchResults = ({ searchTerm, handleSetSearchTerm, handleSetMovieId }) => {
  if (searchTerm) {
    console.log("SearchResults received searchTerm:", searchTerm);
  }
  
  const [moviesArray, setMoviesArray] = useState([])
  const [dbUrl, setDbUrl] = useState("")
  useEffect(() => {
    setDbUrl(import.meta.env.VITE_DB_API_SEARCH || "https://www.omdbapi.com/?apikey=thewdb&s=")
  }, []);

  useEffect(() => {

    async function fetchMovies() {
      try {
        const { data } = await axios.get(
          `${dbUrl}${searchTerm}`
        );
        if (data.Response === "True") {
          setMoviesArray(data.Search);
          console.log("Fetched movies:", data.Search);
        } else {
          setMoviesArray([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMoviesArray([]);
      }
    }
    fetchMovies();
    
  }, [searchTerm, dbUrl]);

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