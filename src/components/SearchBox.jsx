import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchBox = ({ searchTerm, handleSetSearchTerm }) => {
  const navigate = useNavigate();

  function setSearchTermLocal(term) {
    if (handleSetSearchTerm) {
      handleSetSearchTerm(term);
    }
  }

  useEffect(() => {
    if (searchTerm) {

      const sMatch = searchTerm.match(/&s=([^&]*)/);
      const yMatch = searchTerm.match(/&y=(\d{4})/);

      const searchTextEl = document.getElementById("searchText");
      const searchYearEl = document.getElementById("searchYear");

      if (searchTextEl) {
        searchTextEl.value = sMatch ? decodeURIComponent(sMatch[1]) : "";
      }
      if (searchYearEl) {
        searchYearEl.value = yMatch ? yMatch[1] : "";
      }
    }
  }, [searchTerm]);

  const onSearch = () => {
    const title = document.getElementById("searchText").value;
    const year = document.getElementById("searchYear").value;

    let searchKey = "&s=" + title + "&type=movie";
    if (year) {
      searchKey += "&y=" + year;
    }

    if (title) {
      setSearchTermLocal(searchKey);
    } else {
      alert("Please enter a movie title to search.");
    }
    navigate("/search");
  };

  return (
    <div className="flex w-full max-w-sm">
      <div className="outline flex justify-between w-full outline-blue-300 p-4 m-4 rounded-full">
        <input
          className="outline-none"
          type="text"
          id="searchText"
          placeholder="Title (*Required)"
          onKeyUp={(event) =>
            (event.key === "Enter" || event.key === "NumpadEnter") && onSearch()
          }
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
            <button className="text-gray-600" id="searchNow" onClick={onSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
