import { CreatePage, DeletePage, ListPages, Page, UpdatePage } from './interface/Pages';
import { RequestHandler } from './interface/RequestHandler';

export const Pages = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'pages';
    return {
        /**
         * Create new page
         * @param options - options to create a page
         */
        createPage: async (options: CreatePage) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest({ method: 'POST', url, data: options });
            return response.data as Page;
        },

        /**
         * Delete existing page
         * @param options - options to delete a page
         * @default { force: true }
         */
        deletePage: async (pageId: number, options: DeletePage = { force: true }) => {
            const url = `${API_URL}/${objectEndpoint}/${pageId}`;
            const response = await makeRequest({ method: 'DELETE', url, data: options });
            const deleted = response.data.deleted;
            return deleted;
        },

        /**
         * get specific page
         * @param pageId - id of a page to get
         */
        getPage: async (pageId: number) => {
            const url = `${API_URL}/${objectEndpoint}/${pageId}`;
            const response = await makeRequest({ method: 'GET', url });
            return response.data as Page;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a pages
         */
        getPages: async (options: ListPages) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest({ method: 'GET', url, data: options });
            return response.data as Page[];
        },

        /**
         * Update existing page
         * @param pageId - page id to update
         * @param options - options to update a page
         */
        updatePage: async (pageId: number, options: UpdatePage) => {
            const url = `${API_URL}/${objectEndpoint}/${pageId}`;
            const response = await makeRequest({ method: 'POST', url, data: options });
            return response.data as Page;
        },

    };
};
