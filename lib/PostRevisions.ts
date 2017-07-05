import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import { GetPostRevision, ListPostRevisions, PostRevision } from './interface/PostRevisions';

// TODO: what is post revision, what are parametesrs like parentId, id?
export const PostRevisions = (API_URL: string, makeRequest: (options: AxiosRequestConfig) => Promise<AxiosResponse>) => {
    return {
        /**
         * Remove a post revision
         */
        deletePostRevision: async (parentId: number, id: number) => {
            await makeRequest({ method: 'DELETE', url: `${API_URL}/posts/${parentId}/revisions/${id}` });
        },

        /**
         * Get specific post revision
         */
        getPostRevision: async (parentId: number, id: number, options: GetPostRevision = { context: 'view' }) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/posts/${parentId}/revisions/${id}`, data: options });
            return response.data as PostRevision;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a posts
         * @returns {Post[]} array of Posts
         */
        getPostRevisions: async (parentId: number, id: number, options: ListPostRevisions = { context: 'view' }) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/posts/${parentId}/revisions/${id}`, data: options });
            return response.data as PostRevision[];
        },
    };
};

