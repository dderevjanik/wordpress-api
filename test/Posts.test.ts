import { connectToWpApi } from './Connection';

describe('connection', async () => {
    const host = 'http://localhost:8080/wordpress';
    const userName = 'root';
    const password = 'root';

    test('should create post', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const post = await wpApi.posts.createPost({
            author: 1,
            categories: ['1'],
            content: 'wap-test-content',
            title: 'some-title',
        });
        expect(post.author).toBe(1);
    });

    // test('should get posts', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const posts = await wpApi.posts.getPosts({ categories: ['1'] })
    //     expect(posts.length).not.toBe(0);
    // });

    // test('should update post', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const posts = await wpApi.posts.getPosts({ categories: ['1'] });
    //     const postId = posts[posts.length - 1].id;
    //     const post = await wpApi.posts.updatePost(postId, { status: 'publish' });
    //     expect(post.status).toBe('publish');
    // });

    // test('should remove post', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const posts = await wpApi.posts.getPosts({ categories: ['1'] });
    //     const postId = posts[posts.length - 1].id;
    //     const deleted = await wpApi.posts.deletePost(postId);
    //     expect(deleted).toBe(true);

    // });
});
