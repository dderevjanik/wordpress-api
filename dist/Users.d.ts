import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateUser, DeleteUser, ListUsers, UpdateUser, User } from './interface/Users';
export declare const Users: (API_URL: string, makeRequest: (options: AxiosRequestConfig) => Promise<AxiosResponse>) => {
    createUser: (options: CreateUser) => Promise<User>;
    deleteUser: (userId: number, options?: DeleteUser) => Promise<any>;
    getUser: (userId: number) => Promise<User>;
    getUsers: (options: ListUsers) => Promise<User[]>;
    updateUser: (userId: number, options: UpdateUser) => Promise<User>;
};
