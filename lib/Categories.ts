import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import * as authenicate from 'wordpress-jwt-auth';
import
{ Category, CreateCategory, DeleteCategory, GetCategory, ListCategories, UpdateCategory }
    from './interface/Categories';
import { RequestHandler } from './interface/RequestHandler';

export const Categories = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'categories';
    return {
        /**
         * Create new category
         * @param options - options to create a category
         */
        createCategory: async (options: CreateCategory) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest({ method: 'POST', url: url, data: options });
            return response.data as Category;
        },

        /**
         * Delete existing category
         * @param options - options to delete a category
         * @default { force: true }
         */
        deleteCategory: async (id: number, options: DeleteCategory = { force: true }) => {
            const url = `${API_URL}/${objectEndpoint}/${id}`;
            const response = await makeRequest({ method: 'DELETE', url: url, data: options });
            const deleted = response.data.deleted;
            return deleted;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a categories
         */
        getCategories: async (options: ListCategories) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest({ method: 'GET', url: url, data: options });
            return response.data as Category[];
        },

        /**
         * get specific category
         * @param id - id of a category to get
         */
        getCategory: async (id: number, options: GetCategory = { context: 'view' }) => {
            const url = `${API_URL}/${objectEndpoint}/${id}`;
            const response = await makeRequest({ method: 'GET', url: url, data: options });
            return response.data as Category;
        },

        /**
         * Update existing category
         * @param options - options to update a category
         */
        updateCategory: async (id: number, options: UpdateCategory) => {
            const url = `${API_URL}/${objectEndpoint}/${id}`;
            const response = await makeRequest({ method: 'POST', url: url, data: options });
            return response.data as Category;
        },
    };
};
