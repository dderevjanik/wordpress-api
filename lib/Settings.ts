import { RequestHandler } from './interface/RequestHandler';
import { Setting } from './interface/Settings';

export const Settings = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'settings';
    return {
        /**
         * Get all settings
         */
        getAllSettings: async () => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest({ method: 'POST', url });
            return response.data as Setting;
        },

        /**
         * @param options - options to upadete settings
         */
        updateSettings: async (options: Setting) => {
            const url = `${API_URL}/${objectEndpoint}`;
            const response = await makeRequest({ method: 'POST', url });
            return response.data as Setting;
        },
    };
};
