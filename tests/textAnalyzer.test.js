const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');
//Count the total number of words
test('count total words', () => {
    expect(countWords('data/sample-text.txt')).toBe(207);
});

// Find the longest word
test('find longest word', () => {
    expect(findLongestWord('data/sample-text.txt')).toBe('authentication,');
});

// Count how many lines the file has
test('count lines', () => {
    expect(countLines('data/sample-text.txt')).toBe(1); 
});
