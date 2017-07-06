import axios, { AxiosRequestConfig } from 'axios';
import { red, underline } from 'chalk';
import * as QueryString from 'querystring';
import { generateToken, validateToken } from 'wordpress-jwt-auth'; // DEV
import { ConnectHook } from './interface/IConnectHook';

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

// imports to be able export connect
import { ListComments, Comment, CreateComment, DeleteComment, GetComment, UpdateComment } from './interface/Comments';
import { Category, CreateCategory, DeleteCategory, GetCategory, ListCategories, UpdateCategory } from './interface/Categories';
import { MediaItem, CreateMedia, DeleteMedia, GetMedia, ListMedia, UpdateMedia } from './interface/Media';
import { CreateTag, DeleteTag, GetTag, ListTags, Tag, UpdateTag } from './interface/Tags';
import { CreatePage, DeletePage, GetPage, ListPages, Page, UpdatePage } from './interface/Pages';
import { GetPostRevision, ListPostRevisions, PostRevision } from './interface/PostRevisions';
import { DeletePost, ListPosts, Post, RetrievePost } from './interface/Posts';
import { GetStatus, ListStatuses, PostStatus } from './interface/PostStatuses';
import { GetType, ListTypes, PostType } from './interface/PostTypes';
import { Setting } from './interface/Settings';
import { CreateUser, DeleteUser, ListUsers, UpdateUser, User } from './interface/Users';
import { GetTaxaomy, ListTaxaomies, Taxanomy } from './interface/Taxanomies';

const REST_API_PATH = '/wp-json/wp/v2';

/**
 * Connect to wordpress api
 * @param host - url to wordpress
 * @param hooks - hooks for modify requests/responses, useful for custom authentication
 * @throws {BadHost}
 */
export const connect = async (host: string, hooks: ConnectHook = {}) => {
    const API_URL = host + REST_API_PATH;
    hooks = { afterResponse: undefined, beforeRequest: undefined };
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
    console.log(token);
    try {
        const comment = await wpaApi.comments.createComment({ content: 'content', post: 1 });
        console.log(comment);
        const tag = await wpaApi.tags.createTag({ name: 'tag' });
        console.log(tag);
        const page = await wpaApi.pages.createPage({ content: 'content' });
        console.log(page.id);
    }
    catch (e) {
        console.log('err');
        console.log(e)
    }
    process.exit();
})();
