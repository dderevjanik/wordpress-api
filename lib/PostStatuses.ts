import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import { PostStatus, GetStatus, ListStatuses } from './interface/PostStatuses';
import { RequestHandler } from './interface/RequestHandler';

export const PostStatuses = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'statuses';
    return {
        /**
         * Get specific post status by prop key
         * @param key - status prop key
         * @param options - get options
         */
        getStatus: async (key: string, options: GetStatus = { context: 'view' }) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}/${key}`, data: options });
            return response.data as PostStatus;
        },

        /**
         * Get all Post statuses
         * @param options - options to retrieve a post statuses
         */
        getStatuses: async (options: ListStatuses = {}) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as {};
        },
    };
};
