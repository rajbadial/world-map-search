// src/App.js
import React, { useState} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import WorldMap from './WorldMap.jsx';
import CountryPage from './CountryPage.jsx';
import AnimalPage from './AnimalPage.jsx';
import DiscussionPage from './DiscussionPage.jsx';
import Navbar from './Navbar.jsx';
import FAQ from './FAQ.jsx';
import './styles.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='searchbar'>
          <SearchBar onSearch={handleSearch} />
        </div>
        <Routes>
          <Route path="/" element={<WorldMap searchTerm={searchTerm} />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
          <Route path="*" element={<WorldMap searchTerm={searchTerm} />} />
          <Route path="/world-map-search" element={<WorldMap searchTerm={searchTerm} />} />
          <Route path="/animal/:animalName" element={<AnimalPage />} />
          <Route path="/discussion" element={<DiscussionPage />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
