// arguments object  - no longer bound with arrow functions
const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: 'Billy',
  cities: ['Norman', 'Chicago', 'Orlando'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
  numbers: [2, 16, 90],
  multiplyBy: 1,
  multiply() {
    return this.numbers.map((num) => this.multiplyBy * num);
  }
};
console.log(multiplier.multiply());