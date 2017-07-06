export interface PostType {
    /**
     * array
     * All capabilities used by the resource.
     * Context: edit
     * @readonly
     */
    capabilities: Array<{}>;
    /**
     * string
     * A human- readable description of the resource.
     * Context: view, edit
     * @readonly
     */
    description: string;
    /**
     * boolean
     * Whether or not the resource should have children.
     * Context: view, edit
     * @readonly
     */
    hierarchical: boolean;
    /**
     * object
     * Human - readable labels for the resource for various contexts.
     * Context: edit
     * @readonly
     */
    labels: {};
    /**
     * string
     * The title for the resource.
     * Context: view, edit, embed
     * @readonly
     */
    name: string;
    /**
     * string
     * An alphanumeric identifier for the resource.
     * Context: view, edit, embed
     * @readonly
     */
    slug: string;
}
export interface ListTypes {
    /**
     * Scope under which the request is made; determines fields present in response.
     * One of: view, embed, edit
     * @default: "view"
     */
    context?: 'view' | 'embed' | 'edit';
}
export interface GetType {
    /**
     * Scope under which the request is made; determines fields present in response.
     * One of: view, embed, edit
     * @default: "view"
     */
    context?: 'view' | 'embed' | 'edit';
}
