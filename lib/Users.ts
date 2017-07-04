import { CreateUser, User, ListUsers, UpdateUser } from './interface/Users';
import * as QueryString from 'querystring';
import axios from 'axios';
import * as authenicate from 'wordpress-jwt-auth';

export const Users = (API_URL: string) => {
    return {
        /**
         * get specific user
         * @param id - id of a user to get
         */
        getUser: async (userId: number) => {
            const conn = await authenicate.connect('http://localhost:8080/wordpress');
            const token = await conn.generateToken('root', 'rootS1237984aaa4d');
            const authHeader = { headers: { Authorization: `Bearer ${token.token}` } };

            const response = await axios.get(`${API_URL}/users/${userId}`, authHeader);
            return response.data as User;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a posts
         * @returns {Post[]} array of Posts
         */
        getUsers: async (options: ListUsers): Promise<User[]> => {
            const conn = await authenicate.connect('http://localhost:8080/wordpress');
            const token = await conn.generateToken('root', 'rootS1237984aaa4d');
            const authHeader = { headers: { Authorization: `Bearer ${token.token}` } };

            const queryString = QueryString.stringify(options);
            const response = await axios.get(`${API_URL}/users?${queryString}`, authHeader);
            return response.data as User[];
        },

        /**
         * Create new user
         * @param options - options to create a user
         */
        createUser: async (options: CreateUser) => {
            const conn = await authenicate.connect('http://localhost:8080/wordpress');
            const token = await conn.generateToken('root', 'rootS1237984aaa4d');
            const authHeader = { headers: { Authorization: `Bearer ${token.token}` } };

            const queryString = QueryString.stringify(options);
            const response = await axios.post(`${API_URL}/users?${queryString}`, {}, authHeader);
            return response.data as User;
        },

        updateUser: async (userId: number, options: UpdateUser) => {
            const conn = await authenicate.connect('http://localhost:8080/wordpress');
            const token = await conn.generateToken('root', 'rootS1237984aaa4d');
            const authHeader = { headers: { Authorization: `Bearer ${token.token}` } };

            const queryString = QueryString.stringify(options);
            const url = `${API_URL}/users/${userId}?${queryString}`;
            console.log(url);
            const response = await axios.post(`${API_URL}/users/${userId}/?${queryString}`, {}, authHeader);
            return response.data as User;
        },
    }
}
