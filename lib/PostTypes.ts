import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import { GetType, ListTypes, PostType } from './interface/PostTypes';
import { RequestHandler } from './interface/RequestHandler';

export const PostTypes = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'types';
    return {
        /**
         * Get specific taxaomy by prop key
         * @param key - taxaomy prop key
         * @param options - get options
         */
        getType: async (key: string, options: GetType = { context: 'view' }) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}/${key}`, data: options });
            return response.data as PostType;
        },

        /**
         * Get all Post types
         * @param options - options to retrieve a post types
         */
        getTypes: async (options: ListTypes = {}) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as {};
        },
    };
};
