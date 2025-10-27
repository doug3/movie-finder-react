import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const SearchBox = ({ handleSetSearchTerm }) => {
  function setSearchTermLocal(term) {
    if (handleSetSearchTerm) {
      handleSetSearchTerm(term);
      console.log("Search term set to:", term);
    }
  }

  const movieListElement = document.getElementById("movieList");
  function movieHTML(movie) {
    return `
            <div class="movie__box--wrapper">    
                <div class="movie__box movie__show">
                    <figure class="movie__poster--wrapper">
                        <img src="${movie.Poster}" class="movie__poster">
                    </figure>
                    <div>
                        <h2 class="movie__title">${movie.Title}</h2>
                        <p class="movie__year">Year: ${movie.Year}</p>
                    </div>
                </div>
                <div class="movie__detail movie__hide">
                    <p><b>Rated:</b> ${movie.Rated}</p>
                    <p><b>Length:</b> ${movie.Runtime}</p>
                    <p><b>Director:</b> ${movie.Director}</p>
                    <p><b>Cast:</b> ${movie.Actors}</p>
                    <p><b>Plot:</b> ${movie.Plot}</p>
                </div>
            </div>
            `;
  }

  function generateResultsCode(movieArray) {
    const arrLen = movieArray.length;
    let newHTML = [];
    // for (let i = 0, j = 0; i < arrLen && j < 6; i++) {
    //   if (parseInt(movieArray[i].Year)) {
    //     if (
    //       movieArray[i].Year >= rangeInput[0].value &&
    //       movieArray[i].Year <= rangeInput[1].value
    //     ) {
    //       newHTML[j] = movieHTML(movieArray[i]);
    //       j++;
    //     }
    //   }
    // }
    // movieListElement.innerHTML = newHTML.join("");
  }

  async function moviesDetail(moviesArray) {
    let movieSingle;
    let movieSingleArray = [];
    for (let i = 0; i < moviesArray.length; i++) {
      try {
        movieSingle = await fetch(
          "https://www.omdbapi.com/?apikey=8097d20a&t=" + moviesArray[i].Title
        );
        movieSingleArray[i] = await movieSingle.json();
      } catch (error) {
        alert("Database Error. Please try again.");
      }
    }
    return movieSingleArray;
  }

  const onSearch = async () => {
    const title = document.getElementById("searchText").value;
    const year = document.getElementById("searchYear").value;
    console.log(`Searching for title: ${title}, year: ${year}`);

    let movieSingles = [];
    let searchKey = "&s=" + title + "&type=movie";
    console.log("Initial Search Key:", searchKey);
    if (year) {
      searchKey += "&y=" + year;
    }

    if (title) {
      console.log("Search Key set in App:", searchKey);
      setSearchTermLocal(searchKey);
      try {
        let moviesArray;
        const movies = await fetch(
          "https://www.omdbapi.com/?apikey=8097d20a" + searchKey
        );
        

        const moviesData = await movies.json();
        console.log("Movies Data:", moviesData);

        if (Array.isArray(moviesData.Search)) {
          moviesArray = moviesData.Search;
          movieSingles = await moviesDetail(moviesArray);
          generateResultsCode(movieSingles);
        } else {
          alert("No results found.");
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Title is required to search");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md">
      <div className="outline flex justify-between w-full outline-blue-300 p-4 m-4 rounded-full">
        <input
          className="outline-none"
          type="text"
          id="searchText"
          placeholder="Title (*Required)"
        />
        <div className="flex items-center">
          <select
            name="year"
            id="searchYear"
            className="text-gray-600 ml-4 mr-4"
          >
            <option value="">Year</option>
            {Array.from({ length: 2026 - 1878 + 1 }, (_, i) => 2026 - i).map(
              (year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              )
            )}
          </select>
          <div className="">
            <Link to="/search">
            <button className="text-gray-600" id="searchNow" onClick={onSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
