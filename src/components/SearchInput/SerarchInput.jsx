import React from 'react';
import './style.css';

const SearchInput = ({ placeholder }) => (
  <div className="SearchInput">
    <input type="text" placeholder={placeholder} />
  </div>
);

export default SearchInput;
