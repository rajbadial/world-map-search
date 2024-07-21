// src/CountryPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animalData from './animalData';
import './CountryPage.css';

const CountryPage = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState({ species: '', habitat: '' });

  const animals = animalData[countryName] || [];

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const filteredAnimals = animals.filter(animal => {
    return (
      (filter.species ? animal.species === filter.species : true) &&
      (filter.habitat ? animal.habitat === filter.habitat : true)
    );
  });

  const handleAnimalClick = (animalName) => {
    navigate(`/animal/${animalName}`);
  };

  return (
    <div className="country-page">
      <h2>Explore Wildlife in {countryName}</h2>

      <div className="filters">
        <select name="species" value={filter.species} onChange={handleFilterChange}>
          <option value="">All Species</option>
          <option value="Mammal">Mammal</option>
          <option value="Bird">Bird</option>
          <option value="Reptile">Reptile</option>
        </select>

        <select name="habitat" value={filter.habitat} onChange={handleFilterChange}>
          <option value="">All Habitats</option>
          <option value="Forest">Forest</option>
          <option value="Desert">Desert</option>
          <option value="Swamp">Swamp</option>
          <option value="Arctic">Arctic</option>
          <option value="Ocean">Ocean</option>
        </select>
      </div>

      <div className="animal-cards">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map(animal => (
            <div key={animal.name} className="animal-card" onClick={() => handleAnimalClick(animal.name)}>
              <img src={animal.image} alt={animal.name} />
              <h3>Learn about the {animal.name}!</h3>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default CountryPage;
