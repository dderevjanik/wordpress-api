export interface Taxanomy {
    /**
     * object	All capabilities used by the taxonomy.
     * Read only
     * Context: edit
     */
    capabilities: {};
    /**
     * string	A human- readable description of the taxonomy.
     * Read only
     * Context: view, edit
     */
    description: string;
    /**
     * boolean	Whether or not the taxonomy should have children.
     * Read only
     * Context: view, edit
     */
    hierarchical: boolean;
    /**
     * object	Human- readable labels for the taxonomy for various contexts.
     * Read only
     * Context: edit
     */
    labels: {};
    /**
     * string	The title for the taxonomy.
     * Read only
     * Context: view, edit, embed
     */
    name: string;
    /**
     * string	An alphanumeric identifier for the taxonomy.
     * Read only
     * Context: view, edit, embed
     */
    slug: string;
    /**
     * boolean	Whether or not the term cloud should be displayed.
     * Read only
     * Context: edit
     */
    show_cloud: boolean;
    /**
     * array	Types associated with the taxonomy.
     * Read only
     * Context: view, edit
     */
    types: string[];
    /**
     * string	REST base route for the taxonomy.
     * Read only
     * Context: view, edit, embed
     */
    rest_base: string;
}
export interface ListTaxaomies {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view, embed, edit
     */
    context?: string;
    /**
     * Limit results to taxonomies associated with a specific post type.
     */
    type?: string;
}
export interface GetTaxaomy {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view, embed, edit
     */
    context?: string;
}
