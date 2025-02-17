const readlineSync = require('readline-sync');
const API_URL = 'https://jsonplaceholder.typicode.com';

function startMenu() {
    console.log(`\n==== MENU ====`);
    console.log(`1. Retrieve and display a specific post`);
    console.log(`2. Fetch and display all posts by a user`);
    console.log(`0. Exit`);
    handleUserSelection();
}

function handleUserSelection() {
    let option;
    do {
        option = parseInt(readlineSync.question("Choose an option: "));
        switch (option) {
            case 1:
                const userId = parseInt(readlineSync.question("Enter User ID: "));
                const postId = parseInt(readlineSync.question("Enter Post ID: "));
                fetchSinglePost(userId, postId);
                break;
            case 2:
                const uid = parseInt(readlineSync.question("Enter User ID: "));
                fetchAllPosts(uid);
                break;
            case 0:
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid choice, please try again.");
        }
    } while (option !== 0);
}

function fetchSinglePost(userId, postId) {
    fetch(`${API_URL}/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            if (post.userId !== userId) {
                console.log("No matching post found.");
            } else {
                console.log(post);
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}

function fetchAllPosts(userId) {
    fetch(`${API_URL}/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            if (posts.length === 0) {
                console.log("No posts found for this user.");
            } else {
                console.log(posts);
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}

startMenu();
