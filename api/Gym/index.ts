import APICaller, { SuccessResponse } from "../caller";
import { GymData, GymDataPreview, GymNewOld } from "../../Models/Gym";

export default class GymAPI extends APICaller {
    _headers: { [header: string]: string };

    constructor(customServerUrl?: string) {
        super("gyms", customServerUrl);

        this._headers = {
            "Content-Type": "application/json",
        };
    }

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

    public async getGym(id: number) {
        const response = await this._get(
            `gyms/${id}`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<GymData>;
    }

    public async getGymNewOld(id: number) {
        const response = await this._get(
            `gyms/${id}/new_old`,
            this._headers
        );

        if (!response.ok) {
            return response;
        }

        return response as SuccessResponse<GymNewOld>;
    }
}