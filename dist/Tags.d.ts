import { CreateTag, DeleteTag, GetTag, ListTags, Tag, UpdateTag } from './interface/Tags';
import { RequestHandler } from './interface/RequestHandler';
export declare const Tags: (API_URL: string, makeRequest: RequestHandler) => {
    createTag: (options: CreateTag) => Promise<Tag>;
    deleteTag: (id: number, options?: DeleteTag) => Promise<any>;
    getTag: (id: number, options?: GetTag) => Promise<Tag>;
    getTags: (options?: ListTags) => Promise<Tag[]>;
    updateTag: (id: number, options: UpdateTag) => Promise<Tag>;
};
