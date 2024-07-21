// src/AnimalPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import animalDetails from './animalDetails';
import './AnimalPage.css';

const AnimalPage = () => {
  const { animalName } = useParams();
  const animal = animalDetails[animalName];

  if (!animal) {
    return <p>No data available for this animal.</p>;
  }

  return (
    <div className="animal-page">
      <h2>{animalName}</h2>
      <p>{animal.description}</p>
      <div className="animal-images">
        {animal.images.map((image, index) => (
          <img key={index} src={image} alt={animalName} />
        ))}
      </div>
      <div className="animal-links">
        <h3>Learn more:</h3>
        <ul>
          {animal.links.map((link, index) => (
            <li key={index}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnimalPage;
