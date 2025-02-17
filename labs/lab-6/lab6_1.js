/**
 * ****************************
 * General info:
    url: https://jsonplaceholder.typicode.com
    Library: fetch
    slugs:
    GET	/posts
    9.1
        Please using PROMISE and then able to solve this
        a. Allow user to input an userid and postId, print out that post content: 
        Demostrate the following steps:
            ====MENU===
            1. Get POST content 
            2. Print all related posts
            0. Exit!
            =========== 
        b. Print all posts for that user
 * ****************************
 */
const readline = require('readline-sync');
const { getUserInput } = require('../../lessons/util/ConsoleController.js')
const url = 'https://jsonplaceholder.typicode.com';
userInterface();
function userInterface() {
    console.log(`====MENU===`);
    console.log(`1. Get POST content info then Print the related post`);
    console.log(`2. Print all related posts`);
    console.log(`0. Exit!`);
    getUserSelect();
}
function getUserSelect() {
    let isValidOption = true;
    const option = getUserInput();
    switch (option) {
        case 0:
            isValidOption = false;
            break;
        case 1:
            const userID = parseInt(readline.question(`Please enter your user ID: ... \t`));
            const postID = parseInt(readline.question(`Please enter the post ID ... \t`));
            getPostContent(userID, postID);
            break;
        case 2:
            const userId = parseInt(readline.question(`Please enter your user ID: ... \t`));
            getAllPostContent(userId);
            break;
        default:
            console.log(`Input again`);
            break;
    }
    // }

    function getAllPostContent(userId) {
        fetch(`${url}/posts?userId=${userId}`)
            .then(getResponse)
            .then(printJSONResponse)
            .catch(showError);
    }
}
function getPostContent(userId, postId) {
    fetch(`${url}/posts?userId=${userId}&id=${postId}`)
        .then(getResponse)
        .then(printJSONResponse)
        .catch(showError);
}


function getResponse(rawResponse) {

    return rawResponse.json();
}
function showError(error) {
    console.log(`API has problem with ${error}`);
}
function printJSONResponse(rawResponseJSON) {
    if (rawResponseJSON.length === 0) {
        console.log(`No data found or invalid input`);

        return;
    }
    console.log(rawResponseJSON);

}
