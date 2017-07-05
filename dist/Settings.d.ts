import { RequestHandler } from './interface/RequestHandler';
import { Setting } from './interface/Settings';
export declare const Settings: (API_URL: string, makeRequest: RequestHandler) => {
    getAllSettings: () => Promise<Setting>;
    updateSettings: (options: Setting) => Promise<Setting>;
};
