import React, { useState } from "react";
import { FilterOptions, sortingOption } from "../mocks";
import "../main.css";

interface OnFiltersApplied {
  onFiltersApplied: (f: FilterOptions) => any;
}

export const Filters: React.FC<FilterOptions & OnFiltersApplied> = props => {
  const [name, setName] = useState(props.name);
  const [rangeFrom, setRangeFrom] = useState(props.rangeFrom);
  const [rangeTo, setRangeTo] = useState(props.rangeTo);
  const [sortByGain, setSortByGain] = useState(props.sortByGain);

  const onApplyButtonClick = () => {
    props.onFiltersApplied({ name, sortByGain, rangeFrom, rangeTo });
  };

  return (
    <form id="filter" className="filtersForm">
      <div className="filtersContainer">
        <label className="filterLabel">
          <span>By Name</span>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className="filterLabel">
          <span>By Gain</span>
          <select
            value={sortByGain}
            onChange={e => setSortByGain(e.target.value as sortingOption)}
          >
            <option value="none">None</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </label>
        <label className="filterLabel">
          <span>By Range: From</span>
          <input
            type="number"
            value={rangeFrom}
            onChange={e => setRangeFrom(e.target.value)}
          />
        </label>
        <label className="filterLabel">
          <span>By Range: To</span>
          <input
            type="number"
            value={rangeTo}
            onChange={e => setRangeTo(e.target.value)}
          />
        </label>
      </div>
      <button type="button" className="applyBtn" onClick={onApplyButtonClick}>
        Apply
      </button>
    </form>
  );
};
