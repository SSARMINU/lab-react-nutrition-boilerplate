// src/components/Search.js
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, onSearch }) => {
  return (
    <div className="field is-grouped">
      <div className="control is-expanded">
        <input
          className="input is-large"
          type="text"
          value={searchTerm}
          onChange={onSearch}
          placeholder="Search for a food"
        />
      </div>
      <div className="control">
        <button className="button is-info is-large" onClick={() => {}}>
          Search
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
