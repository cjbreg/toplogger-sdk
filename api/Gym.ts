import APICaller, { SuccessResponse } from "./caller";
import { Gym, GymPreview, GymNewOld } from "../Models/Gym";

export default class GymAPI extends APICaller {
    _headers: { [header: string]: string };

    constructor() {
        super("gyms");

        this._headers = {
            "Content-Type": "application/json",
        };
    }

    /**
     * Fetches all gyms.
     * 
     * @param {number} gym_id - The ID of the gym.
     * @returns {Promise<SuccessResponse<GymPreview[]>>} A list of available gyms.
     */
    public async getGyms() {
        const response = await this._get(
            "",
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<GymPreview[]>;
    }

    /**
     * Fetches the gym corresponding with the given id.
     * 
     * @param {number} gym_id - The ID of the gym.
     * @returns {Promise<SuccessResponse<Gym>>} The data related to the gym.
     */
    public async getGym(gym_id: number) {
        const response = await this._get(
            `/${gym_id}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<Gym>;
    }

    /**
     * Fetches the new and old data of a specific gym.
     * 
     * @param {number} gym_id - The ID of the gym.
     * @returns {Promise<SuccessResponse<GymNewOld>>} The new and old data of the gym.
     */
    public async getGymNewOld(gym_id: number) {
        const response = await this._get(
            `/${gym_id}/new_old`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<GymNewOld>;
    }
}