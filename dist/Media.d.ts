import { CreateMedia, DeleteMedia, GetMedia, ListMedia, MediaItem, UpdateMedia } from './interface/Media';
import { RequestHandler } from './interface/RequestHandler';
export declare const Media: (API_URL: string, makeRequest: RequestHandler) => {
    createMedia: (options: CreateMedia) => Promise<MediaItem>;
    deleteMedia: (id: number, options?: DeleteMedia) => Promise<any>;
    getAllMedia: (options?: ListMedia) => Promise<MediaItem[]>;
    getMedia: (id: number, options?: GetMedia) => Promise<MediaItem>;
    updateMedia: (id: number, options: UpdateMedia) => Promise<MediaItem>;
};
