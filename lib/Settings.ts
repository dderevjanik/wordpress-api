import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as QueryString from 'querystring';
import { Setting } from './interface/Settings';
import { RequestHandler } from './interface/RequestHandler';

export const Settings = (API_URL: string, makeRequest: RequestHandler) => {
    const objectEndpoint = 'settings';
    return {
        /**
         *Get all settings
         */
        getAllSettings: async () => {
            const response = await makeRequest({ method: 'POST', url: `${API_URL}/${objectEndpoint}` });
            return response.data as Setting;
        },

        updateSettings: async (options: Setting) => {
            throw Error("Not implemented in rest api");
        },
    };
};
