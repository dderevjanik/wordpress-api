import { connectToWpApi } from './Connection';

describe('connection', async () => {
    const host = 'http://localhost:8080/wordpress';
    const userName = 'root';
    const password = 'root';

    await test('try create comment', async () => {
        try {
            const wpApi = await connectToWpApi(host, userName, password);
            const comment = await wpApi.comments.createComment({ content: 'testContent2', post: 1, status: '1' });
            expect(comment.status).toBe('approved');
        }
        catch (e) {
            console.log(e);
        }
    });

    await test('try get comments', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const comments = await wpApi.comments.getComments({});
        expect(comments.length).not.toBe(0);
    });

    await test('try update comment', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const comments = await wpApi.comments.getComments({ status: '1' });
        const commentId = Math.max.apply(Math, comments.map((c) => { return c.id; }));
        const comment = await wpApi.comments.updateComment(commentId, { status: '0' });
        expect(comment.status).toBe('hold');
    });

    await test('try remove comment', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const comments = await wpApi.comments.getComments({ status: '0' });
        const commentId = Math.max.apply(Math, comments.map((c) => { return c.id; }));
        const deleted = await wpApi.comments.deleteComment(commentId);
        expect(deleted).toBe(true);
    });
});


