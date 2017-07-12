import { GetPostRevision, ListPostRevisions, PostRevision } from './interface/PostRevisions';
import { RequestHandler } from './interface/RequestHandler';

// TODO: what is post revision, what are parametesrs like parentId, id?
export const PostRevisions = (API_URL: string, makeRequest: RequestHandler) => {
    return {
        /**
         * Remove a post revision
         * @param parentId - parent Id
         * @param id - revision wiht Id to remove
         */
        deletePostRevision: async (parentId: number, id: number): Promise<void> => {
            const url = `${API_URL}/posts/${parentId}/revisions/${id}`;
            await makeRequest({ method: 'DELETE', url });
        },

        /**
         * Get specific post revision
         * @param parentId - parentId
         * @param id - revisionId
         * @param options - options to get retrieve post revision
         * @default: { context: 'view' }
         */
        getPostRevision: async (parentId: number, id: number, options: GetPostRevision = { context: 'view' }) => {
            const url = `${API_URL}/posts/${parentId}/revisions/${id}`;
            const response = await makeRequest({ method: 'GET', url, data: options });
            return response.data as PostRevision;
        },

        /**
         * Get all posts
         * @param parentId
         * @param id
         * @param options - options to retrieve all post revisions
         * @default: { context: 'view' }
         */
        getPostRevisions: async (parentId: number, id: number, options: ListPostRevisions = { context: 'view' }) => {
            const url = `${API_URL}/posts/${parentId}/revisions/${id}`;
            const response = await makeRequest({ method: 'GET', url, data: options });
            return response.data as PostRevision[];
        },
    };
};
