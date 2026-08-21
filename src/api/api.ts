import axios from "axios";


export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getCurrencyRates = async (
  startDate: string,
  endDate: string
) => {
  const response = await api.get("/currency-rates", {
    params: {
      startDate,
      endDate,
    },
  });

  return response.data;
  };