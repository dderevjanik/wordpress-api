export interface Category {
    /**
     * integer	Unique identifier for the term.
     * Read only
     * Context: view, embed, edit
     */
    id: number;
    /**
     * integer	Number of published posts for the term.
     * Read only
     * Context: view, edit
     */
    count: number;
    /**
     * string	HTML description of the term.
     * Context: view, edit
     */
    description: string;
    /**
     * string, uri	URL of the term.
     * Read only
     * Context: view, embed, edit
     */
    link: string;
    /**
     * string	HTML title for the term.
     * Context: view, embed, edit
     */
    name: string;
    /**
     * string	An alphanumeric identifier for the term unique to its type.
     * Context: view, embed, edit
     */
    slug: string;
    /**
     * string	Type attribution for the term.
     * Read only
     * Context: view, embed, edit
     * One of: category, post_tag, nav_menu, link_category, post_format
     */
    taxonomy: string;
    /**
     * integer	The parent term ID.
     * Context: view, edit
     */
    parent: number;
    /**
     * object	Meta fields.
     * Context: view, edit
    */
    meta: {};
}
export interface ListCategories {
    /**
     * Scope under which the request is made; determines fields present in response.
     * @default: "view"
     * One of: view, embed, edit
     */
    context?: string;
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
     */
    search?: number;
    /**
     * Limit result set to specific IDs.
     */
    include?: number;
    /**
     * Order sort attribute ascending or descending.
     * One of: asc, desc
     * @default: asc
     */
    order?: 'asc' | 'desc';
    /**
     * Sort collection by term attribute.
     * One of: id, include, name, slug, term_group, description, count
     * @default: name
     */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
    /**
     * Whether to hide terms not assigned to any posts.
     */
    hide_empty?: boolean;
    /**
     * Limit result set to terms assigned to a specific parent.
     */
    parent?: number;
    /**
     * Limit result set to terms assigned to a specific post.
     */
    post?: number;
    /**
     * Limit result set to terms with a specific slug.
     */
    slug?: string;
}
export interface GetCategory {
    /**
     * 	Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view, embed, edit
     */
    context: string;
}
export interface CreateCategory {
    /**
     * HTML description of the term.
     */
    description?: string;
    /**
     * HTML title for the term.
     * @required
     */
    name: string;
    /**
     * An alphanumeric identifier for the term unique to its type.
     */
    slug?: string;
    /**
     * The parent term ID.
     */
    parent?: number;
    /**
     * Meta fields.
     */
    meta?: {};
}
export interface UpdateCategory {
    /**
     * description: string
     */
    description?: string;
    /**
     * HTML title for the term.
     */
    name?: string;
    /**
     * An alphanumeric identifier for the term unique to its type.
     */
    slug?: string;
    /**
     * The parent term ID.
     */
    parent?: number;
    /**
     * Meta fields.
     */
    meta?: {};
}
export interface DeleteCategory {
    /**
     * Required to be true, as terms do not support trashing.
     */
    force?: boolean;
}
