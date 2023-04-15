const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

const isManager = (id) => managers.some((managerId) => managerId === id);

const getRelatedEmployees = (managerId) => {
  if (!managers.includes(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const relatedEmployees = data.employees.filter((employee) =>
    employee.managers.includes(managerId));

  const relatedNames = [];
  relatedEmployees.forEach((relatedEmployee) =>
    relatedNames.push(`${relatedEmployee.firstName} ${relatedEmployee.lastName}`));

  return relatedNames;
};

module.exports = { isManager, getRelatedEmployees };
