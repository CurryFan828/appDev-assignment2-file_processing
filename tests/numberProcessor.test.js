const { sumNumbers, findHighest, findLowest, average } = require('../src/numberProcessor');

// Calculate the sum of all numbers
test('sum numbers', () => {
    expect(sumNumbers('data/sample-numbers.txt')).toBe(2597); 
});

// Find the highest and lowest numbers
test('highest number', () => {
    expect(findHighest('data/sample-numbers.txt')).toBe(96); 
});

test('lowest number', () => {
    expect(findLowest('data/sample-numbers.txt')).toBe(73);
});

// Calculate the average
test('average', () => {
    expect(average('data/sample-numbers.txt')).toBe(86.56666666666666); 
});
