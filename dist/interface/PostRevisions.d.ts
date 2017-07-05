export interface PostRevision {
    /**
     * integer
     * The id for the author of the object.
     * Context: view
     */
    author: number;
    /**
     * string,
     * datetime (ISO8601) 	The date the object was published.
     * Context: view
     */
    date: string;
    /**
     * string,
     * datetime(ISO8601) 	The date the object was published, as GMT.
     * Context: view
     */
    date_gmt: string;
    /**
     * string
     * GUID for the object, as it exists in the database.
     * Context: view
     */
    guid: string;
    /**
     * integer
     * Unique identifier for the object.
     * Context: view
     */
    id: number;
    /**
     * string,
     * datetime(ISO8601) 	The date the object was last modified.
     * Context: view
     */
    modified: string;
    /**
     * string,datetime(ISO8601) 	The date the object was last modified, as GMT.
     * Context: view
     */
    modified_gmt: string;
    /**
     * integerThe id for the parent of the object.
     * Context: view
     */
    parent: number;
    /**
     * string
     * An alphanumeric identifier for the object unique to its type.
     * Context: view
     */
    slug: string;
    /**
     * string
     * Title for the object, as it exists in the database.
     * Context: view
     */
    title: string;
    /**
     * string
     * Content for the object, as it exists in the database.
     * Context: view
     */
    content: string;
    /**
     * string
     * Excerpt for the object, as it exists in the database.
     * Context: view
     */
    excerpt: string;
}
export interface ListPostRevisions {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view
     */
    context: string;
}
export interface GetPostRevision {
    /**
     * 	Scope under which the request is made; determines fields present in response.
     * Default: view
     * One of: view
     */
    context: string;
}
