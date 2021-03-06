import { RequestHandler } from './interface/RequestHandler';
import { CreateUser, DeleteUser, ListUsers, UpdateUser, User } from './interface/Users';

export const Users = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'users';
    return {

        /**
         * Create new user
         * @param options - options to create a user
         */
        createUser: async (options: CreateUser) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest(url, { method: 'POST', data: options });
            return response.data as User;
        },

        /**
         * Delete existing user
         * @param userId - id of a user to be removed
         * @param options - options to delete a user
         * @default { force: true, reassign: true }
         */
        deleteUser: async (userId: number, options: DeleteUser = { force: true, reassign: {} }) => {
            const url = `${API_URL}/${objectEndpoint}/${userId}`;
            const response = await makeRequest(url, { method: 'DELETE', data: options });
            const deleted = response.data.deleted;
            return deleted;
        },

        /**
         * get specific user
         * @param userId - id of a user to get
         */
        getUser: async (userId: number) => {
            const url = `${API_URL}/${objectEndpoint}/${userId}`;
            const response = await makeRequest(url, { method: 'GET' });
            return response.data as User;
        },

        /**
         * Get all posts
         * @param options - options to retrieve a posts
         */
        getUsers: async (options: ListUsers = {}) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest(url, { method: 'GET', data: options });
            return response.data as User[];
        },

        isLoggegedId: async () => {
            const url = `${API_URL}/${objectEndpoint}/me`;
            const response = await makeRequest(url, { method: 'POST' });
            return response.data;
        },

        /**
         * Update existing user
         * @param userId
         * @param options - options to update a user
         */
        updateUser: async (userId: number, options: UpdateUser) => {
            const url = `${API_URL}/${objectEndpoint}/${userId}`;
            const response = await makeRequest(url, { method: 'POST', data: options });
            return response.data as User;
        },

    };
};
