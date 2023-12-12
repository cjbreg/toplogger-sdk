import APICaller, { SuccessResponse } from "../caller";
import { GymData, GymDataPreview, GymNewOld } from "../../Models/Gym";

export default class GymAPI extends APICaller {
    _headers: { [header: string]: string };

    constructor() {
        super("gyms", "https://cdn1.toplogger.nu/images");

        this._headers = {
            "Content-Type": "application/json",
        };
    }

    /**
     * Fetches the new and old data of a specific gym.
     * 
     * @param {number} gym_id - The ID of the gym.
     * @returns {Promise<SuccessResponse<Blob>>} The floorplan or the selected gym in .svg format
     */
    public async getFloorplan(gym_id: number) {
        const response = await this._get(
            `gyms/${gym_id}/floorplan.svg`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<Blob>;
    }
}