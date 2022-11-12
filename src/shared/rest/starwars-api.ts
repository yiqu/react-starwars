import axios from 'axios';
import { HttpParams } from '../models/http.model';

export const SW_BASE_API = 'https://swapi.dev/api/';

const axiosStarwarsInstance = axios.create({
  baseURL: SW_BASE_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json'
  //params: {A:"A",B:"B"}
});

export const getAxiosStarwarsInstance = () => {
  return axiosStarwarsInstance;
};

export const axiosStarwarsGet = <T>(url: string, params: HttpParams | null = null) => {
  return axiosStarwarsInstance.get<T>(url, {
    params: params
  });
};


export default axiosStarwarsInstance;