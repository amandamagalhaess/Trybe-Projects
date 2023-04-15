/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (obj) => {
  const object = {
    fetchMenu: () => obj,
    consumption: [],
    order: (string) => {
      for (let key in obj) {
        if (obj[key][string]) {
          object.consumption.push(string);
          return object.consumption;
        }
      }
      return 'Item indisponível';
    },
    pay: () => {
      let sum = 0;
      let products = object.consumption;

      products.forEach((element) => {
        for (let key in obj) {
          if (obj[key][element]) {
            sum += obj[key][element];
          }
        }
      });

      let tax = (10 / 100) * sum;
      return sum + tax;
    },
  };
  return object;
};

module.exports = createMenu;
