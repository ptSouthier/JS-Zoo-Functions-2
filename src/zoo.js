const data = require('./data');

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  return animals.find((currAnimal) => currAnimal.name === animal).residents.every((resident) => resident.age >= age);
}

function employeeByName(employeeName) {
  const employee = employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return employee ? employee : {}
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
  employees.push(newEmployee);
  return newEmployee;
}

function isManager(id) {
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
// }

// function animalCount(species) {
// }

// function entryCalculator(entrants = 0) {
// }

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
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
