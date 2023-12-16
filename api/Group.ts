import { Group, GroupFilters } from "../Models/Group";
import APICaller, { SuccessResponse } from "./caller";

export default class GroupAPI extends APICaller {
    _headers: { [header: string]: string };

    constructor() {
        super("groups");

        this._headers = {
            "Content-Type": "application/json",
        };
    }

    /**
     * Fetches all groups.
     * 
     * @param {number} gym_id - The ID of the gym.
     * @returns {Promise<SuccessResponse<Group[]>>} A list of available groups.
     */
    public async getGroups(gym_id: number) {
        const filters: GroupFilters = {
            filters: {gym_id, live: true, score_system: 'none' },
            includes: ['climb_groups']
        };
        const json_params = encodeURIComponent(JSON.stringify(filters));

        const response = await this._get(
            `/?json_params=${json_params}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<Group[]>;
    }

}