// function vs arrow function
function sayHi1(name) {
  return "Hi!" + name;
}
const sayHi2 = (name) => "Hi! " + name;

console.log(sayHi1("Ali"));
console.log(sayHi2("Ali"));

// Object concatenation: Object.assign vs Spread Operator

var obj1 = { a: 1, b: 2 };
var obj2 = { a: 2, c: 3, d: 4 };

var obj3 = Object.assign(obj1, obj2);
const obj4 = { ...obj1, ...obj2 };
