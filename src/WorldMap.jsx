// src/WorldMap.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import animalData from './animalData';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";



const WorldMap = ({ searchTerm }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      // Check if the search term matches a country or an animal
      for (const [country, animals] of Object.entries(animalData)) {
        if (country.toLowerCase().includes(searchTerm.toLowerCase())) {
          setSelectedCountry(country);
          return;
        }
        if (animals.some(animal => animal.toLowerCase().includes(searchTerm.toLowerCase()))) {
          setSelectedCountry(country);
          return;
        }
      }
      setSelectedCountry(null);
    }
  }, [searchTerm]);

  const handleCountryClick = (geo) => {
    const countryName = geo.properties.name;
    setSelectedCountry(countryName);
    navigate(`/country/${countryName}`);
  };

  return (
    <div>
      <div className="map-container">
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleCountryClick(geo)}
                  style={{
                    default: { fill: "#D6D6DA", outline: "none" },
                    hover: { fill: "#F53", outline: "none" },
                    pressed: { fill: "#E42", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
      {selectedCountry && (
        <div>
          <h2>Animals in {selectedCountry}</h2>
          <ul>
            {animalData[selectedCountry]?.map((animal) => (
              <li key={animal}>{animal}</li>
            )) || <li>No data available</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WorldMap;
