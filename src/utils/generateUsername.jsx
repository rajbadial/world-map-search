// src/utils/generateUsername.js
const adjectives = [
  "Swift", "Clever", "Brave", "Gentle", "Mighty", "Cunning", "Wild", "Fierce",
  "Noble", "Loyal", "Playful", "Quick", "Bold", "Calm", "Happy", "Jolly", "Keen"
];

const animals = [
  "Lion", "Tiger", "Bear", "Wolf", "Eagle", "Hawk", "Fox", "Leopard", "Panther",
  "Owl", "Falcon", "Shark", "Whale", "Dolphin", "Cheetah", "Gorilla", "Elephant"
];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generateUsername = () => {
  const adjective = getRandomElement(adjectives);
  const animal = getRandomElement(animals);
  return `${adjective}${animal}`;
};
