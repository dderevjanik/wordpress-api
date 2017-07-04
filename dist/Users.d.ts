import { CreateUser, User } from './interface/Users';
export declare const Users: (API_URL: string) => {
    createUser: (options: CreateUser) => Promise<User>;
};
