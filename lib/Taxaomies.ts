import { RequestHandler } from './interface/RequestHandler';
import { GetTaxaomy, ListTaxaomies, Taxanomy } from './interface/Taxanomies';

export const Taxanomies = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'taxonomies';
    return {
        /**
         * Get all Taxaomies
         * @param options - options to retrieve a taxaomies
         * @default: {}
         */
        getTaxanomies: async (options: ListTaxaomies = {}) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest(url, { method: 'GET', data: options });
            return response.data as {};
        },

        /**
         * Get specific taxaomy by prop key
         * @param key - taxaomy prop key
         * @param options - get options
         * @default: { context: 'view' }
         */
        getTaxanomy: async (key: string, options: GetTaxaomy = { context: 'view' }) => {
            const url = `${API_URL}/${objectEndpoint}/${key}`;
            const response = await makeRequest(url, { method: 'GET', data: options });
            return response.data as Taxanomy;
        },
    };
};
