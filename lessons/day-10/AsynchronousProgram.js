/**
 * ****************************
 * Asynchronous Programming
 * js khong cho 1 buoc truoc no xong, no ghi nhan buoc nao xong thi tra ket qua ve
 * callback function la 1 ham co the truyen vao 1 ham khac
 * ****************************
 */
console.log("1. CHay toi nha Teo");


//  nhan vao dinh nghia cua 1 ham, I will call you back when I finish
setTimeout(callbackFunction, 2000);
console.log("3. Chay toi quan cafe");
function callbackFunction() {
    console.log("2. Teo oi uong cafe khong?");
}

// thu hien asynchronous programming

console.log("1. CHay toi nha Teo");
setTimeout(callbackFunction.bind({age:18},"Tun"), 1*1000);
console.log("3. Chay toi quan cafe");
function callbackFunction(name) {
    console.log(`2. Teo oi ${name} uong cafe khong?`);
}