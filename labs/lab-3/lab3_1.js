let myArray = [1, 2, 3, 4, 5];
let oddNum = 0;
let evenNum = 0;
let evenNumber = myArray.filter(isEvenNumber)
function isEvenNumber(value, index, originalArray) {
    if (value % 2 === 0) {
        evenNum++;

    }
    else {
        oddNum++;

    }

}


console.log('Even numbers :', evenNum);
console.log('Odd numbers:', oddNum);