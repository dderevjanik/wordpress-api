import { GetType, ListTypes, PostType } from './interface/PostTypes';
import { RequestHandler } from './interface/RequestHandler';
export declare const PostTypes: (API_URL: string, makeRequest: RequestHandler) => {
    getType: (key: string, options?: GetType) => Promise<PostType>;
    getTypes: (options?: ListTypes) => Promise<{}>;
};
