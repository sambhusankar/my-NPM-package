// index.js

// Function to add numbers
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Function to subtract numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply numbers
function multiply(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

// Function to find the maximum number
function max(...numbers) {
    return Math.max(...numbers);
}

// Function to find the minimum number
function min(...numbers) {
    return Math.min(...numbers);
}

// Export functions
// Support both CommonJS and ES Modules
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = { sum, subtract, multiply, max, min };
} else {
    export { sum, subtract, multiply, max, min };
}
