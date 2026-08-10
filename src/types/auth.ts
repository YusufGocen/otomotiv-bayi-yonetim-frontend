export interface LoginRequest {
    username: string;
    password: string;
  }


export interface LoginResponse{
  status: number;
  payload:{
    accessToken: string;
    refreshToken: string
  };
}  