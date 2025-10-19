import React from "react";

const SearchBox = () => {


  const onSearch = () => {
    const title = document.getElementById("searchText").value;
    const year = document.getElementById("searchYear").value;
    console.log(`Searching for title: ${title}, year: ${year}`);
    // Implement search logic here
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
