import { ListComments, Comment, CreateComment, DeleteComment, GetComment, UpdateComment } from './../lib/interface/Comments';
import { Category, CreateCategory, DeleteCategory, GetCategory, ListCategories, UpdateCategory } from './../lib/interface/Categories';
import { MediaItem, CreateMedia, DeleteMedia, GetMedia, ListMedia, UpdateMedia } from './../lib/interface/Media';
import { CreateTag, DeleteTag, GetTag, ListTags, Tag, UpdateTag } from './../lib/interface/Tags';
import { CreatePage, DeletePage, GetPage, ListPages, Page, UpdatePage } from './../lib/interface/Pages';
import { GetPostRevision, ListPostRevisions, PostRevision } from './../lib/interface/PostRevisions';
import { DeletePost, ListPosts, Post, RetrievePost } from './../lib/interface/Posts';
import { GetStatus, ListStatuses, PostStatus } from './../lib/interface/PostStatuses';
import { GetType, ListTypes, PostType } from './../lib/interface/PostTypes';
import { Setting } from './../lib/interface/Settings';
import { CreateUser, DeleteUser, ListUsers, UpdateUser, User } from './../lib/interface/Users';
import { GetTaxaomy, ListTaxaomies, Taxanomy } from './../lib/interface/Taxanomies';

import { connect } from './../lib/Index';
import { generateToken } from 'wordpress-jwt-auth'; // DEV

const connectToWpApi = async (host: string, userName: string, password: string) => {
    const { token } = await generateToken(host, userName, password);
    const authorization = `Bearer ${token}`;
    const wpaApi = await connect(host, {
        beforeRequest: (r) => ({
            ...r, headers: { ...r.headers, Authorization: authorization },
        }),
    });
    return wpaApi;
};

export { connectToWpApi }
