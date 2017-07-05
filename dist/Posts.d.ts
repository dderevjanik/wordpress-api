import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { DeletePost, Post, RetrievePost } from './interface/Posts';
export declare const Posts: (API_URL: string, makeRequest: (options: AxiosRequestConfig) => Promise<AxiosResponse>) => {
    createPost: (post: Post) => Promise<Post>;
    deletePost: (postId: number, options: DeletePost) => Promise<void>;
    getPost: (postId: number) => Promise<Post>;
    getPosts: (options: RetrievePost) => Promise<Post[]>;
    updatePost: (postId: number, options: Post) => Promise<Post>;
};
