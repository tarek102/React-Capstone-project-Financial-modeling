/* eslint react/prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SearchBar = (props) => {
  const { handleSearch, handleChange, searchValue } = props;
  return (
    <div className="search-div">
      <input type="text" placeholder="Search coins" value={searchValue} onChange={handleChange} />
      <button type="button" onClick={handleSearch}>
        <NavLink to="/search">
          Search
        </NavLink>
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default SearchBar;
