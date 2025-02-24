/**
 * ****************************
 * Asynchronous and CallBack Handling traditional way
 * 1. Send request -> get response
 * 2. Process response | Asynchronous
 * 3. Validate the response |Synchronous
 * Luc nay step truoc step cuoi phai truyen vao gia tri dau vao, va gia tri cua function duoc goi ke tiep
 * ****************************
 */

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// main return a promise
main();
async function main() {
    const response = await sendRequest(url);
    // chi dung await khi co promise co cai gi do dang cho
    // 1 asynch khong nhat thiet chua await nhung await phai nam trong async function
    const statusCode = await processResponse(response);
    // khong chua await
    validateResponse(statusCode);
    console.log("4. Done");
}

    
/* Mimic Asynchronous */
function sendRequest(url) {
    console.log(`1. Sending request to ${url}...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ status: 200 });
        }, 2 * 1000);
    })
}

/* Mimic Async */
function processResponse(response) {
    console.log(`2. Processing response----`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(response.status);
        }, 3 * 1000);
})}
/* Mimic Synchronous */
function validateResponse(responseStatus) {
    console.log(`3. Validating response----`);
    if (responseStatus === 200) {
        console.log(`PASS`);
    } else {
        console.log(`FAILED`);
    }
}