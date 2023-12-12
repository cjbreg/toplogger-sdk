interface User {
    id: number;
    uid: number;
    first_name: string;
    last_name: string;
    avatar: string;
    anonymous: boolean;
    gender: string;
    score_count_gym: number;
    score_count_gym_routes: number;
    score_count_gym_boulders: number;
    score_grade_routes: string;
    score_grade_routes_count: number;
    score_grade_boulders: string;
    score_grade_boulders_count: number;
}

interface UserStats {
    grade: string;
    grade_count: number;
    count: number;
    top_ten: TopTenItem[]
    user: {
        avatar: string;
        full_name: string;
    };
}

interface TopTenItem {
    id: number;
    climb_id: number;
    date_logged: string;
    checks: number;
    grade_adj: string;
    grade: string;
    number: string;
    color: string;
    color_secondary: string;
    wall_name: string;
    name: string;
    setter_name: string;
}

/**
 * UserStrengthHistory interface
 * @interface
 * @property {string} date - The date
 * @property {string} adjustedGrade - The adjusted grade, combining rp, fl and os grades.
 * @property {string} grade_rp - Redpoint grade, when the climber sends the route without falling or resting on the rope having made previous attempts.
 * @property {string} grade_fl - Flash grade, when the climber sends the route on the first attempt after having seen someone else climb it.
 * @property {string} grade_os - Onsight grade, when the climber sends the route on the first attempt without having seen someone else climb it (beta).
 */
interface UserStrengthHistory {
    date: string
    adjustedGrade: string;
    grade_rp: string;
    grade_fl: string;
    grade_os: string;
}

export { User, UserStats, UserStrengthHistory };