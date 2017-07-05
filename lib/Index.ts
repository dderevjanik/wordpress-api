import axios, { AxiosRequestConfig } from 'axios';
import { red, underline } from 'chalk';
import * as QueryString from 'querystring';
import { generateToken, validateToken } from 'wordpress-jwt-auth'; // DEV
import { ConnectHook } from './interface/IConnectHook';
import { DeletePost, ListPosts, Post, RetrievePost } from './interface/Posts';

import { Categories } from './Categories';
import { Pages } from './Pages';
import { PostRevisions } from './PostRevisions';
import { Posts } from './Posts';
import { Users } from './Users';

import { test } from './test';

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
         * define all methods with categories
         * http://demo.wp-api.org/wp-json/wp/v2/categories
         */
        categories: Categories(API_URL, makeRequest),

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
         * define all methods with wp posts
         * http://demo.wp-api.org/wp-json/wp/v2/posts
         */
        posts: Posts(API_URL, makeRequest),

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
    console.log('Authenticated');

    /**
     * tests with console logs
     */

    try {
        /**
         * test user
         */
        const user = await wpaApi.users.getUser(1);
        console.log(user);

        const updatedUser = await wpaApi.users.updateUser(2, { email: 'juraj@gmail.com', name: 'edit', first_name: 'updatedFirstName' });
        console.log(updatedUser);

        const newUser = await wpaApi.users.createUser({ email: 'newEmail@gmail.com', password: 'root', username: 'userName' });
        console.log(newUser);

        const deletedUser = await wpaApi.users.deleteUser(newUser.id, { force: true, reassign: {} });
        console.log(deletedUser);

        /**
         * test page
         */
        const page = await wpaApi.pages.getPage(2);
        console.log(page);

        const pages = await wpaApi.pages.getPages({ author: 1 });
        console.log(pages);

        const newPage = await wpaApi.pages.createPage({});
        const newPageId = newPage.id;

        const updatedPage = await wpaApi.pages.updatePage(newPageId, { content: 'updatedContent' });
        console.log(updatedPage.content);

        const deleted = await wpaApi.pages.deletePage(newPageId);
        console.log(deleted);

        /**
         * test category
         */
        const category = await wpaApi.categories.getCategory(1);
        console.log(category);

        const categories = await wpaApi.categories.getCategories({});
        console.log(categories);

        const newCategory = await wpaApi.categories.createCategory({ name: 'newCategory' });
        console.log(newCategory.id);

        const updatedCategory = await wpaApi.categories.updateCategory(newCategory.id, { name: 'updatedCategory' });
        console.log(updatedCategory);

        // documentation says its has to be true... working with false anyway, perfect
        const deletedCategory = await wpaApi.categories.deleteCategory(updatedCategory.id, { force: true });
        console.log(deletedCategory);
    }
    catch (e) {
        console.log('oops, error');
        console.log(e);

    }

    process.exit();
})();
