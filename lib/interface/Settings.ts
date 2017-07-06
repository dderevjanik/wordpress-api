export interface Setting {
    /**
     * string
     * Site title.
     */
    title?: string;

    /**
     * string
     * Site description.
     */
    description?: string;

    /**
     * string, uri
     * Site URL.
     */
    url?: string;

    /**
     * string, email
     * This address is used for admin purposes.
     * If you change this we will send you an email at your new address to confirm it.
     * The new address will not become active until confirmed.
     */
    email?: string;

    /**
     * string
     * A city in the same timezone as you.
     */
    timezone?: string;

    /**
     * string
     * A date format for all date strings.
     */
    date_format?: string;

    /**
     * string
     * A time format for all time strings.
     */
    time_format?: string;

    /**
     * number
     * A day number of the week that the week should start on.
     */
    start_of_week?: number;

    /**
     * string
     * WordPress locale code.
     */
    language?: string;

    /**
     * boolean
     * Convert emoticons like : -) and: -P to graphics on display.
     */
    use_smilies?: boolean;

    /**
     * number
     * Default category.
     */
    default_category?: number;

    /**
     * string
     * Default post format.
     */
    default_post_format?: string;

    /**
     * number
     * Blog pages show at most.
     */
    posts_per_page?: number;
}
