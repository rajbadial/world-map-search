// src/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css';

const questions = {
  english: [
    { question: "How to navigate the website?", answer: "Press 'Home' in the navbar, then either select a country from the world map, or use the search bar to look for a country or an animal. Then select the animal you'd like to learn more about." },
    { question: "What's our mission?", answer: "Our team are trying to deliver a website which is easy and fun to navigate, and to help people (such as yourself) learn more about the animals of the world and to spark interest in people's learning." },
  ],
  jibberish: [
    { question: "Hghdasghgu dsghjagdj? (Jibberish)", answer: "Gsilajdl sjdklajlasdj d (Jibberish)." },
    { question: "Ghgdj hfk sghdfdd? (Jibberish)", answer: "Gjgdjfa lkksal bnsaso (Jibberish)." },
  ]
};

const FAQ = () => {
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="language-selector">
        <label htmlFor="language">Choose Language: </label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="english">English</option>
          <option value="jibberish">Jibberish</option>
        </select>
      </div>
      {questions[language].map((q, index) => (
        <div key={index} className="faq-item">
          <h2>{q.question}</h2>
          <p>{q.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
