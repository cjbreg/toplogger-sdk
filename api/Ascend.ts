import { Ascend, AscendFilters } from "../Models/Ascend";
import APICaller, { SuccessResponse } from "./caller";

export default class AscendAPI extends APICaller {
    _headers: { [header: string]: string };

    constructor() {
        super("ascends");

        this._headers = {
            "Content-Type": "application/json",
        };
    }

    /**
     * Fetches all ascends.
     *  
     * @param {number} uid - The UID of the user.
     * @param {number} gym_id - The ID of the gym.
     * @param {boolean} [used = true] - Whether the ascends have been used.
     * @param {boolean} [live = true] - Whether or not to include live ascends.
     * @param {boolean} [deleted = false] - Whether or not to include deleted ascends.
     * @param {boolean} [serialize_checks = true] - Whether or not to serialize the checks.
     * @returns {Promise<SuccessResponse<Ascend[]>>} A list of available ascends.
     */
    public async getAscends (
            uid: number,
            gym_id: number,
            used: boolean = true,
            live: boolean = true,
            deleted: boolean = false,
            serialize_checks: boolean = true
        ) {
        const filters: AscendFilters = {
            filters: {
                used,
                user: {
                    uid
                },
                climb: {
                    gym_id,
                    live,
                    deleted,
                },
            },
        };
        const json_params = encodeURIComponent(JSON.stringify(filters));

        const response = await this._get(
            `/?json_params=${json_params}&serialize_checks=${serialize_checks}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<Ascend[]>;
    }
}