import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import { DeletePost, ListPosts, Post, RetrievePost } from './interface/Posts';
import { RequestHandler } from './interface/RequestHandler';

export const Posts = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'posts';
    return {
        /**
         * Create a post
         * @param post - post to create
         */
        createPost: async (post: Post) => {
            const queries = QueryString.stringify(post);
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}`, data: post });
            return response.data as Post;
        },

        /**
         * Remove a post
         * @param postId - post id to remove
         * @param options - remove options
         */
        deletePost: async (postId: number, options: DeletePost) => {
            await makeRequest({ method: 'DELETE', url: `${API_URL}/${objectEndpoint}/${postId}` });
        },

        /**
         * Get specific post with id
         * @param postId - post id
         * @returns {Post} post with postId
         */
        getPost: async (postId: number): Promise<Post> => {
            const url = `http://${API_URL}/posts/${postId}`;
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}/${postId}` });
            return response.data as Post;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a posts
         * @returns {Post[]} array of Posts
         */
        getPosts: async (options: RetrievePost): Promise<Post[]> => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as Post[];
        },

        /**
         * Update a specific post
         * @param postId - which post to update
         * @param options - options to update a post
         */
        updatePost: async (postId: number, options: Post) => {
            const response = await makeRequest({ method: 'PUT', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as Post;
        },
    };
};
