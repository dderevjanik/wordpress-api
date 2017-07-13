import { CreatePost, DeletePost, ListPosts, Post, UpdatePost } from './interface/Posts';
import { RequestHandler } from './interface/RequestHandler';

export const Posts = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'posts';
    return {
        /**
         * Create a post
         * @param post - post to create
         */
        createPost: async (post: CreatePost) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest(url, { method: 'POST', data: post });
            return response.data as Post;
        },

        /**
         * Remove a post
         * @param postId - post id to remove
         * @param options - remove options
         */
        deletePost: async (postId: number, options: DeletePost = {}) => {
            const url = `${API_URL}/${objectEndpoint}/${postId}`;
            const response = await makeRequest(url, { method: 'DELETE' });
            return response.data.deleted;
        },

        /**
         * Get specific post with id
         * @param postId - post id
         * @returns {Post} post with postId
         */
        getPost: async (postId: number): Promise<Post> => {
            const url = `http://${API_URL}/${objectEndpoint}/${postId}`;
            const response = await makeRequest(url, { method: 'GET' });
            return response.data as Post;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a posts
         * @returns {Post[]} array of Posts
         */
        getPosts: async (options: ListPosts): Promise<Post[]> => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest({ method: 'GET', url, data: options });
            return response.data as Post[];
        },

        /**
         * Update a specific post
         * @param postId - which post to update
         * @param options - options to update a post
         */
        updatePost: async (postId: number, options: UpdatePost) => {
            const url = `${API_URL}/${objectEndpoint}/${postId}`;
            const response = await makeRequest({ method: 'POST', url, data: options });
            return response.data as Post;
        },
    };
};
