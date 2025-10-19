import React from "react";

const SearchBox = () => {


  const onSearch = () => {
    const title = document.getElementById("searchText").value;
    const year = document.getElementById("searchYear").value;
    console.log(`Searching for title: ${title}, year: ${year}`);
    // Implement search logic here
    /*
    async function onSearch() {
    movieSingles = [];
    movieListElement.innerHTML = "";
    document.querySelector("#spinner").classList.add("movie__list--loading");
    resultsHeader.classList.remove("results__header--off");
    await new Promise(time => setTimeout(time, 1000));
    const searchTitle = searchBarText.value;
    const searchYear = searchBarYear.value;
    var searchKey = "s=" + searchTitle + "&type=movie";
    searchBarText.value = "";
    searchBarYear.value = "";

    resultsTerm.innerHTML = searchTitle;
    if (searchYear) {
        searchKey += ("&y=" + searchYear);
        resultsTerm.innerHTML += (" " + searchYear);
    }

    if (searchTitle) {
        try {
            var moviesArray;
            const movies = await fetch("https://www.omdbapi.com/?apikey=8097d20a&" + searchKey);
            const moviesData = await movies.json();

            document.querySelector("#spinner").classList.remove("movie__list--loading");
            
            if (Array.isArray(moviesData.Search)) {
                moviesArray = moviesData.Search;
                movieSingles = await moviesDetail(moviesArray);
                generateResultsCode(movieSingles);
            } else {
                movieListElement.innerHTML = "<p class='results__none'>No results found.</p>";
            }
        }
        catch (error) {
            movieListElement.innerHTML = "<p>Database not connected. Try again later.</p>";
        }
    } else {
        document.querySelector("#spinner").classList.remove("movie__list--loading");
        alert("Title is required to search");
    }   
}
    */

  };

  return (
    <div className="flex flex-col w-full max-w-md">
      <div className="outline flex justify-between w-full outline-blue-300 p-4 m-4 rounded-full">
        <input className="outline-none" type="text" id="searchText" placeholder="Title (*Required)" />
        <div className="flex items-center">
        <select name="year" id="searchYear" className="text-gray-600 ml-4 mr-4">
          <option value="">Year</option>
          {Array.from({ length: 2026 - 1878 + 1 }, (_, i) => 2026 - i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <div className="">
          <button className="text-gray-600" id="searchNow">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
