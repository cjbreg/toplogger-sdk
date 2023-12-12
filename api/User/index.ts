import { User, UserStats } from "../../Models/User";
import { appendParams } from "../../helpers/params";
import APICaller, { SuccessResponse } from "../caller";


export default class UserAPI extends APICaller {
    _headers: { [header: string]: string };

    constructor() {
        super("users");

        this._headers = {
            "Content-Type": "application/json",
        };
    }

    /**
     * Fetches the user corresponding with the given id.
     * 
     * @param {number} user_id - The ID of the user.
     * @returns {Promise<SuccessResponse<User>>} The data related to the user.
     */
    public async getUser(user_id: number) {
        const response = await this._get(
            `${user_id}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<User>;
    }

    /**
     * Fetches the user stats corresponding with the given id.
     * 
     * @param {number} user_id - The ID of the user.
     * @param {number} [gym_id] - The ID of the gym. Not required but recommended, without it the response will be MUCH slower.
     * @param {string} [climb_types = 'boulders'] - The type of climb.
     * @returns {Promise<SuccessResponse<UserStats>>} The data related to the user.
     */
    public async getUserStats(user_id: number, gym_id?: number, climb_types: string = 'boulders') {
        const params = new URLSearchParams();
        appendParams(params, "gym_id", gym_id);
        appendParams(params, "climb_types", climb_types);

        const response = await this._get(
            `${user_id}/stats/?${params}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<UserStats>;
    }

    /**
     * Fetches the users strength history corresponding with the given id.
     * 
     * @param {number} user_id - The ID of the user.
     * @param {string} [climb_types = 'boulders'] - The type of climb.
     * @param {number} [offset = 0] - The offset of the query.
     * @returns {Promise<SuccessResponse<UserStrengthHistory>>} The data related to the user.
     */
    public async getUserStrengthHistory(user_id: number, climb_types: string = 'boulders', offset: number = 0) {
        const params = new URLSearchParams();
        appendParams(params, "climb_types", climb_types);
        appendParams(params, "offset", offset);

        const response = await this._get(
            `${user_id}/strength_history/?${params}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<UserStats>;
    }

}