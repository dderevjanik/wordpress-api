import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type RequestHandler = (url: string, options: AxiosRequestConfig) => Promise<AxiosResponse>;
