// src/App.js
import React, { useState} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import WorldMap from './WorldMap.jsx';
import CountryPage from './CountryPage.jsx';
import './styles.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="App">
        <h1>World Map with Animal Information</h1>
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<WorldMap searchTerm={searchTerm} />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
          <Route path="*" element={<WorldMap searchTerm={searchTerm} />} />
          <Route path="/world-map-search" element={<WorldMap searchTerm={searchTerm} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
