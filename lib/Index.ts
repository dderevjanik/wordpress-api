import axios, { AxiosRequestConfig } from 'axios';
import { red, underline } from 'chalk';
import * as QueryString from 'querystring';
import { generateToken, validateToken } from 'wordpress-jwt-auth'; // DEV
import { ConnectHook } from './interface/IConnectHook';
import { DeletePost, ListPosts, Post, RetrievePost } from './interface/Posts';

import { Categories } from './Categories';
import { Comments } from './Comments';
import { Media } from './Media';
import { Pages } from './Pages';
import { PostRevisions } from './PostRevisions';
import { Posts } from './Posts';
import { PostStatuses } from './PostStatuses';
import { PostTypes } from './PostTypes';
import { Settings } from './Settings';
import { Tags } from './Tags';
import { Taxanomies } from './Taxaomies';
import { Users } from './Users';

const REST_API_PATH = '/wp-json/wp/v2';

/**
 * Connect to wordpress api
 * @param host - url to wordpress
 * @param hooks - hooks for modify requests/responses, useful for custom authentication
 * @throws {BadHost}
 */
export const connect = async (host: string, hooks: ConnectHook = {}) => {
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
         * define all methods with categories
         * http://demo.wp-api.org/wp-json/wp/v2/categories
         */
        categories: Categories(API_URL, makeRequest),

        /**
         * define all methods with wp comments
         * http://demo.wp-api.org/wp-json/wp/v2/comments
         */
        comments: Comments(API_URL, makeRequest),

        /**
         * define all methods with wp media
         * http://demo.wp-api.org/wp-json/wp/v2/media
         */
        media: Media(API_URL, makeRequest),

        /**
         * define all methods with wp pages
         * http://demo.wp-api.org/wp-json/wp/v2/pages
         */
        pages: Pages(API_URL, makeRequest),

        /**
         * define all methods with post revisions
         * http://demo.wp-api.org/wp-json/wp/v2/posts/<parent_id>/revisions
         */
        postRevisions: PostRevisions(API_URL, makeRequest),

        /**
         * define all methods with wp post statuses
         * http://demo.wp-api.org/wp-json/wp/v2/statuses
         */
        postStatuses: PostStatuses(API_URL, makeRequest),

        /**
         * define all methods with wp post type
         * http://demo.wp-api.org/wp-json/wp/v2/media
         */
        postTypes: PostTypes(API_URL, makeRequest),

        /**
         * define all methods with wp posts
         * http://demo.wp-api.org/wp-json/wp/v2/posts
         */
        posts: Posts(API_URL, makeRequest),

        /**
         * define all methods with wp settings
         * specific settings for authenticated user
         * http://demo.wp-api.org/wp-json/wp/v2/settings
         */
        settings: Settings(API_URL, makeRequest),

        /**
         * define all methods with wp tags
         * http://demo.wp-api.org/wp-json/wp/v2/tags
         */
        tags: Tags(API_URL, makeRequest),

        /**
         * define all methods with wp taxaomies
         * http://demo.wp-api.org/wp-json/wp/v2/taxaomies
         */
        taxanomies: Taxanomies(API_URL, makeRequest),

        /**
         * define all methods with wp users
         * http://demo.wp-api.org/wp-json/wp/v2/users
         */
        users: Users(API_URL, makeRequest),
    };
};

(async () => {
    const URL = 'http://localhost:8080/wordpress';
    const { token } = await generateToken(URL, 'root', 'root');
    const authorization = `Bearer ${token}`;
    const wpaApi = await connect(URL, {
        beforeRequest: (r) => ({
            ...r, headers: { ...r.headers, Authorization: authorization },
        }),
    });
    process.exit();
})();
