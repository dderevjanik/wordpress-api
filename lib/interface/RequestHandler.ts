import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type RequestHandler = (options: AxiosRequestConfig) => Promise<AxiosResponse>;
