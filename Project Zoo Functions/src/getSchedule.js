const data = require('../data/zoo_data');

let schedule = {};

const makeSchedule = (day) => {
  const openHour = data.hours[day].open;
  const closeHour = data.hours[day].close;
  const animals = data.species.filter((specie) => specie.availability.includes(day));
  const animalsNames = animals.map((animal) => animal.name);

  if (day !== 'Monday') {
    schedule[day] = {
      officeHour: `Open from ${openHour}am until ${closeHour}pm`,
      exhibition: animalsNames,
    };
  } else {
    schedule[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
};

const getSchedule = (scheduleTarget) => {
  const weedDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const param = data.species.find((especie, index) =>
    especie.name === scheduleTarget || scheduleTarget === weedDays[index]);

  if (scheduleTarget !== undefined && param !== undefined) {
    if (weedDays.some((day) => scheduleTarget === day) === false) {
      return param.availability;
    }
    schedule = {};
    makeSchedule(scheduleTarget);
    return schedule;
  }

  schedule = {};
  weedDays.forEach((day) => {
    makeSchedule(day);
  });
  return schedule;
};

module.exports = getSchedule;
