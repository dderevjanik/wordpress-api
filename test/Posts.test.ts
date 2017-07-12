import { connectToWpApi } from './Connection';

describe('connection', async () => {
    const host = 'http://localhost:8080/wordpress';
    const userName = 'root';
    const password = 'root';

    test('try create post', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const post = await wpApi.posts.createPost({ author: 1, content: 'wap-test-content', title: 'some-title', categories: ['1'] });
        expect(post.author).toBe(1);
    });

    // test('try get posts', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const posts = await wpApi.posts.getPosts({ categories: ['1'] })
    //     expect(posts.length).not.toBe(0);
    // });

    // test('try update post', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const posts = await wpApi.posts.getPosts({ categories: ['1'] });
    //     const postId = posts[posts.length - 1].id;
    //     const post = await wpApi.posts.updatePost(postId, { status: 'publish' });
    //     expect(post.status).toBe('publish');
    // });

    // test('try remove post', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const posts = await wpApi.posts.getPosts({ categories: ['1'] });
    //     const postId = posts[posts.length - 1].id;
    //     const deleted = await wpApi.posts.deletePost(postId);
    //     expect(deleted).toBe(true);

    // });
});


