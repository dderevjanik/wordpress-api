import axios, { AxiosRequestConfig } from 'axios';
import { red, underline } from 'chalk';
import * as QueryString from 'querystring';
import { generateToken, validateToken } from 'wordpress-jwt-auth'; // DEV
import { ConnectHook } from './interface/IConnectHook';
import { DeletePost, ListPosts, Post, RetrievePost } from './interface/Posts';
import { Pages } from './Pages';
import { Posts } from './Posts';
import { Users } from './Users';

const REST_API_PATH = '/wp-json/wp/v2';
/**
 * Connect to wordpress api
 * @param host - url to wordpress
 * @param hooks - hooks for modify requests/responses, useful for custom authentication
 * @throws {BadHost}
 */
const connect = async (host: string, hooks: ConnectHook = {}) => {
    const API_URL = host + REST_API_PATH;
    const { beforeRequest, afterResponse } = hooks;

    // before every request, modify it if there's a hook
    const hookedRequest = beforeRequest
        ? async (requestConfig: AxiosRequestConfig) => axios(beforeRequest(requestConfig))
        : axios;
    // modify response if there's a hook
    const makeRequest = afterResponse
        ? async (requestConfig: AxiosRequestConfig) => afterResponse(await hookedRequest(requestConfig))
        : hookedRequest;

    try {
        await makeRequest({ method: 'GET', url: API_URL });
    } catch (e) {
        const msg = red('BadHost: no response from REST API endpoint ' + underline(API_URL));
        throw new Error(msg);
    }

    return {

        /**
         * define all methods with wp posts
         */
        posts: Posts(API_URL, makeRequest),

        /**
         * define all methods with wp pages
         */
        pages: Pages(API_URL),

        /**
         * define all methods with wp users
         */
        users: Users(API_URL),
    };
};

(async () => {
    const URL = 'http://localhost:8080/wordpress';
    const { token } = await generateToken(URL, 'daniel', 'daniel');
    const authorization = `Bearer ${token}`;
    const wpaApi = await connect(URL, {
        beforeRequest: (r) => ({
            ...r, headers: { ...r.headers, Authorization: authorization },
        }),
    });
    // create post
    console.log('Authenticated');
    process.exit();
})();
