const readline = require('readline-sync');
// input from user
let height = Number(readline.question('What is your height(m):'));

let weight = Number(readline.question('What is your weight(kg):'));
// check if the user input number or not?
if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    console.log("Height and Weight must be a number ");
    return;
}
// caculate BIM
let BMI = weight / (height ** 2);
//
if (BMI < 18.5) {
    console.log('Underweight. You should eat more and more');

} else if (BMI <= 24.9) {
    console.log('Normal weight. Keep going!');

} else if (BMI <= 29.9) {
    console.log('Overweight. Eat less fast food...');

} else {
    console.log('Obesity. Let hit the gym and have healthy lifestyle');

}

