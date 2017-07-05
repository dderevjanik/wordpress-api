import { GetTaxaomy, ListTaxaomies, Taxanomy } from './interface/Taxanomies';
import { RequestHandler } from './interface/RequestHandler';
export declare const Taxanomies: (API_URL: string, makeRequest: RequestHandler) => {
    getTaxanomy: (key: string, options?: GetTaxaomy) => Promise<Taxanomy>;
    getTaxanomies: (options?: ListTaxaomies) => Promise<{}>;
};
