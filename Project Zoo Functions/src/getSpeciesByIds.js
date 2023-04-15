const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) { return ids; }

  const speciesFound = [];

  data.species.forEach((specie) => {
    if (ids.find((id) => specie.id === id) !== undefined) {
      speciesFound.push(specie);
    }
  });

  return speciesFound;
};

module.exports = getSpeciesByIds;
