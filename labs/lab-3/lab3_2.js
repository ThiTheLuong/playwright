let myArray = [1, 2, 3, 4, 5];
//assume that the first num is min and max
let min = myArray[0];
let max = myArray[0];
//check condition
for (let index = 1; index < myArray.length; index++) {
    if (myArray[index] < min) {
        min = myArray[index];
    } if (myArray[index] > max) {
        max = myArray[index];
    }
} 
// result
console.log('Min is:', min);
console.log('Max is:', max);