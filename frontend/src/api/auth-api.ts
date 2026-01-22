import api from "./axios";

export const signup = (data: {
    username: string;
    password : string;
}) => api.post("/user/signup",data);

export const signin = (data: {
    username : string;
    password : string;
}) => api.post("/user/login",data)

export const getProfile = () => api.get("/user/profile");
export const logout = () => api.post("/user/profile");