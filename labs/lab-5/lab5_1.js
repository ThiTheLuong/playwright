const readline = require('readline-sync');
const givenString = readline.question("Please enter a sentence: ");
// const givenString = "Hello ban, tui ten Teo,ban cung cung ten Teo luon ah ?";
const individualWords = givenString.replace(/[^\w\s]/gi, "").replace(/\s+/g, " ").trim().split(" ");
const wordCounts = countWords(individualWords);
printWordCounts(wordCounts);

function countWords(wordsArray) {
    let wordObj = {};
    for (const word of wordsArray) {
        if (!(word in wordObj)) {
            wordObj[word] = 1;
        } else {
            wordObj[word]++;
        }
    }
    return wordObj;
}

function printWordCounts(wordCounts) {
    for (const word in wordCounts) {
        console.log(`\t ${word}: ${wordCounts[word]} \n`);
    }
}