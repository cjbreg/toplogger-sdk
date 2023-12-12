import { ClimbPreview, ClimbsFilters } from "../../Models/Climbing";
import APICaller, { SuccessResponse } from "../caller";

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
            `gyms/${gym_id}/climbs/?json_params=${json_params}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<ClimbPreview[]>;
    }

}