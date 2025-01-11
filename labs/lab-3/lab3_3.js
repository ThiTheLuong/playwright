let myArray = [12, 34, 1, 16, 28]
for (let index = 0; index < myArray.length; index++) {
    for (let i = 0; i < myArray.length - index; i++) {

        if (myArray[i] > myArray[i + 1]) {
            let temp = myArray[i];
            myArray[i] = myArray[i + 1];
            myArray[i + 1] = temp;
        }

    }

} console.log(myArray);
