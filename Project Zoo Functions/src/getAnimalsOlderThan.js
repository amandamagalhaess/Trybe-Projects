const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const specieFound = data.species.find((specie) => specie.name === animal);
  return specieFound.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
