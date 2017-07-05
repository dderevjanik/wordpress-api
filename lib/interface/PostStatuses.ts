export interface PostStatus {
    /**
     * string
     * The title for the resource.
     * Read only
     * Context: embed, view, edit
     */
    name: string

    /**
     * boolean
     * Whether posts with this resource should be private.
     * Read only
     * Context: edit
     */
    private: boolean

    /**
     * boolean
     * Whether posts with this resource should be protected.
     * Read only
     * Context: edit
     */
    protected: boolean

    /**
     * boolean
     * Whether posts of this resource should be shown in the front end of the site.
     * Read only
     * Context: view, edit
     */
    public: boolean

    /**
     * boolean
     * Whether posts with this resource should be publicly- queryable.
     * Read only
     * Context: view, edit
     */
    queryable: boolean

    /**
     * boolean
     * Whether to include posts in the edit listing for their post type.
     * Read only
     * Context: edit
     */
    show_in_list: boolean

    /**
     * string
     * An alphanumeric identifier for the resource.
     * Read only
     * Context: embed, view, edit
     */
    slug: string
}

export interface ListStatuses {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view, embed, edit
     */
    context?: string
}

export interface GetStatus {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Default: viewOne of: view, embed, edit
     */
    context?: string
}
