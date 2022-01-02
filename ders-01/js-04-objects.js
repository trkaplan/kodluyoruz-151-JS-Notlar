// Declaring an Object
const car = {
  brand: "Volvo",
  year: 2021,
  speedingTime: 7.2,
};

console.log(car.year); // outputs: 2021
console.log(car.engine); // outputs: undefined
console.log(car1.engine); // outputs: Uncaught ReferenceError: car1 is not defined

// Keys, Values, Entries
const listOfKeys = Object.keys(car);
const listOfValues = Object.values(car);
const listOfEntries = Object.entries(car);

// Print listOfValues array in console:
listOfValues.map((item) => {
  console.log(item);
});

// Setting a property with Dot Notation vs Bracket Notation
car.year = 2022;
car["year"] = 2022;

// add a dynamic key name
n = 1;
const feature = "f" + n;

car[feature] = "feature " + n + "'s Value";
car.color = "red";
console.log(car);

// types of Object vs Array
const user1 = { name: "Name 1", city: "İstanbul" };
const users = ["user 1", "user 2"];

console.log(typeof user1); // 'object'
console.log(typeof users); // 'object'
