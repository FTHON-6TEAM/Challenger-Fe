import axios from 'axios';

const API_SERVER_URL = process.env.API_SERVER_URL;

export const axiosInstance = axios.create({
  baseURL: API_SERVER_URL,
  withCredentials: true, // 쿠키 설정
  timeout: 5 * 1000,
});

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const accessToken = null;
//
//     if (accessToken) {
//       config.headers['Authorization'] = `Bearer ${accessToken}`;
//     }
//
//     config.headers['Content-Type'] = 'application/json';
//
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
//
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return error;
//   },
// );
