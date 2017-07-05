export interface PostType {
    /**
     * array
     * All capabilities used by the resource.
     * Read only
     * Context: edit
     */
    capabilities: {}[];
    /**
     * string
     * A human- readable description of the resource.
     * Read only
     * Context: view, edit
     */
    description: string;
    /**
     * boolean
     * Whether or not the resource should have children.
     * Read only
     * Context: view, edit
     */
    hierarchical: boolean;
    /**
     * object
     * Human - readable labels for the resource for various contexts.
     * Read only
     * Context: edit
     */
    labels: {};
    /**
     * string
     * The title for the resource.
     * Read only
     * Context: view, edit, embed
     */
    name: string;
    /**
     * string
     * An alphanumeric identifier for the resource.
     * Read only
     * Context: view, edit, embed
     */
    slug: string;
}
export interface ListTypes {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view, embed, edit
     */
    context?: string;
}
export interface GetType {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view, embed, edit
     */
    context?: string;
}
