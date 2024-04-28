// SearchBar.js

import React, { useState } from 'react';
import './SearchBar.css'; // Make sure to create a corresponding CSS file

const SearchBar = ({ onSearch }) => {
  const [ticker, setTicker] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(ticker);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter Stock Ticker"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
