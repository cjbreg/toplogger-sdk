import { ClimbPreview, ClimbStats, ClimbsFilters } from "../Models/Climb";
import APICaller, { SuccessResponse } from "./caller";

export default class ClimbAPI extends APICaller {
    _headers: { [header: string]: string };

    constructor() {
        super("gyms");

        this._headers = {
            "Content-Type": "application/json",
        };
    }

    /**
     * Fetches all climbs.
     * 
     * @param {number} gym_id - The ID of the gym.
     * @param {boolean} [deleted = false] - Whether or not to include deleted climbs.
     * @param {boolean} [live = true] - Whether or not to include live climbs.
     * @returns {Promise<SuccessResponse<ClimbPreview[]>>} A list of available climbs.
     */
    public async getClimbs(gym_id: number, deleted: boolean = false, live: boolean = true) {
        const filters: ClimbsFilters = {
            filters: {deleted, live}
        };

        const json_params = encodeURIComponent(JSON.stringify(filters));
        const response = await this._get(
            `${gym_id}/climbs/?json_params=${json_params}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<ClimbPreview[]>;
    }

    /**
     * Fetches the climb corresponding with the given id.
     * 
     * @param {number} gym_id - The ID of the gym.
     * @param {number} climb_id - The ID of the climb.
     * @returns {Promise<SuccessResponse<Climb>>} The data related to the climb.
     */
    public async getClimb(gym_id: number, climb_id: number) {
        const response = await this._get(
            `${gym_id}/climbs/${climb_id}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<ClimbPreview>;
    }

    /**
     * Fetches the stats of a specific climb.
     * 
     * @param {number} gym_id - The ID of the gym.
     * @param {number} climb_id - The ID of the climb.
     * @returns {Promise<SuccessResponse<ClimbStats>>} The stats of the climb.
     */
    public async getClimbStats(gym_id: number, climb_id: number) {
        const response = await this._get(
            `${gym_id}/climbs/${climb_id}/stats`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<ClimbStats>;
    }

}