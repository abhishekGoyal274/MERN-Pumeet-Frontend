import axios from "axios";

const api = axios.create({baseURL: "http://localhost:8000"});

export const registerStudent = (formData) => api.post("/register/student", formData);
export const registerSubAdmin = (formData) => api.post("/register/subAdmin", formData);
export const loginStudent = (formData) => api.post("/login/student", formData);
export const loginSubAdmin = (formData) => api.post("/login/subAdmin", formData);
export const loginAdmin = (formData) => api.post("/login/admin", formData);
