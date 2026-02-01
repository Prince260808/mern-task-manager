import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-task-manager-1-lu3w.onrender.com", 
    headers: {
    "Content-Type": "application/json",
  },
});

export default api;
