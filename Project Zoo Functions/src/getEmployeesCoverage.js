const data = require('../data/zoo_data');

const getSpeciesInfo = (employee, property) => {
  const speciesFound = employee.responsibleFor.map((specieId) =>
    data.species.find((specie) => specie.id === specieId));

  return speciesFound.map((specieFound) => specieFound[property]);
};

const populateObj = (employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: getSpeciesInfo(employee, 'name'),
  locations: getSpeciesInfo(employee, 'location'),
});

const getEmployeesCoverage = (obj) => {
  if (obj === undefined) {
    return data.employees.map((employee) => populateObj(employee));
  }

  const employeeObj = data.employees.find((employee) =>
    obj.name === employee.firstName || obj.name === employee.lastName || obj.id === employee.id);

  if (employeeObj === undefined) {
    throw new Error('Informações inválidas');
  }

  return populateObj(employeeObj);
};

module.exports = getEmployeesCoverage;
