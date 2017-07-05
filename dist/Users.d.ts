import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateUser, DeleteUser, ListUsers, UpdateUser, User } from './interface/Users';
export declare const Users: (API_URL: string, makeRequest: (options: AxiosRequestConfig) => Promise<AxiosResponse>) => {
    getUser: (userId: number) => Promise<User>;
    getUsers: (options: ListUsers) => Promise<User[]>;
    createUser: (options: CreateUser) => Promise<User>;
    updateUser: (userId: number, options: UpdateUser) => Promise<User>;
    deleteUser: (userId: number, options?: DeleteUser) => Promise<any>;
};
