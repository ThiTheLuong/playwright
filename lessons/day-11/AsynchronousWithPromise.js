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
// Callback hell
sendRequest(url)
    .then(function (response) {
        return processResponse(response);
        })
    .then(function (statusCode) {
        validateResponse(statusCode);
        console.log("4. Done");
        })
    .catch(function (error) {
        console.log(error);
    });
/* Mimic Asynchronous */
function sendRequest(url) {
    console.log(`1. Sending request to ${url}...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ status: 200 });
        }, 2 * 1000);
    })
/*     setTimeout(function () {
        callbackFn({ status: 200 });
    }, 2 * 1000); */
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