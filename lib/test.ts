import axios, { AxiosRequestConfig } from 'axios';
import { red, underline } from 'chalk';
import * as QueryString from 'querystring';
import { generateToken, validateToken } from 'wordpress-jwt-auth'; // DEV
import { ConnectHook } from './interface/IConnectHook';
import { DeletePost, ListPosts, Post, RetrievePost } from './interface/Posts';
import { Pages } from './Pages';
import { Posts } from './Posts';
import { Users } from './Users';

export const test = async (wpaApi: any) => {


};
