import { AxiosRequestConfig, AxiosResponse } from 'axios';
/**
 * Connect Hook is useful when you want to modify every request before sending it or
 * every response you'll receive. It's mostly useful when you want to use custom
 * authenticate method.
 */
export interface ConnectHook {
    /**
     * Modify request before sending it
     * @param config - axios configuration
     * @returns modified axios config
     */
    beforeRequest?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    /**
     * Modify response after receiving it
     * @param response - received response from server
     * @returns modified axios response
     */
    afterResponse?: (response: AxiosResponse) => AxiosResponse;
}
