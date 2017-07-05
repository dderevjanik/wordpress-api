import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Category, CreateCategory, DeleteCategory, GetCategory, ListCategories, UpdateCategory } from './interface/Categories';
export declare const Categories: (API_URL: string, makeRequest: (options: AxiosRequestConfig) => Promise<AxiosResponse>) => {
    createCategory: (options: CreateCategory) => Promise<Category>;
    deleteCategory: (id: number, options?: DeleteCategory) => Promise<any>;
    getCategories: (options: ListCategories) => Promise<Category[]>;
    getCategory: (id: number, options?: GetCategory) => Promise<Category>;
    updateCategory: (id: number, options: UpdateCategory) => Promise<Category>;
};
