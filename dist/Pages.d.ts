import { CreatePage, DeletePage, ListPages, Page, UpdatePage } from './interface/Pages';
import { RequestHandler } from './interface/RequestHandler';
export declare const Pages: (API_URL: string, makeRequest: RequestHandler) => {
    createPage: (options: CreatePage) => Promise<Page>;
    deletePage: (pageId: number, options?: DeletePage) => Promise<any>;
    getPage: (pageId: number) => Promise<Page>;
    getPages: (options: ListPages) => Promise<Page[]>;
    updatePage: (pageId: number, options: UpdatePage) => Promise<Page>;
};
