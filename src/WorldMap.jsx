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
        if (animals.some(animal => animal.name.toLowerCase().includes(searchTerm.toLowerCase()))) {
          setSelectedCountry(country);
          return;
        }
      }
      setSelectedCountry(null); // Reset to default state if no match found
    } else {
      setSelectedCountry(null); // Handle default state when searchTerm is empty
    }
  }, [searchTerm]);

  const handleCountryClick = (geo) => {
    const countryName = geo.properties.name;
    setSelectedCountry(countryName);
    navigate(`/country/${countryName}`);
  };

  return (
      <div className="map-container">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 100, // Adjust scale as needed
          }}
          width={1200}
          height={400}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleCountryClick(geo)}
                  data-name={geo.properties.name}
                  className="country"
                  style={{
                    default: { fill: "#ADD8E6", outline: "none" },
                    hover: { fill: "#F53", outline: "none" },
                    pressed: { fill: "#E42", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
    </div>
  );
};

export default WorldMap;
