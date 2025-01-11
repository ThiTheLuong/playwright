let myArray = [1, 3,8]
//del array
//even number
for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] % 2 != 0) {

        myArray.splice(index, 1)
        index--;
    }

}


console.log(myArray);

function isOddNumber(number){
    return number %2 !==0;

}
function RemoveElementFromArray(number){
    return number %2 !==0;

}
