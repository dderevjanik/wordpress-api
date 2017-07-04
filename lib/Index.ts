import axios from 'axios';
import * as authenicate from 'wordpress-jwt-auth';
import { red, underline } from 'chalk';
import * as QueryString from 'querystring';
import { DeletePost, ListPosts, Post, RetrievePost } from './interface/Posts';
import { CreateUser } from './interface/Users';

const REST_API_PATH = '/wp-json/wp/v2';
/**
 * Connect to wordpress api
 * @param host - url to wordpress
 * @throws {BadHost}
 */
const connect = async (host: string) => {
    const API_URL = host + REST_API_PATH;
    try {
        await axios.get(API_URL);
    } catch (e) {
        const msg = red('BadHost: no response from rest api endpoint ' + underline(API_URL));
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
            const url = `http://${API_URL}/posts/${postId}`;
            const response = await axios.get(`${API_URL}/posts/${postId}`);
            return response.data as Post;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a posts
         * @returns {Post[]} array of Posts
         */
        getPosts: async (options: RetrievePost): Promise<Post[]> => {
            const queryString = QueryString.stringify(options);
            const response = await axios.get(`${API_URL}'/posts?'${queryString}`);
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


        /**
         * Create new user
         * @param options - options to create a user
         */
        registerUser: async (options: CreateUser) => {
            const conn = await authenicate.connect('http://localhost:8080/wordpress');
            console.log('http://localhost:8080/wordpress');
            const token = await conn.generateToken('root', 'rootS1237984aaa4d');
            // console.log(await conn.validateToken(token.token));
            // const authHeader = { headers: { Authorization: `Bearer ${token.token}`, 'Content-Type': "application/json; charset=UTF-8" } };
            const authHeader = { headers: { Authorization: `Bearer ${token.token}` } };

            const val = await conn.validateToken(token.token);

            const queryString = QueryString.stringify(options);
            console.log(`${API_URL}/users?${queryString}`);
            const response = await axios.post(`${API_URL}/users?${queryString}`, {}, authHeader);
            return response;
        }
    };
};

(async () => {
    const wpaApi = await connect('http://localhost:8080/wordpress');

    // TODO: authenicate before create new user
    try {
        const newUser = await wpaApi.registerUser({
            email: 'newEmail3@gmail.com',
            password: 'pass',
            username: 'user3'
        })
    }
    catch (e) {
        console.log(e);
    }

    console.log(newUser);
    process.exit();
})();
