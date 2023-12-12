interface GymDataPreview {
    id: number;
    id_name: string;
    slug: string;
    name: string;
    name_short: string;
    live: boolean;
    latitude: string;
    longitude: string;
    address: string;
    city: string;
    postal_code: string;
    country: string;
    url_website: string;
    url_facebook: string;
    phone_number: string;
    nr_of_climbs: number;
    nr_of_routes: number;
    nr_of_boulders: number;
    my_ascends_count: number;
    local_device_pwd: string;
    serializer: string;
    scale_collapse_climbs: string;
    scale_collapse_walls: string;
    gym_resources: GymResource[];
 }

interface GymData {
    id: number;
    id_name: string;
    slug: string;
    name: string;
    name_short: string;
    gym_type: string;
    has_routes: boolean;
    live: boolean;
    floorplan_version: number;
    edit_climb_show_number: boolean;
    edit_climb_show_name: boolean;
    edit_climb_show_remarks: boolean;
    edit_climb_show_setter: boolean;
    edit_climb_show_position: boolean;
    edit_climb_show_expected_removal_at: boolean;
    vote_renewal: boolean;
    report_btn: boolean;
    rope_numbers: boolean;
    show_repeat_btns: boolean;
    boulders_grouped_by_wall: boolean;
    routes_grouped_by_wall: boolean;
    latitude: string;
    longitude: string;
    address: string;
    city: string;
    country: string;
    postal_code: string;
    url_website: string;
    url_facebook: string;
    phone_number: string;
    opening_hours: OpeningsHours
    parking: string;
    nr_of_climbs: number;
    nr_of_routes: number;
    nr_of_boulders: number;
    nr_of_users: number;
    scale_collapse_climbs: string;
    scale_collapse_walls: string;
    ask_community_grade: boolean;
    show_for_kids: boolean;
    label_new_days: number;
    label_removed_days: number;
    local_device_pwd: string;
    remarks_quick_add: string;
    tablets_on_manual: boolean;
    tablets_on: boolean;
    grading_system_routes: string;
    grading_system_boulders: string;
    grade_distribution_routes: DistributionValue[];
    grade_distribution_boulders: DistributionValue[];
    auto_grade: boolean;
    auto_grade_stable_votes: number;
    show_grade_stability_admin: boolean;
    show_zones: boolean;
    show_setter: boolean;
    renew: boolean;
    show_setter_popularity: boolean;
    reservations_enabled: boolean;
    reservations_guest_enabled: boolean;
    reservations_self_checkout_enabled: boolean;
    reservations_spots_per_booking: number;
    reservations_book_advance_days: number;
    reservations_bookings_per_days_bookings: number;
    reservations_bookings_per_days_days: number;
    reservations_overbooking_count: number;
    reservations_cancel_advance_hours: number;
    reservations_unrestricted_last_minutes: number;
    reservations_bookings_advance_max: number;
    reservations_open_slots_at_midnight: boolean;
    reservations_open_slots_at_fixed_time: boolean;
    reservations_open_slots_at_time: string;
    time_zone: string;
    serializer: string;
    gym_resources: GymResource[];
 }

interface GymResource {
    id: number;
    gym_id: number;
    resource_type: string;
    url: string;
    order?: number;
}

interface DistributionValue {
    grade: string;
    count: number;
}

interface OpeningsHours {
    version: number;
    items: {
        item1: string;
        item2: string;
        item3: string;
        item4: string;
    };
    days: {
        [key: string]: {
            closed: boolean;
            items: {
                item1: string;
                item2: string;
                item3: string;
                item4: string;
            };
        };
    };
}

interface GymNewOld {
    new: {
        groups: unknown[];
        walls: {
            id: number;
            name: string;
            floorplan_id: string;
            date_set: string;
        }[];
        climbs: unknown[];
    }
    old: {
        groups: unknown[];
        walls: {
            id: number;
            name: string;
            floorplan_id: string;
            date_set: string;
        }[];
        climbs: unknown[];
    }
}

export { GymData, GymDataPreview, GymResource, DistributionValue, OpeningsHours, GymNewOld}