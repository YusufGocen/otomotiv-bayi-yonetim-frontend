import type { Car } from "../types/car";
import { api } from "./api";

export const getAllCars =async (): Promise< Car []> => {
    const response=await api.get("/rest/api/car/list");
    return response.data.payload;
}