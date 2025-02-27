export function sum(...numbers) { return numbers.reduce((acc, num) => acc + num, 0); }
export function subtract(a, b) { return a - b; }
export function multiply(...numbers) { return numbers.reduce((acc, num) => acc * num, 1); }
export function max(...numbers) { return Math.max(...numbers); }
export function min(...numbers) { return Math.min(...numbers); }
