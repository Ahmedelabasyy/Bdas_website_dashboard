import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
const nodeUrl = process.env.REACT_APP_NODE_URL;

// Create an Axios instance with custom configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: nodeUrl, // Set your API base URL
});

// Optional: Define interceptors to handle request and response
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.set("Authorization", "Bearer " + token);
      console.log("token", token);
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
  }
);
export default axiosInstance;
