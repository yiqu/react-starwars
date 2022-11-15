import axios from 'axios';
import { HttpParams } from '../models/http.model';

const BASE_URL = 'https://kq-1-1a499.firebaseio.com/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json'
  //params: {A:"A",B:"B"}
});

export const getAxiosInstance = () => {
  return axiosInstance;
};

export const axiosGet = <T>(url: string, params: HttpParams | null = null) => {
  return axiosInstance.get<T>(url + '.json', {
    params: params
  });
};

export const axiosPost = <T>(url: string, data?: T) => {
  return axiosInstance.post<T>(url + '.json', data);
};

export default axiosInstance;