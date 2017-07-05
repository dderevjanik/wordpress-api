import { Setting } from './interface/Settings';
import { RequestHandler } from './interface/RequestHandler';
export declare const Settings: (API_URL: string, makeRequest: RequestHandler) => {
    getAllSettings: () => Promise<Setting>;
    updateSettings: (options: Setting) => Promise<never>;
};
