import axios from "axios";
import {baseURL} from "../constants";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config) => {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDIxZjdmYjBlOTdlYThhYThlNjdhOGE5ZDVhMDAwNyIsInN1YiI6IjYyOTUxZDdiMGYyMWM2MTUzNzJkZDJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y-XSfLB1AVhtZxWK42MeOdhx5m4KxJBV7XraTrq3ld0'
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

export {axiosService}