export interface Tag {
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
     * object	Meta fields.
     * Context: view, edit
     */
    meta: {};
}
export interface ListTags {
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
     * Ensure result set excludes specific IDs.
     */
    exclude?: number[];
    /**
     * Limit result set to specific IDs.
     */
    include?: number[];
    /**
     * Offset the result set by a specific number of items.
     */
    offset?: number;
    /**
     * Order sort attribute ascending or descending.
     * Default: asc
     * One of: asc, desc
     */
    order?: string;
    /**
     * Sort collection by term attribute.
     * Default: name
     * One of: id, include, name, slug, term_group, description, count
     */
    orderby?: string;
    /**
     * hide_empty: boolean
     */
    hide_empty?: boolean;
    /**
     * Limit result set to terms assigned to a specific post.
     */
    post?: number;
    /**
     * Limit result set to terms with a specific slug.
     */
    slug?: string;
}
export interface GetTag {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view, embed, edit
     */
    context?: string;
}
export interface CreateTag {
    /**
     * HTML description of the term.
     */
    description?: string;
    /**
     * HTML title for the term.
     * Required: true
     */
    name: string;
    /**
     * An alphanumeric identifier for the term unique to its type.
     */
    slug?: string;
    /**
     * Meta fields.
     */
    meta?: {};
}
export interface UpdateTag {
    /**
     * HTML description of the term.
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
     * Meta fields.
     */
    meta?: {};
}
export interface DeleteTag {
    /**
     * Required to be true, as terms do not support trashing.
     */
    force: boolean;
}
