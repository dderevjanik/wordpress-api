export interface Page {
    /**
     * string, datetime (ISO8601)
     * The date the object was published, in the site’s timezone.
     * Context: view, edit, embed
     */
    date: string;

    /**
     * string, datetime(ISO8601)
     * The date the object was published, as GMT.
     * Context: view, edit
     */
    date_gmt: string;

    /**
     * object
     * The globally unique identifier for the object.
     * Read only
     * Context: view, edit
     */
    guid: {};

    /**
     * integer
     * Unique identifier for the object.
     * Read only
     * Context: view, edit, embed
     */
    id: number;

    /**
     * string,
     * uri
     * URL to the object.
     * Read only
     * Context: view, edit, embed
     */
    link: string;

    /**
     * string, datetime(ISO8601)
     * The date the object was last modified, in the site’s timezone.
     * Read only
     * Context: view, edit
     */
    modified: string;

    /**
     * string, datetime(ISO8601)
     * The date the object was last modified, as GMT.
     * Read only
     * Context: view, edit
     */
    modified_gmt: string;

    /**
     * string
     * An alphanumeric identifier for the object unique to its type.
     * Context: view, edit, embed
     */
    slug: string;

    /**
     * string
     * A named status for the object.
     * Context: edit
     * One of: publish, future, draft, pending, private
     */
    status: string;

    /**
     * string
     * Type of Post for the object.
     * Read only
     * Context: view, edit, embed
     */
    type: string;

    /**
     * integer
     * The id for the parent of the object.
     * Context: view, edit
     */
    parent: number;

    /**
     * object
     * The title for the object.
     * Context: view, edit, embed
     */
    title: {};

    /**
     * object
     * The content for the object.
     * Context: view, edit
     */
    content: {};

    /**
     * integer
     * The id for the author of the object.
     * Context: view, edit, embed
     */
    author: number;

    /**
     * object
     * The excerpt for the object.
     * Context: view, edit, embed
     */
    excerpt: {};

    /**
     * integer
     * The id of the featured media for the object.
     * Context: view, edit
     */
    featured_media: number;

    /**
     * string
     * Whether or not comments are open on the object.
     * Context: view, edit
     * One of: open, closed
     */
    comment_status: string;

    /**
     * string
     * Whether or not the object can be pinged.
     * Context: view, edit
     * One of: open, closed
     */
    ping_status: string;

    /**
     * integer
     * The order of the object in relation to other object of its type.
     * Context: view, edit
     */
    menu_order: number;

    /**
     * object
     * Meta fields.
     * Context: view, edit
     */
    meta: {};

    /**
     * string
     * The theme file to use to display the object.
     * Context: view, edit
     */
    template: string;
}

export interface ListPages {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view, embed, edit
     */
    context?: string;

    /**
     * Current page of the collection.
     * Default: 1
     */
    page?: number;

    /**
     * Maximum number of items to be returned in result set.
     * Default: 10
     */
    per_page?: number;

    /**
     * Limit results to those matching a string.
     */
    search?: number;

    /**
     * Limit response to resources published after a given ISO8601 compliant date.
     */
    after?: number;

    /**
     * Limit result set to posts assigned to specific authors.
     */
    author?: number;

    /**
     * Ensure result set excludes posts assigned to specific authors.
     * TODO: what is that type?
     */
    author_exclude?: {};

    /**
     * Limit response to resources published before a given ISO8601 compliant date.
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
     * Limit result set to resources with a specific menu_order value.
     */
    menu_order?: number;

    /**
     * Offset the result set by a specific number of items.
     */
    offset?: number;

    /**
     * Order sort attribute ascending or descending.
     * Default: desc
     * One of: asc, desc
     */
    order?: string;

    /**
     * Sort collection by object attribute.
     * Default: date
     * One of: date, relevance, id, include, title, slug, menu_order
     */
    orderby?: string[];

    /**
     * Limit result set to those of particular parent ids.
     */
    parent?: number;

    /**
     * Limit result set to all items except those of a particular parent id.
     */
    parent_exclude?: number;

    /**
     * Limit result set to posts with a specific slug.
     */
    slug?: string;

    /**
     * Limit result set to posts assigned a specific status; can be comma- delimited list of status types.
     * Default: publish
     * One of: publish, future, draft, pending, private, trash, auto - draft, inherit, any
     */
    status?: string;

    /**
     * Use WP Query arguments to modify the response; private query vars require appropriate authorization.
     */
    filter?: string;
}

export interface GetPage {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view, embed, edit
     */
    context: string;

    /**
     * The password for the post if it is password protected.
     */
    password?: string;
}

export interface CreatePage {
    /**
     * The date the object was published, in the site’s timezone.
     */
    date?: string;

    /**
     * The date the object was published, as GMT.
     */
    date_gmt?: string;

    /**
     * An alphanumeric identifier for the object unique to its type.
     */
    slug?: string;

    /**
     * A named status for the object.
     * One of: publish, future, draft, pending, private
     */
    status?: string;

    /**
     * The id for the parent of the object.
     */
    parent?: number;

    /**
     * The title for the object.
     */
    title?: string;

    /**
     * The content for the object.
     */
    content?: string;

    /**
     * The id for the author of the object.
     */
    author?: number;

    /**
     * The excerpt for the object.
     */
    excerpt?: string;

    /**
     * The id of the featured media for the object.
     */
    featured_media?: number;

    /**
     * Whether or not comments are open on the object.
     * One of: open, closed
     */
    comment_status?: string;

    /**
     * Whether or not the object can be pinged.
     * One of: open, closed
     */
    ping_status?: string;

    /**
     * The order of the object in relation to other object of its type.
     */
    menu_order?: number;

    /**
     * Meta fields.
     */
    meta?: {};

    /**
     * The theme file to use to display the object.
     */
    template?: string;
}

export interface UpdatePage {
    /**
     * The date the object was published, in the site’s timezone.
     */
    date?: string;

    /**
     * The date the object was published, as GMT.
     */
    date_gmt?: string;

    /**
     * An alphanumeric identifier for the object unique to its type.
     */
    slug?: string;

    /**
     * A named status for the object.
     * One of: publish, future, draft, pending, private
     */
    status?: string;

    /**
     * The id for the parent of the object.
     */
    parent?: number;

    /**
     * The title for the object.
     */
    title?: string;

    /**
     * The content for the object.
     */
    content?: string;

    /**
     * The id for the author of the object.
     */
    author?: number;

    /**
     * The excerpt for the object.
     */
    excerpt?: string;

    /**
     * The id of the featured media for the object.
     */
    featured_media?: number;

    /**
     * Whether or not comments are open on the object.
     * One of: open, closed
     */
    comment_status?: string;

    /**
     * Whether or not the object can be pinged
     * One of: open, closed
     */
    ping_status?: string;

    /**
     * The order of the object in relation to other object of its type.
     */
    menu_order?: number;

    /**
     * Meta fields.
     */
    meta?: {};

    /**
     * The theme file to use to display the object.
     */
    template?: string;

}

export interface DeletePage {
    /**
     * Whether to bypass trash and force deletion.
     */
    force: boolean;
}
