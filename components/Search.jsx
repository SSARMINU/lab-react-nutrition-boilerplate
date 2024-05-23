// src/components/Search.js
import React from 'react';

const Search = ({ searchTerm, onSearch }) => {
  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          type="text"
          value={searchTerm}
          onChange={onSearch}
          placeholder="Search for a food"
        />
      </div>
    </div>
  );
};

export default Search;
