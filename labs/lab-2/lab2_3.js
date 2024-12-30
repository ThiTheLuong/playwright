const readline = require('readline-sync');
// input from user
let height = Number(readline.question('What is your height(m):'));
let weight = Number(readline.question('What is your weight(kg):'));

//
if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    console.log("Height and Weight must be a number ");
    return;
}

// caculate BIM
let BMI = weight / (height ** 2);
// idea weight
let minWeight = 18.5 * (height ** 2);
let maxWeight = 24.9 * (height ** 2);

if (BMI < 18.5) {
    console.log('Underweight. BMI is:', BMI.toFixed(2), 'You should eat more and mor, You should get at least', (minWeight - weight).toFixed(2), 'kg');

} else if (BMI <= 24.9) {
    console.log('Normal weight. BMI is:', BMI.toFixed(2), 'Keep going!');

} else if (BMI <= 29.9) {
    console.log('Overweight. BMI is:', BMI.toFixed(2), 'Eat less,pls!, You should lose at least', (weight - maxWeight).toFixed(2), 'kg');

} else {
    console.log('Obesity. BMI is:', BMI.toFixed(2), 'You should lose weight, You should lose at least', (weight - maxWeight).toFixed(2), 'kg');

}
