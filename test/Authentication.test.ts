import { connect } from './../lib/Index';
import { generateToken } from 'wordpress-jwt-auth'; // DEV

const conn = async () => {
    const host = 'http://localhost:8080/wordpress';
    const { token } = await generateToken(host, 'root', 'root');
    const authorization = `Bearer ${token}`;
    const wpaApi = await connect(host, {
        beforeRequest: (r) => ({
            ...r, headers: { ...r.headers, Authorization: authorization },
        }),
    });
    return wpaApi;
};

describe('connection', async () => {
    const host = 'http://localhost:8080/wordpress';
    test('', () => {
        expect(host).toBe('http://localhost:8080/wordpress');
    });

    await test('', async () => {
        const wpApi = await conn();
        const tags = await wpApi.tags.getTags();
        expect('').toBe('');
    });


});


