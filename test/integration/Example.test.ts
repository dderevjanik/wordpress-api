import { Container } from 'dockerode';
import { host, runWorpdressTestContainer, waitMs } from '../Utils';
import { connect } from './../../lib/Index';
import { connectToWpApi } from '../Connection';

const port = 8001;
let container: Container;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 18000;

describe('Example test', async () => {
    const host = '192.168.99.100:' + port;
    const userName = 'admin';
    const password = 'admin';

    beforeAll(async () => {
        container = await runWorpdressTestContainer(port);
        console.log('watafak');
    });

    /**
     * test abou users endpoint
     * 192.168.99.100:8005/wp-json/wp/v2/users
     */
    test('try get users', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const users = await wpApi.users.getUsers({});
        expect(users.length).not.toBe(0);
    });

    // test('try create user', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const user = await wpApi.users.createUser({ email: 'testEmail1@gmail.com', password: 'password', username: 'userName1' });
    //     expect(user.email).toBe('testEmail1@gmail.com');
    // });

    // test('try update user', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const users = await wpApi.users.getUsers({});
    //     const userId = Math.max.apply(Math, users.map((u) => { return u.id; }))
    //     const user = await wpApi.users.updateUser(userId, { email: 'updateEmail@gmail.com' });
    //     expect(user.email).toBe('updateEmail@gmail.com');
    // });

    // test('try remove user', async () => {
    //     const wpApi = await connectToWpApi(host, userName, password);
    //     const users = await wpApi.users.getUsers({});
    //     const userId = Math.max.apply(Math, users.map((u) => { return u.id; }))
    //     const deleted = await wpApi.users.deleteUser(userId);
    //     expect(deleted).toBe(true);
    // });

    afterAll(async () => {
        await container.stop();
        await container.remove({ v: true });

    });

});
