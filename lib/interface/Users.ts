export interface User {
    /**
     * Unique identifier for the user.
     * Context: embed, view, edit
     * @readonly
     */
    id: number;

    /**
     * Login name for the user.
     * Context: edit
     */
    username: string;

    /**
     * string	Display name for the user.
     * Context: embed, view, edit
     */
    name: string;

    /**
     * string	First name for the user.
     * Context: edit
     */
    first_name: string;

    /**
     * string	Last name for the user.
     * Context: edit
     */
    last_name: string;

    /**
     * string, email	The email address for the user.
     * Context: edit
     */
    email: string;

    /**
     * string, uri	URL of the user.
     * Context: embed, view, edit
     */
    url: string;

    /**
     * string	Description of the user.
     * Context: embed, view, edit
     */
    description: string;

    /**
     * string, uri	Author URL of the user.
     * Read only
     * Context: embed, view, edit
     */
    link: string;

    /**
     * string	Locale for the user.
     * Context: edit
     * One of: , en_US
     */
    locale: string;

    /**
     * string	The nickname for the user.
     * Context: edit
     */
    nickname: string;

    /**
     * string	An alphanumeric identifier for the user.
     * Context: embed, view, edit
     */
    slug: string;

    /**
     * string, datetime(ISO8601)
     * Registration date for the user.
     * Read only
     * Context: edit
     */
    registered_date: Date;

    /**
     * array	Roles assigned to the user.
     * Context: edit
     */
    roles: string[];

    /**
     * string	Password for the user (never included).
     * Context:
     */
    password: string;

    /**
     * object	All capabilities assigned to the user.
     * Context: edit
     * @readonly
     */
    capabilities: {};

    /**
     * object	Any extra capabilities assigned to the user.
     * Context: edit
     * @readonly
     */
    extra_capabilities: {};

    /**
     * object	Avatar URLs for the user.
     * Context: embed, view, edit
     * @readonly
     */
    avatar_urls: {};

    /**
     * object	Meta fields.
     * Context: view, edit
     */
    meta: {};
}

export interface ListUsers {
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
     * exclude	Ensure result set excludes specific IDs.
     * Default:
     */
    search?: string;

    // TODO: what type is incule?
    /**
     * Limit result set to specific IDs.
     * Default:
     */
    include?: string;

    /**
     * Offset the result set by a specific number of items.
     * order	Order sort attribute ascending or descending.
     * One of: asc, desc
     * @default: "asc"
     */
    offset?: 'asc' | 'desc';

    /**
     * Sort collection by object attribute.
     * One of: id, include, name, registered_date, slug, email, url
     * @default: "name"
     */
    orderby?: 'id' | 'include' | 'name' | 'registered_date' | 'slug' | 'email' | 'url';

    /**
     * Limit result set to users with a specific slug.
     */
    slug?: string;

    /**
     * Limit result set to users matching at least one specific role provided.Accepts csv list or single role.
     */
    roles?: string[];
}

export interface CreateUser {
    /**
     * Login name for the user.
     * @required
     */
    username: string;

    /**
     * Display name for the user.
     */
    name?: string;

    /**
     * First name for the user.
     */
    first_name?: string;

    /**
     * Last name for the user.
     */
    last_name?: string;

    /**
     * The email address for the user.
     * @required
     */
    email: string;

    /**
     * URL of the user.
     */
    url?: string;

    /**
     * Description of the user.
     */
    description?: string;

    /**
     * Locale for the user.
     * One of: , en_US
     */
    locale?: string;

    /**
     * The nickname for the user.
     */
    nickname?: string;

    /**
     * An alphanumeric identifier for the user.
     */
    slug?: string;

    /**
     * Roles assigned to the user.
     */
    roles?: string;

    /**
     * Password for the user (never included).
     * Required: true
     */
    password?: string;

    /**
     * Meta fields.
     */
    meta?: {};
}

export interface UpdateUser {
    /**
     * Login name for the user.
     * user name is not editable
     */
    // username?: string;

    /**
     * Display name for the user.
     */
    name?: string;

    /**
     * First name for the user.
     */
    first_name?: string;

    /**
     * Last name for the user.
     */
    last_name?: string;

    /**
     * The email address for the user.
     */
    email?: string;

    /**
     * URL of the user.
     */
    url?: string;

    /**
     * Description of the user.
     */
    description?: string;

    /**
     * Locale for the user.
     * One of: , en_US
     */
    locale?: string;

    /**
     * The nickname for the user.
     */
    nickname?: string;

    /**
     * An alphanumeric identifier for the user.
     */
    slug?: string;

    /**
     * Roles assigned to the user.
     */
    roles?: string[];

    /**
     * Password for the user (never included).
     */
    password?: string;

    /**
     * Meta fields.
     */
    meta?: {};
}

export interface DeleteUser {
    /**
     * Required to be true, as users do not support trashing.
     */
    force?: boolean;

    /**
     * Reassign the deleted user’s posts and links to this user ID.
     * I have no idea what type of that parameter is, i guess boolean but api retur bad request param so that works... ! ! ! !
     */
    reassign?: {};
}
