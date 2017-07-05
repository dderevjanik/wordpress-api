import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { GetPostRevision, ListPostRevisions, PostRevision } from './interface/PostRevisions';
export declare const PostRevisions: (API_URL: string, makeRequest: (options: AxiosRequestConfig) => Promise<AxiosResponse>) => {
    deletePostRevision: (parentId: number, id: number) => Promise<void>;
    getPostRevision: (parentId: number, id: number, options?: GetPostRevision) => Promise<PostRevision>;
    getPostRevisions: (parentId: number, id: number, options?: ListPostRevisions) => Promise<PostRevision[]>;
};
