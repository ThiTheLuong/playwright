//continue, break
let array = [1, 2, 3, 4, 5];
let targetIndex = -1;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === 3) {
        targetIndex = i;
        break;
    }
} if (targetIndex < 0) {
    console.log('No number found');


} else {
    console.log(`The first number found is: ${targetIndex}`);

}
//continue
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === 3) {
       continue;
    }
    else{
        console.log(element);
        
    }
}
// an array of positive integer number, num 3 among them. Increased up to 4 for the rest 
function increaseValue(array) {
    
    
}