import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-task-manager-1-lu3w.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
