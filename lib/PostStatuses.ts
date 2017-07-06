import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import { GetStatus, ListStatuses, PostStatus } from './interface/PostStatuses';
import { RequestHandler } from './interface/RequestHandler';

export const PostStatuses = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'statuses';
    return {
        /**
         * Get specific post status by prop key
         * @param key - status prop key
         * @param options - get options
         * @default: { context: 'view' }
         */
        getStatus: async (key: string, options: GetStatus = { context: 'view' }) => {
            const url = `${API_URL}/${objectEndpoint}/${key}`;
            const response = await makeRequest({ method: 'GET', url, data: options });
            return response.data as PostStatus;
        },

        /**
         * Get all Post statuses
         * @param options - options to retrieve a post statuses
         * @default: {}
         */
        getStatuses: async (options: ListStatuses = {}) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest({ method: 'GET', url, data: options });
            return response.data as {};
        },
    };
};
