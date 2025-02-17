function isEvenNumber(number) {
    if (number == 0) {
        return false;
    } else {
        return number % 2 === 0;
    }
}


function isOddNumber(number) {
    if (number == 0) {
        return false;
    } else {
        return number % 2 !== 0;
    }
}

module.exports = { isEvenNumber, isOddNumber };
/* module.exports = {
    teo:isEvenNumb, 
    ti:isOddNumb
}; */