const data = require('../data/zoo_data');

// child: são pessoas menores de 18 anos;

// adult: são pessoas com idade maior ou igual a 18 anos e menor que 50 anos;

// senior: são pessoas com idade maior ou igual a 50 anos.

const countEntrants = (entrants) => {
  const childAges = [];
  const adultAges = [];
  const seniorAges = [];

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      childAges.push(entrant.age);
    } else if (entrant.age >= 18 && entrant.age < 50) {
      adultAges.push(entrant.age);
    } else {
      seniorAges.push(entrant.age);
    }
  });

  return { child: childAges.length, adult: adultAges.length, senior: seniorAges.length };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || entrants === []) {
    return 0;
  }

  const price = data.prices;
  const entrant = countEntrants(entrants);

  return (price.child * entrant.child) + (price.adult * entrant.adult)
    + (price.senior * entrant.senior);
};

module.exports = { calculateEntry, countEntrants };
