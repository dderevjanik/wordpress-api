export interface ListPosts {
    context?: 'view' | 'embed' | 'edit';
    page?: number;
    per_page?: number;
    search?: string;
    after?: number;
    author?: number;
    author_exclude?: number;
    before?: string;
    exclude?: number[];
    include?: number[];
    offset?: number;
    order?: 'asc' | 'desc';
    orderBy?: 'date' | 'relevance' | 'id' | 'include' | 'title' | 'slug';
    slug?: string;
    status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
    categories?: string[];
    categories_exclude?: string[];
    tags?: string[];
    tags_exclude?: string[];
    sticky?: boolean;
}

export interface RetrievePost {
    context: 'view' | 'embed' | 'edir';
    password: string;
}

export interface Post {
    /**
     * The date the object was published, in the site’s timezone
     */
    date: string;

    /**
     * The date the object was published, as GMT
     */
    date_gmt: string;

    /**
     * An alphanumeric identifier for the object unique to its type
     */
    slug: string;

    /**
     * A named status for the object
     */
    status: 'publish' | 'future' | 'draft' | 'pending' | 'private';

    /**
     * 	A password to protect access to the content and excerpt
     */
    password: string;

    /**
     * 	The title for the object
     */
    title: {};

    /**
     * The content for the object
     */
    content: {};

    /**
     * The ID for the author of the object
     */
    author: number;

    /**
     * 	The excerpt for the object
     */
    excerpt: {};

    /**
     * he ID of the featured media for the object
     */
    featured_media: string;

    /**
     * Whether or not comments are open on the object
     */
    comment_status: 'open' | 'closed';

    /**
     * Whether or not the object can be pinged
     */
    ping_status: 'open' | 'closed';

    /**
     * The format for the object
     */
    format: string;

    /**
     * 	Meta fields
     */
    meta: string;

    /**
     * Whether or not the object should be treated as sticky
     */
    sticky: boolean;

    /**
     * The theme file to use to display the object
     */
    template: string;

    /**
     * The terms assigned to the object in the category taxonomy
     */
    categories: string[];

    /**
     * The terms assigned to the object in the post_tag taxonomy
     */
    tags: string[];

    /**
     * The number of Liveblog Likes the post has
     */
    liveblog_likes: number;
}

export interface DeletePost {
    /**
     * Whether to bypass trash and force deletion
     */
    force?: boolean;
}
