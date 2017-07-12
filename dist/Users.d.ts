import { RequestHandler } from './interface/RequestHandler';
import { CreateUser, DeleteUser, ListUsers, UpdateUser, User } from './interface/Users';
export declare const Users: (API_URL: string, makeRequest: RequestHandler) => {
    createUser: (options: CreateUser) => Promise<User>;
    deleteUser: (userId: number, options?: DeleteUser) => Promise<any>;
    getUser: (userId: number) => Promise<User>;
    getUsers: (options?: ListUsers) => Promise<User[]>;
    isLoggegedId: () => Promise<any>;
    updateUser: (userId: number, options: UpdateUser) => Promise<User>;
};
