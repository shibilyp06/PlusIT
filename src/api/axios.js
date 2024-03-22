import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://interview-plus.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      config.headers["x-access-token"] = storedToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
