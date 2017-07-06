import { RequestHandler } from './interface/RequestHandler';
import { GetTaxaomy, ListTaxaomies, Taxanomy } from './interface/Taxanomies';
export declare const Taxanomies: (API_URL: string, makeRequest: RequestHandler) => {
    getTaxanomies: (options?: ListTaxaomies) => Promise<{}>;
    getTaxanomy: (key: string, options?: GetTaxaomy) => Promise<Taxanomy>;
};
