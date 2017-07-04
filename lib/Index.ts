import axios from 'axios';
import * as authenicate from 'wordpress-jwt-auth';
import { red, underline } from 'chalk';
import * as QueryString from 'querystring';
import { DeletePost, ListPosts, Post, RetrievePost } from './interface/Posts';
import { CreateUser } from './interface/Users';

import { Posts } from './Posts';
import { Users } from './Users';
import { Pages } from './Pages';

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
        posts: Posts(API_URL),

        pages: Pages(API_URL),

        users: Users(API_URL),
    };
};

(async () => {
    const wpaApi = await connect('http://localhost:8080/wordpress');

    // TODO: authenicate before create new user
    try {
        // const somePOst = await wpaApi.posts.getPost(1);

        const newUser = await wpaApi.users.createUser({
            email: 'newEmail4@gmail.com',
            password: 'pass',
            username: 'user4'
        })
        console.log(newUser);
    }
    catch (e) {
        console.log(e);
    }


    process.exit();
})();
