import axios from "axios"

const BASE_URL = "https://newsapi.org/v2"


export const request = axios.create({
    baseURL:BASE_URL
})