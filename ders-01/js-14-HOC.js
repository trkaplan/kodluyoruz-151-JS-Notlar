// Higher order functions
// Bir fonksiyon alan ya da dönen fonksiyonlar
// Aşağıda sum ve multiply isimli iki methodumuz var.
// Bunlardaki ortak kodları calculate isimli tek bir methoda
// taşıyarak sadeleştireceğiz:
const numbers = [1, 2, 3];

function sum(initial, numbers) {
  const sumOfNumbers = numbers.reduce((item, acc) => {
    acc += item;
    return acc;
  }, initial);
  return sumOfNumbers;
}

sumFunc(10, numbers);

function multiply(initial, numbers) {
  const result = numbers.reduce((item, acc) => {
    acc *= item;
    return acc;
  }, initial);
  return result;
}
multiply(2, numbers);

// Higher Order Function ile Sadeleştirme:
function calculate(operation, initial, numbers) {
  const result = arr.reduce((item, acc) => {
    acc = operation(acc, item);
    return acc;
  }, initial);
  return result;
}

function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

calculate(sum, 10, numbers);

calculate(multiply, 2, numbers);
