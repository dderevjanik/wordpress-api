import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import * as authenicate from 'wordpress-jwt-auth';
import { CreateUser, DeleteUser, ListUsers, UpdateUser, User } from './interface/Users';

export const Users = (API_URL: string, makeRequest: (options: AxiosRequestConfig) => Promise<AxiosResponse>) => {
    const objectEndpoint = 'users';
    return {
        /**
         * get specific user
         * @param id - id of a user to get
         */
        getUser: async (userId: number) => {
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}/${userId}` });
            return response.data as User;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a posts
         * @returns {Post[]} array of Posts
         */
        getUsers: async (options: ListUsers) => {
            const queryString = QueryString.stringify(options);;
            const response = await makeRequest({ method: 'GET', url: `${API_URL}/${objectEndpoint}}`, data: options });
            return response.data as User[];
        },

        /**
         * Create new user
         * @param options - options to create a user
         */
        createUser: async (options: CreateUser) => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}`, data: options });
            return response.data as User;
        },

        /**
         * Update existing user
         * @param options - options to update a user
         */
        updateUser: async (userId: number, options: UpdateUser) => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}/${userId}`, data: options });
            return response.data as User;
        },

        /**
         * Delete existing user
         * @param options - options to delete a user
         * @default { force: true, reassign: true }
         */
        deleteUser: async (userId: number, options: DeleteUser = { force: true, reassign: {} }) => {
            const response = await makeRequest({ method: 'DELETE', url: `${API_URL}/${objectEndpoint}/${userId}`, data: options });
            const deleted = response.data.deleted;
            return deleted;
        },
    };
};
