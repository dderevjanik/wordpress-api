import { AxiosRequestConfig, AxiosResponse } from 'axios';
export declare type RequestHandler = (options: AxiosRequestConfig) => Promise<AxiosResponse>;
