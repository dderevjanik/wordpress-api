import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import { CreateTag, DeleteTag, GetTag, ListTags, Tag, UpdateTag } from './interface/Tags';
import { RequestHandler } from './interface/RequestHandler';

export const Tags = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'tags';
    return {
        /**
         * Create a tag
         * @param options - options to create a tag
         */
        createTag: async (options: CreateTag) => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as Tag;
        },

        /**
         * Remove a tag
         * @param id - tag id to remove
         * @param options - remove options
         */
        deleteTag: async (id: number, options: DeleteTag = { force: true }) => {
            const response = await makeRequest({ method: 'DELETE', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            return response.data.deleted;
        },

        /**
         * Get specific tag with id
         * @param id - tag id
         * @param options - get options
         */
        getTag: async (id: number, options: GetTag = { context: 'view' }) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            return response.data as Tag;
        },

        /**
         * Get all Tags
         * @param options - options to retrieve a posts
         */
        getTags: async (options: ListTags = {}) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as Tag[];
        },

        /**
         * Update a specific tag
         * @param id - which post to update
         * @param options - options to update a tag
         */
        updateTag: async (id: number, options: UpdateTag) => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            return response.data as Tag;
        },
    };
};
