import { GetType, ListTypes, PostType } from './interface/PostTypes';
import { RequestHandler } from './interface/RequestHandler';

export const PostTypes = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'types';
    return {
        /**
         * Get specific taxaomy by prop key
         * @param key - taxaomy prop key
         * @param options - get options
         * @default: { context: 'view' }
         */
        getType: async (key: string, options: GetType = { context: 'view' }) => {
            const url = `${API_URL}/${objectEndpoint}/${key}`;
            const response = await makeRequest({ method: 'GET', url, data: options });
            return response.data as PostType;
        },

        /**
         * Get all Post types
         * @param options - options to retrieve a post types
         * @default: {}
         */
        getTypes: async (options: ListTypes = {}) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest({ method: 'GET', url, data: options });
            return response.data as {};
        },
    };
};
