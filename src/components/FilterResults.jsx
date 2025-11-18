import React from "react";

const FilterResults = ({ handleMinYear, handleMaxYear }) => {
  const setMinYear = (year) => {
    handleMinYear(year);
  };

  const setMaxYear = (year) => {
    handleMaxYear(year);
  };


  return (
    <div className="w-fullflex flex-col">
      <div className="flex">
        <div className="outline-none">
          <input
            type="number"
            label="Minimum Year"
            className="w-10"
            defaultValue={1900}
            onClick={(e) => e.target.value = ''}
            onChange={(e) => {
              setMinYear(Number(e.target.value));
            }}
          />
        </div>
        <div className="mx-4">&lt;-&gt;</div>
        <div className="outline-none">
          <input
            type="number"
            label="Maximum Year"
            className="w-10"
            defaultValue={2026}
            onClick={(e) => e.target.value = ''}
            onChange={(e) => {
              setMaxYear(Number(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterResults;
