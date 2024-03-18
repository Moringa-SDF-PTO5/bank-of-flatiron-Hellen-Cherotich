// SearchBar.js
import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return <input type="text" placeholder="Search by description" onChange={handleChange} />;
};

export default SearchBar;
