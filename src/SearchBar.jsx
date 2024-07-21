// src/SearchBar.js
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { useNavigate } from 'react-router-dom';
import animalData from './animalData';

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if (inputLength === 0) {
    return [];
  }

  const suggestions = [];

  // Loop through each country in animalData
  Object.keys(animalData).forEach(country => {
    // Check if the country's name matches the input value
    if (country.toLowerCase().includes(inputValue)) {
      suggestions.push({ type: 'country', name: country });
    }
    // Loop through each animal in the country's array
    animalData[country].forEach(animal => {
      // Check if the animal's name matches the input value
      if (animal.name.toLowerCase().includes(inputValue)) {
        suggestions.push({ type: 'animal', name: animal.name, country });
      }
    });
  });

  return suggestions.slice(0, 10); // Limit to 10 suggestions
};


const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.type === 'country' ? suggestion.name : `${suggestion.name} (in ${suggestion.country})`}
  </div>
);

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    if (suggestion.type === 'country') {
      navigate(`/country/${suggestion.name}`);
    } else {
      navigate(`/country/${suggestion.country}`);
    }
  };

  const inputProps = {
    placeholder: 'Search for a country or animal here',
    value,
    onChange: onChange,
    onFocus: () => setSuggestions(getSuggestions('')) // Show all suggestions on focus
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionSelected={onSuggestionSelected}
      inputProps={inputProps}
    />
  );
};

export default SearchBar;
