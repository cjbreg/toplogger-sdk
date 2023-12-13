import APICaller, { SuccessResponse } from "./caller";
import { GymData, GymDataPreview, GymNewOld } from "../Models/Gym";

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
     * @returns {Promise<SuccessResponse<GymDataPreview[]>>} A list of available gyms.
     */
    public async getGyms() {
        const response = await this._get(
            "gyms",
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<GymDataPreview[]>;
    }

    /**
     * Fetches the gym corresponding with the given id.
     * 
     * @param {number} gym_id - The ID of the gym.
     * @returns {Promise<SuccessResponse<GymData>>} The data related to the gym.
     */
    public async getGym(gym_id: number) {
        const response = await this._get(
            `gyms/${gym_id}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<GymData>;
    }

    /**
     * Fetches the new and old data of a specific gym.
     * 
     * @param {number} gym_id - The ID of the gym.
     * @returns {Promise<SuccessResponse<GymNewOld>>} The new and old data of the gym.
     */
    public async getGymNewOld(gym_id: number) {
        const response = await this._get(
            `gyms/${gym_id}/new_old`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<GymNewOld>;
    }
}