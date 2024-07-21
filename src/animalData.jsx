// src/animalData.js

const animalData = {
  "United States of America": [
    { name: "Bald Eagle", species: "Bird", habitat: "Forest", image: process.env.PUBLIC_URL + `/images/bald_eagle.png` },
    { name: "Grizzly Bear", species: "Mammal", habitat: "Forest", image: process.env.PUBLIC_URL + "/images/grizzly_bear.jpg" },
    { name: "Alligator", species: "Reptile", habitat: "Swamp", image: process.env.PUBLIC_URL + "/images/alligator.png" }
  ],
  "Canada": [
    { name: "Beaver", species: "Mammal", habitat: "Forest", image: process.env.PUBLIC_URL + "/images/beaver.jpg" },
    { name: "Moose", species: "Mammal", habitat: "Forest", image: process.env.PUBLIC_URL + "/images/moose.jpg" },
    { name: "Polar Bear", species: "Mammal", habitat: "Arctic", image: process.env.PUBLIC_URL + "/images/polar_bear.jpg" }
  ],
  "Brazil": [
    { name: "Jaguar", species: "Mammal", habitat: "Forest", image: process.env.PUBLIC_URL + "/images/jaguar.jpg" },
    { name: "Sloth", species: "Mammal", habitat: "Forest", image: process.env.PUBLIC_URL + "/images/sloth.jpg" },
    { name: "Toucan", species: "Bird", habitat: "Forest", image: process.env.PUBLIC_URL + "/images/toucan.jpg" }
  ],
  "Australia": [
    { name: "Kangaroo", species: "Mammal", habitat: "Desert", image: process.env.PUBLIC_URL + "/images/kangaroo.jpg" },
    { name: "Koala", species: "Mammal", habitat: "Forest", image: process.env.PUBLIC_URL + "/images/koala.jpg" },
    { name: "Emu", species: "Bird", habitat: "Desert", image: process.env.PUBLIC_URL + "/images/emu.jpg" }
  ]
};

export default animalData;