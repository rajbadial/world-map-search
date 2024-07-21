// src/animalDetails.js
const publicUrl = process.env.PUBLIC_URL;

const animalDetails = {
  "Bald Eagle": {
    images: [`${publicUrl}/images/bald_eagle_1.png`, `${publicUrl}/images/bald_eagle_2.png`],
    description: "Fun Fact: Bald eagles can live up to 20 years in the wild, and they build some of the largest bird nests—up to 13 feet deep and 8 feet wide.",
    links: [
      { text: "National Geographic", url: "https://www.nationalgeographic.com/animals/birds/facts/bald-eagle" },
      { text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bald_eagle" }
    ]
  },
  "Grizzly Bear": {
    images: [`${publicUrl}/images/grizzly_bear_1.jpg`, `${publicUrl}/images/grizzly_bear_2.jpg`],
    description: "Fun Fact: Grizzly bears have a hump on their back, which is a mass of muscles used for digging.",
    links: [
      { text: "National Geographic", url: "https://www.nationalgeographic.com/animals/mammals/facts/grizzly-bear" },
      { text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grizzly_bear" }
    ]
  },
  "Alligator": {
    images: [`${publicUrl}/images/alligator_1.jpg`, `${publicUrl}/images/alligator_2.jpg`],
    description: "Fun Fact: Alligators can regenerate their teeth up to 50 times in their lifetime.",
    links: [
      { text: "Smithsonian's National Zoo", url: "https://nationalzoo.si.edu/animals/american-alligator" },
      { text: "National Wildlife Federation", url: "https://www.nwf.org/Educational-Resources/Wildlife-Guide/Reptiles/American-Alligator" }
    ]
  },
  "Beaver": {
    images: [`${publicUrl}/images/beaver_1.jpg`, `${publicUrl}/images/beaver_2.jpeg`],
    description: "Fun Fact: Beavers are known for their ability to build dams, which can create entire wetland ecosystems.",
    links: [
      { text: "Canadian Geographic", url: "https://canadiangeographic.ca/articles/animal-facts-beaver/" },
      { text: "Smithsonian's National Zoo", url: "https://nationalzoo.si.edu/animals/beaver" }
    ]
  },
  "Moose": {
    images: [`${publicUrl}/images/moose_1.jpg`, `${publicUrl}/images/moose_2.jpg`],
    description: "Fun Fact: Moose are excellent swimmers and can dive up to 20 feet underwater to feed on aquatic plants.",
    links: [
      { text: "Hinterland Who's Who", url: "https://www.hww.ca/en/wildlife/mammals/moose.html" },
      { text: "Canadian Encyclopedia", url: "https://www.thecanadianencyclopedia.ca/en/article/moose" }
    ]
  },
  "Polar Bear": {
    images: [`${publicUrl}/images/polar_bear_1.jpg`, `${publicUrl}/images/polar_bear_2.jpg`],
    description: "Fun Fact: Polar bears have black skin underneath their white fur to absorb and retain heat from the sun.",
    links: [
      { text: "World Wildlife Fund", url: "https://www.worldwildlife.org/species/polar-bear" },
      { text: "Polar Bears International", url: "https://polarbearsinternational.org/" }
    ]
  },
  "Jaguar": {
    images: [`${publicUrl}/images/jaguar_1.jpg`, `${publicUrl}/images/jaguar_2.jpg`],
    description: "Fun Fact: Jaguars have the strongest bite of all big cats, powerful enough to pierce the shells of turtles.",
    links: [
      { text: "National Geographic", url: "https://www.nationalgeographic.com/animals/mammals/facts/jaguar" },
      { text: "San Diego Zoo", url: "https://animals.sandiegozoo.org/animals/jaguar" }
    ]
  },
  "Sloth": {
    images: [`${publicUrl}/images/sloth_1.jpg`, `${publicUrl}/images/sloth_2.jpg`],
    description: "Fun Fact: Sloths move so slowly that algae can grow on their fur, providing them with camouflage.",
    links: [
      { text: "World Wildlife Fund", url: "https://www.worldwildlife.org/species/sloth" },
      { text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sloth" }
    ]
  },
  "Toucan": {
    images: [`${publicUrl}/images/toucan_1.jpg`, `${publicUrl}/images/toucan_2.jpeg`],
    description: "Fun Fact: Toucans use their large, colorful bills to reach fruit on branches that are too small to support their weight.",
    links: [
      { text: "San Diego Zoo", url: "https://animals.sandiegozoo.org/animals/toucan" },
      { text: "Adventures in Toucanland", url: "https://adventuresintoucanland.com/2012/04/so-you-think-you-want-a-toucan/" }
    ]
  },
  "Kangaroo": {
    images: [`${publicUrl}/images/kangaroo_1.jpg`, `${publicUrl}/images/kangaroo_2.jpg`],
    description: "Fun Fact: Kangaroos can hop at speeds of up to 35 miles per hour and cover distances of more than 25 feet in a single leap.",
    links: [
      { text: "Bush Heritage Australia", url: "https://www.bushheritage.org.au/species/kangaroos" },
      { text: "Kangaroo Creek Farm", url: "https://www.kangaroocreekfarm.com/" }
    ]
  },
  "Koala": {
    images: [`${publicUrl}/images/koala_1.jpg`, `${publicUrl}/images/koala_2.jpg`],
    description: "Fun Fact: Koalas have fingerprints that are almost identical to human fingerprints, even under a microscope.",
    links: [
      { text: "Australian Koala Foundation", url: "https://www.savethekoala.com/about-koalas/interesting-facts/" },
      { text: "San Diego Zoo", url: "https://zoo.sandiegozoo.org/cams/koala-cam" }
    ]
  },
  "Emu": {
    images: [`${publicUrl}/images/emu_1.jpg`, `${publicUrl}/images/emu_2.jpg`],
    description: "Fun Fact: Emus are the second-largest birds in the world by height, second only to ostriches.",
    links: [
      { text: "Smithsonian's National Zoo", url: "https://nationalzoo.si.edu/animals/emu" },
      { text: "San Diego Zoo", url: "https://zoo.sandiegozoo.org/animals/emu" }
    ]
  }
};

export default animalDetails;
