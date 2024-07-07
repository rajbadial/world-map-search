// src/CountryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import animalData from './animalData';

const CountryPage = () => {
  const { countryName } = useParams();
  const animals = animalData[countryName] || [];
  console.log('Country Name:', countryName);
  console.log('Animals:', animals);

  return (
    <div>
      <h2>Animals in {countryName}</h2>
      {animals.length > 0 ? (
        <ul>
          {animals.map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default CountryPage;
