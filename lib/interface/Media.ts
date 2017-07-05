export interface MediaItem {
    /**
     * string,
     * datetime (ISO8601)
     * The date the object was published, in the site’s timezone.
     * Context: view, edit, embed
     */
    date: string;

    /**
     * string,
     * datetime(ISO8601)
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
     * string, uri
     * URL to the object.
     * Read only
     * Context: view, edit, embed
     */
    link: string;

    /**
     * string,
     * datetime(ISO8601)
     * The date the object was last modified, in the site’s timezone.
     * Read only
     * Context: view, edit
     */
    modified: string;

    /**
     * string,
     * datetime(ISO8601)
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
     * object
     * The title for the object.
     * Context: view, edit, embed
     */
    title: {};

    /**
     * integer
     * The id for the author of the object.
     * Context: view, edit, embed
     */
    author: number;

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
     * object
     * Meta fields.
     * Context: view, edit
     */
    meta: {};

    /**
     * string
     * Alternative text to display when resource is not displayed.
     * Context: view, edit, embed
     */
    alt_text: string;

    /**
     * string
     * The caption for the resource.
     * Context: view, edit
     */
    caption: string;

    /**
     * string
     * The description for the resource.
     * Context: view, edit
     */
    description: string;

    /**
     * string
     * Type of resource.
     * Read only
     * Context: view, edit, embed
     * One of: image, file
     */
    media_type: string;

    /**
     * string
     * MIME type of resource.
     * Read only
     * Context: view, edit, embed
     */
    mime_type: string;

    /**
     * object
     * Details about the resource file, specific to its type.
     * Read only
     * Context: view, edit, embed
     */
    media_details: {};

    /**
     * integer
     * The id for the associated post of the resource.
     * Context: view, edit
     */
    post: number;

    /**
     * string, uri
     * URL to the original resource file.
     * Read only
     * Context: view, edit, embed
     */
    source_url: string;
}

export interface ListMedia {
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
    search?: string;

    /**
     * Limit response to resources published after a given ISO8601 compliant date.
     */
    after?: string;

    /**
     * Limit result set to posts assigned to specific authors.
     */
    author?: number[];

    /**
     * Ensure result set excludes posts assigned to specific authors.
     */
    author_exclude?: number[];

    /**
     * Limit response to resources published before a given ISO8601 compliant date.
     */
    before?: string;

    /**
     * Ensure result set excludes specific ids.
     */
    exclude?: number[];

    /**
     * Limit result set to specific ids.
     */
    include?: number[];

    /**
     * Offset the result set by a specific number of items.
     */
    offset?: number[];

    /**
     * Order sort attribute ascending or descending.
     * Default: desc
     * One of: asc, desc
     */
    order?: string;

    /**
     * Sort collection by object attribute.
     * Default: date
     * One of: date, relevance, id, include, title, slug
     */
    orderby?: string;

    /**
     * Limit result set to those of particular parent ids.
     */
    parent?: number[];

    /**
     * Limit result set to all items except those of a particular parent id.
     */
    parent_exclude?: number[];

    /**
     * Limit result set to posts with a specific slug.
     */
    slug?: string;

    /**
     * Limit result set to posts assigned a specific status; can be comma- delimited list of status types.
     * Default: inherit
     * One of: inherit, private, trash
     */
    status?: string;

    /**
     * Use WP Query arguments to modify the response; private query vars require appropriate authorization.
     */
    filter?: string;

    /**
     * Limit result set to attachments of a particular media type.
     * One of: image, video, audio, application
     */
    media_type?: string;

    /**
     * Limit result set to attachments of a particular MIME type.
     */
    mime_type?: string;
}

export interface GetMedia {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view, embed, edit
     */
    context?: string;

    /**
     * The password for the post if it is password protected.
     */
    password?: string;
}

export interface CreateMedia {
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
     * The title for the object.
     */
    title?: string;

    /**
     * The id for the author of the object.
     */
    author?: number;

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
     * Meta fields.
     */
    meta?: {};

    /**
     * Alternative text to display when resource is not displayed.
     */
    alt_text?: string;

    /**
     * The caption for the resource.
     */
    caption?: string;

    /**
     * The description for the resource.
     */
    description?: string;

    /**
     * The id for the associated post of the resource.
     */
    post?: number;
}

export interface UpdateMedia {
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
     * The title for the object.
     */
    title?: string;

    /**
     * The id for the author of the object.
     */
    author?: number;

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
     * Meta fields.
     */
    meta?: {};

    /**
     * Alternative text to display when resource is not displayed.
     */
    alt_text?: string;

    /**
     * The caption for the resource.
     */
    caption?: string;

    /**
     * The description for the resource.
     */
    description?: string;

    /**
     * The id for the associated post of the resource.
     */
    post?: number;
}

export interface DeleteMedia {
    /**
     * Whether to bypass trash and force deletion.
     */
    force?: boolean;
}
