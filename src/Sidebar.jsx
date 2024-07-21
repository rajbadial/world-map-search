// src/Sidebar.jsx
import React from 'react';

const Sidebar = ({ onContinentChange, onSpeciesChange }) => {
  const continents = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica'];
  const species = ['Mammals', 'Reptiles', 'Birds'];

  return (
    <div className="sidebar">
      <h2>Filter by Continent</h2>
      {continents.map((continent) => (
        <button key={continent} onClick={() => onContinentChange(continent)}>
          {continent}
        </button>
      ))}
      <h2>Filter by Species</h2>
      {species.map((specie) => (
        <button key={specie} onClick={() => onSpeciesChange(specie)}>
          {specie}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
