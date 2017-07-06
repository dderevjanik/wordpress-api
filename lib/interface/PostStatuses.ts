export interface PostStatus {
    /**
     * string
     * The title for the resource.
     * @readonly
     * Context: embed, view, edit
     */
    name: string;

    /**
     * boolean
     * Whether posts with this resource should be private.
     * @readonly
     * Context: edit
     */
    private: boolean;

    /**
     * boolean
     * Whether posts with this resource should be protected.
     * @readonly
     * Context: edit
     */
    protected: boolean;

    /**
     * boolean
     * Whether posts of this resource should be shown in the front end of the site.
     * @readonly
     * Context: view, edit
     */
    public: boolean;

    /**
     * boolean
     * Whether posts with this resource should be publicly- queryable.
     * @readonly
     * Context: view, edit
     */
    queryable: boolean;

    /**
     * boolean
     * Whether to include posts in the edit listing for their post type.
     * @readonly
     * Context: edit
     */
    show_in_list: boolean;

    /**
     * string
     * An alphanumeric identifier for the resource.
     * @readonly
     * Context: embed, view, edit
     */
    slug: string;
}

export interface ListStatuses {
    /**
     * Scope under which the request is made; determines fields present in response.
     * @default: "view"
     * One of: view, embed, edit
     */
    context?: 'view' | 'embed' | 'edit';
}

export interface GetStatus {
    /**
     * Scope under which the request is made; determines fields present in response.
     * @default: "view"
     * One of: view, embed, edit
     */
    context?: 'view' | 'embed' | 'edit';
}
