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
import { Tags } from './Tags';
import { Comments } from './Comments';
import { Taxanomies } from './Taxaomies';
import { Media } from './Media';
import { PostTypes } from './PostTypes';
import { PostStatuses } from './PostStatuses';
import { Settings } from './Settings'

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

        /**
         * define all methods with wp tags
         * http://demo.wp-api.org/wp-json/wp/v2/tags
         */
        tags: Tags(API_URL, makeRequest),

        /**
         * define all methods with wp comments
         * http://demo.wp-api.org/wp-json/wp/v2/comments
         */
        comments: Comments(API_URL, makeRequest),

        /**
         * define all methods with wp taxaomies
         * http://demo.wp-api.org/wp-json/wp/v2/taxaomies
         */
        taxanomies: Taxanomies(API_URL, makeRequest),

        /**
         * define all methods with wp media
         * http://demo.wp-api.org/wp-json/wp/v2/media
         */
        media: Media(API_URL, makeRequest),

        /**
         * define all methods with wp post type
         * http://demo.wp-api.org/wp-json/wp/v2/media
         */
        postTypes: PostTypes(API_URL, makeRequest),

        /**
         * define all methods with wp post statuses
         * http://demo.wp-api.org/wp-json/wp/v2/statuses
         */
        postStatuses: PostStatuses(API_URL, makeRequest),

        /**
         * define all methods with wp settings
         * specific settings for authenticated user
         * http://demo.wp-api.org/wp-json/wp/v2/settings
         */
        settings: Settings(API_URL, makeRequest),
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
        // /**
        //  * test user
        //  */
        // const user = await wpaApi.users.getUser(1);
        // console.log(user);

        // const updatedUser = await wpaApi.users.updateUser(2, { email: 'juraj@gmail.com', name: 'edit', first_name: 'updatedFirstName' });
        // console.log(updatedUser);

        // const newUser = await wpaApi.users.createUser({ email: 'newEmail@gmail.com', password: 'root', username: 'userName' });
        // console.log(newUser);

        // const deletedUser = await wpaApi.users.deleteUser(newUser.id, { force: true, reassign: {} });
        // console.log(deletedUser);

        // /**
        //  * test page
        //  */
        // const page = await wpaApi.pages.getPage(2);
        // console.log(page);

        // const pages = await wpaApi.pages.getPages({ author: 1 });
        // console.log(pages);

        // const newPage = await wpaApi.pages.createPage({});
        // const newPageId = newPage.id;

        // const updatedPage = await wpaApi.pages.updatePage(newPageId, { content: 'updatedContent' });
        // console.log(updatedPage.content);

        // const deleted = await wpaApi.pages.deletePage(newPageId);
        // console.log(deleted);

        // /**
        //  * test category
        //  */
        // const category = await wpaApi.categories.getCategory(1);
        // console.log(category);

        // const categories = await wpaApi.categories.getCategories({});
        // console.log(categories);

        // const newCategory = await wpaApi.categories.createCategory({ name: 'newCategory' });
        // console.log(newCategory.id);

        // const updatedCategory = await wpaApi.categories.updateCategory(newCategory.id, { name: 'updatedCategory' });
        // console.log(updatedCategory);

        // const deletedCategory = await wpaApi.categories.deleteCategory(updatedCategory.id, { force: true });
        // console.log(deletedCategory);

        // /**
        //  * test tags
        //  */
        // const createdTag1 = await wpaApi.tags.createTag({ name: 'tag1' });
        // const createdTag2 = await wpaApi.tags.createTag({ name: 'tag2' });

        // const tag = await wpaApi.tags.getTag(createdTag1.id);
        // console.log(tag);

        // const tags = await wpaApi.tags.getTags();
        // console.log(tags);

        // const updatedTag = await wpaApi.tags.updateTag(createdTag2.id, { name: 'updatedName' });
        // console.log(updatedTag);

        // const deletedTag1 = await wpaApi.tags.deleteTag(createdTag1.id);
        // console.log(deletedTag1);

        // const deletedTag2 = await wpaApi.tags.deleteTag(createdTag2.id);
        // console.log(deletedTag2);

        // // should be empty
        // console.log(await wpaApi.tags.getTags());

        // /**
        //  * test comments
        //  */
        // const comment = await wpaApi.comments.getComment(1);
        // console.log(comment);

        // const createdComment = await wpaApi.comments.createComment({ content: 'comment content', post: 1 });
        // console.log(createdComment);

        // const updatedComment = await wpaApi.comments.updateComment(createdComment.id, { content: 'updated content' });
        // console.log(updatedComment);

        // const deletedComment = await wpaApi.comments.deleteComment(updatedComment.id);
        // console.log(deletedComment);

        // /**
        //  * test taxaomy
        //  */
        // const taxanomies = await wpaApi.taxanomies.getTaxanomies();
        // console.log(taxanomies);

        // const taxanomy = await wpaApi.taxanomies.getTaxanomy(Object.keys(taxanomies)[0]);
        // console.log(taxanomy);

        // /**
        //  * test media
        //  */
        // const newMedia = await wpaApi.media.createMedia({});
        // console.log(newMedia);

        // const getMedia = await wpaApi.media.getMedia(newMedia.id);
        // console.log(getMedia);

        // const updatedMedia = await wpaApi.media.updateMedia(getMedia.id, { description: 'updated description' });
        // console.log(updatedMedia);

        // const deletedMedia = await wpaApi.media.deleteMedia(updatedMedia.id);
        // console.log(deletedMedia);

        // /**
        //  * test post types
        //  */
        // const postTypes = await wpaApi.postTypes.getTypes();
        // console.log(postTypes);

        // const postType = await wpaApi.postTypes.getType(Object.keys(postTypes)[0]);
        // console.log(postType);

        // /**
        // * test post statuses
        // */
        // const postStatuses = await wpaApi.postStatuses.getStatuses();
        // console.log(postStatuses);

        // const postStatus = await wpaApi.postStatuses.getStatus(Object.keys(postStatuses)[0]);
        // console.log(postStatus);

        // /**
        //  * test settings
        //  */
        // const settings = await wpaApi.settings.getAllSettings();
        // console.log(settings);

        // const updatedSettings = await wpaApi.settings.updateSettings({});
    }
    catch (e) {
        console.log('oops, error');
        console.log(e);
    }

    process.exit();
})();
