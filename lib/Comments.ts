import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import
{ Comment, CreateComment, DeleteComment, GetComment, ListComments, UpdateComment }
    from './interface/Comments';
import { RequestHandler } from './interface/RequestHandler';

export const Comments = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'comments';
    return {
        /**
         * Create a comment
         * @param options - options to create a comment
         */
        createComment: async (options: CreateComment) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest({ method: 'POST', url: url, data: options });
            return response.data as Comment;
        },

        /**
         * Remove a comment
         * @param id - comment id to remove
         * @param options - remove options
         * @default: { force: true }
         */
        deleteComment: async (id: number, options: DeleteComment = { force: true }) => {
            const url = `${API_URL}/${objectEndpoint}/${id}`;
            const response = await makeRequest({ method: 'DELETE', url: url, data: options });
            return response.data.deleted;
        },

        /**
         * Get specific comment with id
         * @param id - comment id
         * @param options - get options
         * @default: { context: 'view' }
         */
        getComment: async (id: number, options: GetComment = { context: 'view' }) => {
            const url = `${API_URL}/${objectEndpoint}/${id}`;
            const response = await makeRequest({ method: 'GET', url: url, data: options });
            return response.data as Comment;
        },

        /**
         * Get all comments
         * @param options - options to retrieve a comments
         */
        getComments: async (options: ListComments = {}) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest({ method: 'GET', url: url, data: options });
            return response.data as Comment[];
        },

        /**
         * Update a specific comment
         * @param id - which comment to update
         * @param options - options to update a comment
         */
        updateComment: async (id: number, options: UpdateComment) => {
            const url = `${API_URL}/${objectEndpoint}/${id}`;
            const response = await makeRequest({ method: 'POST', url: url, data: options });
            return response.data as Comment;
        },
    };
};
