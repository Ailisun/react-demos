import axios from "axios";
import baseUrl from "../constants/links";

export const axiosService = axios.create({baseUrl})