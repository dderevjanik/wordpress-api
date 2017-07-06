import { Comment, CreateComment, DeleteComment, GetComment, ListComments, UpdateComment } from './interface/Comments';
import { RequestHandler } from './interface/RequestHandler';
export declare const Comments: (API_URL: string, makeRequest: RequestHandler) => {
    createComment: (options: CreateComment) => Promise<Comment>;
    deleteComment: (id: number, options?: DeleteComment) => Promise<any>;
    getComment: (id: number, options?: GetComment) => Promise<Comment>;
    getComments: (options?: ListComments) => Promise<Comment[]>;
    updateComment: (id: number, options: UpdateComment) => Promise<Comment>;
};
