import axios from 'axios';
import { getCookieValue } from '@/utils/challenges/login';

const API_SERVER_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export const axiosClientInstance = axios.create({
  baseURL: API_SERVER_URL,
  withCredentials: true, // 쿠키 설정
  timeout: 5 * 1000,
});

axiosClientInstance.interceptors.request.use(
  async (config) => {
    const accessToken = getCookieValue('accessToken');
    console.log('accessToken: ', accessToken);

    if (accessToken) {
      config.headers['Authorization'] = accessToken;
    }

    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosClientInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  },
);
