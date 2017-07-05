import { Category, CreateCategory, DeleteCategory, GetCategory, ListCategories, UpdateCategory } from './interface/Categories';
import { RequestHandler } from './interface/RequestHandler';
export declare const Categories: (API_URL: string, makeRequest: RequestHandler) => {
    createCategory: (options: CreateCategory) => Promise<Category>;
    deleteCategory: (id: number, options?: DeleteCategory) => Promise<any>;
    getCategories: (options: ListCategories) => Promise<Category[]>;
    getCategory: (id: number, options?: GetCategory) => Promise<Category>;
    updateCategory: (id: number, options: UpdateCategory) => Promise<Category>;
};
