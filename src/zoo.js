const data = require('./data');

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id))
}

function animalsOlderThan(animal, age) {
}

// function employeeByName(employeeName) {
// }

// function createEmployee(personalInfo, associatedWith) {
// }

// function isManager(id) {
// }

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
  // employeeByName,
  // employeeCoverage,
  // addEmployee,
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
