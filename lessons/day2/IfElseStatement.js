const readline = require('readline-sync');
//let arrivalTime =7;
let arrivalTime = readline.question('ArriavalTime');
let isHeOnTime = arrivalTime ==7;

if(isHeOnTime)
{
    console.log('lets talk');

}
else
{
    console.log('write a letter');
}
