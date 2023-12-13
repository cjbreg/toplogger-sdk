interface Opinion {
    id: number;
    user_id: number;
    climb_id: number;
    project: boolean;
    voted_renew: boolean;
}

/**
 * OpinionFilters interface
 * @interface
 * @property {boolean} [used = true] - Whether the opinion has been used or not.
 * @property {number} uid - The UID of the user.
 * @property {number} gym_id - The ID of the gym.
 * @property {boolean} [deleted = false] - Whether the climb has been deleted or not.
 * @property {boolean} [live = true] - Whether the climb is live or not.
 */
interface OpinionFilters {
    filters: {
        used: boolean;
        user: {
            uid: number
        }
        climb: {
            gym_id: number;
            deleted: boolean;
            live: boolean;
        }
    }
}

export { Opinion, OpinionFilters };