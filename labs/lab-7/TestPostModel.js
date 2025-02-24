const RequestHandler = require('./RequestHandler');
const readline = require('readline-sync');


const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

main();

async function main() {
    const requestHandler = new RequestHandler();
    let choice;

    do {
        console.log(`\n========================`);
        console.log(`      MAIN MENU      `);
        console.log(`========================`);
        console.log(`1  View a post`);
        console.log(`2️ View all posts by user`);
        console.log(`0️  Exit`);
        console.log(`========================`);

        choice = parseInt(readline.question(" Please select an option: "), 10);

        switch (choice) {
            case 1:
                const userId = Number(readline.question(' Enter User ID: '));
                const postId = Number(readline.question('Enter Post ID: '));
                console.log(`\n Fetching details for User ID: ${userId}, Post ID: ${postId}...\n`);
                await requestHandler.printTargetPost(POST_ENDPOINT, userId, postId);
                break;

            case 2:
                const userIdAll = Number(readline.question(' Enter User ID: '));
                console.log(`\n Fetching all posts for User ID: ${userIdAll}...\n`);
                await requestHandler.printAllPosts(POST_ENDPOINT, userIdAll);
                break;

            case 0:
                console.log(' Exiting program. See you next time!');
                break;

            default:
                console.log('Invalid choice. Please try again.');
        }

    } while (choice !== 0);
}