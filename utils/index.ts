import axios from "axios";
import { loadToken } from "./auth";
const api = axios.create({
    baseURL: "http://localhost:5000/api",
   
})

export default api;