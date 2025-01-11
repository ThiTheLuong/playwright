let myArray =[1,2,3,4,5]

let returnMyArray =myArray.map(myrule);
console.log(returnMyArray);
console.log(myArray);


function myrule(value,index,array) {
    return value *2;
}
//for each
array.forEach(element => {
    
});