import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import { DeletePost, ListPosts, Post, RetrievePost } from './interface/Posts';

export const Posts = (API_URL: string, makeRequest: (options: AxiosRequestConfig) => Promise<AxiosResponse>) => {
    return {
        /**
         * Create a post
         * @param post - post to create
         */
        createPost: async (post: Post) => {
            const queries = QueryString.stringify(post);
            await makeRequest({ method: 'POST', url: `${API_URL}/posts`, data: post });
        },
        /**
         * Remove a post
         * @param postId - post id to remove
         * @param options - remove options
         */
        deletePost: async (postId: number, options: DeletePost) => {
            await makeRequest({ method: 'DELETE', url: `${API_URL}/posts/${postId}` });
        },

        /**
         * Get specific post with id
         * @param postId - post id
         * @returns {Post} post with postId
         */
        getPost: async (postId: number): Promise<Post> => {
            const url = `http://${API_URL}/posts/${postId}`;
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/posts/${postId}` });
            return response.data as Post;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a posts
         * @returns {Post[]} array of Posts
         */
        getPosts: async (options: RetrievePost): Promise<Post[]> => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/posts`, data: options });
            return response.data as Post[];
        },

        /**
         * Update a specific post
         * @param postId - which post to update
         * @param options - options to update a post
         */
        updatePost: async (postId: number, options: Post) => {
            const queryString = QueryString.stringify(options);
            const response = await axios.put(`${API_URL}/posts?${queryString}`);
        },
    };
};
