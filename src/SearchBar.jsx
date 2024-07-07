// src/SearchBar.js
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const countriesAndAnimals = [
  // Combine countries and animals into a single list for suggestions
  "United States", "Canada", "Brazil", "Australia",
  "Bald Eagle", "Grizzly Bear", "Alligator", "Beaver", "Moose", "Polar Bear",
  "Jaguar", "Sloth", "Toucan", "Kangaroo", "Koala", "Emu"
];

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : countriesAndAnimals.filter(
      item => item.toLowerCase().includes(inputValue)
    );
  };

  const getSuggestionValue = suggestion => suggestion;

  const renderSuggestion = suggestion => (
    <div>
      {suggestion}
    </div>
  );

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    onSearch(suggestion);
  };

  return (
    <div className="navbar">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: "Search for a country or animal",
          value,
          onChange
        }}
        onSuggestionSelected={onSuggestionSelected}
      />
    </div>
  );
};

export default SearchBar;
