import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import { Comment, CreateComment, DeleteComment, GetComment, ListComments, UpdateComment } from './interface/Comments';
import { RequestHandler } from './interface/RequestHandler';

export const Comments = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'comments';
    return {
        /**
         * Create a comment
         * @param options - options to create a comment
         */
        createComment: async (options: CreateComment) => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as Comment;
        },

        /**
         * Remove a comment
         * @param id - comment id to remove
         * @param options - remove options
         */
        deleteComment: async (id: number, options: DeleteComment = { force: true }) => {
            const response = await makeRequest({ method: 'DELETE', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            return response.data.deleted;
        },

        /**
         * Get specific comment with id
         * @param id - comment id
         * @param options - get options
         */
        getComment: async (id: number, options: GetComment = { context: 'view' }) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            return response.data as Comment;
        },

        /**
         * Get all comments
         * @param options - options to retrieve a posts
         */
        getComments: async (options: ListComments = {}) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as Comment[];
        },

        /**
         * Update a specific comment
         * @param id - which comment to update
         * @param options - options to update a comment
         */
        updateComment: async (id: number, options: UpdateComment) => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            return response.data as Comment;
        },
    };
};
