import axios from "axios";

const BASE_URL = "http://127.0.0.1:27017"
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.timeout = 2500 ;

export default axiosInstance;