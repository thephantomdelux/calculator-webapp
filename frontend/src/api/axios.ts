import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:2332/",
    withCredentials : true,
})

export default api;