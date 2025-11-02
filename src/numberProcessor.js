const fs = require('fs');

// Calculate the sum of all numbers
function sumNumbers(filePath) {
    const numbers = fs.readFileSync(filePath, 'utf-8')
        .split('\n').filter(Boolean).map(Number);
    return numbers.reduce((a, b) => a + b, 0);
}


// Find the highest and lowest numbers
function findHighest(filePath) {
    const numbers = fs.readFileSync(filePath, 'utf-8')
        .split('\n').filter(Boolean).map(Number);
    return Math.max(...numbers);
}

// Find the lowest number
function findLowest(filePath) {
    const numbers = fs.readFileSync(filePath, 'utf-8')
        .split('\n').filter(Boolean).map(Number);
    return Math.min(...numbers);
}

// Calculate the average
function average(filePath) {
    const numbers = fs.readFileSync(filePath, 'utf-8')
        .split('\n').filter(Boolean).map(Number);
    return sumNumbers(filePath) / numbers.length;
}

module.exports = { sumNumbers, findHighest, findLowest, average };

console.log(sumNumbers('data/sample-numbers.txt'));
console.log(findHighest('data/sample-numbers.txt'));
console.log(findLowest('data/sample-numbers.txt'));
console.log(average('data/sample-numbers.txt'));
