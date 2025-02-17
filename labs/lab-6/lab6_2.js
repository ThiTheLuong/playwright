const readlineSync = require('readline-sync');
const API_URL = 'https://jsonplaceholder.typicode.com';

(async function main() {
    await showMenu();
})();

async function showMenu() {
    let choice;
    do {
        console.log(`\n==== MENU ====`);
        console.log(`1. Get POST content and print the related post`);
        console.log(`2. Print all related posts`);
        console.log(`0. Exit`);
        choice = parseInt(readlineSync.question("Choose an option: "));
        
        switch (choice) {
            case 1:
                const userId = parseInt(readlineSync.question("Enter User ID: "));
                const postId = parseInt(readlineSync.question("Enter Post ID: "));
                await fetchSinglePost(userId, postId);
                break;
            case 2:
                const uid = parseInt(readlineSync.question("Enter User ID: "));
                await fetchAllPosts(uid);
                break;
            case 0:
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice, please try again.");
        }
    } while (choice !== 0);
}

async function fetchSinglePost(userId, postId) {
    try {
        const response = await fetch(`${API_URL}/posts/${postId}`);
        const post = await response.json();
        if (post.userId !== userId) {
            console.log("No matching post found.");
        } else {
            console.log(post);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function fetchAllPosts(userId) {
    try {
        const response = await fetch(`${API_URL}/posts?userId=${userId}`);
        const posts = await response.json();
        if (posts.length === 0) {
            console.log("No posts found for this user.");
        } else {
            console.log(posts);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
