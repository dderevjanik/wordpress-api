import { CreatePost, DeletePost, ListPosts, Post, UpdatePost } from './interface/Posts';
import { RequestHandler } from './interface/RequestHandler';
export declare const Posts: (API_URL: string, makeRequest: RequestHandler) => {
    createPost: (post: CreatePost) => Promise<Post>;
    deletePost: (postId: number, options?: DeletePost) => Promise<any>;
    getPost: (postId: number) => Promise<Post>;
    getPosts: (options: ListPosts) => Promise<Post[]>;
    updatePost: (postId: number, options: UpdatePost) => Promise<Post>;
};
