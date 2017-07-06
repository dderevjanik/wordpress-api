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
     * Context: view, edit
     * @readonly
     */
    guid: {};
    /**
     * integer
     * Unique identifier for the object.
     * Context: view, edit, embed
     * @readonly
     */
    id: number;
    /**
     * string, uri
     * URL to the object.
     * Context: view, edit, embed
     * @readonly
     */
    link: string;
    /**
     * string,
     * datetime(ISO8601)
     * The date the object was last modified, in the site’s timezone.
     * Context: view, edit
     * @readonly
     */
    modified: string;
    /**
     * string,
     * datetime(ISO8601)
     * The date the object was last modified, as GMT.
     * Context: view, edit
     * @readonly
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
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    /**
     * string
     * Type of Post for the object.
     * Context: view, edit, embed
     * @readonly
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
    comment_status: 'open' | 'closed';
    /**
     * string
     * Whether or not the object can be pinged.
     * Context: view, edit
     * One of: open, closed
     */
    ping_status: 'open' | 'closed';
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
     * Context: view, edit, embed
     * One of: image, file
     * @readonly
     */
    media_type: 'image' | 'file';
    /**
     * string
     * MIME type of resource.
     * Context: view, edit, embed
     * @readonly
     */
    mime_type: string;
    /**
     * object
     * Details about the resource file, specific to its type.
     * Context: view, edit, embed
     * @readonly
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
     * Context: view, edit, embed
     * @readonly
     */
    source_url: string;
}
export interface ListMedia {
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
     * One of: asc, desc
     * @default: "desc"
     */
    order?: 'asc' | 'desc';
    /**
     * Sort collection by object attribute.
     * One of: date, relevance, id, include, title, slug
     * @default: "date"
     */
    orderby?: 'date' | 'relevance' | 'id' | 'include' | 'title' | 'slug';
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
     * One of: inherit, private, trash
     * @default: "inherit"
     */
    status?: 'inherit' | 'private' | 'trash';
    /**
     * Use WP Query arguments to modify the response; private query vars require appropriate authorization.
     */
    filter?: string;
    /**
     * Limit result set to attachments of a particular media type.
     * One of: image, video, audio, application
     */
    media_type?: 'image' | 'video' | 'audio' | 'application';
    /**
     * Limit result set to attachments of a particular MIME type.
     */
    mime_type?: string;
}
export interface GetMedia {
    /**
     * Scope under which the request is made; determines fields present in response.
     * One of: view, embed, edit
     * @default: '"view"
     */
    context?: 'view' | 'embed' | 'edit';
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
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
    comment_status?: 'open' | 'closed';
    /**
     * Whether or not the object can be pinged.
     * One of: open, closed
     */
    ping_status?: 'open' | 'closed';
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
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
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
    comment_status?: 'open' | 'closed';
    /**
     * Whether or not the object can be pinged.
     * One of: open, closed
     */
    ping_status?: 'open' | 'closed';
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
