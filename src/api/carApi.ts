import type { Car , CarCreateRequest } from "../types/car";
import { api } from "./api";

export const getAllCars =async (): Promise< Car []> => {
    const response=await api.get("/rest/api/car/list");
    return response.data.payload;
}

export const deleteCars=async(id:number): Promise<void> =>{
    await api.delete(`/rest/api/car/delete/${id}`);
}

export const createCar = async (
    data: CarCreateRequest
  ): Promise<Car> => {
    const response = await api.post("/rest/api/car/save", data);
    return response.data.payload;
  };