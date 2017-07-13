import { CreateMedia, DeleteMedia, GetMedia, ListMedia, MediaItem, UpdateMedia } from './interface/Media';
import { RequestHandler } from './interface/RequestHandler';

export const Media = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'media';
    return {
        /**
         * Create a Media
         * @param options - options to create a media
         */
        createMedia: async (options: CreateMedia) => {
            // const header = { 'Content-Disposition': 'attachment; filename="example.jpg"' };
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest(url, { method: 'POST', data: options });
            return response.data as MediaItem;
        },

        /**
         * Remove a media
         * @param id - media id to remove
         * @param options - remove options
         * @default: { force: true }
         */
        deleteMedia: async (id: number, options: DeleteMedia = { force: true }) => {
            const url = `${API_URL}/${objectEndpoint}/${id}`;
            const response = await makeRequest(url, { method: 'DELETE', data: options });
            return response.data.deleted;
        },

        /**
         * Get all Media
         * @param options - options to retrieve a posts
         * @default: {}
         */
        getAllMedia: async (options: ListMedia = {}) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest(url, { method: 'GET', data: options });
            return response.data as MediaItem[];
        },

        /**
         * Get specific media with id
         * @param id - media id
         * @param options - get options
         * @default: { context: 'view' }
         */
        getMedia: async (id: number, options: GetMedia = { context: 'view' }) => {
            const url = `${API_URL}/${objectEndpoint}/${id}`;
            const response = await makeRequest(url, { method: 'GET', data: options });
            return response.data as MediaItem;
        },

        /**
         * Update a specific media
         * @param id - which media to update
         * @param options - options to update a media
         */
        updateMedia: async (id: number, options: UpdateMedia) => {
            const url = `${API_URL}/${objectEndpoint}/${id}`;
            const response = await makeRequest(url, { method: 'POST', data: options });
            return response.data as MediaItem;
        },
    };
};
