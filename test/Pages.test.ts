import { connectToWpApi } from './Connection';

describe('connection', async () => {
    const host = 'http://localhost:8080/wordpress';
    const userName = 'root';
    const password = 'root';

    test('should create page', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const page = await wpApi.pages.createPage({ comment_status: 'closed' });
        expect(page.comment_status).toBe('closed');
    });

    // test('should get pages', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const pages = await wpApi.pages.getPages({});
    //     expect(pages.length).not.toBe(0);
    // });

    // test('should update page', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const pages = await wpApi.pages.getPages({});
    //     const pageId = pages[pages.length - 1].id;
    //     const page = await wpApi.pages.updatePage(pageId, { comment_status: 'open' });
    //     expect(page.content).toBe('updateContet');
    // });

    // test('should remove page', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const pages = await wpApi.pages.getPages({});
    //     const pageId = pages[pages.length - 1].id;
    //     const deleted = await wpApi.pages.deletePage(pageId);
    //     expect(deleted).toBe(true);
    // });
});
