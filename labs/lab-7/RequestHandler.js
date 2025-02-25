// import Post class    
const Post = require('./Post');

class RequestHandler {

    async _getAllPosts(POST_ENDPOINT) {
        try {
            const response = await fetch(POST_ENDPOINT);
            const allPosts = await response.json();


            return allPosts

                .map(post => new Post(post.userId, post.id, post.title, post.body));
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }


    async printTargetPost(POST_ENDPOINT, userId, postId) {

        const allPosts = await this._getAllPosts(POST_ENDPOINT);
        const userPosts = allPosts.filter(post => post.userId === userId);
        const targetPost = userPosts.find(post => post.postId === postId);

        if (targetPost) {
            console.log(targetPost);

        } else {
            console.log(`Post with ID ${postId} not found!`);
        }
    }

    async printAllPosts(POST_ENDPOINT, userId) {
        const allPosts = await this._getAllPosts(POST_ENDPOINT);
        const userPosts = allPosts.filter(post => post.userId === userId);

        if (userPosts.length > 0) {
            console.log(`\nAll Posts for User ID: ${userId}\n`);
            userPosts.forEach(post => {
                console.log(post);
            });
        } else {
            console.log(`No posts found for User ID ${userId}`);
        }
    }


}
module.exports = RequestHandler;