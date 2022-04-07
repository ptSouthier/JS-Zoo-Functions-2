const data = require('./data');

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  return animals.find((currAnimal) => currAnimal.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  const employee = employees.find((currEmployee) =>
    currEmployee.firstName === employeeName || currEmployee.lastName === employeeName);
  if (!employee) {
    return {};
  }
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  return employees.some((currEmployee) => currEmployee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  const newEmployee = createEmployee(personalInfo, associatedWith);
  employees.push(newEmployee);
}

function animalCount(species) {
  if (!species) {
    const animalsObj = {};
    animals.map((animal) => animalsObj[animal.name] = animal.residents.length);
    return animalsObj;
  }
  const animal = animals.find((currAnimal) => currAnimal.name === species).residents;
  return animal.length;
}

function entryCalculator(entrants = 0) {
  const { Adult, Senior, Child } = entrants;
  let result = 0;
  if (Adult) { result += (Adult * prices.Adult); }
  if (Senior) { result += (Senior * prices.Senior); }
  if (Child) { result += (Child * prices.Child); }
  return result;
}

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
// }

// function oldestFromFirstSpecies(id) {
// }

// function increasePrices(percentage) {
// }

// function employeeCoverage(idOrName) {
// }

// console.log(employeeCoverage());

module.exports = {
  entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
