/**
 * <18: k ban
 * 18 -> 55: k gioi han
 * >56: 2 chai
 * */
const readline = require('readline-sync');
let clientAge = Number(readline.question('Your age'));

if(clientAge < 18 )
{
console.log('k ban');

} else if( clientAge <=55)
{
    console.log('unlimited');
    
}else{
    console.log('2 chai thoi!');
    
}