const readline = require('readline-sync');

let inputNum = Number(readline.question('Please give me a number:'));
//check if this is a odd or even number
// if this number is devide /2 this is number
// else odd
if (isNaN(inputNum) || inputNum <= 0) {
    console.log("You should input a number ");
    return;
}
if (inputNum % 2 === 0) {
    console.log(inputNum, 'is a even number');

} else {
    console.log(inputNum, 'is a odd');

}