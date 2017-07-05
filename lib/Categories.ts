import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import * as authenicate from 'wordpress-jwt-auth';
import { Category, CreateCategory, DeleteCategory, GetCategory, ListCategories, UpdateCategory } from './interface/Categories';

export const Categories = (API_URL: string, makeRequest: (options: AxiosRequestConfig) => Promise<AxiosResponse>) => {
    const objectEndpoint: string = 'categories';
    return {
        /**
         * get specific category
         * @param id - id of a category to get
         */
        getCategory: async (id: number, options: GetCategory = { context: 'view' }) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            return response.data as Category;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a categories
         */
        getCategories: async (options: ListCategories) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as Category[];
        },

        /**
         * Create new category
         * @param options - options to create a category
         */
        createCategory: async (options: CreateCategory) => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as Category;
        },

        /**
         * Update existing category
         * @param options - options to update a category
         */
        updateCategory: async (id: number, options: UpdateCategory) => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            return response.data as Category;
        },

        /**
         * Delete existing category
         * @param options - options to delete a category
         * @default { force: true }
         */
        deleteCategory: async (id: number, options: DeleteCategory = { force: true }) => {
            const response = await makeRequest({ method: 'DELETE', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            const deleted = response.data.deleted;
            return deleted;
        },
    };
};
