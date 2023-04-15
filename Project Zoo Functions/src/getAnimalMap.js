const data = require('../data/zoo_data');

const getSpecieName = (local) => {
  const speciesInfo = data.species.filter((specie) => specie.location === local);
  return speciesInfo.map(({ name }) => name);
};

const getAnimalsBySex = (residents, sexName) => residents.filter(({ sex }) =>
  (sex === sexName)).map(({ name }) => name);

const getAnimalsNames = (residents) => residents.map(({ name }) => name);

const getValue = (residents, options) => {
  if (options.sex && options.sorted) return getAnimalsBySex(residents, options.sex).sort();
  if (options.sex) return getAnimalsBySex(residents, options.sex);
  if (options.sorted) return getAnimalsNames(residents).sort();
  return getAnimalsNames(residents);
};

const getInfo = ({ name, residents }, options) => ({ [name]: getValue(residents, options) });

const getFinalObj = (local, options) => data.species.filter(({ location }) =>
  location === local).map((specieObj) => getInfo(specieObj, options));

const whatToReturn = (func, options) => {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const obj = {};

  locations.forEach((location) => { obj[location] = func(location, options); });
  return obj;
};

const getAnimalMap = (options) => {
  if (options === undefined || !options.includeNames) {
    return whatToReturn(getSpecieName);
  }

  return whatToReturn(getFinalObj, options);
};

module.exports = getAnimalMap;
