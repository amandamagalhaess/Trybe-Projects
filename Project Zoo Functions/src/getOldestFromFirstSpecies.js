const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const person = data.employees.find((employee) => employee.id === id);
  const firstSpecie = person.responsibleFor[0];
  const specieFound = data.species.find((specie) => specie.id === firstSpecie);
  const sortAnimals = specieFound.residents.sort((a, b) => (b.age > a.age ? 1 : -1));
  return Object.values(sortAnimals[0]);
};

module.exports = getOldestFromFirstSpecies;
