function sum(...numbers) { return numbers.reduce((acc, num) => acc + num, 0); }
function subtract(a, b) { return a - b; }
function multiply(...numbers) { return numbers.reduce((acc, num) => acc * num, 1); }
function max(...numbers) { return Math.max(...numbers); }
function min(...numbers) { return Math.min(...numbers); }

module.exports = { sum, subtract, multiply, max, min };
