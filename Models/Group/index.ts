interface Group {
    id: number;
    gym_id: number;
    order: number;
    name: string;
    description: string;
    hold_id: number;
    live: boolean;
    lived: boolean;
    date_live_start: string;
    climbs_type: string;
    score_system: string;
    approve_participation: boolean;
    split_gender: boolean;
    split_age: boolean;
    climb_groups: ClimbReference[];
}

interface ClimbReference {
    id: number;
    climb_id: number;
    group_id: number;
    order: number;
}

/**
 * GroupFilters interface
 * @interface
 * @property {number} gym_id - The ID of the gym.
 * @property {boolean} [live = true] - Whether the group is live or not.
 * @property {string} [score_system = 'none'] - The score system of the group.
 * @property {string[]} [includes = ['climb_groups']] - The relations to include.
 */
interface GroupFilters {
    filters: {
        gym_id: number;
        live: boolean;
        score_system: string;
    }
    includes: string[];
}

export { Group, ClimbReference, GroupFilters };