const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const obj = {};
    data.species.forEach((specie) => { obj[specie.name] = specie.residents.length; });

    return obj;
  }

  const animalFound = data.species.find((specie) => specie.name === Object.values(animal)[0]);

  if (Object.keys(animal).length === 1) {
    return animalFound.residents.length;
  }

  const animals = animalFound.residents.filter((resident) =>
    resident.sex === Object.values(animal)[1]);
  return animals.length;
};

module.exports = countAnimals;
