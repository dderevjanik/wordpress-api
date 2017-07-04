import { CreateUser, User, ListUsers, UpdateUser } from './interface/Users';
export declare const Users: (API_URL: string) => {
    getUser: (userId: number) => Promise<User>;
    getUsers: (options: ListUsers) => Promise<User[]>;
    createUser: (options: CreateUser) => Promise<User>;
    updateUser: (userId: number, options: UpdateUser) => Promise<User>;
};
