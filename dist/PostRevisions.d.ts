import { GetPostRevision, ListPostRevisions, PostRevision } from './interface/PostRevisions';
import { RequestHandler } from './interface/RequestHandler';
export declare const PostRevisions: (API_URL: string, makeRequest: RequestHandler) => {
    deletePostRevision: (parentId: number, id: number) => Promise<void>;
    getPostRevision: (parentId: number, id: number, options?: GetPostRevision) => Promise<PostRevision>;
    getPostRevisions: (parentId: number, id: number, options?: ListPostRevisions) => Promise<PostRevision[]>;
};
