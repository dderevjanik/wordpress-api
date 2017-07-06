import { GetStatus, ListStatuses, PostStatus } from './interface/PostStatuses';
import { RequestHandler } from './interface/RequestHandler';
export declare const PostStatuses: (API_URL: string, makeRequest: RequestHandler) => {
    getStatus: (key: string, options?: GetStatus) => Promise<PostStatus>;
    getStatuses: (options?: ListStatuses) => Promise<{}>;
};
