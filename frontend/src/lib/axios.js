import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || "https://your-production-api.com/api/v1",
	withCredentials: true,
});

