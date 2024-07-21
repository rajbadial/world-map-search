// src/Filters.jsx
import React from 'react';

const Filters = ({ continents, species, onFilter }) => {
  const handleFilterChange = (e) => {
    onFilter(e.target.name, e.target.value);
  };

  return (
    <div className="filters">
      <div>
        <label>Continent:</label>
        <select name="continent" onChange={handleFilterChange}>
          <option value="">All</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Species:</label>
        <select name="species" onChange={handleFilterChange}>
          <option value="">All</option>
          {species.map((specie) => (
            <option key={specie} value={specie}>
              {specie}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
