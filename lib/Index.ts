import axios from 'axios';
import { red, underline } from 'chalk';
import * as QueryString from 'querystring';
import { ConnectHook } from './interfaces/IConnectHook';
import { DeletePost, ListPosts, Post, RetrievePost } from './Posts';

/**
 * Path to REST API endpoint
 */
const REST_API_PATH = '/wp-json/wp/v2';

/**
 * Connect to wordpress api
 * @param host - url to wordpress
 * @param hooks - hooks for modify requests/responses, useful for custom authentication
 * @throws {BadHost}
 */
const connect = async (host: string, hooks?: ConnectHook) => {
    const API_URL = host + REST_API_PATH;

    try {
        await axios.get(API_URL);
    } catch (e) {
        const msg = red('BadHost: no response from REST API endpoint ' + underline(API_URL));
        throw new Error(msg);
    }

    return {
        /**
         * Remove a post
         * @param postId - post id to remove
         * @param options - remove options
         */
        deletePost: async (postId: number, options: DeletePost) => {
            await axios.delete(API_URL);
        },

        /**
         * Get specific post with id
         * @param postId - post id
         * @returns {Post} post with postId
         */
        getPost: async (postId: number): Promise<Post> => {
            const url = `${API_URL}/posts/${postId}`;
            const response = await axios.get(`${API_URL}/posts/${postId}`);
            return response.data as Post;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a posts
         * @returns {Post[]} array of Posts
         */
        getPosts: async (options: ListPosts): Promise<Post[]> => {
            const queryString = QueryString.stringify(options);
            const response = await axios.get(`${API_URL}/posts${queryString}`);
            return response.data as Post[];
        },

        /**
         * Update a specific post
         * @param postId - which post to update
         * @param options - options to update a post
         */
        updatePost: async (postId: number, options: Post) => {
            const queryString = QueryString.stringify(options);
            const response = await axios.put(`${API_URL}/posts/${queryString}`);
        },
    };
};

(async () => {
    const wpaApi = await connect('http://localhost:8080/wordpress');
    const post = await wpaApi.getPosts({});
    console.log(post);
    process.exit();
})();
