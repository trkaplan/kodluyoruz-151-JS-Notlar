// Hoisting Sample & Function Expression vs Function Declaration

sayHi();

sayHiVar();

// Function Declaration (Declarations are loaded before any code can run.)
function sayHi() {
  console.log("Hi!");
}

// Function Expression
var sayHiVar = function () {
  console.log("Hi! - var");
};

// outputs:
// Hi!
// VM41:3 Uncaught TypeError: sayHiVar is not a function`;
