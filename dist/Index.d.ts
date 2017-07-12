import { ConnectHook } from './interface/IConnectHook';
import { Category, CreateCategory, DeleteCategory, GetCategory, ListCategories, UpdateCategory } from './interface/Categories';
import { Comment, CreateComment, DeleteComment, GetComment, ListComments, UpdateComment } from './interface/Comments';
import { CreateMedia, DeleteMedia, GetMedia, ListMedia, MediaItem, UpdateMedia } from './interface/Media';
import { CreatePage, DeletePage, ListPages, Page, UpdatePage } from './interface/Pages';
import { GetPostRevision, ListPostRevisions, PostRevision } from './interface/PostRevisions';
import { CreatePost, DeletePost, ListPosts, Post, UpdatePost } from './interface/Posts';
import { GetStatus, ListStatuses, PostStatus } from './interface/PostStatuses';
import { GetType, ListTypes, PostType } from './interface/PostTypes';
import { Setting } from './interface/Settings';
import { CreateTag, DeleteTag, GetTag, ListTags, Tag, UpdateTag } from './interface/Tags';
import { GetTaxaomy, ListTaxaomies, Taxanomy } from './interface/Taxanomies';
import { CreateUser, DeleteUser, ListUsers, UpdateUser, User } from './interface/Users';
/**
 * Connect to wordpress api
 * @param host - url to wordpress
 * @param hooks - hooks for modify requests/responses, useful for custom authentication
 * @throws {BadHost}
 */
export declare const connect: (host: string, hooks?: ConnectHook) => Promise<{
    categories: {
        createCategory: (options: CreateCategory) => Promise<Category>;
        deleteCategory: (id: number, options?: DeleteCategory) => Promise<any>;
        getCategories: (options: ListCategories) => Promise<Category[]>;
        getCategory: (id: number, options?: GetCategory) => Promise<Category>;
        updateCategory: (id: number, options: UpdateCategory) => Promise<Category>;
    };
    comments: {
        createComment: (options: CreateComment) => Promise<Comment>;
        deleteComment: (id: number, options?: DeleteComment) => Promise<any>;
        getComment: (id: number, options?: GetComment) => Promise<Comment>;
        getComments: (options?: ListComments) => Promise<Comment[]>;
        updateComment: (id: number, options: UpdateComment) => Promise<Comment>;
    };
    media: {
        createMedia: (options: CreateMedia) => Promise<MediaItem>;
        deleteMedia: (id: number, options?: DeleteMedia) => Promise<any>;
        getAllMedia: (options?: ListMedia) => Promise<MediaItem[]>;
        getMedia: (id: number, options?: GetMedia) => Promise<MediaItem>;
        updateMedia: (id: number, options: UpdateMedia) => Promise<MediaItem>;
    };
    pages: {
        createPage: (options: CreatePage) => Promise<Page>;
        deletePage: (pageId: number, options?: DeletePage) => Promise<any>;
        getPage: (pageId: number) => Promise<Page>;
        getPages: (options: ListPages) => Promise<Page[]>;
        updatePage: (pageId: number, options: UpdatePage) => Promise<Page>;
    };
    postRevisions: {
        deletePostRevision: (parentId: number, id: number) => Promise<void>;
        getPostRevision: (parentId: number, id: number, options?: GetPostRevision) => Promise<PostRevision>;
        getPostRevisions: (parentId: number, id: number, options?: ListPostRevisions) => Promise<PostRevision[]>;
    };
    postStatuses: {
        getStatus: (key: string, options?: GetStatus) => Promise<PostStatus>;
        getStatuses: (options?: ListStatuses) => Promise<{}>;
    };
    postTypes: {
        getType: (key: string, options?: GetType) => Promise<PostType>;
        getTypes: (options?: ListTypes) => Promise<{}>;
    };
    posts: {
        createPost: (post: CreatePost) => Promise<Post>;
        deletePost: (postId: number, options?: DeletePost) => Promise<any>;
        getPost: (postId: number) => Promise<Post>;
        getPosts: (options: ListPosts) => Promise<Post[]>;
        updatePost: (postId: number, options: UpdatePost) => Promise<Post>;
    };
    settings: {
        getAllSettings: () => Promise<Setting>;
        updateSettings: (options: Setting) => Promise<Setting>;
    };
    tags: {
        createTag: (options: CreateTag) => Promise<Tag>;
        deleteTag: (id: number, options?: DeleteTag) => Promise<any>;
        getTag: (id: number, options?: GetTag) => Promise<Tag>;
        getTags: (options?: ListTags) => Promise<Tag[]>;
        updateTag: (id: number, options: UpdateTag) => Promise<Tag>;
    };
    taxanomies: {
        getTaxanomies: (options?: ListTaxaomies) => Promise<{}>;
        getTaxanomy: (key: string, options?: GetTaxaomy) => Promise<Taxanomy>;
    };
    users: {
        isLoggegedId: () => Promise<any>;
        createUser: (options: CreateUser) => Promise<User>;
        deleteUser: (userId: number, options?: DeleteUser) => Promise<any>;
        getUser: (userId: number) => Promise<User>;
        getUsers: (options?: ListUsers) => Promise<User[]>;
        updateUser: (userId: number, options: UpdateUser) => Promise<User>;
    };
}>;
