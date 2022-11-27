import axios, { AxiosResponse } from 'axios';
import { HttpParams } from '../models/http.model';
import { sleep } from '../utils/sleep';

export const SW_BASE_API = 'https://swapi.tech/api/';
export const DEFAULT_MAX_PAGE_PARAMS = {limit: 10000, page: 1};

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

export const axiosStarwarsFetcher = async <T>(url: string, params?: HttpParams, slow = 0) => {
  if (slow) {
    await sleep(slow);
  }
  return await axiosStarwarsGet<T>(url, params)
    .then((res: AxiosResponse<T, any>) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response.status !== 409) {
        throw error;
      } 
    });
};
