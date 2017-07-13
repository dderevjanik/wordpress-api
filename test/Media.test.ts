import { connectToWpApi } from './Connection';

describe('connection', async () => {
    const host = 'http://localhost:8080/wordpress';
    const userName = 'root';
    const password = 'root';

    test('should host', () => {
        expect(host).toBe('http://localhost:8080/wordpress');
    });

    // test('should create media', async () => {
    //     try {
    //         const wpApi = await connectToWpApi(host, userName, password);
    //         const media = await wpApi.media.createMedia({ author: 1, alt_text: 'altText' });
    //         expect(media.author).toBe('1');
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // });

    // test('should get medias', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const medias = await wpApi.media.getAllMedia({});
    //     expect(medias.length).not.toBe(0);
    // });

    // test('should update media', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const medias = await wpApi.media.getAllMedia({});
    //     const mediaId = Math.max.apply(Math, medias.map((c) => { return c.id; }));
    //     const media = await wpApi.media.updateMedia(mediaId, { alt_text: 'updatedText' });
    //     expect(media.alt_text).toBe('updatedText');
    // });

    // test('should remove media', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const medias = await wpApi.media.getAllMedia({});
    //     const mediaId = Math.max.apply(Math, medias.map((c) => { return c.id; }))
    //     const deleted = await wpApi.media.deleteMedia(mediaId);
    //     expect(deleted).toBe(true);
    // });
});
