const fs = require('fs');


// Count the total number of words
function countWords(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data.split(/\s+/).filter(Boolean).length;
}

// Find the longest word
function findLongestWord(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    const words = data.split(/\s+/);
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

// Count how many lines the file has
function countLines(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data.split('\n').length;
}

module.exports = { countWords, findLongestWord, countLines };


console.log(countWords('data/quotes.txt'));
console.log(findLongestWord('data/quotes.txt'));
console.log(countLines('data/quotes.txt'));
