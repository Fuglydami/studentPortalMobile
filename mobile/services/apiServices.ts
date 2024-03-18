// apiService.js
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

const baseURL = 'https://student-portal-api.onrender.com/';

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  return config;
});

api.interceptors.response.use(
  response => {
    // Handle successful responses
    return response;
  },
  error => {
    // Handle errors
    return Promise.reject(error);
  },
);

export const apiService = {
  get: async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    return api.get<T>(url, config);
  },

  post: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    return api.post<T>(url, data, config);
  },

  put: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    return api.put<T>(url, data, config);
  },

  delete: async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => {
    return api.delete<T>(url, config);
  },
};
