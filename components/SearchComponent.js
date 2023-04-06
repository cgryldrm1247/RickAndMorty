import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Arama..."
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button type="submit">Ara</button>
    </form>
  );
};

export default SearchComponent;
