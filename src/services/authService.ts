import { api } from "../api/api";
import type { LoginRequest, LoginResponse } from "../types/auth";

export const authenticate=async(
    data:LoginRequest
): Promise <LoginResponse> =>{
    const response=await api.post<LoginResponse>(
        "authenticate" , data
    );
    return response.data;
}
