console.log("1. CHay toi nha Teo");
// setTimeout(callbackFunction.bind({age:18},"Tun"), 1*1000);
// cach1
waitForResponse().then(goToTheCoffeeShop);
// console.log(waitForResponse());
// cach2
// waitForResponse().then(goToTheCoffeeShop).catch(errorHandler);


console.log("3. Chay toi quan cafe");

function goToTheCoffeeShop(){
    console.log("3. Chay toi quan cafe");
}

function callbackFunction(name) {
    console.log(this.age);
    
    console.log(`2. ${name} oi, uong cafe khong?`);
}
// Wrap a promise function is a promise
/**
 * ****************************
 * MCP co 1 server pupeteer, co 1 function getHtmlContent
 * Promise se tra ve status: pending, fulfilled, rejected
 * ****************************
 */
function waitForResponse(){
    // nhan vao 1 call back function, function nay se chua 1 tac vu goi lai bat dong bo
    return new Promise(wrapper)
}
// wrapper se dua vao 2 thong so:"resolve" va "reject"; resolve la 1 function khi thuc hien thanh cong, reject la function khi thuc hien that bai

function wrapper(resolve, reject){
    // resolve va reject la 2 callbackfunction
    setTimeout(function(){
        console.log("2. Teo oi uong cafe khong?");
        resolve();
    }, 1*1000);

}