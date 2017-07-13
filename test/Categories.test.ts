import { connectToWpApi } from './Connection';

describe('connection', async () => {
    const host = 'http://localhost:8080/wordpress';
    const userName = 'root';
    const password = 'root';

    test('should create Category', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const category = await wpApi.categories.createCategory({ name: 'testCategory' });
        expect(category.name).toBe('testCategory');
    });

    test('should get categories', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const categories = await wpApi.categories.getCategories({});
        expect(categories.length).not.toBe(0);
    });

    test('should update category', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const categories = await wpApi.categories.getCategories({});
        const categoryId = Math.max.apply(Math, categories.map((c) => c.id));
        const category = await wpApi.categories.updateCategory(categoryId, { name: 'updatedName' });
        expect(category.name).toBe('updatedName');
    });

    test('should remove category', async () => {
        const wpApi = await connectToWpApi(host, userName, password);
        const categories = await wpApi.categories.getCategories({});
        const categoryId = Math.max.apply(Math, categories.map((c) => c.id));
        const deleted = await wpApi.categories.deleteCategory(categoryId);
        expect(deleted).toBe(true);
    });
});
