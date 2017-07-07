import { connect } from './../lib/Index';
import { generateToken } from 'wordpress-jwt-auth'; // DEV
import { connectToWpApi } from './Connection';


describe('connection', async () => {
    const host = 'http://localhost:8080/wordpress';
    const userName = 'root';
    const password = 'root';
    test('what the fuck', () => {
        expect(host).toBe('http://localhost:8080/wordpress');
    });


    await test('', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const tags = await wpApi.users.getUsers({});
        expect(wpApi.categories).not.toBe(1);
    });

    // await test('createUser', async () => {
    //     const user = await wpApi.users.createUser({ email: 'testEmail1@gmail.com', password: 'password', username: 'userName1' });
    //     expect('testEmail1@gmail.com').toBe(user.email);
    //     expect('password').toBe(user.password);
    //     expect('userName1').toBe(user.username);
    // });
    return;

});


