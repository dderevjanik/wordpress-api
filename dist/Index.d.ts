import { ConnectHook } from './interface/IConnectHook';
/**
 * Connect to wordpress api
 * @param host - url to wordpress
 * @param hooks - hooks for modify requests/responses, useful for custom authentication
 * @throws {BadHost}
 */
export declare const connect: (host: string, hooks?: ConnectHook) => Promise<{
    categories: any;
    comments: any;
    media: any;
    pages: any;
    postRevisions: any;
    postStatuses: any;
    postTypes: any;
    posts: any;
    settings: any;
    tags: any;
    taxanomies: any;
    users: any;
}>;
