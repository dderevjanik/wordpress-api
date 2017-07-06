export interface Tag {
    /**
     * integer	Unique identifier for the term.
     * Context: view, embed, edit
     * @readonly
     */
    id: number;

    /**
     * integer	Number of published posts for the term.
     * Context: view, edit
     * @readonly
     */
    count: number;

    /**
     * string	HTML description of the term.
     * Context: view, edit
     */
    description: string;

    /**
     * string, uri	URL of the term.
     * Context: view, embed, edit
     * @readonly
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
     * Context: view, embed, edit
     * One of: category, post_tag, nav_menu, link_category, post_format
     * @readonly
     */
    taxonomy: 'category' | 'post_tag' | 'nav_menu' | 'link_category' | 'post_format';

    /**
     * object	Meta fields.
     * Context: view, edit
     */
    meta: {};
}

export interface ListTags {
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
     * One of: asc, desc
     * @default: "asc"
     */
    order?: 'asc' | 'desc';

    /**
     * Sort collection by term attribute.
     * One of: id, include, name, slug, term_group, description, count
     * @default: name
     */
    orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';

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
     * One of: view, embed, edit
     * @default: "view"
     */
    context?: 'view' | 'embed' | 'edit';
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
