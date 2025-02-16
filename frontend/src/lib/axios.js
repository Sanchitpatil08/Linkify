import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development" ? "https://linkify-7zdi.onrender.com/api/v1" : "/api/v1",
	withCredentials: true,
});
