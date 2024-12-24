const readline = require('readline-sync');
// input from user
let height = Number(readline.question('What is your height(m):'));
let weight = Number(readline.question('What is your weight(kg):'));

//

// caculate BIM
let BMI = weight / (height ** 2);
//
if (BMI < 18.5) {
    console.log('Underweight. BMI is:',BMI.toFixed(2),'You should eat more and more');

} else if (BMI <= 24.9) {
    console.log('Normal weight. BMI is:',BMI.toFixed(2),'Keep going!');

} else if (BMI <= 29.9) {
    console.log('Overweight. BMI is:', BMI.toFixed(2),'Eat less,pls!');

} else {
    console.log('Obesity. BMI is:',BMI.toFixed(2),'You should lose weight');

}
