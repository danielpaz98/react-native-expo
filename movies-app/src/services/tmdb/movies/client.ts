import axios from "axios";

// CONSTANTS
import { API_URL, API_KEY } from "@/constants";

export const movieClient = axios.create({
  baseURL: `${API_URL}/movie`,
  params: { language: "es-MX", api_key: API_KEY },
});
