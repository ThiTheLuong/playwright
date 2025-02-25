const RequestHandler = require('./RequestHandler');
const readline = require('readline-sync');

async function fetchPosts() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts', {
        timeout: 60000, // 60 seconds timeout
    });
    return response.json();
}

async function main() {
    const requestHandler = new RequestHandler();
    let choice;

    do {
        console.log(`========================`);
        console.log(`         MAIN MENU      `);
        console.log(`========================`);
        console.log(`1. View a post`);
        console.log(`2. View all posts by user`);
        console.log(`0. Exit`);
        console.log(`========================`);

        choice = parseInt(readline.question(" Please select an option: "), 10);

        switch (choice) {
            case 1:
                const userId = Number(readline.question(` Enter User ID: `));
                const postId = Number(readline.question(` Enter Post ID: `));
                console.log(`\n Fetching details for User ID: ${userId}, Post ID: ${postId}...\n`);
                break;
            case 2:
                const userIdAll = Number(readline.question(` Enter User ID: `));
                console.log(`\n Fetching all posts for User ID: ${userIdAll}...\n`);

                const posts = await fetchPosts();
                await requestHandler.printAllPosts(posts, userIdAll);
                break;
            case 0:
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== 0);
}

main();
