import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import { GetTaxaomy, ListTaxaomies, Taxanomy } from './interface/Taxanomies';
import { RequestHandler } from './interface/RequestHandler';

export const Taxanomies = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'taxonomies';
    return {
        /**
         * Get specific taxaomy by prop key
         * @param key - taxaomy prop key
         * @param options - get options
         */
        getTaxanomy: async (key: string, options: GetTaxaomy = { context: 'view' }) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}/${key}`, data: options });
            return response.data as Taxanomy;
        },

        /**
         * Get all Taxaomies
         * @param options - options to retrieve a taxaomies
         */
        getTaxanomies: async (options: ListTaxaomies = {}) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as {};
        },
    };
};
