import axios, { AxiosRequestConfig } from "axios";

const axiosClient = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:3000",
});

export const getRequest = (url: string, params?: AxiosRequestConfig) => {
  return axiosClient.get(url, params);
};
