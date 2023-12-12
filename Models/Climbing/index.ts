interface Climb {
    id: number;
    number: string;
    grade: string;
    ask_community_grade: boolean;
    wall_id: number;
    position_x: string;
    position_y: string;
    climb_type: string;
    suitable_for_kids: boolean;
    gym_id: number;
    hold_id: number;
    live: boolean;
    lived: boolean;
    deleted: boolean;
    date_live_start: string;
    date_live_end: string;
    date_deleted: string;
    date_set: string;
    date_removed: string;
    created_at: string;
    nr_of_ascends: number;
    average_opinion: string;
    auto_grade: boolean;
    grade_stability: string;
    grade_stability_admin: string;
    zones: number;
    renew: boolean;
}

interface ClimbPreview {
    id: number;
    grade: string;
    wall_id: number;
    position_x: string;
    position_y: string;
    climb_type: string;
    suitable_for_kids: boolean;
    gym_id: number;
    setter_id: number;
    hold_id: number;
    live: boolean;
    lived: boolean;
    deleted: boolean;
    date_live_start: string;
    date_set: string;
    date_removed: string;
    created_at: string;
    nr_of_ascends: number;
    average_opinion: string;
    auto_grade: boolean;
    grade_stability: string;
    grade_stability_admin: string;
    zones: number;
    renew: boolean;
}

interface ClimbStats {
    community_grades: CommunityGrade[];
    community_opinions: CommunityOpinion[];
    toppers: ClimbTopper[];
}

interface ClimbTopper {
    uid: number;
    full_name: string;
    avatar: string;
    top_type: string;
    date_logged: string;
    checks: number;
}

interface CommunityGrade {
    grade: string;
    count: number;
}

interface CommunityOpinion {
    stars: number;
    votes: number;
}

interface ClimbsFilters {
    filters: {
        deleted: boolean;
        live: boolean;
    }
}

export { Climb, ClimbPreview, ClimbStats, ClimbTopper, CommunityGrade, CommunityOpinion, ClimbsFilters };
