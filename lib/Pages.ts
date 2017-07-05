import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import * as authenicate from 'wordpress-jwt-auth';
import { CreatePage, DeletePage, ListPages, Page, UpdatePage } from './interface/Pages';

export const Pages = (API_URL: string, makeRequest: (options: AxiosRequestConfig) => Promise<AxiosResponse>) => {
    const objectEndpoint = 'pages';
    return {
        /**
         * get specific page
         * @param id - id of a page to get
         */
        getPage: async (pageId: number) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}/${pageId}` });
            return response.data as Page;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a pages
         * @returns {Post[]} array of pages
         */
        getPages: async (options: ListPages) => {
            const queryString = QueryString.stringify(options);;
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as Page[];
        },

        /**
         * Create new page
         * @param options - options to create a page
         */
        createPage: async (options: CreatePage) => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as Page;
        },

        /**
         * Update existing page
         * @param options - options to update a page
         */
        updatePage: async (pageId: number, options: UpdatePage) => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}/${pageId}`, data: options });
            return response.data as Page;
        },

        /**
         * Delete existing page
         * @param options - options to delete a page
         * @default { force: true }
         */
        deletePage: async (pageId: number, options: DeletePage = { force: true }) => {
            const response = await makeRequest({ method: 'DELETE', url: `${API_URL}/${objectEndpoint}/${pageId}`, data: options });
            const deleted = response.data.deleted;
            return deleted;
        },
    };
};
