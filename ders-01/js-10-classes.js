// Class
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes?retiredLocale=tr

// JS Classes ECMAScript 2015 (ES6)
// ECMAScript 2015 introduces class syntax to JavaScript as a way to write reusable classes using easier, cleaner syntax,
// which is more similar to classes in C++ or Java. In this section we'll convert the Person and Teacher examples from
// prototypal inheritance to classes, to show you how it's done.
// are primarily syntactical sugar over JavaScript's existing prototype-based inheritance.

class Rectangle1 {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

function Rectangle2(width, height) {
  this.width = width;
  this.height = height;
}

const rect1 = new Rectangle1(1, 2);
const rect2 = new Rectangle2(1, 2);
console.log(rect1);
console.log(rect2);
