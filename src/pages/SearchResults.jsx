import React, { useState, useEffect } from "react";
import SearchBox from "../components/searchBox.jsx";
import MovieResults from "../components/MovieResults.jsx";
import axios from "axios";
import FilterResults from "../components/FilterResults.jsx";

const SearchResults = ({
  searchTerm,
  handleSetSearchTerm,
  handleSetMovieId,
}) => {
  const [loading, setLoading] = useState(true);
  const [moviesArray, setMoviesArray] = useState([]);
  const [dbUrl, setDbUrl] = useState("");
  useEffect(() => {
    setDbUrl(
      import.meta.env.VITE_DB_API_SEARCH ||
        "https://www.omdbapi.com/?apikey=thewdb&s="
    );
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { data } = await axios.get(`${dbUrl}${searchTerm}`);
        if (data.Response === "True") {
          data.Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
          setMoviesArray(data.Search);
          setLoading(false);
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

  const [minYear, setMinYear] = useState(1900);
  const [maxYear, setMaxYear] = useState(2026);

  function handleMinYear(year) {
    setMinYear(year);
  }

  function handleMaxYear(year) {
    setMaxYear(year);
  }

  useEffect(() => {
    const filteredMovies = moviesArray.filter((movie) => {
      const movieYear = parseInt(movie.Year, 10);
      return movieYear >= minYear && movieYear <= maxYear;
    });
  }, [minYear, maxYear, moviesArray]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-center flex-col space-y-4 mt-8">
        <SearchBox
          searchTerm={searchTerm}
          handleSetSearchTerm={handleSetSearchTerm}
        />
        {moviesArray.length > 0 && (
          <div className="outline-1 rounded-full p-2 outline-blue-300">
            <FilterResults
              handleMinYear={handleMinYear}
              handleMaxYear={handleMaxYear}
            />
          </div>
        )}
        {loading && moviesArray.length > 0 ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-300"></div>
          </div>
        ) : (
          <MovieResults
            moviesArray={moviesArray}
            handleSetMovieId={handleSetMovieId}
            minYear={minYear}
            maxYear={maxYear}
          />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
