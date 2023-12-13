interface Ascend {
    id: number;
    user_id: number;
    climb_id: number;
    topped: boolean;
    date_logged: string;
    used: boolean;
    checks: number;
}

interface AscendFilters {
    filters: {
        user: {
            uid: number;
        };
        climb: {
            gym_id: number;
            live: boolean;
            deleted: boolean;
        };
        used: boolean;
    };
}

export { Ascend, AscendFilters };