import axios, { AxiosError, AxiosResponse } from 'axios';
import { HttpAction } from './fetch';

/**
 * Create a Axios instance
 * @param baseUrl 
 * @returns 
 */
export const getAxiosInstance = (baseUrl: string) => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    },
    responseType: 'json'
  });
  return axiosInstance;
};


export const axiosPost = <T>({ url, body, onSuccess, onFailure, onFinally, abortController }: HttpAction<T>) => {
  axios.post(url, body)
  .then((res: AxiosResponse) => {
    onSuccess && onSuccess(res.data);
  })
  .catch((err: AxiosError) => {
    console.log("App error POST: ", err);
    onFailure && onFailure(err);
  })
  .finally(() => {
    onFinally && onFinally();
  });
};

export default getAxiosInstance;