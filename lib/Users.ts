import { CreateUser, User } from './interface/Users';
import * as QueryString from 'querystring';
import axios from 'axios';
import * as authenicate from 'wordpress-jwt-auth';

export const Users = (API_URL: string) => {
    return {
        /**
         * Create new user
         * @param options - options to create a user
         */
        createUser: async (options: CreateUser) => {
            const conn = await authenicate.connect('http://localhost:8080/wordpress');
            console.log('http://localhost:8080/wordpress');
            const token = await conn.generateToken('root', 'rootS1237984aaa4d');
            // console.log(await conn.validateToken(token.token));
            // const authHeader = { headers: { Authorization: `Bearer ${token.token}`, 'Content-Type': "application/json; charset=UTF-8" } };
            const authHeader = { headers: { Authorization: `Bearer ${token.token}` } };
            const queryString = QueryString.stringify(options);
            console.log(`${API_URL}/users?${queryString}`);
            const response = await axios.post(`${API_URL}/users?${queryString}`, {}, authHeader);
            return response.data as User;
        }
    }
}
