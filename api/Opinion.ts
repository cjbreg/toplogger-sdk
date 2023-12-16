import { Opinion, OpinionFilters } from "../Models/Opinion";
import APICaller, { SuccessResponse } from "./caller";

export default class OpinionAPI extends APICaller {
    _headers: { [header: string]: string };

    constructor() {
        super("opinions");

        this._headers = {
            "Content-Type": "application/json",
        };
    }

    /**
     * Fetches all groups.
     * 
     * @param {number} gym_id - The ID of the gym.
     * @param {number} uid - The UID of the user.
     * @returns {Promise<SuccessResponse<Opinion[]>>} A list of available Opinions.
     */
    public async getOpinions(uid: number, gym_id: number) {
        const filters: OpinionFilters = {
            filters: {
                used: true,
                user: {
                    uid
                },
                climb: {
                    gym_id,
                    live: true,
                    deleted: false,
                },
            },
        };
        const json_params = encodeURIComponent(JSON.stringify(filters));

        const response = await this._get(
            `/?json_params=${json_params}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<Opinion[]>;
    }

}