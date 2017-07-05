import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreatePage, DeletePage, ListPages, Page, UpdatePage } from './interface/Pages';
export declare const Pages: (API_URL: string, makeRequest: (options: AxiosRequestConfig) => Promise<AxiosResponse>) => {
    createPage: (options: CreatePage) => Promise<Page>;
    deletePage: (pageId: number, options?: DeletePage) => Promise<any>;
    getPage: (pageId: number) => Promise<Page>;
    getPages: (options: ListPages) => Promise<Page[]>;
    updatePage: (pageId: number, options: UpdatePage) => Promise<Page>;
};
