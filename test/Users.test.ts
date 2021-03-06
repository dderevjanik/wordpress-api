import { connectToWpApi } from './Connection';

describe('connection', async () => {
    const host = 'http://localhost:8080/wordpress';
    const userName = 'root';
    const password = 'root';

    test('should host', () => {
        expect(host).toBe('http://localhost:8080/wordpress');
    });

    test('should get users', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const users = await wpApi.users.getUsers({});
        expect(users.length).not.toBe(0);
    });

    test('should create user', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const user = await wpApi.users.createUser({
            email: 'testEmail1@gmail.com',
            password: 'password',
            username: 'userName1',
        });
        expect(user.email).toBe('testEmail1@gmail.com');
    });

    test('should update user', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const users = await wpApi.users.getUsers({});
        const userId = Math.max.apply(Math, users.map((u) => u.id));
        const user = await wpApi.users.updateUser(userId, { email: 'updateEmail@gmail.com' });
        expect(user.email).toBe('updateEmail@gmail.com');
    });

    test('should remove user', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const users = await wpApi.users.getUsers({});
        const userId = Math.max.apply(Math, users.map((u) => u.id));
        const deleted = await wpApi.users.deleteUser(userId);
        expect(deleted).toBe(true);
    });
});
