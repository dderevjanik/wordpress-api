import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import { CreateMedia, DeleteMedia, GetMedia, ListMedia, MediaItem, UpdateMedia } from './interface/Media';
import { RequestHandler } from './interface/RequestHandler';

export const Media = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'media';
    return {
        /**
         * Create a Media
         * @param options - options to create a tag
         */
        createMedia: async (options: CreateMedia) => {
            const header = { 'Content-Disposition': 'attachment; filename="example.jpg"' };
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}`, data: options, headers: header });
            return response.data as MediaItem;
        },

        /**
         * Remove a media
         * @param id - media id to remove
         * @param options - remove options
         */
        deleteMedia: async (id: number, options: DeleteMedia = { force: true }) => {
            const response = await makeRequest({ method: 'DELETE', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            return response.data.deleted;
        },

        /**
         * Get specific media with id
         * @param id - media id
         * @param options - get options
         */
        getMedia: async (id: number, options: GetMedia = { context: 'view' }) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            return response.data as MediaItem;
        },

        /**
         * Get all Media
         * @param options - options to retrieve a posts
         */
        getAllMedia: async (options: ListMedia = {}) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as MediaItem[];
        },

        /**
         * Update a specific media
         * @param id - which media to update
         * @param options - options to update a media
         */
        updateMedia: async (id: number, options: UpdateMedia) => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}/${id}`, data: options });
            return response.data as MediaItem;
        },
    };
};
