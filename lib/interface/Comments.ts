export interface Comment {
    /**
     * integer
     * Unique identifier for the object.
     * Context: view, edit, embed
     * @readonly
     */
    id: number;

    /**
     * integer
     * The id of the user object, if author was a user.
     * Context: view, edit, embed
     */
    author: number;

    /**
     * string,
     * email 	Email address for the object author.
     * Context: edit
     */
    author_email: string;

    /**
     * string,
     * ipv4 	IP address for the object author.
     * Context: edit
     */
    author_ip: string;

    /**
     * string
     * Display name for the object author.
     * Context: view, edit, embed
     */
    author_name: string;

    /**
     * string,
     * uri 	URL for the object author.
     * Context: view, edit, embed
     */
    author_url: string;

    /**
     * string
     * User agent for the object author.
     * Context: edit
     * @readonly
     */
    author_user_agent: string;

    /**
     * object
     * The content for the object.
     * Context: view, edit, embed
     */
    content: {};

    /**
     * string,
     * datetime(details) 	The date the object was published.
     * Context: view, edit, embed
     */
    date: string;

    /**
     * string,
     * datetime(details)
     * The date the object was published as GMT.
     * Context: view, edit
     */
    date_gmt: string;

    /**
     * integer
     * Karma for the object.
     * Context: edit
     */
    karma: number;

    /**
     * string,uri
     * URL to the object.
     * Read only
     * Context: view, edit, embed
     */
    link: string;

    /**
     * integer
     * The id for the parent of the object.
     * Context: view, edit, embed
     */
    parent: number;

    /**
     * integer
     * The id of the associated post object.
     * Context: view, edit
     */
    post: number;

    /**
     * string
     * State of the object.
     * Context: view, edit
     */
    status?: "approved" | "hold" | "1" | "0" | "spam" | "trash";

    /**
     * string
     * Type of Comment for the object.
     * Context: view, edit, embed
     */
    type: string;

    /**
     * object
     * Avatar URLs for the object author.
     * Context: view, edit, embed
     * @readonly
     */
    author_avatar_urls: {};

    /**
     * object
     * Meta fields.
     * Context: view, edit
     */
    meta: {};
}

export interface ListComments {
    /**
     * Scope under which the request is made; determines fields present in response.
     * One of: view, embed, edit
     * @default: "view"
     */
    context?: 'view' | 'embed' | 'edit';

    /**
     * Current page of the collection.
     * @default: 1
     */
    page?: number;

    /**
     * Maximum number of items to be returned in result set.
     * @default: 10
     */
    per_page?: number;

    /**
     * Limit results to those matching a string.
     */
    search?: string;

    /**
     * Limit response to resources published after a given date.
     */
    after?: number;

    /**
     * Limit result set to comments assigned to specific user ids.
     * Requires authorization.
     */
    author?: number[];

    /**
     * Ensure result set excludes comments assigned to specific user ids.
     * Requires authorization.
     */
    author_exclude?: number[];

    /**
     * Limit result set to that from a specific author email.
     * Requires authorization.
     */
    author_email?: string;

    /**
     * Limit response to resources published before a given date.
     */
    before?: number;

    /**
     * Ensure result set excludes specific ids.
     */
    exclude?: number[];

    /**
     * Limit result set to specific ids.
     */
    include?: number[];

    /**
     * Limit result set to that of a particular comment karma.Requires authorization.
     */
    karma?: number;

    /**
     * Offset the result set by a specific number of comments.
     */
    offset?: number;

    /**
     * Order sort attribute ascending or descending.
     * One of: asc, desc
     * @default: 'desc'
     */
    order?: 'asc' | 'desc';

    /**
     * Sort collection by object attribute.
     * One of: date, date_gmt, id, include, post, parent, type
     * @default: 'date_gmt'
     */
    orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';

    /**
     * Limit result set to resources of specific parent ids.
     */
    parent?: number[];

    /**
     * Ensure result set excludes specific parent ids.
     */
    parent_exclude?: number[];

    /**
     * Limit result set to resources assigned to specific post ids.
     */
    post?: number[];

    /**
     * Limit result set to comments assigned a specific status.
     * Requires authorization.
     * 1 is "approved", 0 is "hold" or "pending"
     * not all methods can work with hold and approved, better to use 1 or 0 in all methods
     * @default: 'approve'
     */
    status?: '1' | "0" | "spam" | "trash";

    /**
     * Limit result set to comments assigned a specific type.
     * Requires authorization.
     * @default: 'comment'
     */
    type?: string;
}

export interface GetComment {
    /**
     * Scope under which the request is made; determines fields present in response.
     * One of: view, embed, edit
     * @default: 'view'
     */
    context?: 'view' | 'embed' | 'edit';
}

export interface CreateComment {
    /**
     * The id of the user object, if author was a user.
     */
    author?: number;

    /**
     * Email address for the object author.
     */
    author_email?: string;

    /**
     * IP address for the object author.
     * @default: '127.0.0.1'
     */
    author_ip?: string;

    /**
     * Display name for the object author.
     */
    author_name?: string;

    /**
     * URL for the object author.
     */
    author_url?: string;

    /**
     * The content for the object.
     * @required
     */
    content: string;

    /**
     * The date the object was published.
     */
    date?: string;

    /**
     * The date the object was published as GMT.
     */
    date_gmt?: string;

    /**
     * Karma for the object.
     */
    karma?: number;

    /**
     * The id for the parent of the object.
     * @default: 0
     */
    parent?: number;

    /**
     * The id of the associated post object.
     * @default: 0
     * @required
     */
    post: number;

    /**
     * State of the object.
     * 1 is "approved", 0 is "hold" or "pending"
     * not all methods can work with hold and approved, better to use 1 or 0 in all methods
     * @default: 'approve'
     */
    status?: '1' | "0" | "spam" | "trash";

    /**
     * Type of Comment for the object.
     * @default: "comment"
     */
    type?: string

    /**
     * Meta fields.
     */
    meta?: {};
}

export interface UpdateComment {
    /**
     * The id of the user object, if author was a user.
     */
    author?: number;

    /**
     * Email address for the object author.
     */
    author_email?: string;

    /**
     * IP address for the object author.
     */
    author_ip?: string;

    /**
     * Display name for the object author.
     */
    author_name?: string;

    /**
     * URL for the object author.
     */
    author_url?: string;

    /**
     * The content for the object.
     */
    content?: string;

    /**
     * The date the object was published.
     */
    date?: string;

    /**
     * The date the object was published as GMT.
     */
    date_gmt?: string;

    /**
     * Karma for the object.
     */
    karma?: number;

    /**
     * The id for the parent of the object.
     */
    parent?: number;

    /**
     * The id of the associated post object.
     */
    post?: number;

    /**
     * State of the object.
     * 1 is "approved", 0 is "hold" or "pending"
     * not all methods can work with hold and approved, better to use 1 or 0 in all methods
     * @default: "approved"
     */
    status?: '1' | "0" | "spam" | "trash";

    /**
     * Type of Comment for the object.
     */
    type?: number;

    /**
     * Meta fields.
     */
    meta?: {};
}

export interface DeleteComment {
    /**
     * Whether to bypass trash and force deletion.
     */
    force?: boolean;
}
